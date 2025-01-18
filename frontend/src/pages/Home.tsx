import React from 'react';
import Map from '../components/Map';
import MapApp from '../components/map/MapApp';

function Home() {
  return (
    <div>

      {/* Banner  */}
      <div className="h-[210px] w-full bg-green">
        <h1>How Well Can My Restaurant Do?</h1>
        <h3>Location-Based Success Estimator for Restaurants</h3>
      </div>

      {/* Main */}

      <div className="rounded-3xl h-[1000px] bg-shadow mt-10 mx-60">
        <h2> Tell Us About Your Potential Restaurants</h2>

        <h3> Location </h3>
        <p> The intended location of your restaurant:</p>

        <div className="flex justify-center">
          <Map />
        </div>



      </div>

    </div>
  )
}

export default Home;
