"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import "./by_branch.css";
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
  { branch: "DEl", esl: 186 },
  { branch: "UKK", esl: 305 },
  { branch: "AMR", esl: 237 },
  { branch: "ZOO", esl: 73 },
  { branch: "ALL", esl: 209 },
  { branch: "DZD", esl: 214 },
];

const chartConfig = {
  esl: {
    label: "esl",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ESL Flashes by Branch</CardTitle>
        <CardDescription>Showing ESL Flashes of Branches</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="branch"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="esl" fill="var(--color-esl)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Recorded highest is 305 in UKK <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
