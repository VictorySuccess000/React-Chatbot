import React, { useState } from "react";
import { FlexLayout, Text } from "../components/styles";
import { Button } from "../components/Button";
import { SideBar } from "./style";
import {
  Agent,
  BotBuilder,
  CreateBot,
  Home,
  Keys,
  Metrics,
  Run,
  Target,
  Template,
  Code,
} from "../components/CustomSVG/index";
import avatar from "../assets/img/svgs/19-Agents/details/Agent face/ToyFaces_Colored_BG_29.jpg";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState("agents");
  const TabClick = (name) => {
    setSelected(name);
  };
  const history = useHistory();
  return (
    <SideBar>
      <FlexLayout
        className="side-bar"
        maxWidth="280px"
        direction="column"
        justify="flex-start"
        boxShadow="0px 0px 52px #4444440D"
        borderRadius="0 9px 9px 0"
      >
        <FlexLayout width="280px" height="101px" backgroundColor="#F7F8F8">
          <FlexLayout>
            <Text color="#F50057" fontSize="29px">
              5
            </Text>
            <Text color="#191B1C" fontSize="29px">
              MINBOT
            </Text>
          </FlexLayout>
          <FlexLayout
            border="2px solid #F50057"
            width="42px"
            height="42px"
            margin="0 0 0 22px"
            borderRadius="100%"
          >
            <img
              src={avatar}
              alt="avatar"
              width="32px"
              height="32px"
              style={{ borderRadius: "100%" }}
            />
          </FlexLayout>
        </FlexLayout>
        <FlexLayout
          direction="column"
          justify="flex-start"
          padding="40px 53px 0px 37px"
        >
          <Button variant="lightRed" width="200px">
            <FlexLayout gap="5px" width="100%">
              <Keys />
              <Text fontSize="18px" color="#FFFFFF">
                My Bot Package
              </Text>
            </FlexLayout>
          </Button>
          <FlexLayout
            width="100%"
            gap="10px"
            justify="flex-start"
            margin="40px 0 0 0"
            cursor="pointer"
            onClick={() => {
              TabClick("home");
            }}
          >
            <Home color={selected === "home" ? "#F50057" : "#202945"} />
            <Text
              color={selected === "home" ? "#F50057" : "#202945"}
              fontSize="18px"
            >
              Home
            </Text>
          </FlexLayout>
          <FlexLayout
            width="100%"
            gap="10px"
            justify="flex-start"
            margin="40px 0 0 0"
            cursor="pointer"
            onClick={() => {
              TabClick("create");
            }}
          >
            <CreateBot color={selected === "create" ? "#F50057" : "#202945"} />
            <Text
              color={selected === "create" ? "#F50057" : "#202945"}
              fontSize="18px"
            >
              Create Bot
            </Text>
          </FlexLayout>
          <FlexLayout
            width="100%"
            gap="10px"
            justify="flex-start"
            margin="40px 0 0 0"
            cursor="pointer"
            onClick={() => {
              TabClick("bot");
            }}
          >
            <BotBuilder color={selected === "bot" ? "#F50057" : "#202945"} />
            <Text
              color={selected === "bot" ? "#F50057" : "#202945"}
              fontSize="18px"
            >
              Bot Builder
            </Text>
          </FlexLayout>
          <FlexLayout
            width="100%"
            gap="10px"
            justify="flex-start"
            margin="40px 0 0 0"
            cursor="pointer"
            onClick={() => {
              TabClick("target");
              history.push('targetaudience11')
            }}
          >
            <Target color={selected === "target" ? "#F50057" : "#202945"} />
            <Text
              color={selected === "target" ? "#F50057" : "#202945"}
              fontSize="18px"
            >
              Target Audience
            </Text>
          </FlexLayout>
          <FlexLayout
            width="100%"
            gap="10px"
            justify="flex-start"
            margin="40px 0 0 0"
            cursor="pointer"
            onClick={() => {
              TabClick("run");
            }}
          >
            <Run color={selected === "run" ? "#F50057" : "#202945"} />
            <Text
              color={selected === "run" ? "#F50057" : "#202945"}
              fontSize="18px"
            >
              Run
            </Text>
          </FlexLayout>
          <FlexLayout
            width="100%"
            gap="10px"
            justify="flex-start"
            margin="40px 0 0 0"
            cursor="pointer"
            onClick={() => {
              TabClick("metrics");
            }}
          >
            <Metrics color={selected === "metrics" ? "#F50057" : "#202945"} />
            <Text
              color={selected === "metrics" ? "#F50057" : "#202945"}
              fontSize="18px"
            >
              Metrics
            </Text>
          </FlexLayout>
          <FlexLayout
            width="100%"
            gap="10px"
            justify="flex-start"
            margin="40px 0 0 0"
            cursor="pointer"
            onClick={() => {
              TabClick("agents");
              history.push("agents");
            }}
          >
            <Agent color={selected === "agents" ? "#F50057" : "#202945"} />
            <Text
              color={selected === "agents" ? "#F50057" : "#202945"}
              fontSize="18px"
            >
              Agents
            </Text>
          </FlexLayout>
          <FlexLayout
            width="100%"
            gap="10px"
            justify="flex-start"
            margin="40px 0 0 0"
            onClick={() => {
              TabClick("template");
            }}
            cursor="pointer"
          >
            <Template color={selected === "template" ? "#F50057" : "#202945"} />
            <Text
              color={selected === "template" ? "#F50057" : "#202945"}
              fontSize="18px"
            >
              Templates
            </Text>
          </FlexLayout>
        </FlexLayout>
      </FlexLayout>
    </SideBar>
  );
};
export default Sidebar;
