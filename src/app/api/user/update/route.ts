// app/api/user/update/route.ts
import { NextResponse } from 'next/server';
import getServerSession from 'next-auth';
import { authOptions } from '@/lib/auth'; // Path to your next-auth config
import prisma from '@/lib/prisma';

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { email, phone } = await req.json();

    const updatedUser = await prisma.user.update({
      where: {
        username: session.user.name, // Assuming your session stores username
      },
      data: {
        email,
        phone,
      },
    });

    return new NextResponse(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    console.error('Error updating user info:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
