"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { BarChart3, FileText, Home, Users, Wallet, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  const navigationItems = [
    {
      group: "Main",
      items: [
        {
          href: "/dashboard",
          icon: Home,
          label: "Dashboard",
        },
        {
          href: "/analytics",
          icon: BarChart3,
          label: "Analytics",
        },
      ],
    },
    {
      group: "Management",
      items: [
        {
          href: "/users",
          icon: Users,
          label: "Users",
        },
        {
          href: "/reports",
          icon: FileText,
          label: "Reports",
        },
      ],
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  D
                </span>
              </div>
              <span className="font-semibold text-lg group-data-[collapsible=icon]:hidden">
                Dashboard
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            {navigationItems.map((group) => (
              <SidebarGroup key={group.group}>
                <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
                  {group.group}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.href}
                          tooltip={item.label}
                        >
                          <Link href={item.href}>
                            <item.icon />
                            <span className="group-data-[collapsible=icon]:hidden">
                              {item.label}
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center gap-2 px-2 group-data-[collapsible=icon]:hidden">
              <ThemeSwitcher />
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Wallet className="mr-2 h-4 w-4" />
                Balance
              </Button>
              <Button variant="outline" size="sm">
                <Zap className="mr-2 h-4 w-4" />
                Quick Actions
              </Button>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
