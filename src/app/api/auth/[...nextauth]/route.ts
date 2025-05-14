import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { APP_ROUTES } from '@/app/constants/appRoutes'

const ALLOWED_EMAILS = process.env.ALLOWED_EMAILS?.split(',') || []

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: APP_ROUTES.login,
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        return ALLOWED_EMAILS.includes(user.email as string)
      }
      return false
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      return {
        ...session,
        accessToken: token.accessToken,
      }
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
  },
})

export { handler as GET, handler as POST }
