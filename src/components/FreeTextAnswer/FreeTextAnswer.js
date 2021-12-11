import React from "react";
import { StyledButton } from "../Button";
import downArrow from "../../assets/img/svgs/4-Create bot Action b/arrow-drop-down-line.svg";
// import add from "../../assets/img/svgs/4-Create bot Action b/add.svg";

export default function FreeTextAnswer() {
  return (
    <>
      <div
        className=""
        style={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label
            class="form-check-label"
            for="inlineRadio1"
            style={{ fontSize: "0.7rem", color: "#BAC2C7" }}
          >
            Regular path
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label
            class="form-check-label"
            for="inlineRadio1"
            style={{ fontSize: "0.7rem", color: "#BAC2C7" }}
          >
            Conditional path
          </label>
        </div>
      </div>
      <div
        style={{
          width: "90%",
          border: "1px solid #8F9BB9",
          borderRadius: "10px",
          margin: "1rem 0",
          position: "relative",
        }}
      >
        <textarea
          style={{
            height: "80%",
            margin: 0,
            padding: "5px",
            border: "none",
            outline: "none",
            borderRadius: "10px",
            width: "100%",
            fontSize: "0.8rem",
          }}
          rows={2}
          cols={1}
        ></textarea>
        <div
          style={{
            height: "25px",
            background: "#F4F6FD",
            borderRadius: "0px 0px 10px 10px",
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <StyledButton
            variant="grey"
            style={{
              height: "100%",
              borderRadius: "0",
              fontWeight: "400",
              fontSize: "0.7rem",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Set As Variable
            <img src={downArrow} alt="" />
          </StyledButton>
        </div>
      </div>
      <div style={{ color: "#202945", fontSize: "0.8rem", fontWeight: "700" }}>
        + Add Condition
      </div>
    </>
  );
}
