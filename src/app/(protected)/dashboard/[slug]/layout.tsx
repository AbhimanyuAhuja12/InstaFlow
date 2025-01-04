
import React from 'react'
import  Sidebar  from '@/components/global/Sidebar'
import Navbar  from '@/components/global/Navbar'

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

   <Navbar></Navbar>

    </div>
  )
  
}

export default layout

