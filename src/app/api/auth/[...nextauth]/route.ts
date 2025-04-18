import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credentials not provided");
        }

        const { username, password } = credentials;

        // Query the user from the database
        const user = await prisma.user.findUnique({
          where: {
            username: username, // Filter by username
          },
        });

        // Validate the password
        if (user && user.password === password) {
          return {
            id: user.id.toString(), // Ensure id is a string for NextAuth compatibility
            username: user.username, // Return only the username field
          };
        } else {
          return null; // Authentication failed
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
