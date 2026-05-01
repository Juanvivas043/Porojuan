import type { summonerMatch, summonerAccount } from "../types/definitions";
import { queueTranslations, spells, runes, keyStoneRunes } from "../types/constants";

const versionDD = '16.9.1';

export function SummonerMatchesHistoryComponent({ summonerMatchesListData, summonerAccountData }: { summonerMatchesListData: summonerMatch[], summonerAccountData: summonerAccount }) {
    const summonerPuuid = summonerAccountData.puuid;

    return (
        <section className='bg-zinc-800 w-full text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-zinc-950 shadow-lg'>
            <div className='flex flex-col gap-4 w-full'>
                {summonerMatchesListData.map((match) => (
                    <div key={match.info.gameId} className={`flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 p-4 sm:p-6 rounded-xl shadow-zinc-950 shadow-lg hover:scale-[1.01] transition-transform duration-300 ease-in-out ${match.info.participants.filter((p) => p.puuid === summonerPuuid)[0].win ? 'bg-blue-400/30' : 'bg-red-400/30'}`}>

                        {/* Game Info */}
                        <div className="flex flex-col items-center lg:items-start gap-1 w-full lg:w-1/4">
                            <p className="font-bold text-white text-lg lg:text-base">Clasificatoria {queueTranslations[match.info.queueId as keyof typeof queueTranslations]}</p>
                            <p className="font-semibold text-white/60 text-sm">{match.info.gameDate}</p>
                            <p className="font-semibold text-white/60 text-sm">{match.info.gameDurationParsed}</p>
                        </div>

                        {/* Player Info (Champion, KDA, Items) */}
                        <div className="flex flex-col items-center gap-3 w-full lg:w-2/4 justify-center">
                            {match.info.participants.filter((p) => p.puuid === summonerPuuid).map((p, index) => (
                                <div key={index} className="flex flex-col items-center gap-3">
                                    <div className="flex flex-row items-center gap-4">
                                        <div className="h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0">
                                            <img className="w-full h-full rounded-full object-cover" src={`http://ddragon.leagueoflegends.com/cdn/${versionDD}/img/champion/${p.championName}.png`} alt={p.championName} />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="h-7 w-7 sm:h-7 sm:w-7 md:h-7 md:w-7 shrink-0">
                                                <img className="w-full h-full rounded-full object-cover" src={`http://ddragon.leagueoflegends.com/cdn/${versionDD}/img/spell/${spells[p.summoner1Id as keyof typeof spells]}.png`} />
                                            </div>
                                            <div className="h-7 w-7 sm:h-7 sm:w-7 md:h-7 md:w-7 shrink-0">
                                                <img className="w-full h-full rounded-full object-cover" src={`http://ddragon.leagueoflegends.com/cdn/${versionDD}/img/spell/${spells[p.summoner2Id as keyof typeof spells]}.png`} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <div className="h-7 w-7 sm:h-7 sm:w-7 md:h-7 md:w-7 shrink-0">
                                                <img className="w-full h-full rounded-full object-cover" src={`https://ddragon.leagueoflegends.com/cdn/img/${keyStoneRunes[p.perks.styles[0].selections[0].perk as keyof typeof keyStoneRunes]}`} />
                                            </div>
                                            <div className="h-7 w-7 sm:h-7 sm:w-7 md:h-7 md:w-7 shrink-0">
                                                <img className="w-full h-full rounded-full object-cover" src={`https://ddragon.leagueoflegends.com/cdn/img/${runes[p.perks.styles[1].style as keyof typeof runes]}`} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start text-left min-w-[80px]">
                                            <p className="text-white font-bold text-lg whitespace-nowrap">{p.kills} / <span className="text-red-400">{p.deaths}</span> / {p.assists}</p>
                                            <p className="text-white/60 text-sm font-semibold">{((p.kills + p.assists) / (p.deaths === 0 ? 1 : p.deaths)).toFixed(2)} KDA</p>
                                        </div>
                                    </div>

                                    {/* Items Row */}
                                    <div className="flex flex-row gap-1">
                                        {[p.roleBoundItem, p.item0, p.item1, p.item2, p.item3, p.item4, p.item5, p.item6].map((itemId, i) => (
                                            <div key={i} className="h-7 w-7 sm:h-8 sm:w-8 bg-zinc-800 rounded flex items-center justify-center overflow-hidden">
                                                {itemId !== 0 ? (
                                                    <img className="w-full h-full object-cover" src={`http://ddragon.leagueoflegends.com/cdn/${versionDD}/img/item/${itemId}.png`} alt="item" />
                                                ) : (
                                                    <div className="w-full h-full bg-zinc-950 rounded flex items-center justify-center"></div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Other Participants */}
                        <div className="hidden lg:flex flex-row gap-2 w-full lg:w-1/4 justify-end">
                            <div className="flex flex-col gap-1 w-1/2 max-w-[120px]">
                                {match.info.participants.slice(0, 5).map((p, index) => (
                                    <div className="flex group items-center gap-1 w-full" key={index}>
                                        <img className="h-4 w-4 rounded shrink-0" src={`http://ddragon.leagueoflegends.com/cdn/${versionDD}/img/champion/${p.championName}.png`} alt="" />
                                        <span className="text-xs text-white/70 truncate">{p.riotIdGameName}</span>
                                        <span className="text-xs text-white/70 group-hover:block hidden absolute bg-black/60 backdrop-blur-sm p-2 rounded shadow-lg w-35">{p.riotIdGameName + "#" + p.riotIdTagline}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-1 w-1/2 max-w-[120px]">
                                {match.info.participants.slice(5, 10).map((p, index) => (
                                    <div className="flex items-center group gap-1 w-full" key={index}>
                                        <img className="h-4 w-4 rounded shrink-0" src={`http://ddragon.leagueoflegends.com/cdn/${versionDD}/img/champion/${p.championName}.png`} alt="" />
                                        <span className="text-xs text-white/70 truncate">{p.riotIdGameName}</span>
                                        <span className="text-xs text-white/70 group-hover:block hidden absolute bg-black/60 backdrop-blur-sm p-2 rounded shadow-lg w-35">{p.riotIdGameName + "#" + p.riotIdTagline}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}