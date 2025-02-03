import { onBoardUser } from '@/actions/user'
import { redirect } from 'next/navigation'

type Props = {}

const page = async(props: Props) => {
    //sever action , onboard the user

    // check if he is already onboarded (status 200 || 201)
    // if onboarder , send him to their particular "dashboard/theirDynamicID"
    
    const user = await onBoardUser()

    if(user.status ===200 || user.status ===201){
      return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`)
    }
  return redirect(`/sign-in`)
}

export default page

