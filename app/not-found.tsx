import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fbfaf7] text-[#1a140e] p-6 text-center">
      <h2 className="text-3xl font-serif font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-6">Could not find requested resource</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#b17a2b] text-white rounded-lg shadow hover:bg-[#9a6723] transition-colors font-medium"
      >
        Return Home
      </Link>
    </div>
  );
}
