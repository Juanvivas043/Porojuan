import type { summonerLeagues } from "../types/definitions"
import { rankTranslation } from "../types/constants"

export function SummonerLeagueComponent({ summonerLeagueSoloDuoData, summonerLeagueFlexData }: { summonerLeagueSoloDuoData: summonerLeagues, summonerLeagueFlexData: summonerLeagues }) {
    return (
        <section className='bg-zinc-800 flex flex-col w-full gap-10 p-6 md:p-10 rounded-2xl shadow-zinc-950 shadow-lg'>
            <div className='flex flex-col items-center gap-3'>
                <p className='text-white text-xl font-semibold'>Clasificatoria Solo/Duo</p>
                <img className="h-40 w-fit" src={'/' + summonerLeagueSoloDuoData.tier + '.png'} alt="" />
                <div className="flex flex-row items-center gap-2">
                    <p className='text-white text-md font-semibold'>{rankTranslation[summonerLeagueSoloDuoData.tier] || summonerLeagueSoloDuoData.tier}</p>
                    <p className='text-white text-md font-semibold'>{summonerLeagueSoloDuoData.rank}</p>
                    <p className='text-zinc-400 text-md font-semibold'>{summonerLeagueSoloDuoData.leaguePoints} PLS</p>
                </div>
                <div className='flex flex-row items-center gap-6'>
                    <p className='text-zinc-400 text-md font-semibold'><span className='text-green-500'>{summonerLeagueSoloDuoData.wins}</span> Victorias</p>
                    <p className='text-zinc-400 text-md font-semibold'><span className='text-red-500'>{summonerLeagueSoloDuoData.losses}</span> Derrotas</p>
                </div>
                <p className='text-zinc-400 text-md font-semibold'>{'('}{Math.round((summonerLeagueSoloDuoData.wins / (summonerLeagueSoloDuoData.wins + summonerLeagueSoloDuoData.losses)) * 100) || 0}%{') Win Rate'}</p>

            </div>

            <div className='flex flex-col items-center gap-5'>
                <p className='text-white text-xl font-semibold'>Clasificatoria Flexible</p>
                <img className="h-40 w-fit" src={'/' + summonerLeagueFlexData.tier + '.png'} alt="" />
                <div className="flex flex-row items-center gap-2">
                    <p className='text-white text-md font-semibold'>{rankTranslation[summonerLeagueFlexData.tier] || summonerLeagueFlexData.tier}</p>
                    <p className='text-white text-md font-semibold'>{summonerLeagueFlexData.rank}</p>
                    <p className='text-zinc-400 text-md font-semibold'>{summonerLeagueFlexData.leaguePoints} PLS</p>
                </div>
                <div className='flex flex-row items-center gap-6'>
                    <p className='text-zinc-400 text-md font-semibold'><span className='text-green-500'>{summonerLeagueFlexData.wins}</span> Victorias</p>
                    <p className='text-zinc-400 text-md font-semibold'><span className='text-red-500'>{summonerLeagueFlexData.losses}</span> Derrotas</p>
                </div>
                <p className='text-zinc-400 text-md font-semibold'>{'('}{Math.round((summonerLeagueFlexData.wins / (summonerLeagueFlexData.wins + summonerLeagueFlexData.losses)) * 100) || 0}%{') Win Rate'}</p>
            </div>
        </section>
    )
}