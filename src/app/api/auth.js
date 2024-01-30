import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";




const config = {
    
    providers: [
        CredentialsProvider({
       
          name: "credentials",
        
          credentials: {
            username: { label: "username", type: "text", placeholder: "username" },
            password: { label: "Password", type: "password", placeholder: "Password" }
          },

          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = { id: "1", name: "J Smith", username: "AKD", password: "admin", email: "jsmith@example.com" }
      
            if (credentials.username === user.username && credentials.password === user.password) {

                return user
                
            }

            return null
      
          }
        })
      ],

      pages: {
        signIn: '/login',
       
      },
   
      

      

      secret: process.env.AUTH_SECRET
}

export const {auth, handlers, signIn, signOut} = NextAuth(config)