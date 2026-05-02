import { parseRiotAccountData, parseSummonerAccountData } from "../utils/summonerUtils";
import type { riotAccount, summonerAccount } from "../types/definitions";

const API_KEY = import.meta.env.VITE_RIOT_API_KEY;

export async function getRiotAccountByName({ gameName, tagLine }: { gameName: string, tagLine: string }): Promise<riotAccount> {
    try {
        const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${API_KEY}`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error en la solicitud: ${res.statusText}`);
        }

        const data = await res.json();
        return parseRiotAccountData({ data })

    } catch (error) {
        throw new Error(`Error al obtener la cuenta de Riot: ${error}`);
    }
}

export async function getSummonerAccountByPuuid({ puuid, gameName, tagLine }: { puuid: string, gameName: string, tagLine: string }): Promise<summonerAccount> {
    try {
        const url = `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${API_KEY}`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error en la solicitud: ${res.statusText}`);
        }

        const data = await res.json();
        return parseSummonerAccountData({data, gameName, tagLine})

    } catch (error) {
        throw new Error(`Error al obtener la cuenta de Riot: ${error}`);
    }
}


