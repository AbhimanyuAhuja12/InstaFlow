
import React from 'react'
import  Sidebar  from '@/components/global/Sidebar'
import InfoBar  from '@/components/global/infobar'
import { useParams } from 'next/navigation'

type Props = {
    children : React.ReactNode
    params : { slug : string}
}

const layout = ({children,params}: Props) => {
    // Query
    // Query client fetch data

  return (
    <div className='p-3'>
   {/*  sidebar */}

   <Sidebar slug ={params.slug}></Sidebar>

   {/* Navbar */}

   <div className="lg : ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
    <InfoBar slug={params.slug} />
    {children}
   </div>

    </div>
  )
  
}

export default layout

