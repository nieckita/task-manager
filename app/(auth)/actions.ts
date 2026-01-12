/**
 * @file actions.ts
 * @description Prüft, ob ein Benutzer in der Datenbank existiert.
 */
"use server";
import prisma from "@/lib/generated/prisma/prisma";

export async function verifyUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log(email, password);
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (!user) {
      return {
        seccess: false,
        message: "Benutzer nicht gefunden!Können Sie sich Sign up?",
      };
    }
    if (password !== user.password) {
      return { seccess: false, message: "Falsches Passwort!" };
    }

    return { user, sucssess: true, userId: user.id };
  } catch (error) {
    return { seccess: false, message: "Datenbank Fehler!" };
  }
}

export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log(name, email, password);
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: password,
      },
    });
    return { user, sucssess: true, userId: user.id };
  } catch (error) {
    return { error: "Datenbank Fehler!" };
  }
}
