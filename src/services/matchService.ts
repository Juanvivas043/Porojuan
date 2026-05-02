import type { summonerMatch } from "../types/definitions";
import { fetchSequentially, parseMatchData } from "../utils/matchUtils";

const API_KEY = import.meta.env.VITE_RIOT_API_KEY;

export async function getSummonerMatchesListByPuuid({ puuid }: { puuid: string }): Promise<summonerMatch[]> {
    try {
        const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&type=ranked&api_key=${API_KEY}`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error en la solicitud: ${res.statusText}`);
        }

        const matchIds: string[] = await res.json();

        return await fetchSequentially(matchIds);
    } catch (error) {
        throw new Error(`Error al obtener la lista de partidas: ${error}`);
    }
}

export async function getSummonerMatchByMatchId({ matchId }: { matchId: string }): Promise<summonerMatch> {
    try {
        const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error en la solicitud: ${res.statusText}`);
        }

        const data = await res.json();

        return parseMatchData(data)
    } catch (error) {
        throw new Error(`Error al obtener la partida: ${error}`);
    }
}
