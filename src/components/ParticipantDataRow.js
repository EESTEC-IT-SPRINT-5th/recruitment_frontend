import React from "react";

const ParticipantDataRow = (props) => {
  const p = props.participant;
  return (
    <tr>
      <th>{props.key}</th>
      <td>{p.name}</td>
      {/* <td>please</td> */}
      <td>
        <a href={`http://github.com/${p.gitHubUsername}`}>{p.gitHubUsername}</a>
      </td>
      <td>{p.numberOfEvents}</td>
      <td>{p.score}</td>
    </tr>
  );
};

export default ParticipantDataRow;
