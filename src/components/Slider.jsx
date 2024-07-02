import React, {useEffect, useState} from 'react';
import data from '../Movieinfo.json';

const Slider = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const slides = document.querySelectorAll(".slide");
        slides.forEach((slide, i) => {
            slide.style.left = `${i * 100}%`;
        });
        const slideImage = () => {
            const slides = document.querySelectorAll(".slide");
            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${counter * 100}%)`;
            });
        };
    
        slideImage();
    }, [counter]);

    

    const goNext = () => {
        setCounter((prevCounter) => (prevCounter + 1) % data.length);
    };

    const goPrev = () => {
        setCounter((prevCounter) => (prevCounter - 1 + data.length) % data.length);
    };

    useEffect(() => {
        const slideImage = () => {
            const slides = document.querySelectorAll(".slide");
            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${counter * 100}%)`;
            });
        };
        slideImage();
    }, [counter]);

    return (
        <section className="slider-section">
            <div className="button-container">
                <button onClick={goPrev}>Prev</button>
                <button onClick={goNext}>Next</button>
            </div>
            <div className="slider-container">
                {data.map((movie, i) => (
                    <div className="slide" key={i}>
                        <img src={movie.image_url} alt={movie.name} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Slider