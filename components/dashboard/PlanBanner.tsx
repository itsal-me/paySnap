"use client";

import { useState } from "react";
import { Flame, X, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Dismissible pro-offer banner shown at the top of the dashboard for free users.
 */
export function PlanBanner() {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    return (
        <div className="mx-4 mt-3 mb-0 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-accent/10 border border-accent/25 text-sm">
            <Flame className="w-4 h-4 text-accent shrink-0" />
            <p className="flex-1 text-xs text-foreground">
                <span className="font-semibold text-accent">
                    🔥 Limited offer:
                </span>{" "}
                Pro is completely free right now — Gmail scanning, unlimited
                subs &amp; smart insights.
            </p>
            <Link
                href="/upgrade"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
            >
                Claim Pro
                <ArrowRight className="w-3 h-3" />
            </Link>
            <button
                onClick={() => setDismissed(true)}
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0 ml-1"
                aria-label="Dismiss"
            >
                <X className="w-3.5 h-3.5" />
            </button>
        </div>
    );
}
