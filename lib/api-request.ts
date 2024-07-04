import { Symbol } from "@/types/symbol";

interface SearchSymbolResponse {
  bestMatches: Symbol[];
}

export async function searchSymbol(
  term: string,
): Promise<SearchSymbolResponse> {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${term}&apikey=${process.env.EXPO_PUBLIC_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "request",
      },
    },
  );

  return await res.json();
}
