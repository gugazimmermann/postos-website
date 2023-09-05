import GasStationsFeatures from './GasStationsFeatures';
import GasStationsOrganizations from './GasStationsOrganizations';
import GasStationsConfiguration from './GasStationsConfiguration';
import GasStationsDashBoards from './GasStationsDashBoards';
import GasStationsDesk from './GasStationsDesk';
import GasStationsPersonalization from './GasStationsPersonalization';
import GasStationsPayments from './GasStationsPayments';
import GasStatiosCompanies from './GasStatiosCompanies';
import GasStationsCallToAction from './GasStationsCallToAction';
import ScrollToTopButton from './ScrollToTopButton';
import { FAQ } from '../home';

const GasStationsContent = () => {
  return (
    <>
      <GasStationsFeatures />
      <GasStationsOrganizations />
      <GasStationsConfiguration />
      <GasStationsDashBoards />
      <GasStationsDesk />
      <GasStationsPersonalization />
      <GasStationsPayments />
      <FAQ />
      <GasStatiosCompanies />
      <GasStationsCallToAction />
      <ScrollToTopButton />
    </>
  );
};

export default GasStationsContent;
