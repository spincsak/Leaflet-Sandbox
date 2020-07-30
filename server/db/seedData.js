//check out node-geocoder library for converting addresses to lat/long coordinates!
//the leaflet Readme ->> 'awesome cheatsheet' on github has several suggestions

const sampleMarkets = [
  {
    name: 'Lincoln Square Farmers Market',
    address: 'CTA Western Brown Line Parking Lot, 2309 W. Leland Ave.',
    latitude: 41.96674,
    longitude: -87.68755,
  },
  {
    name: 'Andersonville Farmers Market',
    address: '1500 W. Catalpa Ave.',
    latitude: 41.98173,
    longitude: -87.66844,
  },
  {
    name: 'Ravenswood Farmers Market',
    address: '4900 N. Damen Ave.',
    latitude: 41.97073,
    longitude: -87.67963,
  },
];

module.exports = { sampleMarkets };
