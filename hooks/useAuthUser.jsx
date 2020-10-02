import {signIn, signOut, useSession} from 'next-auth/client'

export default function useAuthUser () {
    const [session, loading] = useSession()


    return <>
        {!session && <>
        Not signed in <br/>
        

        }
</>
}