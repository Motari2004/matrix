import prisma from "@/lib/prisma";
import { hash } from "bcryptjs"; // Assuming you're using bcrypt for password hashing

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // Hash the password before saving it to the database
    const hashedPassword = await hash(password, 10);

    // Create the user with the provided username and password (email is optional)
    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        referralCode: generateReferralCode(), // Add any logic for referral code generation
      },
    });

    return new Response(JSON.stringify({ message: "User created successfully!" }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response("Error creating user", { status: 500 });
  }
}

// Helper function to generate referral code (for example)
function generateReferralCode() {
  return "REF" + Math.random().toString(36).substring(2, 15).toUpperCase();
}
