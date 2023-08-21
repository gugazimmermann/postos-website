import GasStationsFeatures from './GasStationsFeatures';
import GasStationsOrganizations from './GasStationsOrganizations';
import GasStationsConfiguration from './GasStationsConfiguration';
import GasStationsDashBoards from './GasStationsDashBoards';
import GasStationsDesk from './GasStationsDesk';
import GasStationsPayments from './GasStationsPayments';
import ScrollToTopButton from './ScrollToTopButton';

const GasStationsContent = () => {
  return (
    <>
      <GasStationsFeatures />
      <GasStationsOrganizations />
      <GasStationsConfiguration />
      <GasStationsDashBoards />
      <GasStationsDesk />
      <GasStationsPayments />
      <ScrollToTopButton />
    </>
  );
};

export default GasStationsContent;
