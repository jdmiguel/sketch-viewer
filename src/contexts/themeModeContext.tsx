import { ReactNode, createContext, useState } from 'react';
import { ThemeMode } from 'src/helpers/types';

const ThemeModeContext = createContext({
  mode: 'LIGHT',
  selectMode: () => {},
});

type Props = {
  children: ReactNode;
};

export const ThemeModeContextProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<ThemeMode>('LIGHT');

  const selectMode = () => {
    setMode((prevMode) => (prevMode === 'LIGHT' ? 'DARK' : 'LIGHT'));
  };

  const value = {
    mode,
    selectMode,
  };

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
};

export default ThemeModeContext;
