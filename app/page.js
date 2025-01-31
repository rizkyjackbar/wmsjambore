export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      {/* Judul */}
      <h1 className="text-4xl font-bold text-center mb-4">WMS Jambore 2025</h1>

      {/* Deskripsi Singkat */}
      <p className="text-lg text-center max-w-2xl mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Footer */}
      <footer className="text-sm text-center text-gray-500">
        Made by rizkyjackbar
      </footer>
    </div>
  );
}