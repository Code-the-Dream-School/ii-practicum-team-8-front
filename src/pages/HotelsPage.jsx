import { useHotelsQuery } from '../hooks/useHotelsQuery';

import ListHotels from '../components/hotels/ListHotels';
import LoadingWrapper from '../components/loading/LoadingWrapper';

const HotelsPage = () => {

  const {
    data: listHotels,
    isLoading,
    isError,
    error,
  } = useHotelsQuery();

  return (
     <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
        <ListHotels hotels={listHotels}/>
     </LoadingWrapper>
  );
};

export default HotelsPage;
