"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import {
  Inbox,
  RectangleHorizontal,
  Settings,
  Brush,
  Users,
  LayoutDashboard,
  PanelsTopLeft,
  Package,
  ChevronDown,
} from "lucide-react";

import { NavMain } from "@/components/SideBar/nav-main";
import { NavSecondary } from "@/components/SideBar/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/Dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Summary",
          url: "/Dashboard",
        },
        {
          title: "ESL",
          url: "#",
        },
        {
          title: "User Activity",
          url: "#",
        },
      ],
    },
    {
      title: "Branches",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Add Branch",
          url: "#",
        },
        {
          title: "All Branches",
          url: "#",
        },
      ],
    },
    {
      title: "Designs",
      url: "/design",
      icon: Brush,
      items: [
        {
          title: "New Design",
          url: "#",
        },
        {
          title: "All Designs",
          url: "design",
        },
        {
          title: "Trash",
          url: "#",
        },
      ],
    },
    {
      title: "Products",
      url: "#",
      icon: Package,
      items: [
        {
          title: "Add Product",
          url: "#",
        },
        {
          title: "All Products",
          url: "/product",
        },
        {
          title: "Categories",
          url: "#",
        },
      ],
    },
    {
      title: "ESLs",
      url: "#",
      icon: RectangleHorizontal,
      items: [
        {
          title: "Add ESL",
          url: "#",
        },
        {
          title: "All ESLs",
          url: "/esl",
        },
        {
          title: "Access Points",
          url: "#",
        },
      ],
    },
    {
      title: "Layouts",
      url: "#",
      icon: PanelsTopLeft,
      items: [
        {
          title: "New Layout",
          url: "#",
        },
        {
          title: "All Layouts",
          url: "/layouts",
        },
        {
          title: "Trash",
          url: "#",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Add User",
          url: "#",
        },
        {
          title: "All Users",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
