export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <h1 className="text-2xl font-bold text-blue-500">
        VR AI Coach
      </h1>

      <div className="hidden md:flex gap-8 text-slate-300">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#" className="hover:text-white">Features</a>
        <a href="#" className="hover:text-white">About</a>
      </div>

      <button className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
        Login
      </button>
    </nav>
  );
}