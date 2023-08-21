import CompaniesRegister from './CompaniesRegister';
import CompaniesInfo from './CompaniesInfo';
import CompaniesAccess from './CompaniesAccess';
import CompaniesReports from './CompaniesReports';
import CompaniesDrivers from './CompaniesDrivers';

const CompaniesContent = () => {
  return (
    <>
      <CompaniesRegister />
      <CompaniesInfo />
      <CompaniesAccess />
      <CompaniesReports />
      <CompaniesDrivers />
    </>
  );
};

export default CompaniesContent;
