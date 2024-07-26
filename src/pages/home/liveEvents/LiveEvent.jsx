import React from "react";

const LiveEvent = () => {
  return (
    <section className="pt-6 pb-9">
      <div className="container mx-auto px-2 mt-3 py-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold pb-4">
          The Best Of Live Events
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4">
          <div>
            <a href="/">
            <img className="max-h-52 transform hover:scale-110 transition-transform duration-300 rounded-md" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png" alt="event image" />
            </a>
          </div>
          <div>
           <a href="/"> <img className="max-h-52 hover:scale-110 transition-transform duration-300 rounded-md" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png" alt="event image" />
           </a>
          </div>
          <div>
            <a href="/"><img className="max-h-52 hover:scale-110 transition-transform duration-300 rounded-md" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png" alt="event image" />
            </a>
          </div>
          <div>
           <a href="/">
           <img className="max-h-52 hover:scale-110 transition-transform duration-300 rounded-md" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png" alt="event image" />
           </a>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default LiveEvent;
