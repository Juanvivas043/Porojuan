import type { summonerAccount } from "../types/definitions"
import { useNavigate } from "react-router-dom"

const versionDD = '16.9.1';

export function SummonerProfileComponent({ summonerAccountData }: { summonerAccountData: summonerAccount }) {
    const navigate = useNavigate();

    return (
        <section className='w-full flex flex-col'>
            <div className='bg-zinc-800 flex flex-col md:flex-row items-center justify-between gap-5 p-6 md:p-10 rounded-2xl shadow-zinc-950 shadow-lg'>
                <div className="flex flex-row items-center gap-5 w-full md:w-auto justify-center md:justify-start">
                    <div className='flex items-center gap-5'>
                        <img className='h-25 w-25 rounded-2xl' src={`http://ddragon.leagueoflegends.com/cdn/${versionDD}/img/profileicon/${summonerAccountData.profileIconId}.png`} alt="" />
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <p className='text-white text-xl font-semibold'>{summonerAccountData.name} <span className='text-zinc-400 text-md font-semibold'>LAN</span></p>
                        <p className='text-white text-md font-semibold'>Nivel {summonerAccountData.summonerLevel}</p>
                    </div>
                </div>

                <button onClick={() => navigate("/")} className="w-full md:w-auto mt-2 md:mt-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 cursor-pointer flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    Buscar invocador
                </button>
            </div>
        </section>
    )
}