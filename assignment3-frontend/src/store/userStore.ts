import { writable } from "svelte/store";

export const userId = writable<string | null>(null);
export const isLoggedIn = writable<boolean>(false);