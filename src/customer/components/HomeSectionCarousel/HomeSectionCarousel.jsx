import React, { useState, useRef } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = ({data, sectionName}) => {

    const [activeIndex, setActiveIndex] = useState(0);

     // Create a ref to access AliceCarousel methods
     const carouselRef = useRef(null);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    // Slide functions
    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev(); // Use AliceCarousel's internal method to move to the previous slide
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext(); // Use AliceCarousel's internal method to move to the next slide
        }
    };

    const syncActiveIndex=({ item })=>setActiveIndex(item)

    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);

    return (
        <div className=" border">
          <h2 className="text-2xl font-extended text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                { activeIndex !== items.length-5 &&
                <Button 
                    variant="contained" className="z-50  bg-white" onClick={slideNext} sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white' }} aria-label='next' >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
                }

                {activeIndex !== 0 && <Button
                    variant="contained" className="z-50 bg-white" onClick={slidePrev} sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translateX(50%) rotate(-90deg)", bgcolor: "white" }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
                }
            </div>
        </div>
    )
}

export default HomeSectionCarousel