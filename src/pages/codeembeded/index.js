import React from "react";
import { FlexLayout, Text } from "../../components/styles";
import {
  CodeHeader,
  CodeParentContainer,
  CodeHeaderContainer,
  CodeContainer,
  InActiveCodeHeader,
} from "./style";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import NotificationBox from "../../components/NotificationBox";
import BotStepper from "../../components/BotStepper/BotStepper";
export default function CodeEmbed() {
  const codeString = `<div id='p117-chat'>
  </div >
  <!--- We use Jquery --->
  <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script>
$(function(){
    const chatId = '644646464654646';
    pollwa("#p117-chat",chatId)
})
</script>
    `;

  return (
    <>
      <div className="" style={{ display: "flex", margin: "2rem 0" }}>
        <BotStepper isCompleted={true} title="Choose Trigger Bot Type" />
        <BotStepper isCompleted={true} title="Bot Builder" />
        <BotStepper isCompleted={false} title="Bot Simulator" />
        <BotStepper isCompleted={false} title="Code to Embed / QR to Scan" />
      </div>
      <NotificationBox />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlexLayout
          height="35.38px"
          backgroundColor="#202945"
          borderRadius="9px 9px 0 0"
          width="80%"
          justify="flex-start"
          overflow="hidden"
        >
          <Text color="white" margin="0 0 0 20px">
            Code To Embed
          </Text>
        </FlexLayout>

        <CodeParentContainer>
          <CodeHeaderContainer>
            <CodeHeader>
              <Text>Trigger type 1-Scan QR Code by end user</Text>
            </CodeHeader>
            <InActiveCodeHeader>
              <Text>Trigger type 2-Contact request by end user</Text>
            </InActiveCodeHeader>
          </CodeHeaderContainer>
          <CodeContainer>
            <SyntaxHighlighter
              customStyle={{
                width: "100%",
                height: "100%",
                padding: "1.5rem",
                margin: 0,
                backgroundColor: "#f8f9fe",
                boxSizing: "border-box",
                borderRadius: "0px 0px 9px 9px",
              }}
              style={atomOneLight}
              wrapLongLines
            >
              {codeString}
            </SyntaxHighlighter>
          </CodeContainer>
        </CodeParentContainer>
      </div>
    </>
  );
}
