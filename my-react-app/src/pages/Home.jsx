import { useState,useEffect } from 'react'
import axios from 'axios'
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import TourCard from "../components/TourCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TourSearch from "../components/TourSearch";

function Home() {
  const [tours, setTours]=useState([]);
  useEffect(()=>{
    console.log("Chay 1 lan khi mount")
    const getTours = async () => {
      try{
    const {data} = await axios.get('http://localhost:3001/tours')
    setTours(data)
      } catch(error){
        console.log(error)
      }
   
  }
  getTours();
  },[])
  

  const handleSearch = (filters) => {
    console.log("Tìm tour với:", filters);
    // TODO: Lọc hoặc gọi API theo filters
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Header />
      <main>
        <Banner image="https://vtourist.com.vn/wp-content/uploads/2024/05/tour-noi-dia-1.jpg" />
        <Heading title="TOUR NỘI ĐỊA" />

        <div className="max-w-6xl mx-auto px-4 mb-16 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
  <aside className="md:col-span-1">
    <TourSearch onSearch={handleSearch} />
  </aside>

  <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    {tours.map((tour) => (
      <TourCard
        key={tour.id}
        name={tour.name}
        image={tour.image}
        destination={tour.destination}
        price={tour.price}
      />
    ))}
  </section>
</div>  

      </main>
      <Footer />
    </div>
  );
}

export default Home;