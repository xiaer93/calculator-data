import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">Orange Calculator</h1>
          <p className="text-gray-600">AI-Enhanced Universal Calculator</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">254+ Free Online Calculators</h2>
          <p className="text-xl text-gray-600">
            Powered by AI for smarter, faster calculations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Financial</h3>
            <p className="text-gray-600 mb-4">Mortgage, loan, investment calculators</p>
            <Link href="/calculators" className="text-blue-600 hover:underline">
              Explore →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Health & Fitness</h3>
            <p className="text-gray-600 mb-4">BMI, calorie, body fat calculators</p>
            <Link href="/calculators" className="text-blue-600 hover:underline">
              Explore →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Math</h3>
            <p className="text-gray-600 mb-4">Percentage, fraction, scientific calculators</p>
            <Link href="/calculators" className="text-blue-600 hover:underline">
              Explore →
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Orange Calculator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
