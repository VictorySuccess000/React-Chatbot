import React, { useState } from "react";
import { Button } from "rebass";
import BotMessageBox from "../../components/BotMessageBox/BotMessageBox";
import BotStepper from "../../components/BotStepper/BotStepper";
import ChatBuilderCard from "../../components/ChatBuilderCard/ChatBuilderCard";

import NotificationBox from "../../components/NotificationBox";
import { FlexLayout, Text } from "../../components/styles";
import downArrow from "../../assets/img/svgs/4-Create bot Action b/arrow-drop-down-line.svg";

import FreeTextAnswer from "../../components/FreeTextAnswer/FreeTextAnswer";
import {} from "./style";
export default function BotBuilder() {
  const [activeAnswerType, setActiveAnswerType] = useState("predefined");
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          margin: "1rem auto",
          justifyContent: "space-between",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <BotStepper
          isCompleted={true}
          title="Choose Trigger Bot Type"
          number={1}
        />
        <BotStepper isCompleted={true} title="Bot Builder" number={2} />
        <BotStepper isCompleted={false} title="Bot Simulator" number={3} />
        <BotStepper
          isCompleted={false}
          title="Code to Embed / QR to Scan"
          number={4}
        />
      </div>
      <NotificationBox />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FlexLayout
          height="35.38px"
          backgroundColor="#202945"
          borderRadius="9px 9px 0 0"
          justify="flex-start"
          overflow="hidden"
          minWidth="900px"
        >
          <Text color="white" margin="0 0 0 20px">
            Chat Builder
          </Text>
        </FlexLayout>
        <div
          style={{
            height: "100%",
            border: " 1px solid #8f9bb9",
            minWidth: "900px",
            boxShadow: "0px 0px 36px #67656529",
            borderRadius: "0px 0px 5px 5px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "40%",
                backgroundColor: "#ECEBEC",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "0px 0px 5px 0px",
                // overflow: "scroll",
                // height: "100px",
              }}
            >
              <ChatBuilderCard />
              <ChatBuilderCard />
            </div>
            <div
              style={{
                flexGrow: 1,
                padding: "1.5rem",
              }}
            >
              <Text>1. Type Here Your Message Or Question</Text>
              <BotMessageBox b2text="connect" />
              <Text>2. Choose Answer Type</Text>
              <div
                style={{
                  width: "100%",
                  border: "1px solid #8F9BB9",
                  borderRadius: "10px",
                  margin: "1rem 0",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #8F9BB9",
                    borderRadius: "5px 5px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: "100%",
                      textAlign: "center",
                      background:
                        activeAnswerType === "predefined" ? "#BDBAD4" : "white",
                      color:
                        activeAnswerType === "predefined" ? "white" : "black",
                      fontSize: "0.8rem",
                      padding: "0.5rem",
                      cursor: "pointer",
                      fontFamily: "Roboto",
                      fontWeight: "600",
                      borderRight: "1px solid #8F9BB9",
                      // borderBottom: "1px solid #8F9BB9",
                      // borderRadius: "5px",
                    }}
                    onClick={() => {
                      setActiveAnswerType("predefined");
                    }}
                  >
                    Predefined
                  </div>
                  <div
                    style={{
                      width: "50%",
                      textAlign: "center",
                      fontSize: "0.8rem",
                      padding: "0.5rem",
                      cursor: "pointer",
                      background:
                        activeAnswerType === "freetextanswers"
                          ? "#BDBAD4"
                          : "white",
                      color:
                        activeAnswerType === "freetextanswers"
                          ? "white"
                          : "black",
                      fontWeight: "600",
                    }}
                    onClick={() => {
                      setActiveAnswerType("freetextanswers");
                    }}
                  >
                    Free Text Answers
                  </div>
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{
                      width: "48%",
                      borderRadius: "5px",
                      marginLeft: "1.2rem",
                    }}
                  >
                    {activeAnswerType === "predefined" ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            // alignItems: "center",
                            height: "100%",
                            justifyContent: "center",
                            // marginTop: "1rem",
                          }}
                        >
                          <BotMessageBox b2text="" />
                          <div
                            style={{
                              color: "#202945",
                              fontSize: "0.8rem",
                              fontWeight: "700",
                            }}
                          >
                            + Add Response
                          </div>
                        </div>
                      </>
                    ) : (
                      <FreeTextAnswer />
                    )}
                  </div>

                  <div
                    style={{
                      width: "45%",
                      borderRadius: "5px",
                      margin: "20px",
                      marginLeft: "1.2rem",
                      display: "flex",
                      alignItems: "flex-start",

                      // flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className=""
                        style={{
                          color: "#FF4081",
                          fontSize: "0.8rem",
                          fontWeight: "700",
                        }}
                      >
                        Go To
                      </div>
                      <Button
                        style={{
                          background: "white",
                          border: "1px solid #BAC2C7",
                          color: "#BAC2C7",
                          fontSize: "0.9rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Path 02 <img src={downArrow} alt="" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
