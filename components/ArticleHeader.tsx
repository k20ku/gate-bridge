type Props = {
    title: string;
    date: string;
}

export default function ArticleHeader({
    title,
    date,
}: Props) {
    return (
        <header className="mb-8">
            <time className="text-sm text-zinc-500">
                {date}
            </time>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
            </h1>
        </header>
    );
}