export interface riotAccount {
    puuid: string;
    gameName: string;
    tagLine: string;

}

export interface summonerAccount {
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
}

export interface summonerLeagues {
    freshBlood: boolean;
    hotStreak: boolean;
    inactive: boolean;
    leagueId: string;
    leaguePoints: number;
    losses: number;
    queueType: string;
    rank: string;
    tier: string;
    veteran: boolean;
    wins: number;
}

export interface summonerMatch {
    info: {
        gameDate: string;
        gameDurationParsed: string;
        endOfGameResult: string;
        gameCreation: number;
        gameDuration: number;
        gameEndTimestamp: number;
        gameId: number;
        gameMode: string;
        gameName: string;
        gameStartTimestamp: number;
        gameType: string;
        gameVersion: string;
        mapId: number;
        participants: participants[];
        platformId: string;
        queueId: number;
        teams: object[];
        tournamentCode: string;
    };

    metadata: {
        dataVersion: string;
        matchId: string;
        participants: string[];
    };
}

export interface participants {
    PlayerBehavior: { PlayerBehavior_IsHeroInCombat: number },
    PlayerScore0: number,
    PlayerScore1: number,
    PlayerScore2: number,
    PlayerScore3: number,
    PlayerScore4: number,
    PlayerScore5: number,
    PlayerScore6: number,
    PlayerScore7: number,
    PlayerScore8: number,
    PlayerScore9: number,
    PlayerScore10: number,
    PlayerScore11: number,
    allInPings: number,
    assistMePings: number,
    assists: number,
    baronKills: number,
    basicPings: number,
    champExperience: number,
    champLevel: number,
    championId: number,
    championName: string,
    championTransform: number,
    commandPings: number,
    consumablesPurchased: number,
    damageDealtToBuildings: number,
    damageDealtToEpicMonsters: number,
    damageDealtToObjectives: number,
    damageDealtToTurrets: number,
    damageSelfMitigated: number,
    dangerPings: number,
    deaths: number,
    detectorWardsPlaced: number,
    doubleKills: number,
    dragonKills: number,
    eligibleForProgression: boolean,
    enemyMissingPings: number,
    enemyVisionPings: number,
    firstBloodAssist: boolean,
    firstBloodKill: boolean,
    firstTowerAssist: boolean,
    firstTowerKill: boolean,
    gameEndedInEarlySurrender: boolean,
    gameEndedInSurrender: boolean,
    getBackPings: number,
    goldEarned: number,
    goldSpent: number,
    holdPings: number,
    individualPosition: string,
    inhibitorKills: number,
    inhibitorTakedowns: number,
    inhibitorsLost: number,
    item0: number,
    item1: number,
    item2: number,
    item3: number,
    item4: number,
    item5: number,
    item6: number,
    itemsPurchased: number,
    killingSprees: number,
    kills: number,
    lane: string,
    largestCriticalStrike: number,
    largestKillingSpree: number,
    largestMultiKill: number,
    longestTimeSpentLiving: number,
    magicDamageDealt: number,
    magicDamageDealtToChampions: number,
    magicDamageTaken: number,
    missions: object,
    needVisionPings: number,
    neutralMinionsKilled: number,
    nexusKills: number,
    nexusLost: number,
    nexusTakedowns: number,
    objectivesStolen: number,
    objectivesStolenAssists: number,
    onMyWayPings: number,
    participantId: number,
    pentaKills: number,
    physicalDamageDealt: number,
    physicalDamageDealtToChampions: number,
    physicalDamageTaken: number,
    placement: number,
    playerAugment1: number,
    playerAugment2: number,
    playerAugment3: number,
    playerAugment4: number,
    playerAugment5: number,
    playerAugment6: number,
    playerSubteamId: number,
    profileIcon: number,
    pushPings: number,
    puuid: string,
    quadraKills: number,
    retreatPings: number,
    riotIdGameName: string,
    riotIdTagline: string,
    role: string,
    roleBoundItem: number,
    sightWardsBoughtInGame: number,
    spell1Casts: number,
    spell2Casts: number,
    spell3Casts: number,
    spell4Casts: number,
    subteamPlacement: number,
    summoner1Casts: number,
    summoner1Id: number,
    summoner2Casts: number,
    summoner2Id: number,
    summonerId: string,
    summonerLevel: number,
    summonerName: string,
    perks: {
        statPerks: {
            defense: number,
            flex: number,
            offense: number,
        },
        styles: {
            style: number,
            selections: {
                perk: number,
                var1: number,
                var2: number,
                var3: number
            }[]
        }[]
    },
    teamEarlySurrendered: boolean,
    teamId: number,
    teamPosition: string,
    timeCCingOthers: number,
    timePlayed: number,
    totalAllyJungleMinionsKilled: number,
    totalDamageDealt: number,
    totalDamageDealtToChampions: number,
    totalDamageShieldedOnTeammates: number,
    totalDamageTaken: number,
    totalEnemyJungleMinionsKilled: number,
    totalHeal: number,
    totalHealsOnTeammates: number,
    totalMinionsKilled: number,
    totalTimeCCDealt: number,
    totalTimeSpentDead: number,
    totalUnitsHealed: number,
    tripleKills: number,
    trueDamageDealt: number,
    trueDamageDealtToChampions: number,
    trueDamageTaken: number,
    turretKills: number,
    turretTakedowns: number,
    turretsLost: number,
    unrealKills: number,
    visionClearedPings: number,
    visionScore: number,
    visionWardsBoughtInGame: number,
    wardsKilled: number,
    wardsPlaced: number,
    win: boolean,
}