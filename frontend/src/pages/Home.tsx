import React, { useState } from 'react';
import Map from '../components/Map';
import MapApp from '../components/map/MapApp';
import CapSlider from '../components/CapSlider';
import TeamSlider from '../components/TeamSlider';
import Button from '../components/Button';


function Home() {
  const [capital, setCapital] = useState(50000); // State for Capital slider
  const [teamSize, setTeamSize] = useState(5); // State for Team Size slider

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      {/* Banner */}
      <div className="relative h-[480px] w-full bg-[url('/banner.svg')] bg-cover bg-center flex items-center justify-center text-white">
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="pt-10 font-semibold text-2xl">How Well Can My Restaurant Do?</h1>
          <h3 className="text-lg">Location-Based Success Estimator for Restaurants</h3>
        </div>
      </div>

      {/* Main */}

      <div className="my-8 py-8 px-[75px] text-left rounded-3xl h-[1850px] bg-beige w-[700px]">
        <h2> Tell Us About Your Potential Restaurants</h2>
        <h3> Location </h3>
        <p className="pb-1"> The intended location of your restaurant:</p>

        <div className="flex justify-center w-[548px] h-[430px]">
          <Map />
        </div>

        <div className="border-y border-camel pt-[20px] pb-[40px]">
          <h3 className="pb-0">Cuisine</h3>
          <p> The intended cuisine of your restaurant:</p>
          <input
            type="text"
            placeholder="Enter cuisine type"
            className="border border-camel rounded p-2 mt-2 w-full"
          />
        </div>

        <div className="border-b border-camel pt-[20px] pb-[40px]">
          
          <h3 className="pb-0">Capital</h3>
          <p>How much capital do you have? (CAD):</p>
          <div>
            <CapSlider onCapChange={(value) => setCapital(value)} />
          </div>

        </div>

        <div className="border-b border-camel pt-[20px] pb-[40px]">
          
          <h3 className="pb-0">Team Size</h3>
          <p>How many employees do you expect to hire?:</p>
          <div>
            < TeamSlider onTeamChange={(value) => setTeamSize(value)} />
          </div>

        </div>

        <div className="border-b border-camel pt-[20px] pb-[40px]">
          <h3 className="pb-0">Price Range</h3>
          <p>How would you categorize the price of your food?</p>
          <div>
            <div className="flex flex-col space-y-2 pt-2">
              {/* Option 1 */}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="priceRange"
                  value="one"
                />
                <span>$ - the average item is $5-15</span>
              </label>
              {/* Option 2 */}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="priceRange"
                  value="two"
                />
                <span>$$ - the average item is $16-35</span>
              </label>
              {/* Option 3 */}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="priceRange"
                  value="three"
                />
                <span>$$$ - the average item is $36-50</span>
              </label>
              {/* Option 4 */}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="priceRange"
                  value="four"
                />
                <span>$$$$ - the average item is more than $50</span>
              </label>
            </div>
          </div>
        </div>

        <div className="border-b border-camel pt-[20px] pb-[40px]">
          <h3 className="pb-0">Description </h3>
          <p> Share additional details about your restaurant (max 200 words)</p>
          <textarea
            placeholder="Enter relevant details"
            maxLength={200}
            className="border border-camel rounded p-2 mt-2 w-full h-32 resize-none"
          />
        </div>

        <div className="flex flex-row gap-8 justify-center mt-4">
          <Button type="submit"> Analyze </Button>
          <Button className="text-black" type="reset"> Clear </Button>
        </div>

      </div>

    </div>
  )
}

export default Home;
