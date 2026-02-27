import Link from "next/link";
import { Zap } from "lucide-react";

export const metadata = {
    title: "Terms of Service",
    description: "ZeroScribe Terms of Service — your rights and obligations.",
};

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {title}
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {children}
            </div>
        </section>
    );
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Header */}
            <header className="border-b border-border px-6 py-4">
                <div className="max-w-3xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                            <Zap className="w-4 h-4 text-accent-foreground fill-current" />
                        </div>
                        <span className="text-sm font-semibold">
                            ZeroScribe
                        </span>
                    </Link>
                    <Link
                        href="/"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← Back to home
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="flex-1 px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold tracking-tight mb-3">
                            Terms of Service
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Last updated: February 27, 2026
                        </p>
                    </div>

                    <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
                        Please read these Terms of Service
                        (&ldquo;Terms&rdquo;) carefully before using
                        ZeroScribe. By accessing or using ZeroScribe, you agree
                        to be bound by these Terms. If you do not agree, do not
                        use the service.
                    </p>

                    <Section title="1. Acceptance of Terms">
                        <p>
                            These Terms constitute a legally binding agreement
                            between you and ZeroScribe
                            (&ldquo;ZeroScribe&rdquo;, &ldquo;we&rdquo;,
                            &ldquo;our&rdquo;, &ldquo;us&rdquo;) governing your
                            use of our subscription tracking service, including
                            our website, web application, and related services
                            (collectively, the &ldquo;Service&rdquo;).
                        </p>
                        <p>
                            You must be at least 13 years old to use ZeroScribe.
                            By using the Service, you represent that you meet
                            this age requirement.
                        </p>
                    </Section>

                    <Section title="2. Description of Service">
                        <p>
                            ZeroScribe is a subscription management tool that
                            helps you track recurring payments and subscriptions.
                            The Service offers:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>Manual subscription entry and management</li>
                            <li>
                                Optional Gmail scanning to auto-detect
                                subscription billing emails (requires explicit
                                Gmail authorization)
                            </li>
                            <li>
                                Spending analytics and renewal reminders (Pro
                                plan)
                            </li>
                            <li>Category management and spending insights</li>
                        </ul>
                    </Section>

                    <Section title="3. User Accounts">
                        <p>
                            You must sign in using a Google account to use
                            ZeroScribe. You are responsible for maintaining the
                            security of your Google account and for all
                            activities that occur under your ZeroScribe account.
                            You agree to:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>
                                Provide accurate information when using the
                                Service
                            </li>
                            <li>
                                Notify us immediately of any unauthorized use of
                                your account
                            </li>
                            <li>
                                Not share your account credentials with others
                            </li>
                            <li>
                                Not use the Service for any unlawful purpose
                            </li>
                        </ul>
                    </Section>

                    <Section title="4. Plans and Pricing">
                        <p>
                            ZeroScribe offers a Free plan and a Pro plan. During
                            our launch/early access period, the Pro plan is
                            available at no cost. This is a promotional offer
                            and pricing may be introduced in the future with
                            advance notice.
                        </p>
                        <p>
                            <strong className="text-foreground">
                                Free plan:
                            </strong>{" "}
                            Limited to 5 subscriptions, manual entry only, basic
                            overview.
                        </p>
                        <p>
                            <strong className="text-foreground">
                                Pro plan:
                            </strong>{" "}
                            Unlimited subscriptions, Gmail auto-detection,
                            advanced analytics, and smart insights. Currently
                            offered free during early access. We will provide at
                            least 30 days notice before any paid billing begins.
                        </p>
                        <p>
                            We reserve the right to modify plan features or
                            introduce pricing at any time, subject to the notice
                            obligations above.
                        </p>
                    </Section>

                    <Section title="5. Gmail and Google Data Access">
                        <p>
                            Gmail scanning is entirely optional. If you choose
                            to connect Gmail, you authorize ZeroScribe to access
                            your Gmail inbox in read-only mode for the sole
                            purpose of identifying subscription billing emails.
                        </p>
                        <p>You understand and agree that:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>
                                We only scan emails matching billing and
                                subscription patterns
                            </li>
                            <li>
                                We do not store the full content of your emails
                            </li>
                            <li>
                                We do not share your Gmail data with third
                                parties for any purpose other than providing the
                                Service
                            </li>
                            <li>
                                You can revoke Gmail access at any time from
                                Settings or from{" "}
                                <a
                                    href="https://myaccount.google.com/permissions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent underline underline-offset-2"
                                >
                                    Google Account Permissions
                                </a>
                            </li>
                            <li>
                                Our use of Google user data complies with the{" "}
                                <a
                                    href="https://developers.google.com/terms/api-services-user-data-policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent underline underline-offset-2"
                                >
                                    Google API Services User Data Policy
                                </a>
                            </li>
                        </ul>
                    </Section>

                    <Section title="6. Acceptable Use">
                        <p>You agree not to:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>
                                Use the Service for any illegal or unauthorized
                                purpose
                            </li>
                            <li>
                                Attempt to reverse-engineer, hack, or disrupt
                                the Service
                            </li>
                            <li>
                                Upload or transmit malicious code or content
                            </li>
                            <li>
                                Circumvent any access restrictions or security
                                measures
                            </li>
                            <li>
                                Use the Service in any way that could damage,
                                disable, or impair ZeroScribe infrastructure
                            </li>
                            <li>
                                Create multiple accounts to abuse free-tier
                                limits
                            </li>
                        </ul>
                        <p>
                            We reserve the right to suspend or terminate
                            accounts that violate these terms without prior
                            notice.
                        </p>
                    </Section>

                    <Section title="7. Intellectual Property">
                        <p>
                            ZeroScribe and its original content, features, and
                            functionality are owned by ZeroScribe and are
                            protected by applicable intellectual property laws.
                            The Service&apos;s name, logo, and brand identity
                            may not be used without express written permission.
                        </p>
                        <p>
                            You retain ownership of any subscription data you
                            enter into the Service. By using the Service, you
                            grant us a limited, non-exclusive license to store
                            and process your data solely to provide the Service
                            to you.
                        </p>
                    </Section>

                    <Section title="8. Privacy">
                        <p>
                            Your use of the Service is governed by our{" "}
                            <Link
                                href="/privacy"
                                className="text-accent underline underline-offset-2"
                            >
                                Privacy Policy
                            </Link>
                            , which is incorporated into these Terms by
                            reference. Please review it to understand our data
                            practices.
                        </p>
                    </Section>

                    <Section title="9. Disclaimers">
                        <p>
                            <strong className="text-foreground">
                                No financial advice:
                            </strong>{" "}
                            ZeroScribe is a tracking tool only. Nothing in the
                            Service constitutes financial, legal, or accounting
                            advice. The spending data shown is based on
                            information you provide or that is auto-detected, and
                            may not be accurate or complete.
                        </p>
                        <p>
                            <strong className="text-foreground">
                                Auto-detection accuracy:
                            </strong>{" "}
                            Gmail-based subscription detection is automated and
                            may produce false positives or miss subscriptions.
                            Always verify your subscription data.
                        </p>
                        <p>
                            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT
                            WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
                            INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                            OR NON-INFRINGEMENT.
                        </p>
                    </Section>

                    <Section title="10. Limitation of Liability">
                        <p>
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZEROSCRIBE
                            SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING
                            FROM YOUR USE OF OR INABILITY TO USE THE SERVICE,
                            EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
                            SUCH DAMAGES.
                        </p>
                        <p>
                            OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING
                            FROM THESE TERMS OR YOUR USE OF THE SERVICE SHALL
                            NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12
                            MONTHS PRECEDING THE CLAIM (OR $0 IF YOU ARE ON THE
                            FREE PLAN).
                        </p>
                    </Section>

                    <Section title="11. Termination">
                        <p>
                            You may stop using ZeroScribe and delete your
                            account at any time by contacting us at{" "}
                            <a
                                href="mailto:support@zeroscribe.app"
                                className="text-accent underline underline-offset-2"
                            >
                                support@zeroscribe.app
                            </a>
                            . Upon deletion, all your data will be permanently
                            removed within 30 days.
                        </p>
                        <p>
                            We may terminate or suspend your account if you
                            violate these Terms, with or without prior notice
                            depending on the severity of the violation.
                        </p>
                    </Section>

                    <Section title="12. Changes to Terms">
                        <p>
                            We may update these Terms from time to time. We will
                            notify you of material changes by posting a notice in
                            the app or emailing you. Continued use of the Service
                            after changes take effect constitutes acceptance of
                            the revised Terms.
                        </p>
                    </Section>

                    <Section title="13. Governing Law">
                        <p>
                            These Terms are governed by and construed in
                            accordance with applicable laws. Any dispute arising
                            from these Terms or the Service shall first be
                            attempted to be resolved through good-faith
                            negotiation.
                        </p>
                    </Section>

                    <Section title="14. Contact Us">
                        <p>
                            For questions about these Terms, contact us at:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:legal@zeroscribe.app"
                                    className="text-accent underline underline-offset-2"
                                >
                                    legal@zeroscribe.app
                                </a>
                            </li>
                            <li>Website: zeroscribe.app</li>
                        </ul>
                    </Section>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-border px-6 py-6">
                <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} ZeroScribe. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <Link
                            href="/privacy"
                            className="hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="underline underline-offset-2 hover:text-foreground transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
