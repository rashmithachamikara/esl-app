import Card from "@/app/(authorized)/Dashboard/dashboard_components/cards/page";
import ESLFlashesChart from "@/app/(authorized)/Dashboard/dashboard_components/per_day/page";
import ESLFlashesByBranch from "@/app/(authorized)/Dashboard/dashboard_components/by_branch/page";
import AccessChart from "@/app/(authorized)/Dashboard/dashboard_components/access_chart/page";
import MetricChart from "@/app/(authorized)/Dashboard/dashboard_components/metric/page";
import LineChart from "@/app/(authorized)/Dashboard/dashboard_components/line_chart/page";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <ESLFlashesChart />
        <ESLFlashesByBranch />
        <Card />
        <LineChart />
        <AccessChart />
        <MetricChart />
      </div>
    </div>
  );
}
