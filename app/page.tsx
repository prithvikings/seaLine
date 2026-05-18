import { redirect } from "next/navigation";

export default function RootPage() {
  // Immediately push the user to the dashboard overview
  redirect("/dashboard");
}
