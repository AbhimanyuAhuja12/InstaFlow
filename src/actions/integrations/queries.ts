"use server"

import { client } from "@/lib/prisma"

export const updateIntegrations =async (token : string , expire : Date , id : string)=>{
    // change inn database
    return await client.integrations.update({ where : { id},
      data : {
        token ,
        expiresAt : expire
      }})
}