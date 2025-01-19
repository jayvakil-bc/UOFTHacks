import React, { useState } from 'react';
import Map from '../components/Map';
import CapSlider from '../components/CapSlider';
import TeamSlider from '../components/TeamSlider';
import Button from '../components/Button';


function Home() {
  const [capital, setCapital] = useState(50000);
  const [teamSize, setTeamSize] = useState(5);
  const [selectedType, setSelectedType] = useState("");
  const [customType, setCustomType] = useState("");
  const [markerPosition, setMarkerPosition] = useState({
    lat: 43.660663701375796,
    lng: -79.39655519409172,
  });
  const [priceRange, setPriceRange] = useState("");
  const [description, setDescription] = useState("");


  // const handleSubmit = async (event: { preventDefault: () => void; }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      capital,
      teamSize,
      type: selectedType === "Other" ? customType : selectedType,
      location: markerPosition, // Include latitude and longitude
      priceRange,
      description,
    };

    console.log("Form submission data:", data);

    // try {
    //   const response = await fetch("http://your-backend-route/api/analyze", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to submit data");
    //   }

    //   const result = await response.json();
    //   console.log("Analysis result:", result);
    // } catch (error) {
    //   console.error("Error submitting data:", error);
    // }
  };

  const restaurantTypes = [
    "Fine Dining",
    "Casual Dining",
    "Fast Casual",
    "Fast Food",
    "Café",
    "Food Truck",
    "Italian Restaurant",
    "Chinese Restaurant",
    "Japanese Restaurant",
    "Mexican Restaurant",
    "Indian Restaurant",
    "Thai Restaurant",
    "Mediterranean Restaurant",
    "American Diner",
    "Pizzeria",
    "Other",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      {/* Banner */}
      <div className="relative h-[480px] w-full bg-[url('/banner.svg')] bg-cover bg-center flex items-center justify-center text-white">
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="font-semibold">Will My Restaurant Be Successful?</h1>
          <h3 className="">Data-driven success engine for your restaurant</h3>
        </div>
      </div>

      {/* Main */}

      <form
        onSubmit={handleSubmit}
        className="my-8 py-8 px-[75px] text-left rounded-3xl h-[1850px] bg-shadow w-[700px]"
      >
        <h2 className="pb-1"> Tell Us About Your Potential Restaurant</h2>
        <h3> Location </h3>
        <p className="pb-1"> The intended location of your restaurant:</p>

        <div className="flex justify-center w-[548px] h-[430px]">
          <Map onMarkerPositionChange={setMarkerPosition} />
        </div>

        <div className="border-y border-deepgreen pt-[20px] pb-[40px]">
          <h3 className="pb-0">Restaurant Type</h3>
          <p>What style of restaurant would you like to open?</p>
          {/* Dropdown and Text Input Container */}
          <div className="flex items-center gap-4 mt-2">
            {/* Dropdown Menu */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border border-deepgreen rounded p-2 w-1/2"
            >
              <option value="" disabled>
                Select a restaurant type
              </option>
              {restaurantTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            {/* Text Input for "Other" */}
            <input
              type="text"
              value={customType}
              onChange={(e) => setCustomType(e.target.value)}
              placeholder="Enter custom restaurant type"
              disabled={selectedType !== "Other"} // Disabled unless "Other" is selected
              className={`border border-deepgreen rounded p-2 w-1/2 ${
                selectedType === "Other" ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>
        </div>

        <div className="border-b border-deepgreen pt-[20px] pb-[40px]">
          
          <h3 className="pb-0">Capital</h3>
          <p>How much capital do you have? (CAD):</p>
          <div>
            <CapSlider onCapChange={(value) => setCapital(value)} />
          </div>

        </div>

        <div className="border-b border-deepgreen pt-[20px] pb-[40px]">
          
          <h3 className="pb-0">Team Size</h3>
          <p>How many employees do you expect to hire?:</p>
          <div>
            < TeamSlider onTeamChange={(value) => setTeamSize(value)} />
          </div>

        </div>

        <div className="border-b border-deepgreen pt-[20px] pb-[40px]">
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

        <div className="border-b border-deepgreen pt-[20px] pb-[40px]">
          <h3 className="pb-0">Description </h3>
          <p> Share additional details about your restaurant (max 200 words)</p>
          <textarea
            placeholder="Enter relevant details"
            maxLength={200}
            className="border border-deepgreen rounded p-2 mt-2 w-full h-32 resize-none"
          />
        </div>

        <div className="flex flex-row gap-8 justify-center mt-4">
          <Button type="submit"> Analyze </Button>
          <Button className="text-black" type="reset"> Clear </Button>
        </div>
       

      </form>

    </div>
  )
}

export default Home;
