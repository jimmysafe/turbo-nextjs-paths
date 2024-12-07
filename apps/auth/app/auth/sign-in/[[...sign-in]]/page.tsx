import { env } from "@/env";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn signUpUrl={`${env.NEXT_PUBLIC_BASE_URL}/auth/sign-up`} />;
}
