import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "./routes";
import { CssBaseline } from "@mui/material";
import { Navbar } from "./components/Navbar";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Navbar />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
