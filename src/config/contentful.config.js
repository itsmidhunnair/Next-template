import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFULL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFULL_TOKEN,
});
