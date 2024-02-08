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
                        const user = registeredUsers
                              
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
  trustHost: true,
  trustHostedDomain: true,
  secret: process.env.AUTH_SECRET,

  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
       // return profile.email_verified && profile.email.endsWith("@example.com")
        return profile
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },


    async jwt({token, user,account, profile}){

      if (user) {

        token.fullName = user.fullName,
        token.email = user.userEmail || profile?.email,
        token.avater= user.userAvater,
        token.role = user.userRole
        
      }

      return token

    },


    async session({ session, token, profile }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (session.user) {

        session.user.image = token.avater || token.picture,
        session.user.name = token.fullName || token.name,
        session.user.role = token.role     || "user"      
      }
        
      return session
    }
  }


}
export const {auth, handlers, signIn} = NextAuth(authOptions)