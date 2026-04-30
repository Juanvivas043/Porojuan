import SummonerStatsPage from "./pages/summonerStats"
import HomePage from "./pages/homePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
//seiros azir
//juan wjf0
//fallout lan

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summoner/:gameName/:tagLine" element={<SummonerStatsPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

