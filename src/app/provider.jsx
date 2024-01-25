'use client'
import {SessionProvider} from 'next-auth/react'
export const NextAuthPorvider=({children})=>{
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}