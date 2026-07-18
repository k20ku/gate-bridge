import ArticleHeader from "@/components/ArticleHeader";
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <article className="space-y-16">
      <ArticleHeader title="Tokyo Gate Bridge" date="202X.XX.XX" />
      <section>
        <h2 className="text-2xl font-semibold mb-2">Photo</h2>
        <p className="mb-4">
          Walking around <Link href="https://en.wikipedia.org/wiki/Wakasu" className="hover:text-slate-500">Wakasu Island</Link>. Tokyo Bay was hot.

        </p>
        <Image
          src="/gate-bridge.jpg" alt="gate bridge"
          width={800}
          height={600}
          className="
          rounded-lg
          transition-opacity
          hover:opacity-90
          "
        />
      </section>
    </article>
  );
}
