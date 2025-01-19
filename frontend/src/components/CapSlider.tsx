import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface MinimumDistanceSliderProps {
  onCapChange: (price: number) => void; // Callback for price changes
}

export default function CapSlider({ onCapChange }: MinimumDistanceSliderProps) {
  const [value, setValue] = React.useState<number>(50000); // Single value state

  // Handle changes while dragging the slider
  const handleChange = (
    _event: Event,
    newValue: number | number[]
  ) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  // Handle committed changes (when the user stops interacting with the slider)
  const handleChangeCommitted = (
    _event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      onCapChange(newValue); // Trigger callback with updated value
    }
  };

  return (
    <Box sx={{ width: 550 }}>
      <div className="flex justify-between mt-1 text-black font-normal text-sm">
        <span>$0</span>
        <span>$1,000,000+</span>
      </div>
      <Slider
        sx={{
          color: "#3A5A40", // Muted dark green for the active track
          "& .MuiSlider-thumb": {
            backgroundColor: "#1F2937", // Charcoal gray for the thumb
            width: 14,
            height: 14,
          },
          "& .MuiSlider-track": {
            backgroundColor: "#3A5A40", // Muted dark green for the track
            height: 8,
          },
          "& .MuiSlider-rail": {
            opacity: 0.7,
            height: 8,
            backgroundColor: "#E5E7EB", // Light gray for the rail
          },
        }}
        value={value}
        min={0} // Hardcoded minimum value
        max={1000000} // Hardcoded maximum value
        step={10000} // Step size for slider increments
        onChange={handleChange} // Updates state while dragging
        onChangeCommitted={handleChangeCommitted} // Fires only on release
        valueLabelDisplay="off"
      />
      <div className="mt-1 text-black font-normal text-sm text-left">
        Capital Selected: ${value.toLocaleString()} {value === 1000000 ? "+" : ""}
      </div>
    </Box>
  );
}
