"use client";

import Card from "@/app/(authorized)/dashboard/dashboard_components/cards/page";
import ESLFlashesChart from "@/app/(authorized)/dashboard/dashboard_components/per_day/page";
import ESLFlashesByBranch from "@/app/(authorized)/dashboard/dashboard_components/by_branch/page";
import AccessChart from "@/app/(authorized)/dashboard/dashboard_components/access_chart/page";
import MetricChart from "@/app/(authorized)/dashboard/dashboard_components/metric/page";
import LineChart from "@/app/(authorized)/dashboard/dashboard_components/line_chart/page";

import "@/css/typography.css";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <ESLFlashesChart />
        <ESLFlashesByBranch />
        <Card />
        <LineChart />
        <AccessChart />
        <MetricChart />
      </div>
    </>
  );
}
