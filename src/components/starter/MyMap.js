import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MyMap() {
  return (
    <div className="m-3 border border-primary shadow ">
      <MapContainer
        center={[42.31, 21.61]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: 300 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[42.31, 21.61]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
