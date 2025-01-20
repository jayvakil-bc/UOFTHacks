const torontoNeighborhoods = {
    "Downtown": ["Annex", "Bay Street Corridor", "Church-Yonge Corridor", "Kensington-Chinatown", "Little Portugal", "Moss Park", "Niagara", "North St. James Town", "Palmerston-Little Italy", "Regent Park", "Rosedale-Moore Park", "Trinity-Bellwoods", "Waterfront Communities-The Island"],
    "Midtown": ["Bedford Park-Nortown", "Casa Loma", "Forest Hill North", "Forest Hill South", "Lawrence Park North", "Lawrence Park South", "Leaside-Bennington", "Mount Pleasant East", "Mount Pleasant West", "Yonge-Eglinton", "Yonge-St. Clair", "High Park North", "High Park-Swansea", "Humewood-Cedarvale", "Oakwood Village"],
    "Central East": ["Blake-Jones", "Danforth", "Danforth East York", "East End-Danforth", "Greenwood-Coxwell", "O'Connor-Parkview", "Old East York", "Playter Estates-Danforth", "The Beaches", "Woodbine Corridor", "Woodbine-Lumsden"],
    "Central North": ["Yorkdale-Glen Park", "Glenfield-Jane Heights", "Downsview-Roding-CFB", "Englemount-Lawrence", "Bathurst Manor", "Maple Leaf", "Rustic", "Weston", "York University Heights"],
    "GTA North-East": ["L’Amoreaux", "Pleasant View", "Steeles", "Tam O’Shanter-Sullivan", "Hillcrest Village", "Henry Farm", "Bayview Woods-Steeles", "Newtonbrook East", "Newtonbrook West", "Willowdale East", "Willowdale West"],
    "GTA East": ["Agincourt North", "Agincourt South-Malvern West", "Birchcliffe-Cliffside", "Bendale", "Centennial Scarborough", "Clairlea-Birchmount", "Cliffcrest", "Guildwood", "Malvern", "Morningside", "Rouge", "Scarborough Village", "Wexford/Maryvale", "Woburn"],
    "GTA West": ["Alderwood", "Eringate-Centennial-West Deane", "Etobicoke West Mall", "Humber Heights-Westmount", "Humber Summit", "Humbermede", "Islington-City Centre West", "Kingsview Village-The Westway", "Kingsway South", "Mimico (includes Humber Bay Shores)", "New Toronto", "Long Branch", "Markland Wood", "Stonegate-Queensway", "Thistletown-Beaumond Heights", "Princess-Rosethorn", "Rexdale-Kipling"]
};

const regionData = [
  { region: "Downtown", value: 60.77 },
  { region: "Midtown", value: 48.11 },
  { region: "Central East", value: 38.71 },
  { region: "Central North", value: 41.6 },
  { region: "GTA North-East", value: 31.58 },
  { region: "GTA East", value: 31.62 },
  { region: "GTA North-East", value: 34.88 },
  { region: "GTA West", value: 34.04 }
];

function getNeighborhood(location) {
    for (const [neighborhood, locations] of Object.entries(torontoNeighborhoods)) {
        if (locations.includes(location)) {
            return neighborhood;
        }
    }
    return null;
}

function calculateAvgPriceByRegion(location) {
    const neighborhood = getNeighborhood(location);
    if (!neighborhood) {
        return null;
    }
    const region = regionData.find(r => r.region === neighborhood);
    return region ? region.value : null;
}
