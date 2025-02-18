import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Button } from "./components/ui/button"
import AuthProvider from "./providers/auth-provider"
import { ThemeProvider } from "./providers/theme-provider"
import HomePage from "./routes/home-route"
import SettingsPage from "./routes/settings-route"
import Layout from "./layouts/layout"

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
    <AuthProvider>
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  )
}

export default App
