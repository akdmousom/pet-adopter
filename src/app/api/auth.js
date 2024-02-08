import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // I added credential provider here. With this provider use can login their accout with user name and password if he/she have registered account
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
                // I added google provider here. With this provider user don't need to register an accout he/she can login their account with one click.
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
    // Here i just find out he/she login in this web application with google or not
    async signIn({ account, profile }) {
      if (account.provider === "google") {
       // return profile.email_verified && profile.email.endsWith("@example.com")
        return profile
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },

    // I just create an token with this function this fuction return a user token it's help us to know who is the user.
    async jwt({token, user,account, profile}){

      if (user) {

        token.fullName = user.fullName,
        token.email = user.userEmail || profile?.email,
        token.avater= user.userAvater,
        token.role = user.userRole
        
      }

      return token

    },

    // Here I create a session with user profile details. And I return the session with user info basically this session help us to fetch user info in our ui
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