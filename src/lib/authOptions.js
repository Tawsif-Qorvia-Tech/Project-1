import { LoginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const user = await LoginUser({
          email: credentials?.email,
          password: credentials?.password,
        });

        // The user object returned from LoginUser should contain the role, email, and Photo
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token, user }) {
      // The 'user' object is only available on the initial login sign-in
      if (user) {
        token.role = user.role;
        token.email = user.email;
      }
      return token;
    },
  },
};
