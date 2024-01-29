import Banner from "../../Components/Banner/Banner";
import GetToKnowUs from "../../Components/GetToKnowUs/GetToKnowUs";
import PopularCategoires from "../../Components/PopularCategories/PopularCategoires";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCategoires></PopularCategoires>
            <GetToKnowUs></GetToKnowUs>
        </div>
    );
};

export default Home;