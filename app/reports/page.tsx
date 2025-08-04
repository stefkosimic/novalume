import { DashboardLayout } from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Calendar, BarChart3, TrendingUp } from "lucide-react";

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Reports</h1>
            <p className="text-muted-foreground">
              Generate and view detailed reports for your business.
            </p>
          </div>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Monthly Report
              </CardTitle>
              <CardDescription>
                Comprehensive monthly performance overview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Generated: Dec 1, 2024
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">PDF</Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Analytics Report
              </CardTitle>
              <CardDescription>Detailed analytics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Generated: Nov 30, 2024
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Excel</Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Growth Report
              </CardTitle>
              <CardDescription>
                Business growth and performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Generated: Nov 29, 2024
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">PDF</Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Report History</CardTitle>
            <CardDescription>
              All generated reports from the past 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Weekly Performance Report</p>
                  <p className="text-sm text-muted-foreground">Nov 25, 2024</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">PDF</Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">User Activity Report</p>
                  <p className="text-sm text-muted-foreground">Nov 20, 2024</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Excel</Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Revenue Analysis Report</p>
                  <p className="text-sm text-muted-foreground">Nov 15, 2024</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">PDF</Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
