"use client";

import { Lock, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface UpgradeGateProps {
    /** Feature name shown in the lock message */
    feature: string;
    /** Short one-line description of what the feature does */
    description?: string;
    /** Show blurred children behind the gate instead of a big empty card */
    children?: React.ReactNode;
    className?: string;
}

/**
 * Wraps a Pro-only feature.
 * - With children: blurs them behind a floating lock overlay
 * - Without children: renders a full placeholder card
 */
export function UpgradeGate({
    feature,
    description,
    children,
    className,
}: UpgradeGateProps) {
    if (children) {
        return (
            <div className={cn("relative select-none", className)}>
                {/* Blurred content preview */}
                <div className="pointer-events-none blur-[3px] opacity-50">
                    {children}
                </div>
                {/* Floating lock overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-surface-elevated border border-accent/30 rounded-2xl px-6 py-5 flex flex-col items-center gap-3 shadow-xl text-center max-w-xs mx-auto">
                        <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                            <Lock className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-foreground mb-0.5">
                                {feature} is a Pro feature
                            </p>
                            {description && (
                                <p className="text-xs text-muted-foreground">
                                    {description}
                                </p>
                            )}
                        </div>
                        <UpgradeCTA />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className={cn(
                "rounded-2xl border border-dashed border-accent/30 bg-accent/5 flex flex-col items-center justify-center gap-4 p-10 text-center",
                className,
            )}
        >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-accent" />
            </div>
            <div>
                <p className="font-semibold text-foreground mb-1">
                    {feature} is a Pro feature
                </p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    {description ??
                        "Upgrade to Pro for free during our launch period."}
                </p>
            </div>
            <UpgradeCTA />
        </div>
    );
}

function UpgradeCTA() {
    return (
        <Link
            href="/upgrade"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-xs font-semibold hover:opacity-90 transition-opacity shadow-md shadow-accent/20"
        >
            <Sparkles className="w-3.5 h-3.5" />
            Upgrade to Pro — Free
            <ArrowRight className="w-3.5 h-3.5" />
        </Link>
    );
}
