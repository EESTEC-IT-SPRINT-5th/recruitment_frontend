import axios from "axios";
import React, { useEffect, useState } from "react";
import ParticipantDataRow from "../ParticipantDataRow";

const Participants = () => {
  const [participants, setparticipants] = useState([]);

  const getData = async () => {
    let url = "http://localhost:8000/order";
    let res = await axios.get(url);

    setparticipants([]);
    var lol = [];
    if (res.data != null) {
      //   for (var i = 0; i < res.data.length; i++) {
      //     lol.push(res.data.);
      //   }
      for (var key in res.data) {
        if (res.data.hasOwnProperty(key)) {
          lol.push(res.data[key]);
          //do something with value;
        }
      }
      console.log(lol);
      setparticipants(lol);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  //getData();

  return (
    <div className="container m-5 content ">
      <div class="columns max-w-850 center">
        <div class="column is-centered">
          <h1>The list of most likely</h1>
          <hr />

          <table class="table">
            <thead>
              <tr>
                <th>
                  <abbr title="Position">#</abbr>
                </th>
                <th>Full Name</th>

                <th>
                  <abbr title="Github Account">Github Account</abbr>
                </th>
                <th>
                  <abbr title="Activities">Activities</abbr>
                </th>
                <th>
                  <abbr title="Score">Score</abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              {participants.map((e, i) => (
                <ParticipantDataRow key={i} participant={e} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Participants;
