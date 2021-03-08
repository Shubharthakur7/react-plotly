import React, { useState } from "react";
import axios from "axios";

import publicIp from "public-ip";

const Dashb = () => {
  const [details, setDetails] = useState(" ");

  console.log(`details==========`, details);

  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
      //   `https://e8e505ad1e53.ngrok.io/api/dashboard/add-visitor`
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  var ipAddress = details.IPv4;
  var country = details.country_name;
  //   console.log(ipAddress);
  //   console.log(country);

  (async () => {
    console.log(await publicIp.v4());
    //=> '46.5.21.123'

    // console.log(await publicIp.v6());
    //=> 'fe80::200:f8ff:fe21:67cf'
  })();

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Find my IP and Location</h2>
          <p className="mt-3">
            <button
              className="btn btn-primary"
              onClick={getUserGeolocationDetails}
            >
              Find my details
            </button>

            <div className="row justify-content-center mt-3">
              <div className="col-lg-6 text-center text-dark">
                {details && (
                  <ul className="list-group">
                    <li className="list-group-item">Location :{country}</li>
                    <li className="list-group-item">
                      IP:
                      {ipAddress}
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashb;
