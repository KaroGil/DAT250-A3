import { defaultFetch } from "./defaultFetch";

// Make a fetch request to the backend to get the user data
export const getUser = async (token: string) => {
    defaultFetch("/users", "GET", token);
};