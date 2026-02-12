import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header variant="dark" />
      <main className="bg-ink min-h-[70vh] flex items-center justify-center">
        <div className="text-center container-site">
          <span className="font-mono text-[0.65rem] text-amber tracking-widest uppercase block mb-4">
            404
          </span>
          <h1
            className="font-display font-bold uppercase tracking-tighter leading-none text-cream mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Page not found
          </h1>
          <p className="font-display text-steel text-base leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="font-display font-bold text-sm text-amber uppercase tracking-wide hover:text-cream transition-colors inline-flex items-center gap-2"
          >
            Go Home &rarr;
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
