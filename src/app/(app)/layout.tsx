import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import { AppShell } from "@/components/app/AppShell";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return <AppShell userEmail={user.email}>{children}</AppShell>;
}
