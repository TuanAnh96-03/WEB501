import Banner from "../components/Banner";
import Heading from "../components/Heading";
import TourCard from "../components/TourCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TourSearch from "../components/TourSearch";

function Home() {
  const tours = [
    {
      id: 1,
      title: "Tour Đà Nẵng 3N2Đ",
      location: "Đà Nẵng",
      price: "2,500,000",
      image: "https://vtourist.com.vn/wp-content/uploads/2024/05/Ba-Na-Hill.jpg"
    },
    {
      id: 2,
      title: "Tour Nha Trang 4N3Đ",
      location: "THIÊN ĐƯỜNG DU LỊCH BIỂN",
      price: "3,200,000",
      image: "https://vtourist.com.vn/wp-content/uploads/2024/05/Nha-Trang-1-1536x1058.jpg"
    },
    {
      id: 3,
      title: "Tour Đà Lạt 3N3Đ",
      location: "KHÁM PHÁ THÀNH PHỐ NGÀN HOA",
      price: "2,290,000",
      image: "https://vtourist.com.vn/wp-content/uploads/2024/05/Da-Lat-1536x1025.jpg"
    }
  ];

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
        title={tour.title}
        image={tour.image}
        location={tour.location}
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