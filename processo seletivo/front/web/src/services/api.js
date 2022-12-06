import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const LoginSession = async (username, password) => {
    return api.post("/login", { username, password});
}

export const createSession = async (username, password) => {
    return api.post("/users", { username, password});
}