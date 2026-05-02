import { SkeletonSummonerPage } from "../components/skeletonSummonerPage"
import { useFetchSummonerData } from "../hooks/useFetchSummonerData"
import { SummonerProfileComponent } from "../components/summonerProfile"
import { SummonerLeagueComponent } from "../components/summonerLeague"
import { SummonerMatchesHistoryComponent } from "../components/summonerMatchesHistory"
import { useParams } from 'react-router-dom';

export function SummonerStatsPage() {
    const { gameName, tagLine } = useParams();
    const { summonerAccountData, summonerLeaguesData, summonerMatchesListData, loading } = useFetchSummonerData({ gameName: gameName as string, tagLine: tagLine as string })

    return (
        <div>
            {loading || !summonerAccountData || !summonerLeaguesData || !summonerMatchesListData ? (
                <SkeletonSummonerPage />
            ) : (
                <div className='max-w-7xl mx-auto p-4 flex flex-col gap-6 w-full'>
                    <SummonerProfileComponent summonerAccountData={summonerAccountData} />

                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                        <div className='lg:col-span-1'>
                            <SummonerLeagueComponent summonerLeagueSoloDuoData={summonerLeaguesData?.soloDuo || null} summonerLeagueFlexData={summonerLeaguesData?.flex || null} />
                        </div>
                        <div className='lg:col-span-2'>
                            <SummonerMatchesHistoryComponent summonerAccountData={summonerAccountData} summonerMatchesListData={summonerMatchesListData} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
