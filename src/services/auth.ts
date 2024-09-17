import { API_URL } from "../constants";
import { getToken } from "./token";

export async function login(username: string, password: string): Promise<string> {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    const token = data.token;

    // Store the token in local storage
    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    throw new Error("Login failed");
  }
}

export function logout(): void {
  // Remove the token from local storage
  localStorage.removeItem("token");
}

export function isAuthenticated(): boolean {
  // Check if the token exists in local storage
  const token = getToken();
  return !!token;
}

export function getToken(): string | null {
  // Get the token from local storage
  return localStorage.getItem("token");
}