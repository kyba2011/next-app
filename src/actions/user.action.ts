"use server";

import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack/server";

export async function getUserDetails(userId: string | undefined) {
  if (!userId) {
    return null;
  }

  try {
    const user = await prisma.$queryRawUnsafe(
      `SELECT * FROM neon_auth.users_sync WHERE id = $1`,
      userId
    );
    return Array.isArray(user) ? user[0] : null;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null;
  }
}

export async function getUserId() {
  try {
    const user = await stackServerApp.getUser();
    const userId = user?.id;

    if (!userId) return;

    return userId;
  } catch (error) {
    console.error("Error getting user from Stack Auth:", error);
    // Return a default user ID for development/testing
    // TODO: Remove this in production
    return "default-user-id";
  }
}
