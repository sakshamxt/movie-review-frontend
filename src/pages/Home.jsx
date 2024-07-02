import React from 'react'
import MovieCard from '../components/MovieCard'
import data from '../Movieinfo.json';

const Home = () => {
    return (
        <>

            {/* <Slider /> */}
            <section className="px-8 bg-[#040F3A] py-10">
                <h1 className='text-4xl font-bold text-white ml-5 mb-3'>All movies</h1>
                <div className='flex flex-wrap items-center justify-start'>
                    {data.map((movie, i) => (
                        <MovieCard name={data[i].name} description={data[i].description} rating={data[i].rating} imageUrl={data[i].image_url} key={i} />
                    ))}
                </div>
            </section>

        </>
    )
}

export default Home