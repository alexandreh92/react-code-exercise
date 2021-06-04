import { useStore } from '../useStore';

const useStoreTheme = () => {
  const theme = useStore(state => state.theme);

  return theme;
};

export default useStoreTheme;
