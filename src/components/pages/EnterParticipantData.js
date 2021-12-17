import axios from "axios";
import { React, useState } from "react";

const EnterParticipantData = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [activityScore, setactivityScore] = useState(0);
  const [github, setgithub] = useState("");
  const [activities, setactivities] = useState(0);
  const [dateofbirth, setdateofbirth] = useState(new Date());

  const sendData = async () => {
    if (name === "" || github === "" || email === "" || dateofbirth === null) {
      alert("All fields have to be filled!");
    } else {
      const formData = new FormData();
      formData.append("firstName", name);
      formData.append("github", github);
      formData.append("activities", activities);
      formData.append("dateOfBirth", dateofbirth);

      let res = await axios.post(
        `http://127.0.0.1:8000/user?email=${email}&dateOfBirth=${dateofbirth}&gitHubUsername=${github}&acivityScore=${activityScore}&numberOfEvents=${activities}&name=${name}`
      );
      console.log(res);
      alert("Participant added!");
      window.location.href = "/participants";
    }
  };

  return (
    <div className="container m-5 content">
      <div class="columns max-w-850 center">
        <div class="column is-centered">
          <h1>Enter Participant's Data</h1>
          <hr />

          <div className="box m-5 is-centered">
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Full Name</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Enter first name"
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Activity counter</label>
              <div class="control">
                <input
                  class="input"
                  type="number"
                  placeholder="How much active is the member from 1-10"
                  onChange={(e) => setactivityScore(e.target.value)}
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Github account</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Enter github URL"
                  onChange={(e) => setgithub(e.target.value)}
                />
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Date Of Birth</label>
                  <div class="control">
                    <input
                      class="input"
                      type="date"
                      onChange={(e) => setdateofbirth(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label">Number of activities participated</label>
                  <div class="control">
                    <input
                      class="input"
                      type="number"
                      onChange={(e) => setactivities(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <button
              className="button is-info m-3 center"
              onClick={() => sendData()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterParticipantData;
