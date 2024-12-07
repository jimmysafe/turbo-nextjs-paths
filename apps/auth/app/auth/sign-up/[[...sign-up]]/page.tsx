import { env } from "@/env";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp signInUrl={`${env.NEXT_PUBLIC_BASE_URL}/auth/sign-in`} />;
}
