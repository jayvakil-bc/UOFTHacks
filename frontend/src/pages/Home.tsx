import {useState} from 'react';
import Map from '../components/Map';
import {useNavigate} from "react-router-dom";
//import CapSlider from '../components/CapSlider';
import TeamSlider from '../components/TeamSlider';
import Button from '../components/Button';
//import {useFormContext} from "../components/FormContext.tsx";
//import {useResultsContext} from "../components/ResultsContext.tsx";


function Home() {
  const navigate = useNavigate();

  // const [capital, setCapital] = useState(50000);
  const [teamSize, setTeamSize] = useState(5);
  const [selectedType, setSelectedType] = useState("");
  const [customType, setCustomType] = useState("");
  const [markerPosition, setMarkerPosition] = useState({
    lat: 43.660663701375796,
    lng: -79.39655519409172,
  });
  const [priceRange, setPriceRange] = useState("");
  const [description, setDescription] = useState("");

    //const {globalForm, setGlobalForm} = useFormContext();
    //const {globalResults, setGlobalResults} = useResultsContext();

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const data = {
      priceRange,
      theme: selectedType === 'Other' ? customType : selectedType,
      description,
      latitude: markerPosition.lat,
      longitude: markerPosition.lng
    };

    //update the global form data
      //setGlobalForm({price: data.priceRange, restaurantType: data.theme, description:data.description,
      //  location:`${markerPosition.lat} ${markerPosition.lng}`});

    console.log('Form submission data:', data);

    try {
      const response = await fetch("/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("Analysis result:", result);

      //update the global result data
      //setGlobalResults({summary: result.analysis});

      navigate("/results");
    } catch (error) {
      console.error("Error submitting form:", error);
    }

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
      <div className="relative h-[480px] w-full bg-[url('/grad.png')] bg-cover bg-center flex items-center justify-center text-white">
        {/* Black Transparent Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="font-semibold text-black">Serving Success from Every Angle </h1>
          <h3 className="text-black">Data-driven success engine for your restaurant</h3>
        </div>
      </div>

            {/* Main */}

      <form
        onSubmit={handleSubmit}
        className="my-8 py-8 -pt-8 px-[75px] text-left rounded-3xl bg-shadow w-[700px]"
      >
        <h2 className="pb-4 text-2xl font-bold">Tell Us About Your Potential Restaurant</h2>

        {/* Location Section */}
        <div className="mb-1 border-b border-deepgreen">
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="text-gray-600">The intended location of your restaurant:</p>
          <div className="flex justify-center w-full h-[430px]">
            <Map onMarkerPositionChange={setMarkerPosition} />
          </div>
        </div>

        {/* Restaurant Type Section */}
        <div className="border-b border-deepgreen py-6">
          <h3 className="font-semibold text-lg">Restaurant Type</h3>
          <p className="pb-1 text-gray-600">What style of restaurant would you like to open?</p>
          <div className="flex items-center gap-4 mt-2">
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

            {selectedType === 'Other' && (
              <input
                type="text"
                value={customType}
                onChange={(e) => setCustomType(e.target.value)}
                placeholder="Enter custom restaurant type"
                className="border border-deepgreen rounded p-2 w-1/2"
              />
            )}
          </div>
        </div>

        {/* Capital Section
        <div className="border-b border-deepgreen py-6">
          <h3 className="font-semibold text-lg">Capital</h3>
          <p className="pb-1 text-gray-600">How much capital do you have? (CAD):</p>
          <CapSlider onCapChange={(value) => setCapital(value)} />
        </div> */}

        {/* Team Size Section */}
        <div className="border-b border-deepgreen py-6">
          <h3 className="font-semibold text-lg">Team Size</h3>
          <p className="pb-1 text-gray-600">How many employees do you expect to hire?</p>
          <TeamSlider onTeamChange={(value) => setTeamSize(value)} />
        </div>

        {/* Price Range Section */}
        <div className="border-b border-deepgreen py-6">
          <h3 className="font-semibold text-lg">Price Range</h3>
          <p className="pb-1 text-gray-600">How would you categorize the price of your food?</p>
          <div className="flex flex-col gap-2">
            {['$', '$$', '$$$', '$$$$'].map((range, index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="priceRange"
                  value={range}
                  onChange={(e) => setPriceRange(e.target.value)}
                />
                <span>
                  {range === '$' && '$ - $5-15'}
                  {range === '$$' && '$$ - $16-35'}
                  {range === '$$$' && '$$$ - $36-50'}
                  {range === '$$$$' && '$$$$ - More than $50'}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="border-b border-deepgreen py-6">
          <h3 className="font-semibold text-lg">Description</h3>
          <p className="pb-1 text-gray-600">
            Share additional details about your restaurant (max 200 words)
          </p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter relevant details"
            maxLength={200}
            className="border border-deepgreen rounded p-2 w-full h-32 resize-none"
          />
        </div>

        {/* Submit & Reset Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Button type="submit" className="bg-deepgreen text-white">
            Analyze
          </Button>
          <Button
            type="button"
            onClick={() => {
              // setCapital(50000);
              setTeamSize(teamSize);
              setSelectedType('');
              setCustomType('');
              setMarkerPosition({ lat: 43.660663701375796, lng: -79.39655519409172 });
              setPriceRange('');
              setDescription('');
            }}
            className="text-black bg-gray-200"
          >
            Clear
          </Button>

        </div>
      </form>
    </div>
  )
}

export default Home;
