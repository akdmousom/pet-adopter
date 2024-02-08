import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
                    name: "credentials",
        
                    credentials: {
                        username: { label: "Email", type: "Email", placeholder: "petadopter@petadopter.com" },
                        password: { label: "Password", type: "password", placeholder: "Password"  }
                      },
        
                      authorize: async(credentials)=> {
                        const username = credentials?.username

                        const registerUser = await fetch(`https://pet-adopter-backend.vercel.app/api/v1/getregisteruser?email=${username}`)
                        const registeredUsers = await registerUser.json()
                        console.log(registeredUsers);
                        
                        
        
                        const user = { id: "1", name: "J Smith", role:'admin',  username: 'akd', password:'admin', }
        
                        if (credentials.username === registeredUsers.userEmail && credentials.password === registeredUsers.userPassword ) {
                            return user
                        }else{
                            return null
                        }
        
                      }
                }),

                GoogleProvider({
                  clientId: process.env.GOOGLE_CLIENT_ID,
                  clientSecret: process.env.GOOGLE_CLIENT_SECRET
                })


    // ...add more providers here
  ],
  secret: process.env.AUTH_SECRET,

  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      
      return session
    }
  }


}
export const {auth, handlers, signIn} = NextAuth(authOptions)