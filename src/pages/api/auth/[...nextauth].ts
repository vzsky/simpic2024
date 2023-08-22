import NextAuth, { Session, Awaitable } from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import EmailProvider from 'next-auth/providers/email'
import clientPromise from "../../../helper/mongodb"
import { MaxSessionAge, isAllowedToSignIn } from "../../../settings"
import { Role } from "../../../helper/type"
import { getUser } from "../../../helper/dbQuery"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

const THIRTY_MINUTES = 30 * 60

export default NextAuth({
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error', 
    verifyRequest: '/auth/verify',
  },
  session: {
    strategy: 'jwt',
    maxAge: MaxSessionAge,
    updateAge: THIRTY_MINUTES
  },
  callbacks: {
    async signIn ({ user }) {
      if (isAllowedToSignIn(user.email)) return true
      return false
    },
    async jwt({ token }) {
      let role:Role = 'user'
      if (!token.email) throw Error('no email provided with token')
      let user = await getUser(token.email)
      if (user?.isAdmin) role = 'admin'
      return {...token, role}
    },
    async session ({ session, token }) {
      return {...session, user: token}
    },
    async redirect ({}) {
      return '/'
    }
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.SECRET
})
