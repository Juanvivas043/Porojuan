export function SkeletonSummonerPage() {
    return (
        <div className="max-w-7xl mx-auto p-4 flex flex-col gap-6 w-full animate-pulse">
            <section className="w-full flex flex-col">
                <div className="bg-zinc-800 flex flex-row items-center gap-5 p-6 md:p-10 rounded-2xl shadow-zinc-950 shadow-lg">
                    <div className="h-24 w-24 bg-zinc-700 rounded-2xl shrink-0"></div>
                    <div className="flex flex-col items-start gap-3 w-full">
                        <div className="h-6 w-48 bg-zinc-700 rounded"></div>
                        <div className="h-5 w-24 bg-zinc-700 rounded"></div>
                    </div>
                </div>
            </section>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                <div className="lg:col-span-1">
                    <section className="bg-zinc-800 flex flex-col w-full gap-10 p-6 md:p-10 rounded-2xl shadow-zinc-950 shadow-lg">
                        <div className="flex flex-col items-center gap-3">
                            <div className="h-6 w-48 bg-zinc-700 rounded"></div>
                            <div className="h-40 w-40 bg-zinc-700 rounded-full"></div>
                            <div className="flex flex-row items-center gap-2 mt-2">
                                <div className="h-5 w-16 bg-zinc-700 rounded"></div>
                                <div className="h-5 w-8 bg-zinc-700 rounded"></div>
                                <div className="h-5 w-16 bg-zinc-700 rounded"></div>
                            </div>
                            <div className="flex flex-row items-center gap-6 mt-1">
                                <div className="h-5 w-20 bg-zinc-700 rounded"></div>
                                <div className="h-5 w-20 bg-zinc-700 rounded"></div>
                            </div>
                            <div className="h-5 w-24 bg-zinc-700 rounded mt-1"></div>
                        </div>

                        <div className="flex flex-col items-center gap-5">
                            <div className="h-6 w-48 bg-zinc-700 rounded"></div>
                            <div className="h-40 w-40 bg-zinc-700 rounded-full"></div>
                            <div className="flex flex-row items-center gap-2 mt-2">
                                <div className="h-5 w-16 bg-zinc-700 rounded"></div>
                                <div className="h-5 w-8 bg-zinc-700 rounded"></div>
                                <div className="h-5 w-16 bg-zinc-700 rounded"></div>
                            </div>
                            <div className="flex flex-row items-center gap-6 mt-1">
                                <div className="h-5 w-20 bg-zinc-700 rounded"></div>
                                <div className="h-5 w-20 bg-zinc-700 rounded"></div>
                            </div>
                            <div className="h-5 w-24 bg-zinc-700 rounded mt-1"></div>
                        </div>
                    </section>
                </div>

                <div className="lg:col-span-2">
                    <section className="bg-zinc-800 w-full flex flex-col gap-4 p-4 sm:p-6 md:p-8 rounded-2xl shadow-zinc-950 shadow-lg">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 bg-zinc-700/30 p-4 sm:p-6 rounded-xl shadow-zinc-950 shadow-lg">
                                {/* Game Info */}
                                <div className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-1/4">
                                    <div className="h-5 w-32 bg-zinc-700 rounded"></div>
                                    <div className="h-4 w-24 bg-zinc-700 rounded"></div>
                                    <div className="h-4 w-20 bg-zinc-700 rounded"></div>
                                </div>

                                {/* Player Info */}
                                <div className="flex flex-col items-center gap-3 w-full lg:w-2/4 lg:justify-center">
                                    <div className="flex flex-row items-center gap-4">
                                        <div className="h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 bg-zinc-700 rounded-full shrink-0"></div>
                                        <div className="flex flex-col items-start gap-2 min-w-[80px]">
                                            <div className="h-5 w-20 bg-zinc-700 rounded"></div>
                                            <div className="h-4 w-16 bg-zinc-700 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        {[1, 2, 3, 4, 5, 6, 7].map((itemId) => (
                                            <div key={itemId} className="h-7 w-7 sm:h-8 sm:w-8 bg-zinc-700 rounded"></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Other Participants */}
                                <div className="hidden sm:flex flex-row gap-2 w-full lg:w-1/4 justify-end">
                                    <div className="flex flex-col gap-1 w-1/2 max-w-[120px]">
                                        {[1, 2, 3, 4, 5].map((j) => (
                                            <div key={j} className="flex items-center gap-1 w-full">
                                                <div className="h-4 w-4 bg-zinc-700 rounded shrink-0"></div>
                                                <div className="h-3 w-16 bg-zinc-700 rounded"></div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-1 w-1/2 max-w-[120px]">
                                        {[1, 2, 3, 4, 5].map((j) => (
                                            <div key={j} className="flex items-center gap-1 w-full">
                                                <div className="h-4 w-4 bg-zinc-700 rounded shrink-0"></div>
                                                <div className="h-3 w-16 bg-zinc-700 rounded"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}