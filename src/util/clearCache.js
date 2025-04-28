import { useQueryClient } from '@tanstack/react-query';

const clearCache = () => {
  const queryClient = useQueryClient();
  queryClient.clear();
};

export { clearCache };