import { parseLatestVersionImages, parseRunes, parseSpells } from "../utils/staticDataUtils";

const BASE_URL = "https://ddragon.leagueoflegends.com";

export async function getLatestVersionImages() {
    try {
        const response = await fetch(`${BASE_URL}/api/versions.json`);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const data = await response.json();
        return parseLatestVersionImages(data)
    } catch (error) {
        throw new Error(`Error al obtener la última versión: ${error}`);
    }
}

export async function getRunes(version: string) {
    try {
        const response = await fetch(`${BASE_URL}/cdn/${version}/data/es_ES/runesReforged.json`);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const data = await response.json();
        return parseRunes(data)
    } catch (error) {
        throw new Error(`Error al obtener las runas: ${error}`);
    }
}


export async function getSpells(version: string) {
    try {
        const response = await fetch(`${BASE_URL}/cdn/${version}/data/es_ES/summoner.json`);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const data = await response.json();
        return parseSpells(data.data)
    } catch (error) {
        throw new Error(`Error al obtener los hechizos: ${error}`);
    }
}