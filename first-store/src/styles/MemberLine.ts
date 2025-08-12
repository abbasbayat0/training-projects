import { Anek_Devanagari } from "next/font/google";
const font = Anek_Devanagari({ weight: "500" });

export const article = "flex gap-5 justify-around mx-auto md:w-1/2";
export const textLight = `${font.className} text-sm cursor-pointer select-none sm:text-lg md:text-xl`;
export const textDark = `${font.className} text-sm text-white cursor-pointer select-none sm:text-lg md:text-xl`;
