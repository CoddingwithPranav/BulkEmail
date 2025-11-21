"use server";

import { cookies as nextCookies } from "next/headers";
import { SystemRole } from "../types";

export const setAuthToken = async (token: string, role?: string) => {
  const cookies = await nextCookies();
  cookies.set("jwt", token, {
    maxAge: 60 * 60 * 24 * 1,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  if (role) {
    cookies.set("user_role", role, {
      maxAge: 60 * 60 * 24 * 1,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });
  }
};

export const clearAuthToken = async () => {
  const cookies = await nextCookies();
  cookies.delete("jwt");
  cookies.delete("user_role");
};

export const getCurrentRole = async () => {
  const cookies = await nextCookies();
  return cookies.get("user_role")?.value as SystemRole;
};


export async function isUserLoggedIn(): Promise<boolean> {
  const cookieStore = await nextCookies();
  return !!cookieStore.get("jwt")?.value;
}