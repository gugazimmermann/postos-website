import GasStationsFeatures from './GasStationsFeatures';
import GasStationsOrganizations from './GasStationsOrganizations';
import GasStationsConfiguration from './GasStationsConfiguration';
import GasStationsDashBoards from './GasStationsDashBoards';
import ScrollToTopButton from './ScrollToTopButton';

const GasStationsContent = () => {
  return (
    <>
      <GasStationsFeatures />
      <GasStationsOrganizations />
      <GasStationsConfiguration />
      <GasStationsDashBoards />
      <ScrollToTopButton />
    </>
  );
};

export default GasStationsContent;
