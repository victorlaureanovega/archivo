import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 p-10">
      <h1 className="text-4xl font-semibold">
        404
      </h1>

      <p className="text-center max-w-md text-gray-300">
        Página no encontrada
      </p>

      <Link href="/" className="border border-white px-6 py-3 mt-10 text-sm rounded-full hover:bg-white hover:text-black transition">
        Volver a inicio
      </Link>
    </main>
  );
}
