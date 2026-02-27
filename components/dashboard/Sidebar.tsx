"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Zap,
    LayoutDashboard,
    CreditCard,
    BarChart3,
    Settings,
    ChevronLeft,
    ChevronRight,
    LogOut,
    Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import type { Profile } from "@/types";
import { getInitials } from "@/lib/utils";
import { usePlan } from "@/hooks/usePlan";

const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    {
        href: "/dashboard/subscriptions",
        icon: CreditCard,
        label: "Subscriptions",
    },
    { href: "/dashboard/analytics", icon: BarChart3, label: "Analytics" },
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

interface SidebarProps {
    profile: Profile | null;
}

export function Sidebar({ profile }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();
    const { isPro } = usePlan();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push("/");
    };

    return (
        <aside
            className={cn(
                "relative hidden sm:flex flex-col h-full border-r border-border bg-surface transition-all duration-200 shrink-0",
                collapsed ? "w-14" : "w-52",
            )}
        >
            {/* Logo */}
            <div
                className={cn(
                    "flex items-center h-14 border-b border-border px-4 shrink-0",
                    collapsed ? "justify-center" : "gap-2.5",
                )}
            >
                <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5 text-accent-foreground fill-current" />
                </div>
                {!collapsed && (
                    <span className="text-sm font-semibold tracking-tight truncate">
                        ZeroScribe
                    </span>
                )}
                {!collapsed && isPro && (
                    <span className="ml-auto text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/15 text-accent border border-accent/25">
                        Pro
                    </span>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto no-scrollbar">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                        item.href === "/dashboard"
                            ? pathname === "/dashboard"
                            : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            title={collapsed ? item.label : undefined}
                            className={cn(
                                "sidebar-link",
                                isActive && "sidebar-link-active",
                                collapsed && "justify-center px-0",
                            )}
                        >
                            <Icon className="w-4 h-4 shrink-0" />
                            {!collapsed && (
                                <span className="truncate">{item.label}</span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Upgrade prompt for free users */}
            {!isPro && !collapsed && (
                <div className="px-2 pb-2">
                    <Link
                        href="/upgrade"
                        className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/15 transition-colors group"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                        <div className="min-w-0">
                            <p className="text-[10px] font-semibold text-accent">
                                Upgrade to Pro — Free
                            </p>
                            <p className="text-[9px] text-muted-foreground truncate">
                                Gmail scan + insights unlocked
                            </p>
                        </div>
                    </Link>
                </div>
            )}

            {/* User section */}
            <div className="border-t border-border p-2 space-y-0.5">
                <button
                    onClick={handleSignOut}
                    title={collapsed ? "Sign out" : undefined}
                    className={cn(
                        "sidebar-link w-full text-left hover:text-danger hover:bg-danger-subtle",
                        collapsed && "justify-center px-0",
                    )}
                >
                    <LogOut className="w-4 h-4 shrink-0" />
                    {!collapsed && <span>Sign out</span>}
                </button>

                {profile && (
                    <div
                        className={cn(
                            "flex items-center gap-2.5 px-3 py-2 rounded-lg",
                            collapsed && "justify-center px-0",
                        )}
                    >
                        {profile.avatar_url ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={profile.avatar_url}
                                alt={profile.full_name || "User"}
                                className="w-6 h-6 rounded-full shrink-0 object-cover"
                            />
                        ) : (
                            <div className="w-6 h-6 rounded-full bg-accent-subtle flex items-center justify-center text-[10px] font-semibold text-accent shrink-0">
                                {getInitials(
                                    profile.full_name || profile.email || "U",
                                )}
                            </div>
                        )}
                        {!collapsed && (
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5">
                                    <p className="text-xs font-medium truncate">
                                        {profile.full_name || "User"}
                                    </p>
                                    {isPro && (
                                        <span className="text-[8px] font-bold uppercase tracking-wider px-1 py-px rounded bg-accent/15 text-accent border border-accent/20 shrink-0">
                                            Pro
                                        </span>
                                    )}
                                </div>
                                <p className="text-[10px] text-muted-foreground truncate">
                                    {profile.email}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Collapse toggle */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="absolute -right-3 top-16 w-6 h-6 rounded-full border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors z-10"
            >
                {collapsed ? (
                    <ChevronRight className="w-3 h-3" />
                ) : (
                    <ChevronLeft className="w-3 h-3" />
                )}
            </button>
        </aside>
    );
}
