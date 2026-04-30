import type { summonerLeagues } from "../types/definitions"

export function parseLeagueData({ data, queueType}: {data: summonerLeagues[], queueType: string}): summonerLeagues {
    const league = data.find(league => league.queueType === queueType);

    if (!league) {
        return {
            freshBlood: false,
            hotStreak: false,
            inactive: false,
            leagueId: "",
            queueType: queueType,
            veteran: false,
            tier: "UNRANKED",
            rank: "",
            leaguePoints: 0,
            wins: 0,
            losses: 0,
        }
    }

    return {
        ...league,
    }

}