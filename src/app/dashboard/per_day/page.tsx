"use client";

import { Bar, BarChart } from "recharts";

import "./per_day.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { branch: "DEl", desktop: 186 },
  { branch: "UKK", desktop: 305 },
  { branch: "AMR", desktop: 237 },
  { branch: "ZOO", desktop: 73 },
  { branch: "ALL", desktop: 209 },
  { branch: "DZD", desktop: 214 },
  { branch: "DEl", desktop: 186 },
  { branch: "UKK", desktop: 305 },
  { branch: "AMR", desktop: 237 },
  { branch: "ZOO", desktop: 73 },
  { branch: "ALL", desktop: 209 },
  { branch: "DZD", desktop: 214 },
  { branch: "DZD", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Component() {
  return (
    <Card>
      <CardHeader className="centered-header">
        <CardTitle>ESL Flashes Per Day</CardTitle>
        <CardDescription>ESLs got updated 350 times today</CardDescription>
        <div className="text-5xl font-bold">350</div>
        <div className="text-sm font-medium text-gray-500">FLASHES/DAY</div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={0} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
