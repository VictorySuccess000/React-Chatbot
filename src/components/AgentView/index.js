import React from "react";
// import styled from "styled-components";
// import theme from "../../theme";

import avatar from "../../assets/img/svgs/19-Agents/details/Agent face/ToyFaces_Colored_BG_29.jpg";
export const AgentView = () => {
  return <></>;
};
export const AgentDetail = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      <img
        src={avatar}
        alt="agent avatar"
        width="75px"
        height="75px"
        style={{
          borderRadius: "100%",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "1.1rem", fontWeight: "700" }}>{data.name}</div>
        <div style={{ fontSize: "0.8rem" }}>{data.role}</div>
      </div>
    </div>
  );
};
