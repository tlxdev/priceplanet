import { Country } from "@/constants/Country";

export const countryCodeToEmoji = (country: Country): string | null => {
  if (country.length !== 2) {
    return null; // Return null or a default value if the input isn't a two-letter code
  }

  const offset = 127397; // This offset will map A to 🇦 and so on
  const emojiFlag = Array.from(country.toUpperCase())
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + offset))
    .join('');

  return emojiFlag;
};
