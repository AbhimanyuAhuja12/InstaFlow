import React from 'react'
import {cn} from '@/lib/utils'
import { Spinner } from './spinner'

type Props = {
  state : boolean
  className? : string
  children : React.ReactNode
  color? : string

}

const index = ({children,state,className,color}: Props) => {
  return state ?( <div className= {cn(className)}><Spinner color={color}/>
  </div>
  )
  :(
   ' '
  )
}

export default index