import { SummonerStatsPage } from "./pages/summonerStatsPage"
import { HomePage } from "./pages/homePage"
import { SummonerNotFound } from "./pages/summonerNotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ErrorPage } from "./pages/errorPage"
import { StaticDataProvider } from "./context/staticDataContext"

function App() {

  return (
    <StaticDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summoner/:gameName/:tagLine" element={<SummonerStatsPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/summonernotfound" element={<SummonerNotFound />} />
        </Routes>
      </BrowserRouter>
    </StaticDataProvider>

  )
}

export default App

