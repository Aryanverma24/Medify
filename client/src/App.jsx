import AppRoutes from "./routes/AppRoutes"
import { AuthProvider } from "./context/AuthContext"
import { ThemeProvider } from "./context/ThemeProvider"
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Toaster position="top-right" reverseOrder={false} />

        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App

