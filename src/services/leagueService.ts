import type { summonerLeagues } from "../types/definitions";
import { parseLeagueData } from "../utils/leagueUtils";

const API_KEY = import.meta.env.VITE_RIOT_API_KEY;

export async function getSummonerLeaguesByPuuid({ puuid }: { puuid: string }): Promise<{ soloDuo: summonerLeagues, flex: summonerLeagues }> {
    const url = `https://la1.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}?api_key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    return {
        soloDuo: parseLeagueData({ data, queueType: "RANKED_SOLO_5x5" }),
        flex: parseLeagueData({ data, queueType: "RANKED_FLEX_SR" }),
    }
}