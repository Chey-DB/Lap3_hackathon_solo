import { Routes, Route } from "react-router-dom"

import { NavBar } from "./components"
import * as Pages from "./pages"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Pages.HomePage />} />
      <Route path="/superhero/:id" element={<Pages.SuperHeroPage />} />
      <Route path="*" element={<Pages.NotFoundPage />} />
    </Routes>

  )
}

export default App
