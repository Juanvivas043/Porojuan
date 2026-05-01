import { useNavigate } from "react-router"
import { useState } from "react"

export function HomePage() {
    const navigate = useNavigate()
    const [search, setSearch] = useState<string | null>(null)

    const handleSearch = ((e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const searchInput = document.getElementById('search') as HTMLInputElement

        const search = searchInput.value
        if (!search) return setSearch('Ingresa un invocador')

        const [gameName, tagLine] = search.split('#')
        if (!gameName || !tagLine) return setSearch('Formato incorrecto')

        setSearch(search)
        navigate(`/summoner/${gameName}/${tagLine}`)
    })

    return (
        <div className="min-h-screen flex flex-col gap-8 items-center justify-center bg-zinc-950 px-4 sm:px-6">
            <div className="w-full max-w-2xl text-center">
                <h1 className="text-6xl sm:text-7xl text-white font-extrabold tracking-tight mb-2">
                    <span className="text-blue-500">Poro</span>Juan
                </h1>
                <p className="text-zinc-400 text-sm sm:text-base font-medium tracking-wide uppercase">League of Legends Stats</p>
            </div>
            <div className='bg-zinc-900/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-2xl flex flex-col gap-8 w-full max-w-2xl border border-zinc-800/50 transition-all duration-500 ease-in-out hover:border-blue-500/50 hover:shadow-blue-500/10'>
                <div className="flex flex-col items-center justify-center space-y-2">
                    <h2 className="text-2xl sm:text-3xl text-white font-bold text-center tracking-tight">Busca un invocador</h2>
                    <p className="text-zinc-400 text-center text-sm sm:text-base">Encuentra estadísticas, historial de partidas y más.</p>
                </div>
                <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                    <div className="relative w-full sm:w-2/3">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="text" id="search" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-800/50 text-white border border-zinc-700/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 placeholder-zinc-500 shadow-inner" placeholder="GameName#TagLine" />
                    </div>
                    <button type="submit" onClick={handleSearch} className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 cursor-pointer flex items-center justify-center gap-2">
                        Buscar
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </form>
                {search && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <p className="text-red-400 text-sm font-medium text-center bg-red-400/10 py-3 rounded-xl border border-red-400/20">{search}</p>
                    </div>
                )}
            </div>
        </div>
    )
}