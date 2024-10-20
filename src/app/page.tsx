import Cta from "./components/cta";
import Featured from "./components/featured";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Trending from "./components/trending";
export default function Home() {
  return (
    <main>
    <Navbar/>
    <Hero/>
    <Featured/>
    <Trending/>
    <Cta/>
    </main>
  );
}
