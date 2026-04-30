import type { summonerMatch } from "../types/definitions";
import { fetchSequentially, parseMatchData } from "../utils/matchUtils";

const API_KEY = import.meta.env.VITE_RIOT_API_KEY;

export async function getSummonerMatchesListByPuuid({ puuid }: { puuid: string }): Promise<summonerMatch[]> {
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${API_KEY}`;
    const res = await fetch(url);
    const matchIds: string[] = await res.json();

    return await fetchSequentially(matchIds);
}

export async function getSummonerMatchByMatchId({ matchId }: { matchId: string }): Promise<summonerMatch> {
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    return parseMatchData(data)
}
