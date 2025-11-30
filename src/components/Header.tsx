export function Header() {
    return (
        <header className="w-full px-6 py-6">
        <nav className="max-w-3xl mx-auto flex items-center justify-between">

          <a href="/" className="text-lg font-semibold text-zinc-900">
            Subu Sharma
          </a>
          <div className="flex items-center gap-8 text-sm font-medium text-zinc-700">
            <a href="/about" className="hover:text-zinc-900 transition-colors">
              About
            </a>
            <a
              href=""
              target="_blank"
              className="hover:text-zinc-900 transition-colors"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>
    )
}