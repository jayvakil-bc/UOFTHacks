import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface MinimumDistanceSliderProps {
  onTeamChange: (price: number) => void; // Callback for price changes
}

export default function TeamSlider({ onTeamChange }: MinimumDistanceSliderProps) {
  const [value, setValue] = React.useState<number>(10); // Single value state

  // Handle changes while dragging the slider
  const handleChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  // Handle committed changes (when the user stops interacting with the slider)
  const handleChangeCommitted = (
    event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      onTeamChange(newValue); // Trigger callback with updated value
    }
  };

  return (
    <Box sx={{ width: 550 }}>
      <div className="flex justify-between mt-1 text-black font-normal text-sm">
        <span>0</span>
        <span>50+</span>
      </div>
      <Slider
        sx={{
          color: "#CCD5AE",
          "& .MuiSlider-thumb": {
            backgroundColor: "#7F6145",
            width: 14,
            height: 14,
          },
          "& .MuiSlider-track": { backgroundColor: "#CCD5AE", height: 8 },
          "& .MuiSlider-rail": {
            opacity: 0.7,
            height: 8,
            backgroundColor: "#D4A373",
          },
        }}
        value={value}
        min={0} // Hardcoded minimum value
        max={50} // Hardcoded maximum value
        step={5} // Step size for slider increments
        onChange={handleChange} // Updates state while dragging
        onChangeCommitted={handleChangeCommitted} // Fires only on release
        valueLabelDisplay="off"
      />
      <div className="mt-1 text-black font-normal text-sm text-left">
        Employees Selected: {value.toLocaleString()} {value === 50? "+" : ""}
      </div>
    </Box>
  );
}
