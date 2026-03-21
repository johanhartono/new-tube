"use client";
import { SidebarContent, SidebarGroup, SidebarMenu ,SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";
import {
    HomeIcon,PlaySquareIcon,FlameIcon
    
 } from "lucide-react";
import Link from "next/link";
const items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon,
    },
    {
        title: "Subscriptions",
        url: "/fee/subscriptions",
        icon: PlaySquareIcon,
        auth: true
    },
    {
        title: "Trending",
        url: "/fee/trending",
        icon: FlameIcon,
    },
    
];

export const MainSection = () => {
    return (
        <SidebarGroup>
            <SidebarContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false} // TODO: Change to look at current pathname
                                onClick={() => { }} //  TODO: Do Something on click
                            >
                                <Link href={item.url} className="flex items-center gap-4">
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    
                    ))}

                </SidebarMenu>
            </SidebarContent>
        </SidebarGroup>
    )
}