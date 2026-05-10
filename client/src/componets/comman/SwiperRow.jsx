import React from 'react'
import Cards from './Cards';

const SwiperRow = ({ title, data , onTrackClick}) => {
    console.log(data , "data in swiper row");
  return (
    <div className="space-y-3">

      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide">
        {data.map((item, index) => (
          <Cards key={index} title={item.title} desc={item.desc} onTrackClick={data?.id} />
        ))}
      </div>
    </div>
  );
};

export default SwiperRow