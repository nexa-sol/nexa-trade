export interface Token {
  mint: string;
  symbol: string;
  name: string;
  logoURI?: string;
  twitterPost?: {
    link: string;
    author: {
      username: string;
      followers: number;
    };
  };
}

export interface TokenLiveData {
  topHolder: number;
  devHold: number;
  snipersHold: number;
  insidersHold: number;
  bundleHold: number;
}
