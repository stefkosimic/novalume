import { DashboardLayout } from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">
              Detailed insights and performance metrics.
            </p>
          </div>
          <Badge variant="outline">Analytics</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Page Views</CardTitle>
              <CardDescription>Total page views this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,345</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bounce Rate</CardTitle>
              <CardDescription>Average bounce rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23.4%</div>
              <p className="text-xs text-muted-foreground">
                -2.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Session Duration</CardTitle>
              <CardDescription>Average session duration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4m 32s</div>
              <p className="text-xs text-muted-foreground">
                +18s from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
            <CardDescription>
              Detailed analytics and performance metrics for your business.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Analytics charts and graphs would go here
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
