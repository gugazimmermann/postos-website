import GasStationsFeatures from './GasStationsFeatures';
import GasStationsOrganizations from './GasStationsOrganizations';
import GasStationsConfiguration from './GasStationsConfiguration';
import ScrollToTopButton from './ScrollToTopButton';

const GasStationsContent = () => {
  return (
    <>
      <GasStationsFeatures />
      <GasStationsOrganizations />
      <GasStationsConfiguration />
      <ScrollToTopButton />
    </>
  );
};

export default GasStationsContent;
