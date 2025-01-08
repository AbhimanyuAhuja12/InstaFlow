import Trigger from '@/components/global/automations/trigger'
import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations'
import React from 'react'

type Props = {
    params : {id : string}
}

// wip : st some meta data settings

const page = ({params}: Props) => {
    //prefectch user automation data
    // this page is for editing your automations 
  return (
    <div className='flex flex-col items-center gap-y-20'>
       <AutomationsBreadCrumb id={params.id}/>

       <div className='w-full lg:w-10/12 xl:w-6/12
       p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'></div>
       <Trigger id={params.id}/>
    </div>
  )
}

export default page