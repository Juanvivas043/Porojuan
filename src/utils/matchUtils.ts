import type { summonerMatch } from "../types/definitions";
import { getSummonerMatchByMatchId } from "../services/matchService";

export async function fetchSequentially(ids: string[]): Promise<summonerMatch[]> {
        if (ids.length === 0) return [];
        
        const [firstId, ...rest] = ids;
        const matchDetail = await getSummonerMatchByMatchId({ matchId: firstId });
        
        return [matchDetail, ...(await fetchSequentially(rest))];
    }

export function parseMatchDate(timestamp: number): string {
  const date = new Date(timestamp);
  
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date);
}

export function parseMatchDuration(durationInSeconds: number): string {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds / 60) % 60);
  const seconds = durationInSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  }


  return `${minutes}:${seconds}`;
}

export function parseMatchData(data: summonerMatch) {
  return {
    ...data,
    info: {
      ...data.info,
      gameDate: parseMatchDate(data.info.gameEndTimestamp),
      gameDurationParsed: parseMatchDuration(data.info.gameDuration)
    }
  }
}