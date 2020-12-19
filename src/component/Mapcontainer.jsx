import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import myMarker from "../pato images/logoRed.png";

function MapContainer(props) {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const defaultCenter = {
    lat: 36.1108221,
    lng: -115.178973,
  };

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 36.1108221,
        lng: -115.178973,
      },
    },
  ];
  return (
    <div className="mapDad">
      <div className="mapDiv">
        <LoadScript googleMapsApiKey="AIzaSyCkxu2BSSdvYudCbL9UufS3bUmeWpywxkw">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={14}
            center={defaultCenter}
          >
            {locations.map((item) => {
              return (
                <Marker
                  key={item.name}
                  position={item.location}
                  onClick={() => onSelect(item)}
                  icon={myMarker}
                />
              );
            })}

            {selected.location && (
              <InfoWindow
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                <div className="">
                  <h2 className="text-center">pato</h2>
                  <h6 className="text-black-50 ml-2 ">
                    Now that you visited our website,
                    <br />
                    <span className="text-black-50 ">
                      how about checking out our office too?
                    </span>
                  </h6>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
export default MapContainer;
