import { BrowserRouter, Routes } from "react-router-dom"
import { Button } from "./components/ui/button"
import AuthProvider from "./providers/auth-provider"
import { ThemeProvider } from "./providers/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
    <AuthProvider>
      <BrowserRouter>
      <Routes>

        
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  )
}

export default App
