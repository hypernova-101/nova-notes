import { BrowserRouter, Routes } from "react-router-dom"
import { Button } from "./components/ui/button"
import AuthProvider from "./providers/auth-provider"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>

        
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
