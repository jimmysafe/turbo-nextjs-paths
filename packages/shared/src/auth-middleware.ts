import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export function authMiddleware(publicRoutes: string[] = ["/auth/sign-in(.*)", "/auth/sign-up(.*)"]) {
  const isPublicRoute = createRouteMatcher(publicRoutes);

  return clerkMiddleware(async (auth, request) => {
    if (!isPublicRoute(request)) {
      await auth.protect();
    }
  });
}
