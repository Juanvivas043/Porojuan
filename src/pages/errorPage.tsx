import { useNavigate } from "react-router-dom"

export function ErrorPage() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 p-4">
            <div className="bg-zinc-900/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-2xl flex flex-col items-center gap-6 max-w-lg w-full text-center border border-zinc-800/50 hover:border-zinc-700 transition-colors duration-300">
                <div className="relative">
                    <div className="absolute -inset-1 bg-red-500 rounded-full blur opacity-20"></div>
                    <img src="/404.png" alt="404" className="relative w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-xl" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">¡Oh no! Error 404</h1>
                    <p className="text-zinc-400 text-base sm:text-lg">Parece que te has perdido en la jungla. La página que buscas no existe.</p>
                </div>
                <button onClick={() => navigate("/")} className="mt-4 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 cursor-pointer flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Regresar al inicio
                </button>
            </div>
        </div>
    )
}