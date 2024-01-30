/* eslint-disable react/prop-types */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, A11y, Navigation, } from 'swiper/modules';
import "../../PopularCategories/PopularCategory.css"
import SwiperNavButtons from '../SwiperNavButtons/SwiperNavButtons';
const SwiperSlider = ({foods}) => {
    return (
        <div>
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
                    // responsive issue
                    breakpoints={{
                        // when window width is <= 425px
                        425: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // when window width is <= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        // when window width is <= 1024px
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
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

export default SwiperSlider;