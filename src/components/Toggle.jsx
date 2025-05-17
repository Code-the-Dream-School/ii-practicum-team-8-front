import Switch from '@mui/material/Switch';
import { useThemeMode } from '../context/ThemeModeContext';

const Toggle = () => {
  const { darkMode, toggleColorMode } = useThemeMode();

  return (
    <Switch
      checked={darkMode}
      onChange={toggleColorMode}
      inputProps={{ 'aria-label': 'Toggle theme' }}
    />
  );
};

export default Toggle;
