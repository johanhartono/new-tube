"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import HomeLayout from "@/modules/home/ui/layouts/home-layout";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <HomeLayout>
        {children}
      </HomeLayout>
    </SidebarProvider>
  );
}