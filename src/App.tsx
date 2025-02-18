import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthProvider from "./providers/auth-provider"
import { ThemeProvider } from "./providers/theme-provider"
import HomePage from "./routes/home-route"
import SettingsPage from "./routes/settings-route"
import Layout from "./layouts/layout"
import SignedIn from "./components/custom/signed-in"
import SignedOut from "./components/custom/signed-out"
import SignIn from "./routes/sign-in-route"

function App() {

  return (
    <AuthProvider>
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <BrowserRouter>
      <SignedIn>
      <Layout/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
      </Routes>
      </SignedIn>
      <SignedOut>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
        </Routes>
      </SignedOut>
    </BrowserRouter>
    </ThemeProvider>
    </AuthProvider>
  )
}

export default App
