import Link from 'next/link';

type Props = {
    title: string;
}

export default function Header({
    title,
}: Props) {
    return (
        <header className="border-b border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="mx-auto flex h-14 max-w-4xl items-center px-6">
                <Link
                    href="/"
                    className="
                    text-lg
                    font-semibold
                    tracking-tight
                    transition-colors
                    hover:text-slate-500
                "
                >
                    {title}
                </Link>
            </div>
        </header>
    );
}