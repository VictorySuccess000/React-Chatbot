import React from "react";
import { Button } from "../Button";
import Trash from "../../assets/img/svgs/4-Create bot Action b/trash.svg";
export default function ChatBuilderCard() {
  return (
    <div
      style={{
        width: "80%",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "0.6rem",
        margin: "1rem 0",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #8F9BB9",
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: "1.1rem" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: "600" }}>A. Welcome</div>
          <img src={Trash} alt="" style={{ cursor: "pointer" }} />
        </div>
        <div
          style={{ color: "#BAC2C7", fontSize: "0.9rem", margin: "0.5rem 0" }}
        >
          Hi this is Amit goyani
        </div>
      </div>
      <Button
        variant="outlinedGray"
        style={{ height: "30px", width: "50%", fontSize: "0.7rem" }}
      >
        [Reply button] [B]
      </Button>
    </div>
  );
}
