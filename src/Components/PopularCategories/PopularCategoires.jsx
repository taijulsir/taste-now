
import './PopularCategory.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, A11y, Navigation, } from 'swiper/modules';
import SwiperNavButtons from './SwiperNavButtons/SwiperNavButtons';
const PopularCategoires = () => {
    const foods = [
        {
            "id": 25,
            "category": "pizza",
            "foodImage": "https://image.similarpng.com/very-thumbnail/2022/03/Tomato-and-lettuce-salad-in-wooden-bowl-isolated-on-transparent-background-PNG.png",
            "foodName": "Vegetable Deluxe Pizza",
            "brandName": "Garden Fresh",
            "price": "$13.99"
        },
        {
            "id": 26,
            "category": "pizza",
            "foodImage": "https://img.lovepik.com/element/45007/3626.png_860.png",
            "foodName": "Meat Lover's Pizza",
            "brandName": "Carnivore's Delight",
            "price": "$16.99"
        },
        {
            "id": 27,
            "category": "burger",
            "foodImage": "https://i.pinimg.com/originals/c5/cc/20/c5cc2005ad651b73d324513750de085e.png",
            "foodName": "Double Bacon Burger",
            "brandName": "Greasy Spoon",
            "price": "$10.99"
        },
        {
            "id": 28,
            "category": "burger",
            "foodImage": "https://www.freepnglogos.com/uploads/pizza-png/derwent-park-pizza-5.png",
            "foodName": "Cheese Stuffed Burger",
            "brandName": "Cheese Lover's Grill",
            "price": "$12.99"
        },
        {
            "id": 29,
            "category": "salad",
            "foodImage": "https://banner2.cleanpng.com/20180413/axq/kisspng-salad-zakuski-health-food-green-salad-5ad09fa36b5fd9.5099105315236217954398.jpg",
            "foodName": "Mediterranean Salad",
            "brandName": "Mediterranean Eats",
            "price": "$9.99"
        },
        {
            "id": 30,
            "category": "salad",
            "foodImage": "https://ongpng.com/wp-content/uploads/2023/10/salad.png",
            "foodName": "Waldorf Salad",
            "brandName": "Fresh n' Crunchy",
            "price": "$8.99"
        },
        {
            "id": 31,
            "category": "combo",
            "foodImage": "https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-fast-foods-item-png-image_10303953.png",
            "foodName": "Combo 7",
            "brandName": "Quick Bites",
            "price": "$19.99"
        },
        {
            "id": 32,
            "category": "combo",
            "foodImage": "https://static.vecteezy.com/system/resources/previews/027/297/753/original/buffet-table-scene-of-take-out-or-delivery-foods-fried-chicken-wings-and-french-fries-isolated-on-white-transparent-background-ai-generate-png.png",
            "foodName": "Combo 8",
            "brandName": "Snack Attack",
            "price": "$18.99"
        }
    ]
    return (
        <div className='popular-categories-container'>
            <h1 className="popular-categories-text-title">Our Popular <span className="special-text">Categories</span></h1>
            <div className='popular-categories-tab&slider-container'>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                       
                    }}
                >
                    {foods?.map(food => <SwiperSlide key={food.id}>
                        <div className='food-slider-card-container'>
                            <div>
                                <img src={food.foodImage} alt="" className='food-slider-image' />
                                <h3 className='food-slider-foodName'>{food.foodName}</h3>
                                <p className='food-slider-brandName'>{food.brandName}</p>
                                <p className='food-slider-price'>{food.price}</p>

                                <div>
                                    <button className="add-to-cart-btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)}
                    <SwiperNavButtons></SwiperNavButtons>
                </Swiper>
            </div>
        </div>
    );
};

export default PopularCategoires;