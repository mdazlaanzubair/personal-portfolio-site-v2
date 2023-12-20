import Footer from "./components/footer/footer";
import Navbar from "./components/header/Navbar";

export default function Home() {
  return (
    <main className="block m-0 min-w-full min-h-full">
      <div className="container mx-auto px-5 lg:px-0">
        <Navbar />
        {/* MAIN VIEW PORT OF WEBSITE */}
        <div className="container mx-auto min-h-screen bg-red-300"></div>
        <Footer />
      </div>
    </main>
  );
}
