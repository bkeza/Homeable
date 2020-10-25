import React, { useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { LatLngLit, displayCols } from "./Constants.js";

function Place({ place }) {
  const [isOn, toggle] = useState(false);
  const coords = LatLngLit(place);
  return (
    <Marker position={coords} onClick={() => toggle(!isOn)}>
      {isOn === true && (
        <InfoWindow>
          <div>
            {displayCols.map((col) => (
              <div>
                {col["display"]}: {place[col["field_name"]]}
              </div>
            ))}
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
}

function Markers({ locations }) {
  return (
    <>
      {locations.map((place, idx) => (
        <Place key={idx} place={place} />
      ))}
    </>
  );
}

export default Markers;
// {/* const image =
//     "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
//   const beachMarker = new google.maps.Marker({
//     position: { lat: -33.89, lng: 151.274 {"}"},     map,
//     icon: image,
//     {"}"}); */}
