"use client";

import { Check, Zap, Flame, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Good starting point for getting a feel of the app.",
        features: [
            "Up to 5 subscriptions",
            "Manual entry",
            "Renewal reminders",
            "Basic spending overview",
            "Dark & light mode",
        ],
        excluded: [
            "Gmail auto-detection",
            "Unlimited subscriptions",
            "Advanced analytics",
            "Smart insights",
        ],
        cta: "Start for free",
        ctaHref: "/login",
        highlighted: false,
        badge: null,
    },
    {
        name: "Pro",
        price: "$4",
        period: "per month",
        description: "Full automation and deep insights. Yours free right now.",
        features: [
            "Unlimited subscriptions",
            "Gmail auto-detection",
            "Advanced analytics",
            "Smart spending insights",
            "Custom categories",
            "Early renewal alerts",
            "Export to CSV",
            "Priority support",
        ],
        excluded: [],
        cta: "Claim Free Pro Access →",
        ctaHref: "/login?plan=pro",
        highlighted: true,
        badge: "🔥 Free during launch",
    },
];

export function Pricing() {
    return (
        <section
            id="pricing"
            className="py-16 sm:py-28 px-4 border-t border-border"
        >
            <div className="max-w-4xl mx-auto">
                {/* Launch offer urgent banner */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-10 sm:mb-12 mx-auto max-w-2xl"
                >
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-accent/10 border border-accent/30 text-center justify-center flex-wrap">
                        <Flame className="w-4 h-4 text-accent shrink-0" />
                        <p className="text-sm font-semibold text-accent">
                            Limited launch offer — Pro is{" "}
                            <span className="underline underline-offset-2">
                                completely free
                            </span>{" "}
                            for early users. No credit card. No catch.
                        </p>
                        <span className="text-xs text-muted-foreground">
                            Offer ends when we say so.
                        </span>
                    </div>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                        Pricing
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Simple, honest pricing
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                        Start free or jump straight to Pro —{" "}
                        <strong className="text-foreground">
                            free for early users
                        </strong>
                        . No billing info needed.
                    </p>
                </motion.div>

                {/* Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={cn(
                                "relative rounded-2xl border p-7 flex flex-col",
                                plan.highlighted
                                    ? "border-accent/50 bg-surface-elevated glow"
                                    : "border-border bg-surface",
                            )}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold whitespace-nowrap">
                                        <Zap className="w-3 h-3 fill-current" />
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                    {plan.name}
                                </p>
                                <div className="flex items-end gap-1.5 mb-2">
                                    {plan.highlighted ? (
                                        <>
                                            <span className="text-4xl font-extrabold tracking-tight text-success">
                                                $0
                                            </span>
                                            <span className="text-sm text-muted-foreground line-through pb-1.5">
                                                {plan.price}/mo
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-4xl font-extrabold tracking-tight">
                                                {plan.price}
                                            </span>
                                            <span className="text-sm text-muted-foreground pb-1.5">
                                                {plan.period}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-2.5 mb-8 flex-1">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2.5"
                                    >
                                        <Check className="w-3.5 h-3.5 text-success mt-0.5 shrink-0" />
                                        <span className="text-xs text-foreground">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                                {plan.excluded.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2.5 opacity-35"
                                    >
                                        <Lock className="w-3 h-3 text-muted-foreground mt-0.5 shrink-0" />
                                        <span className="text-xs text-muted-foreground">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.ctaHref}
                                className={cn(
                                    "w-full py-2.5 text-sm font-semibold rounded-xl text-center transition-all duration-150",
                                    plan.highlighted
                                        ? "bg-accent text-accent-foreground hover:opacity-90 shadow-lg shadow-accent/25"
                                        : "bg-muted text-foreground hover:bg-muted/80 border border-border",
                                )}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Footnote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-xs text-muted-foreground mt-8"
                >
                    No credit card required. Pro is free for early access users
                    — pricing may apply in the future.
                </motion.p>
            </div>
        </section>
    );
}
