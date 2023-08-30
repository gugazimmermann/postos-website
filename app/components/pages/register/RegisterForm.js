'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api, statesBR } from '../../../utils';
import { useModal } from '../../hooks';
import { isValidCNPJ, isValidEmail, masks } from '../../../utils';
import { Alert, Button, Form, Grid } from '../../helpers';
import { UsageTermsText2 } from '../usage-terms';
import { PrivacityText } from '../privacity-terms';

const capitalize = (str) =>
  str.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

const RegisterForm = () => {
  const router = useRouter();
  const { openModal: openUsageTermsModal, Modal: UsageTermsModal } = useModal({
    closeoutside: true,
  });
  const { openModal: openPrivacityModal, Modal: PrivacityModal } = useModal({ closeoutside: true });
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [address, setAddress] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [accept, setAccept] = useState(false);

  const resetForm = () => {
    setDocument('');
    setName('');
    setEmail('');
    setPhone('');
    setCep('');
    setState('');
    setCity('');
    setAddress('');
    setLongitude('');
    setLatitude('');
  };

  const handleDocument = async (value) => {
    setDocument(masks.cnpj(value));
    const cleanValue = value.replace(/\D+/g, '');
    if (cleanValue.length < 14) {
      resetForm();
      return;
    }
    setLoading(true);
    const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cleanValue}`);
    const data = await response.json();
    if (!data.type) {
      setName(capitalize(data?.nome_fantasia || data?.razao_social || ''));
      setEmail(data?.email ? data.email.toLowerCase() : '');
      setPhone(data?.ddd_telefone_1 || '');
      if (data?.cep) {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${data?.cep}`);
        const dataCep = await response.json();
        if (!dataCep.type) {
          setCep(dataCep?.cep ? masks.cep(dataCep.cep) : '');
          setState(dataCep?.state || '');
          setCity(dataCep?.city || '');
          const formatAddress = `${dataCep?.street}, ${data?.numero && `${data.numero}, `} ${
            data?.complemento && `${data.complemento},`
          } ${dataCep?.neighborhood && `${dataCep.neighborhood}`}`.replace(/\s+/g, ' ');
          setAddress(formatAddress || '');
          setLongitude(dataCep?.location?.coordinates?.longitude || '');
          setLatitude(dataCep?.location?.coordinates?.latitude || '');
        }
      }
    } else {
      setName('');
      setEmail('');
      setPhone('');
      setCep('');
      setState('');
      setCity('');
      setAddress('');
      setLongitude('');
      setLatitude('');
    }
    setLoading(false);
  };

  const handleCep = async (value) => {
    setCep(masks.cep(value));
    const cleanValue = value.replace(/\D+/g, '');
    if (cleanValue.length < 8) {
      setState('');
      setCity('');
      setAddress('');
      setLongitude('');
      setLatitude('');
      return;
    }
    setLoading(true);
    const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cleanValue}`);
    const dataCep = await response.json();
    if (!dataCep.type) {
      setState(dataCep?.state || '');
      setCity(dataCep?.city || '');
      const formatAddress = `${dataCep?.street}, ${
        dataCep?.neighborhood && `${dataCep.neighborhood}`
      }`.replace(/\s+/g, ' ');
      setAddress(formatAddress || '');
      setLongitude(dataCep?.location?.coordinates?.longitude || '');
      setLatitude(dataCep?.location?.coordinates?.latitude || '');
    } else {
      setState('');
      setCity('');
      setAddress('');
      setLongitude('');
      setLatitude('');
    }
    setLoading(false);
  };

  const handleState = async (value) => {
    setLoading(true);
    setState(value);
    setCity('');
    setAddress('');
    setLongitude('');
    setLatitude('');
    const response = await fetch(
      `https://brasilapi.com.br/api/ibge/municipios/v1/${value}?providers=gov`,
    );
    const data = await response.json();
    if (Array.isArray(data)) {
      const citiesNames = data.map((x) => capitalize(x.nome));
      setCities(citiesNames);
    }
    setLoading(false);
  };

  const getCoordinates = async (address, city, state) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${address},${city},${state},BR&limit=1`,
    );
    const data = await response.json();
    if (data && data.length > 0) {
      return {
        lat: data[0].lat,
        lon: data[0].lon,
      };
    } else {
      return null;
    }
  };

  const validate = (form) => {
    if (!form.accept) return 'É necessário aceitar os Termos de Uso e Privacidade!';
    if (
      !form.document ||
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.cep ||
      !form.state ||
      !form.city ||
      !form.address
    )
      return 'Todos os campos são obrigatórios!';
    if (!isValidCNPJ(form.document)) return 'CNPJ inválido!';
    if (!isValidEmail(form.email)) return 'Email inválido!';
    if (form?.name?.length < 3) return 'Nome deve ter mínimo de 3 caracteres!';
    return false;
  };

  const handleSubmit = async (e) => {
    setAlert();
    e.preventDefault();
    setLoading(true);
    const form = {
      accept,
      document,
      name,
      email,
      phone,
      cep,
      state,
      city,
      address,
      longitude,
      latitude,
    };
    const validationError = validate(form);
    if (validationError) {
      setAlert(validationError);
      setLoading(false);
      return;
    }
    if (!form.latitude || !form.longitude) {
      const coords = await getCoordinates(address, city, state);
      if (coords) {
        form.latitude = coords.lat;
        form.longitude = coords.lon;
      }
    }
    const data = await api.saveOrganization(form);
    if (data?.id) {
      setLoading(false);
      resetForm();
      router.push(`/cadastro/login/${data.id}`);
    } else {
      if (data === 'Email is already registered.') {
        setAlert('Email já está cadastrado.');
      } else if (data === 'Document is already registered.') {
        setAlert('CNPJ já está cadastrado.');
      } else {
        setAlert('Ocorreu um erro no envio do formulário, tente novamente.');
      }
      setLoading(false);
      return;
    }
  };

  return (
    <>
      {alert && <Alert type='error' text={alert} />}
      <form onSubmit={(e) => handleSubmit(e)} className='mt-8 space-y-6'>
        <Grid.Col2>
          <Grid.Row>
            <Form.Label htmlFor='document' text='CNPJ' />
            <Form.Input
              loading={loading}
              value={masks.cnpj(document)}
              editValue={(e) => setDocument(e.target.value)}
              onBlur={(e) => handleDocument(e.target.value)}
              required={true}
              name='document'
            />
          </Grid.Row>
          <Grid.Row>
            <Form.Label htmlFor='name' text='Nome' />
            <Form.Input
              loading={loading}
              value={name}
              editValue={(e) => setName(e.target.value)}
              required={true}
              name='name'
              disabled={!document}
            />
          </Grid.Row>
        </Grid.Col2>
        <Grid.Col2>
          <Grid.Row>
            <Form.Label htmlFor='email' text='Email' />
            <Form.Input
              loading={loading}
              value={email}
              editValue={(e) => setEmail(e.target.value)}
              required={true}
              type='email'
              name='email'
              disabled={!document}
            />
          </Grid.Row>
          <Grid.Row>
            <Form.Label htmlFor='phone' text='Telefone' />
            <Form.Input
              loading={loading}
              value={masks.phone(phone)}
              editValue={(e) => setPhone(masks.phone(e.target.value))}
              required={true}
              name='phone'
              disabled={!document}
            />
          </Grid.Row>
        </Grid.Col2>
        <Grid.Col3>
          <Grid.Row>
            <Form.Label htmlFor='cep' text='CEP' />
            <Form.Input
              loading={loading}
              value={masks.cep(cep)}
              editValue={(e) => setCep(masks.cep(e.target.value))}
              onBlur={(e) => handleCep(e.target.value)}
              required={true}
              name='cep'
              disabled={!document}
            />
          </Grid.Row>
          <Grid.Row>
            <Form.Label htmlFor='state' text='Estado' />
            <Form.Select
              loading={loading}
              value={state}
              editValue={(e) => handleState(e.target.value)}
              required={true}
              name='state'
              data={statesBR}
              disabled={!cep}
            />
          </Grid.Row>
          <Grid.Row>
            <Form.Label htmlFor='city' text='Cidade' />
            <Form.AutocompleteInput
              loading={loading}
              value={city}
              editValue={setCity}
              required={true}
              name='city'
              disabled={!cep || !state}
              suggestions={cities}
            />
          </Grid.Row>
        </Grid.Col3>
        <Grid.Row>
          <Form.Label htmlFor='address' text='Endedreço' />
          <Form.Input
            loading={loading}
            value={address}
            editValue={(e) => setAddress(e.target.value)}
            required={true}
            name='address'
            disabled={!cep || !state || !city}
          />
        </Grid.Row>
        <Grid.Row>
          <div className='flex flex-row justify-center items-center'>
            <input
              id='accept-checkbox'
              type='checkbox'
              checked={accept}
              onChange={(e) => setAccept(e.target.checked)}
              className='w-4 h-4 rounded'
            />
            <label
              htmlFor='accept-checkbox'
              className='ml-2 text-sm font-medium text-slate-800 flex flex-row justify-start items-start'
            >
              Li e concordo com os
              <button
                type='button'
                onClick={openUsageTermsModal}
                className='text-amber-500 hover:underline mx-1'
              >
                Termos de Uso
              </button>
              e
              <button
                type='button'
                onClick={openPrivacityModal}
                className='text-amber-500 hover:underline ml-1'
              >
                Privacidade
              </button>
              .
            </label>
          </div>
          <UsageTermsModal title='Termos de Uso' scroll={true}>
            <UsageTermsText2 />
          </UsageTermsModal>
          <PrivacityModal title='Políticas de Privacidade' scroll={true}>
            <PrivacityText />
          </PrivacityModal>
        </Grid.Row>

        <div className='w-full text-center'>
          <Button type='submit' loading={loading} text='Registrar' />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
