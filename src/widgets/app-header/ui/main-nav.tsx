import Link from "next/link";

export function MainNav() {
    return (
        <nav style={{ display: "flex", gap: "10px" }}>
            <Link href="/about">about</Link>
            <Link href="/sentry-example-page">sentry</Link>
        </nav>
    );
}
