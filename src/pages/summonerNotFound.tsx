import { useNavigate } from "react-router"

export function SummonerNotFound() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 p-4">
            <div className="bg-zinc-900/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-2xl flex flex-col items-center gap-6 max-w-lg w-full text-center border border-zinc-800/50 hover:border-zinc-700 transition-colors duration-300">
                <div className="relative">
                    <div className="absolute -inset-1 bg-yellow-500 rounded-full blur opacity-10"></div>
                    <img src="/404.png" alt="Not Found" className="relative w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-xl" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">Invocador no encontrado</h1>
                    <p className="text-zinc-400 text-base sm:text-lg">No pudimos encontrar al invocador que buscas. Verifica el nombre y la etiqueta (GameName#TagLine) e intenta de nuevo.</p>
                </div>
                <button onClick={() => navigate("/")} className="mt-4 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 cursor-pointer flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    Buscar de nuevo
                </button>
            </div>
        </div>
    )
}   