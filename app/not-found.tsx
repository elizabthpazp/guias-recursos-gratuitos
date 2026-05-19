import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="font-mono text-6xl font-bold text-primary">404</div>
      <h1 className="mt-4 font-mono text-2xl font-bold text-foreground">
        <span className="text-terminal-green">{'>'}</span> Page not found
      </h1>
      <p className="mt-2 text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md border border-primary bg-primary/10 px-4 py-2 font-mono text-sm text-primary transition-colors hover:bg-primary/20"
      >
        Back to home
      </Link>
    </main>
  )
}
