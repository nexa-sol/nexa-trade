export interface Token {
  mint: string;
  symbol: string;
  name: string;
  logoURI?: string;
}

export interface TokenLiveData {
  topHolder: number;
  devHold: number;
  snipersHold: number;
  insidersHold: number;
  bundleHold: number;
}
