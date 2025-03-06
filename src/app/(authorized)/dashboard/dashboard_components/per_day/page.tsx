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
  { branch: "DEl", flashes: 186 },
  { branch: "UKK", flashes: 305 },
  { branch: "AMR", flashes: 237 },
  { branch: "ZOO", flashes: 73 },
  { branch: "ALL", flashes: 209 },
  { branch: "DZD", flashes: 214 },
  { branch: "DEl", flashes: 186 },
  { branch: "UKK", flashes: 305 },
  { branch: "AMR", flashes: 237 },
  { branch: "ZOO", flashes: 73 },
  { branch: "ALL", flashes: 209 },
  { branch: "DZD", flashes: 214 },
  { branch: "DZD", flashes: 350 },
];

const chartConfig = {
  flashes: {
    label: "Flashes",
    color: "#D93639",
  },
} satisfies ChartConfig;

export default function Component() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="centered-header">
        <CardTitle>ESL Flashes Per Day</CardTitle>
        <CardDescription>ESLs got updated 350 times today</CardDescription>
        <div className="text-5xl font-bold">350</div>
        <div className="text-sm font-medium text-gray-500">FLASHES/DAY</div>
      </CardHeader>
      <CardContent className="flex-grow h-full">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <BarChart accessibilityLayer data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="flashes" fill="#D93639" radius={0} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
