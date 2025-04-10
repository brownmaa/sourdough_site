
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-white shadow-sm border-b sticky top-0 z-50">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <a href="/" className="text-lg font-bold text-amber-700">A Bread Journey</a>
            <div className="space-x-4 text-sm">
              <a href="/start-here">Start Here</a>
              <a href="/guides">Guides</a>
              <a href="/recipes">Recipes</a>
              <a href="/calculators">Calculators</a>
              <a href="/glossary">Glossary</a>
              <a href="/seasonal">Seasonal</a>
              <a href="/about">About</a>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-6 border-t">&copy; 2025 A Bread Journey</footer>
      </body>
    </html>
  );
}
