import PocketBase from "pocketbase";

export const pb = new PocketBase(import.meta.env.POCKETBASE_API_URL as string);
