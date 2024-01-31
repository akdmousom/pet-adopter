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

      async authorize(credentials, request) {
        const userDataFormDatabase = await fetch('http://localhost:5000/api/v1/getregisteruser')
        const data = await userDataFormDatabase.json();
        
        const user = {username : data[0].userName, password: data[0].password, email: data[0].email}

        if (credentials.username == user.username && credentials.password == user.password) return user

        return null

      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })




  ],

  pages: {
    signIn: '/login',

  },





  secret: process.env.AUTH_SECRET
}

export const { auth, handlers, signIn, signOut } = NextAuth(config)