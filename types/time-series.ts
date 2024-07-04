export type TimeSerieResponse = {
  "Meta Data": MetaData;
} & (
  | {
      "Time Series (Daily)": TimeSeries;
    }
  | {
      "Weekly Time Series": TimeSeries;
    }
  | {
      "Monthly Time Series": TimeSeries;
    }
);

export interface MetaData {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Output Size"?: string;
  "5. Time Zone"?: string;
}

export type TimeSeries = Record<string, TimeSerie>;

export interface TimeSerie {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}
