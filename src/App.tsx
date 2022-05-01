import { ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { baseUrl } from "Services/serviceEndpoints";
import AppRoutes from "Routes/Routes";
import theme from "theme";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  axios.defaults.baseURL = baseUrl;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
