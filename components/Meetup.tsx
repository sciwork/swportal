import React from 'react';

//TODO: Extract to a reusable component => Delete this one in the future
const Meetup1225: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-5 p-1">
        <div className="col-span-5 lg:col-span-1 font-yk text-[1.1em]">18:30 - 19:30</div>
        <div className="col-span-5 lg:col-span-4 font-yk text-[1.4em] mt-0 mb-0">Free chat</div>
      </div>
      <hr className="mt-1 mb-1 text-gray-400" />
      <div className="grid grid-cols-5 p-1">
        <div className="col-span-5 lg:col-span-1"><span className="font-yk text-[1.1em]">19:30 - 21:00</span></div>
        <div className="col-span-5 lg:col-span-2">
            <div className="font-yk text-[1.4em] mt-0 mb-0">modmesh discussion and training</div>
          <div className="text-[1em]">1. Use Bezier curve to fit NACA 4-digit airfoil</div>
          <div className="text-[1em]">2. Prototype profiler object serialization using JSON</div>
          <div className="text-[1em]">3. Design reorder() in DataFrame</div>
          <div className="text-[1em]">4. Build modmesh</div>
          <div className="font-yk text-[1.1em]">5. Make a simple PR for modmesh</div>
        </div>
        <div className="col-span-5 lg:col-span-2">
          <div className="font-yk text-[1.4em] mt-0 mb-0">mini motorway simulator development</div>
          <div className="text-[1em]">1. The random generator of the building</div>
          <div className="text-[1em]">2. The algorithm of the road building</div>
          <div className="text-[1em]">3. The calculation of the traffic flow</div>
        </div>
        <div className="col-span-5 lg:col-span-1"></div>
      </div>
      <hr className="mt-1 mb-1 text-gray-400" />
      <div className="grid grid-cols-5 p-1">
        <div className="col-span-5 lg:col-span-1 font-yk text-[1.1em]">21:00 - 21:30</div>
        <div className="col-span-5 lg:col-span-4 font-yk text-[1.4em] mt-0 mb-0">Free chat</div>
      </div>
    </div>
  );
};

export default Meetup1225;
