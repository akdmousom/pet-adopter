import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";




const config = {

  providers: [
    CredentialsProvider({

      name: "credentials",

      credentials: {
        username: { label: "username", type: "email", placeholder: "username" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },

      async authorize(credentials, request) {
        const email = credentials.username;
        const userDataFormDatabase = await fetch(`http://localhost:5000/api/v1/getregisteruser?email=${email}`)
        const data = await userDataFormDatabase.json();
        console.log(data);

        const user = { username: data.userEmail, password: data.userPassword, email: data.userEmail, fullname: data.fullName, userImg: data.userAvater }

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

  }, secret: process.env.AUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.name = user.fullname;
        token.picture = user.userImg;
      }
      return token
    },

    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (session.user) {

        session.name = token.name

      }

      return session
    },

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      console.log('url', url, 'base url', baseUrl);
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }


  }
}

export const { auth, handlers, signIn, signOut } = NextAuth(config)