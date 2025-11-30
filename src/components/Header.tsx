export function Header() {
    return (
        <div>
          <header className="w-full px-6 py-6">
            <nav className="max-w-3xl mx-auto flex flex-wrap items-center justify-between">
              <a href="/" className="flex items-center -ml-6">
                <img src="/images/subu/subu-logo.png" alt="Subu Sharma" className="w-20 h-20 object-contain" />
                <span className="ml-3 text-lg font-semibold text-zinc-900">Subu Sharma</span>
              </a>


              <ul className="flex flex-wrap gap-6 mt-4 md:mt-0 md:gap-8 text-m font-medium text-zinc-700">
                <li><a href="/about" className="hover:text-zinc-900 transition-colors">About</a></li>
                <li><a href="" target="_blank" className="hover:text-zinc-900 transition-colors">Resume</a></li>
              </ul>
            </nav>
          </header>
        </div>
    )
}