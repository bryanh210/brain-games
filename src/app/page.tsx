import Link from 'next/link';

export default function HomePage() {
  return (
      <main className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">
              Brain Training Games
          </h1>
          <div className="grid gap-4">
              <Link 
                  href="/games/dualnback" 
                  className="p-4 border rounded hover:bg-gray-50"
              >
                  Try Dual N-Back
              </Link>
          </div>
      </main>
  );
}