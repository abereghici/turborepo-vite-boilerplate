import { theme } from '@monorepo/shared';
import { ThemeProvider } from '@mui/material/styles';

function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Provider;
