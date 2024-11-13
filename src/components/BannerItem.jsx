// @flow
import {useState, useEffect} from 'react';
import {Rating, RatingStar} from "flowbite-react";

export function BannerItem({overview, vote_average, poster_path, original_title}) {
    return (
        <div className="flex h-full items-center bg-stone-200">
            <div className="flex-1 w-full h-full">
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <div className='h-2/3 text-center'>
                        <span className='uppercase underline decoration-pink-500 font-bold'>overview</span>
                        <p className='w-[390px] line-clamp-4 text-wrap mx-auto text-amber-700'>{overview}</p>
                        <Rating className='flex items-center justify-center mt-4'>
                            <RatingStar/>
                            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{vote_average}</p>
                        </Rating>
                    </div>
                    <div className='flex gap-2'>
                        <button type="button"
                                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Xem
                            Phim
                        </button>
                        <button type="button"
                                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Chi
                            Tiet
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex-1 w-full h-full'>
                <img className='w-full h-full object-contain'
                     src={`${import.meta.env.VITE_IMG_URL}/${poster_path}`}
                     alt={original_title}/>
            </div>
        </div>
    );
};