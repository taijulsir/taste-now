import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import GetToKnowUs from "./Components/GetToKnowUs/GetToKnowUs";
import Navbar from "./Components/Navbar/Navbar";
import PopularCategoires from "./Components/PopularCategories/PopularCategoires";


const App = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Banner></Banner>
     <PopularCategoires></PopularCategoires>
     <GetToKnowUs></GetToKnowUs>
     <Footer></Footer>
    </div>
  );
};

export default App;