import React from "react";
import profile from "../../assets/img/svgs/11-Participants/hello.jpg";
import { Input } from "../styles";
import {
  NotificationBoxContainer,
  DetailsContainer,
  GreetingsContainer,
  SubHeading,
  InputContainer,
  SendButtonContainer,
} from "./style";
// import SendIcon from "../../assets/img/svgs/19-Agents/details/white_Icon-send.svg";
import SendIcon from "../../assets/img/svgs/19-Agents/details/white_Icon-send.svg";
import Back from "../../assets/img/svgs/4-Create bot Action b/back.svg";
import Right from "../../assets/img/svgs/4-Create bot Action b/right.svg";
import { StyledButton } from "../Button";

export default function NotificationBox() {
  return (
    <NotificationBoxContainer>
      <img src={profile} alt="" height="100%" />
      <DetailsContainer>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <GreetingsContainer
            style={{ fontWeight: 700, fontSize: "1.3rem", marginTop: "1rem" }}
          >
            Hello Amit,
          </GreetingsContainer>
          <SubHeading>
            Here you can select chatbot and got their run process details.
          </SubHeading>

          <InputContainer>
            <div className="" style={{ width: "100%", margin: "1rem 0" }}>
              <div
                style={{ fontSize: "0.8rem", margin: "5px", fontWeight: "800" }}
              >
                Chatbot Name <span style={{ color: "#F50057" }}>*</span>
              </div>
              <Input
                width="100%"
                fontSize="10px"
                placeholder="Enter here your chatbot name"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #9FABD1",
                  padding: "0.6rem 1rem",

                  borderRadius: "8px",
                  fontSize: "0.8rem",
                }}
              />
            </div>

            <SendButtonContainer>
              <img src={SendIcon} alt="search" />
            </SendButtonContainer>
          </InputContainer>
        </div>
        <div style={{ display: "flex" }}>
          <StyledButton
            variant="grey"
            className="px-3"
            style={{ fontSize: "0.8rem" }}
          >
            <img
              src={Back}
              style={{
                marginRight: "0.5rem",
              }}
              alt="back"
            />
            Back
          </StyledButton>
          <StyledButton
            variant="pink"
            style={{ margin: "0 1rem", fontSize: "0.9rem" }}
            className="px-3"
          >
            Next Step
            <img src={Right} style={{ marginLeft: "0.5rem" }} alt="back" />
          </StyledButton>
        </div>
      </DetailsContainer>
    </NotificationBoxContainer>
  );
}
