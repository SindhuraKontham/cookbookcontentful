import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

//at_BYLhOpVnIa5V5GsIFnMQjXt6IeyI1

export default function Details() {
  const [region, setRegion] = useState([]);
  const [country, setCountry] = useState([]);
  const [ip, setIp] = useState([]);
  const [timezone, setTimezone] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://geo.ipify.org/api/v2/country?apiKey=at_BYLhOpVnIa5V5GsIFnMQjXt6IeyI1"
      )
      .then((response) => {
        //console.log(response.data)
        setRegion(response.data.location.region);
        setCountry(response.data.location.country);
        setIp(response.data.ip);
        setTimezone(response.data.location.timezone);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row mt-5">
      <div className="col">
        <h1>Your Country name: {country}.</h1>
        <h3>Region: {region} </h3>
        <h5>Your ip-address is: {ip} </h5>
        <p>
          Timezone: <b>{timezone}</b>
        </p>
      </div>
    </div>
  );
}
