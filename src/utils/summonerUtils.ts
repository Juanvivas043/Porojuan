import type { riotAccount, summonerAccount } from "../types/definitions"

export function parseRiotAccountData({ data }: { data: riotAccount }): riotAccount {
    return {
        puuid: data.puuid,
        gameName: data.gameName,
        tagLine: data.tagLine,
    };
}

export function parseSummonerAccountData({data, gameName, tagLine} : {data: summonerAccount, gameName: string, tagLine: string}): summonerAccount {
    return {
        puuid: data.puuid,
        name: `${gameName}#${tagLine}`, 
        profileIconId: data.profileIconId,
        revisionDate: data.revisionDate,
        summonerLevel: data.summonerLevel,
    };
}