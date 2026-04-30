import type { summonerAccount } from "../types/definitions"

const versionDD = '16.9.1';

export function SummonerProfileComponent({ summonerAccountData }: { summonerAccountData: summonerAccount }) {
    return (
        <section className='w-full flex flex-col'>
            <div className='bg-zinc-800 flex flex-row items-center gap-5 p-6 md:p-10 rounded-2xl shadow-zinc-950 shadow-lg'>
                <div className='flex items-center gap-5'>
                    <img className='h-25 w-25 rounded-2xl' src={`http://ddragon.leagueoflegends.com/cdn/${versionDD}/img/profileicon/${summonerAccountData.profileIconId}.png`} alt="" />
                </div>
                <div className='flex flex-col items-start gap-3'>
                    <p className='text-white text-xl font-semibold'>{summonerAccountData.name} <span className='text-zinc-400 text-md font-semibold'>LAN</span></p>
                    <p className='text-white text-md font-semibold'>Nivel {summonerAccountData.summonerLevel}</p>
                </div>
            </div>
        </section>
    )
}