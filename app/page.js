import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";

const HomePage = () => {
  return (
    <section className="px-6 border-2 md:px-20 py-5">
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center space-y-2">
          <Header />
          <SearchBar />
        </div>
        <HeroCarousel />
      </div>
    </section>
  );
};

export default HomePage;
