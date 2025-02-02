
import React from 'react'
import  Sidebar  from '@/components/global/Sidebar'
import InfoBar  from '@/components/global/infobar'
import { useParams } from 'next/navigation'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { PrefetchUserAutomations, PrefetchUserProfile } from '@/react-query/prefetch'

type Props = {
    children : React.ReactNode
    params : { slug : string}
}

const layout = async ({children,params}: Props) => {
    // Query
    // Query client fetch data

    const query = new QueryClient()

    //prefetch all the data for all server actions
    await PrefetchUserProfile(query)

    await PrefetchUserAutomations(query)

    // now if we need to use this cache data that we have prefetched , we will use hydration bounday and wrap ait over this component

  return (
    <HydrationBoundary state ={dehydrate(query)}>
    <div className='p-3'>
   {/*  sidebar */}

   <Sidebar slug ={params.slug}></Sidebar>

   {/* Navbar */}

   <div className="lg : ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
    <InfoBar slug={params.slug} />
    {children}
   </div>

    </div>
    </HydrationBoundary>
  )
  
}

export default layout

