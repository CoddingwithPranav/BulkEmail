"use server";

import { cookies as nextCookies } from "next/headers";
import { SystemRole } from "../types";

export const setAuthToken = async (token: string, role?: string) => {
  const cookies = await nextCookies();
  cookies.set("_pb_jwt", token, {
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
  cookies.delete("_pb_jwt");
  cookies.delete("user_role");
};

export const getCurrentRole = async () => {
  const cookies = await nextCookies();
  return cookies.get("user_role")?.value as SystemRole;
};
