import { useHotelsQuery } from '../hooks/useHotelsQuery';

import ListHotels from '../components/hotels/ListHotels';
import LoadingWrapper from '../components/loading/LoadingWrapper';

const HotelsPage = () => {

  const {
    data: listHotels,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useHotelsQuery();

  const fromCache = !isLoading && !isFetching && isSuccess;

  console.log(listHotels);

  return (
    <>
      {fromCache ? (
        <p>Data loaded from cache</p>
      ) : (
        <p>Data fetched from the server</p>
      )}
     <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
        <ListHotels hotels={listHotels}/>
     </LoadingWrapper>
    </>
  );
};

export default HotelsPage;
