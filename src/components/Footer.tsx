export function Footer() {
    return (
        <footer className="mt-20">
            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-200"/>

            <div className="pt-8 pb-12 text-center text-sm text-zinc-600 dark:text-zinc-400">
                <div className="space-y-2">

                <div className="flex justify-center gap-6 mt-2">
                    <a
                    href=""
                    target="_blank"
                    className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                    >
                    LinkedIn
                    </a>
                    <a
                    href=""
                    target="_blank"
                    className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                    >
                    GitHub
                    </a>
                </div>
                </div>

                <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-600">
                © {new Date().getFullYear()} Subu Sharma. All rights reserved.
                </p>
            </div>
        </footer>
    )
}