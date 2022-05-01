import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'theme';
import AppRoutes from 'Routes/Routes';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import axios from 'axios';
import { baseUrl } from 'Services/serviceEndpoints';

const queryClient = new QueryClient()


function App() {
  axios.defaults.baseURL = baseUrl;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider> 
    </QueryClientProvider>
  );
}

export default App;
