import { CandlestickSeries, Chart } from "lightweight-charts-react-components";

export default function MarketChart() {
  return (
    <Chart
      containerProps={{
        style: { width: "100%", height: "100%" },
      }}
      options={{
        layout: {
          background: { color: "#131722" }, // Dark background
          textColor: "#d1d4dc", // Light text
        },
        grid: {
          vertLines: { color: "#2B2B43" }, // Subtle dark grid lines
          horzLines: { color: "#2B2B43" },
        },
      }}
    >
      <CandlestickSeries
        data={[
          {
            time: "2018-12-22",
            open: 32.5,
            high: 33.0,
            low: 31.8,
            close: 32.51,
          },
          {
            time: "2018-12-23",
            open: 32.51,
            high: 32.8,
            low: 30.5,
            close: 31.11,
          },
          {
            time: "2018-12-24",
            open: 31.11,
            high: 31.5,
            low: 26.9,
            close: 27.02,
          },
          {
            time: "2018-12-25",
            open: 27.02,
            high: 27.8,
            low: 26.5,
            close: 27.32,
          },
          {
            time: "2018-12-26",
            open: 27.32,
            high: 26.0,
            low: 24.8,
            close: 25.17,
          },
          {
            time: "2018-12-27",
            open: 25.17,
            high: 29.0,
            low: 25.0,
            close: 28.89,
          },
          {
            time: "2018-12-28",
            open: 28.89,
            high: 26.0,
            low: 25.4,
            close: 25.46,
          },
          {
            time: "2018-12-29",
            open: 25.46,
            high: 24.5,
            low: 23.5,
            close: 23.92,
          },
          {
            time: "2018-12-30",
            open: 23.92,
            high: 23.0,
            low: 22.5,
            close: 22.68,
          },
          {
            time: "2018-12-31",
            open: 22.68,
            high: 23.0,
            low: 22.5,
            close: 22.67,
          },
        ]}
      />
    </Chart>
  );
}
