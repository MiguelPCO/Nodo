import type { Metadata } from "next";
import { CreateCapsuleWizard } from "@/components/app/CreateCapsuleWizard";

export const metadata: Metadata = {
  title: "Nueva cápsula",
  robots: { index: false },
};

export default function NewCapsulePage() {
  return <CreateCapsuleWizard />;
}
