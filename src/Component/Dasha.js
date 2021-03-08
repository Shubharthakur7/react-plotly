import publicIp from "public-ip";
import React, { Component } from "react";
import axios from "axios";

let token = null;

class Dasha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ipAddress: "",
    };
  }

  //   handleStoreIpAddress = async (ipAddress, browser, country) => {
  //     let data = {
  //       ipAddress: ipAddress,
  //       browser: browser,
  //       country: country,
  //     };

  //     this.props.STORE_ADD_VISITORS(data);
  //   };

  onAddVisitors = (async (ipAddress, browser, country) => {
    let data = {
      ipAddress: ipAddress,
      browser: browser,
      country: country,
    };
    this.props.STORE_ADD_VISITORS(data);

    this.setState(
      {
        ipAddress: await publicIp.v4(),
      },
      async () => {
        const response = await axios
          .post(
            `https://e8e505ad1e53.ngrok.io/api/dashboard/add-visitor`,

            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "multipart/form-data",
              },
            }
          )
          .catch((error) => {
            let errorMessage = error.response;
            console.log(errorMessage);
          });

        if (response && response.data) {
          console.log(`response=====>`, response);
          let addVisitor = response.data.data;
          console.log(`addvi=====>`, addVisitor);
        }
      }
    );
  })();
  render() {
    return <div>shubh</div>;
  }
}

export default Dasha;
