import React from "react";
import { StyledButton } from "../Button";
import bold from "../../assets/img/svgs/4-Create bot Action b/format-bold.svg";
import italic from "../../assets/img/svgs/4-Create bot Action b/italic.svg";
import underline from "../../assets/img/svgs/4-Create bot Action b/underline.svg";
import numberlist from "../../assets/img/svgs/4-Create bot Action b/numberlist.svg";
import listview from "../../assets/img/svgs/4-Create bot Action b/list-view.svg";
import fileadd from "../../assets/img/svgs/4-Create bot Action b/file-add-line.svg";
import smily from "../../assets/img/svgs/4-Create bot Action b/smily.svg";
import downArrow from "../../assets/img/svgs/4-Create bot Action b/arrow-drop-down-line.svg";
import add from "../../assets/img/svgs/4-Create bot Action b/add.svg";

export default function BotMessageBox({ b2text }) {
  return (
    <div>
      <div
        style={{
          width: "98%",

          border: "1px solid #8F9BB9",
          borderRadius: "10px",
          margin: "1rem 0",
        }}
      >
        <textarea
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "80%",
            margin: 0,
            padding: "5px",
            border: "none",
            outline: "none",
            borderRadius: "10px",
          }}
          rows={1}
          cols={1}
        ></textarea>
        <div
          style={{
            height: "20%",
            background: "#F4F6FD",
            borderRadius: "0px 0px 10px 10px",
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",

              justifyContent: "space-between",
              width: "30%",
              marginLeft: "2px",
            }}
          >
            <img src={bold} alt="" className="icon" />
            <img src={italic} alt="" className="icon" />
            <img src={underline} alt="" className="icon" />
            <img src={listview} alt="" className="icon" />
            <img src={numberlist} alt="" className="icon" />
            <img src={smily} alt="" className="icon" />
            <img src={fileadd} alt="" className="icon" />
            {/* <img src={bold} alt="" className="icon" /> */}
          </div>
          <div style={{ display: "flex" }}>
            <StyledButton
              variant="grey"
              style={{
                height: "100%",
                borderRadius: "0",
                fontWeight: "400",
                fontSize: "0.6rem",
                padding: "2px",
              }}
            >
              <img src={add} alt="" style={{ marginRight: "5px" }} />
              Add Stickers
            </StyledButton>
            <StyledButton
              variant="lightBlue"
              style={{
                height: "100%",
                borderRadius: "0",
                fontWeight: "400",
                fontSize: "0.7rem",
              }}
            >
              {b2text}
              <img src={downArrow} alt="" style={{ marginLeft: "5px" }} />
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
}
