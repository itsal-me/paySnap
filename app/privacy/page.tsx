import Link from "next/link";
import { Zap } from "lucide-react";

export const metadata = {
    title: "Privacy Policy",
    description:
        "ZeroScribe Privacy Policy — how we collect, use, and protect your data.",
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

export default function PrivacyPage() {
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
                            Privacy Policy
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Last updated: February 27, 2026
                        </p>
                    </div>

                    <div className="bg-surface border border-accent/30 rounded-xl px-6 py-4 mb-10">
                        <p className="text-sm font-medium text-accent mb-1">
                            Google API Services — Limited Use Disclosure
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            ZeroScribe&apos;s use of information received from
                            Google APIs adheres to the{" "}
                            <a
                                href="https://developers.google.com/terms/api-services-user-data-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent underline underline-offset-2"
                            >
                                Google API Services User Data Policy
                            </a>
                            , including the Limited Use requirements.
                        </p>
                    </div>

                    <Section title="1. Who We Are">
                        <p>
                            ZeroScribe (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
                            &ldquo;us&rdquo;) is a subscription tracking
                            service. Our registered address and contact
                            information: &nbsp;
                            <a
                                href="mailto:privacy@zeroscribe.app"
                                className="text-accent underline underline-offset-2"
                            >
                                privacy@zeroscribe.app
                            </a>
                            .
                        </p>
                    </Section>

                    <Section title="2. Information We Collect">
                        <p>
                            <strong className="text-foreground">
                                Account information:
                            </strong>{" "}
                            When you sign in with Google OAuth, we receive your
                            name, email address, and profile picture from your
                            Google account. We do not receive or store your
                            Google account password.
                        </p>
                        <p>
                            <strong className="text-foreground">
                                Gmail data (only if you connect Gmail):
                            </strong>{" "}
                            If you choose to connect your Gmail account, we
                            request read-only access to scan your emails for
                            subscription-related billing receipts and renewal
                            notices. We only read email metadata and body
                            content necessary to identify recurring charges. We
                            do not read, store, or process personal
                            communications, attachments, or any emails unrelated
                            to subscription billing.
                        </p>
                        <p>
                            <strong className="text-foreground">
                                Subscription data:
                            </strong>{" "}
                            Subscription names, amounts, billing dates, and
                            categories you add manually or that are
                            auto-detected through Gmail scanning.
                        </p>
                        <p>
                            <strong className="text-foreground">
                                Usage data:
                            </strong>{" "}
                            Basic analytics such as pages visited and features
                            used, to improve the service. No third-party
                            advertising trackers are used.
                        </p>
                    </Section>

                    <Section title="3. How We Use Your Information">
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>
                                Provide, operate, and improve the ZeroScribe
                                service
                            </li>
                            <li>
                                Automatically detect subscriptions from Gmail
                                billing emails (only when you grant Gmail
                                access)
                            </li>
                            <li>
                                Send renewal reminders and spending alerts you
                                configure
                            </li>
                            <li>
                                Authenticate you securely through Google OAuth
                            </li>
                            <li>Respond to support requests</li>
                            <li>Ensure compliance with our Terms of Service</li>
                        </ul>
                        <p className="mt-3 font-medium text-foreground">
                            We do not use your Gmail data for advertising,
                            profiling, or any purpose other than providing the
                            subscription-detection feature you explicitly
                            requested.
                        </p>
                    </Section>

                    <Section title="4. Google User Data — Limited Use Policy">
                        <p>
                            Our use and transfer of information received from
                            Google APIs to any other app will adhere to the
                            Google API Services User Data Policy, including the
                            Limited Use requirements. Specifically:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>
                                We only use Gmail data to provide the
                                subscription-detection feature within ZeroScribe
                            </li>
                            <li>
                                We do not transfer your Gmail data to third
                                parties except as necessary to provide our
                                service, and never for advertising purposes
                            </li>
                            <li>
                                We do not allow humans to read your Gmail
                                content unless you have given us explicit
                                permission, it is necessary for security
                                purposes, or required by law
                            </li>
                            <li>
                                We do not use your Gmail data to build or train
                                AI/ML models
                            </li>
                            <li>
                                Gmail access is optional — you can use
                                ZeroScribe without it using manual entry
                            </li>
                        </ul>
                    </Section>

                    <Section title="5. Data Storage and Security">
                        <p>
                            Your data is stored securely using Supabase
                            (PostgreSQL) with row-level security ensuring you
                            can only access your own data. All data is
                            transmitted over HTTPS/TLS. Gmail OAuth tokens are
                            stored encrypted and used solely to perform Gmail
                            scans on your behalf.
                        </p>
                        <p>
                            We retain your account data for as long as your
                            account is active. If you delete your account, all
                            personal data including subscription records and
                            Gmail tokens are permanently deleted within 30 days.
                        </p>
                    </Section>

                    <Section title="6. Data Sharing and Third Parties">
                        <p>
                            <strong className="text-foreground">
                                We do not sell your personal data
                            </strong>{" "}
                            to any third party, ever.
                        </p>
                        <p>We use the following third-party services:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>
                                <strong className="text-foreground">
                                    Supabase
                                </strong>{" "}
                                — database and authentication infrastructure
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Google OAuth / Gmail API
                                </strong>{" "}
                                — sign-in and optional email scanning
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Vercel
                                </strong>{" "}
                                — application hosting
                            </li>
                        </ul>
                        <p>
                            These providers are bound by their own privacy
                            policies and data processing agreements. We do not
                            share your personal information with any other third
                            parties.
                        </p>
                    </Section>

                    <Section title="7. Your Rights">
                        <p>You have the right to:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>
                                <strong className="text-foreground">
                                    Access
                                </strong>{" "}
                                your personal data stored by ZeroScribe
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Correct
                                </strong>{" "}
                                inaccurate data in your account settings
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Delete
                                </strong>{" "}
                                your account and all associated data by
                                contacting us
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Revoke Gmail access
                                </strong>{" "}
                                at any time through Settings → Disconnect Gmail,
                                or directly via{" "}
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
                                <strong className="text-foreground">
                                    Export
                                </strong>{" "}
                                your subscription data (Pro feature)
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Object
                                </strong>{" "}
                                to processing of your data in certain
                                circumstances
                            </li>
                        </ul>
                        <p>
                            To exercise any of these rights, contact us at{" "}
                            <a
                                href="mailto:privacy@zeroscribe.app"
                                className="text-accent underline underline-offset-2"
                            >
                                privacy@zeroscribe.app
                            </a>
                            .
                        </p>
                    </Section>

                    <Section title="8. Cookies">
                        <p>
                            We use only functional cookies necessary for
                            authentication (session tokens) and user preferences
                            (theme). We do not use advertising, tracking, or
                            analytics cookies from third parties.
                        </p>
                    </Section>

                    <Section title="9. Children's Privacy">
                        <p>
                            ZeroScribe is not directed at children under 13
                            years of age. We do not knowingly collect personal
                            information from children under 13. If you believe a
                            child has provided us with personal information,
                            contact us immediately at{" "}
                            <a
                                href="mailto:privacy@zeroscribe.app"
                                className="text-accent underline underline-offset-2"
                            >
                                privacy@zeroscribe.app
                            </a>
                            .
                        </p>
                    </Section>

                    <Section title="10. Changes to This Policy">
                        <p>
                            We may update this Privacy Policy from time to time.
                            We will notify you of significant changes by posting
                            a notice in the app or by email. Continued use of
                            ZeroScribe after changes constitutes acceptance of
                            the updated policy. The &ldquo;Last updated&rdquo;
                            date at the top of this page reflects the most
                            recent revision.
                        </p>
                    </Section>

                    <Section title="11. Contact Us">
                        <p>
                            If you have questions or concerns about this Privacy
                            Policy or our data practices, please contact us:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:privacy@zeroscribe.app"
                                    className="text-accent underline underline-offset-2"
                                >
                                    privacy@zeroscribe.app
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
                            className="underline underline-offset-2 hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-foreground transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
