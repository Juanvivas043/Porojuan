import { useEffect, useState } from "react"
import type { riotAccount, summonerAccount, summonerLeagues, summonerMatch } from "../types/definitions"
import { getRiotAccountByName, getSummonerAccountByPuuid } from "../services/summonerService"
import { getSummonerLeaguesByPuuid } from "../services/leagueService"
import { getSummonerMatchesListByPuuid } from "../services/matchService"
import { useNavigate } from "react-router"


export function useFetchData({ gameName, tagLine }: { gameName: string, tagLine: string }) {
    const navigate = useNavigate()
    const [riotAccountData, setRiotAccountData] = useState<riotAccount | null>(null)
    const [summonerAccountData, setSummonerAccountData] = useState<summonerAccount | null>(null)
    const [summonerLeaguesData, setSummonerLeaguesData] = useState<{ soloDuo: summonerLeagues, flex: summonerLeagues } | null>(null)
    const [summonerMatchesListData, setSummonerMatchesListData] = useState<summonerMatch[] | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const riotAcc = await getRiotAccountByName({ gameName, tagLine })
            console.log(riotAcc)

            if (!riotAcc.puuid) {
                navigate('/summonernotfound')
                return
            }

            const summonerAcc = await getSummonerAccountByPuuid({ puuid: riotAcc.puuid, gameName: riotAcc.gameName, tagLine: riotAcc.tagLine })
            const leagues = await getSummonerLeaguesByPuuid({ puuid: riotAcc.puuid })
            const matchesList = await getSummonerMatchesListByPuuid({ puuid: riotAcc.puuid })

            setRiotAccountData(riotAcc)
            setSummonerAccountData(summonerAcc)
            setSummonerLeaguesData(leagues)
            setSummonerMatchesListData(matchesList)

            setLoading(false)
        }

        fetchData()

    }, [gameName, tagLine, navigate])

    return {
        riotAccountData,
        summonerAccountData,
        summonerLeaguesData,
        summonerMatchesListData,
        loading,
    }
}