import Navbar from "./assets/components/layout/Navbar";
import Footer from "./assets/components/layout/Footer";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
}

export default App;