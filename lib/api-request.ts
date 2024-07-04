import { COMPANY_OVERVIEW_DATA } from "@/data/company-overview";
import { GLOBAL_QUOTE_DATA } from "@/data/global-quota";
import { SYMBOLS_DATA } from "@/data/symbols";
import {
  TIME_SERIES_DAILY_DATA,
  TIME_SERIES_MONTHLY_DATA,
  TIME_SERIES_WEEKLY_DATA,
} from "@/data/time-series";
import { CompanyOverview } from "@/types/company-overview";
import { GlobalQuoteResponse } from "@/types/global-quote";
import { Symbol } from "@/types/symbol";
import { TimeSerieResponse } from "@/types/time-series";

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

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  /* Validate if API limit reached, if so send STATIC DATA */
  if (data["Information"]) {
    return SYMBOLS_DATA;
  }

  return data;
}

export async function getGlobalQuote(
  symbol: string,
): Promise<GlobalQuoteResponse> {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.EXPO_PUBLIC_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "request",
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  /* Validate if API limit reached, if so send STATIC DATA */
  if (data["Information"]) {
    return GLOBAL_QUOTE_DATA;
  }

  return data;
}

export async function getTimeSeries(
  symbol: string,
  series: "TIME_SERIES_DAILY" | "TIME_SERIES_WEEKLY" | "TIME_SERIES_MONTHLY",
  signal?: AbortSignal,
): Promise<TimeSerieResponse> {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=${series}&symbol=${symbol}&apikey=${process.env.EXPO_PUBLIC_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "request",
      },
      signal,
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  /* Validate if API limit reached, if so send STATIC DATA */
  if (data["Information"]) {
    switch (series) {
      case "TIME_SERIES_DAILY":
        return TIME_SERIES_DAILY_DATA;

      case "TIME_SERIES_WEEKLY":
        return TIME_SERIES_WEEKLY_DATA;

      case "TIME_SERIES_MONTHLY":
        return TIME_SERIES_MONTHLY_DATA;

      default:
        return TIME_SERIES_DAILY_DATA;
    }
  }

  return data;
}

export async function getCompanyOverview(
  symbol: string,
): Promise<CompanyOverview> {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.EXPO_PUBLIC_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "request",
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  /* Validate if API limit reached, if so send STATIC DATA */
  if (data["Information"]) {
    return COMPANY_OVERVIEW_DATA;
  }

  return data;
}
