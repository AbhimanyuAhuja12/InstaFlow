// import { useQueryUser } from '@/hooks/user-queries'

// type Props = {
//   type: 'FREE' | 'PRO'
//   children: React.ReactNode
// }

// export const SubscriptionPlan = ({ children, type }: Props) => {
//   const { data } = useQueryUser()
//   return data?.data?.subscription?.plan === type && children
// }


// export const SubscriptionPlan = ({ children, type }: Props) => {
//   return <div> <div/>
// }

import React from 'react'


type Props = {
  type: 'FREE' | 'PRO'
  children: React.ReactNode
}



const index = (props: Props) => {
  return (
    <div>subscription plan</div>
  )
}

export default index
