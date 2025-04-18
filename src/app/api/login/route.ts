// src/app/api/login/route.ts
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; // Make sure prisma client is set up in lib/prisma.ts
import bcrypt from 'bcryptjs'; // You need bcrypt to compare hashed passwords

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Validate that the username and password are provided
  if (!username || !password) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  try {
    // Fetch the user by username
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 400 });
    }

    // Compare the provided password with the hashed password from the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 400 });
    }

    // If login is successful, return user data (excluding password)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword, message: 'Login successful' });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
