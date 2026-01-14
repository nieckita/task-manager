import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/generated/prisma/prisma";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // از همان منطقی که در actions.ts نوشتی استفاده می‌کنیم
        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
        });

        if (user && user.password === credentials.password) {
          return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signIn", // آدرس صفحه لاگین خودت را اینجا بده
  },
  session: {
    strategy: "jwt", // استفاده از JSON Web Token برای امنیت بالا
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub; // آیدی یوزر را به سشن اضافه می‌کنیم
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
