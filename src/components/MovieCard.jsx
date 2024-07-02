import React from 'react'

const MovieCard = ({name, rating, description, imageUrl}) => {
    return (
        
                <div className="flex cursor-pointer flex-col gap-3 items-center justify-start w-[21rem] h-[600px] shadow-md m-3 py-4 px-3 rounded-lg bg-[#9badff] bg-opacity-5 hover:bg-opacity-10">
                    <img className='h-[350px] w-[300px] object-cover rounded-md' src={imageUrl} alt={name} />
                    <div className='text-white flex flex-col gap-1'>    
                        <h4 className='text-2xl font-bold'>{name}</h4>
                        <h5 className='text-base flex items-center gap-2'>Rating: <span className='text-xl font-bold'>{rating}</span></h5>
                        <p className='text-white text-base'>{description}</p>
                    </div>
                </div>
            
    )
}

export default MovieCard