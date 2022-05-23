import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/app.scss';

import HomePage from './pages/HomePage';
import ClientListPage from './pages/ClientListPage';
import ProjectionAnalysisPage from './pages/ProjectionAnalysisPage';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const basicTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f7f7f7',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: 'inherit',
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listar-clientes" element={<ClientListPage />} />
          <Route
            path="/proyeccion-analisis"
            element={<ProjectionAnalysisPage />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
