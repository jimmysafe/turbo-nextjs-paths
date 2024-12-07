/* eslint-disable node/no-process-env */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_BASE_URL_NAME: z.string().min(1),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_BASE_URL_NAME: process.env.NEXT_PUBLIC_BASE_URL_NAME,
  },
});
