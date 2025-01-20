import React, {useState, useRef} from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { useMapsLibrary } from '@vis.gl/react-google-maps';

interface MapCompProps {
  onMarkerPositionChange: (position: { lat: number; lng: number }) => void;
}

function MapComp({ onMarkerPositionChange }: MapCompProps) {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 43.660663701375796,
    lng: -79.39655519409172,
  });
  //const [search, setSearch] = useState(false);

  const handleDragEnd = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      const newPosition = { lat, lng };
      setMarkerPosition({ lat, lng });

      //move the map to the position??? TODO
      console.log('Marker new position:', { lat, lng });

      // Notify parent component
      onMarkerPositionChange(newPosition);
    }
  };

  const handlePlaceSelect = (place: google.maps.places.PlaceResult | null) => {
    if (place && place.geometry?.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const newPosition = { lat, lng };
      //setSearch(true);
      setMarkerPosition({ lat, lng });

      console.log('Marker current position:', markerPosition.lat, markerPosition.lng);

      // Notify parent component
      onMarkerPositionChange(newPosition);
    }
  };
  return (
    <div className="w-[548px] h-[310px]">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <PlaceAutocompleteClassic onPlaceSelect={handlePlaceSelect} />
        <Map
            //{...(search ? { conditionalProps} : {})} //was trying to make a conditional prop
          mapId="your-map-id" // Replace with your actual Map ID
          defaultCenter={markerPosition}
          defaultZoom={11}
          gestureHandling="greedy"
          disableDefaultUI={true}
        >
          <AdvancedMarker
            position={markerPosition}
            draggable={true}
            onDragEnd={handleDragEnd}
            title="Draggable Marker"
          />
        </Map>
      </APIProvider>
      <div className="mt-4">
        <p>
          Current Coordinates: <br/>Latitude: {markerPosition.lat}, Longitude:{' '}
          {markerPosition.lng}
        </p>
      </div>
    </div>
  );
}

interface Props {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

const PlaceAutocompleteClassic = ({ onPlaceSelect }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');

  React.useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address'],
    };

    const autocomplete = new places.Autocomplete(inputRef.current, options);

    autocomplete.addListener('place_changed', () => {
      onPlaceSelect(autocomplete.getPlace());
    });
  }, [places, onPlaceSelect]);

  return (
    <div className="autocomplete-container mb-2">
      <input
        ref={inputRef}
        placeholder="Search for a location"
        className="border border-deepgreen p-2 w-full rounded"
      />
    </div>
  );
};

export default MapComp;

