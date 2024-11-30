import { type ClassValue, clsx } from "clsx";
import { Dimensions } from "react-native";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateUniqueId = () => {
  const now = Date.now(); // Get the current timestamp in milliseconds
  const randomPart = Math.random().toString(36).substring(2, 8); // Add a random string for uniqueness
  return `${now}-${randomPart}`;
};

export const SCREEN_WIDTH = Dimensions.get("window").width;
