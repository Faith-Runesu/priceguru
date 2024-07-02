
"use client"
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCards from "@/components/ProductCards";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSearch = (data) => {
    setProducts(data);
  }
  
  return (
    <section className="px-6 border-2 md:px-20 py-5">
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center space-y-2">
          <Header />
          <SearchBar onSearch={handleSearch}/>
        </div>
        <HeroCarousel />
      </div>
      <ProductCards products={products} onButtonClick={toggleModal} />
    </section>
  );
};

export default HomePage;
