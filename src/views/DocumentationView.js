import React from "react";
import styled from "styled-components";
import Button from "../components/generic/Button/Button";
import Panel from "../components/generic/Panel/Panel";
import DisplayRound from "../components/generic/DisplayRounds/DisplayRounds";
import DisplayTime from "../components/generic/DisplayTime/DisplayTime";
import Input from "../components/generic/Input/Input";
import TimerButtons from "../components/generic/TimerButtons/TimerButtons";
import DocumentComponent from "../components/documentation/DocumentComponent";
import Loading from "../components/generic/Loading";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />
          <DocumentComponent
          title="Button "
          component={<Button onClick={() => console.log("Documentation - button clicked")} />}
          propDocs={[
            {
              prop: "current",
              description: "Flag to identify which state is currently the timer on (Start, Pause, Reset)",
              type: "bool",
              defaultValue: "false",
            },
            {
              prop: "text",
              description: "Text to be placed on button",
              type: "string",
              defaultValue: "''",
            },
            {
              prop: "onClick",
              description: "Actions to be performed when button is clicked",
              type: "function",
              defaultValue: "undefined",
            },
          ]}
        />
        <DocumentComponent
          title="DisplayRound "
          component={<DisplayRound/>}
          propDocs={[
            {        
              prop: "roundProps",
              description: "Determines if round props will be passed to be rendered.",
              type: "bool",
              defaultValue: "false",
            },
            {        
              prop: "rounds",
              description: "Number of rounds requested by used",
              type: "number",
              defaultValue: "0",
            },
            {
              prop: "currRound",
              description: "The current round that will be rendered to the UI",
              type: "number",
              defaultValue: "0"
            },
            {
              prop: "rest",
              description: "If timer includes rests, this flag indicates if it is a rest interval ",
              type: "boolean",
              defaultValue: "false",
            },
          ]}
        />
        <DocumentComponent
          title="DisplayTime "
          component={<DisplayTime/>}
          propDocs={[
            {        
              prop: "roundProps",
              description: "Determines if round props will be passed to be rendered on the displayTime panel",
              type: "bool",
              defaultValue: "false",
            },
            {
              prop: "h",
              description: "Number of hours in timer ",
              type: "number",
              defaultValue: "0",
            },
            {
              prop: "m",
              description: "Number of minutes in timer ",
              type: "number",
              defaultValue: "0",
            },
            {
              prop: "s",
              description: "Number of seconds in timer",
              type: "number",
              defaultValue: "0",
            },
            {
              prop: "ms",
              description: "Number of miliseconds in timer ",
              type: "number",
              defaultValue: "0",
            },
          ]}
        />
        <DocumentComponent
          title="Input "
          component={<Input />}
          propDocs={[
            {
              prop: "onChange",
              description: "Actions to be performed when button is clicked",
              type: "function",
              defaultValue: "undefined",
            },
            {
              prop: "v",
              description: "Input value",
              type: "number",
              defaultValue: "0",
            },
            {
              prop: "placeholder",
              description: "Placeholder for the input",
              type: "string",
              defaultValue: "Name of input field"
            },
          ]}
        />
        <DocumentComponent
          title="Panel "
          component={<Panel />}
          propDocs={[
            {        
              prop: "children",
              description: "Other divs to render inside of the panel",
              type: "div",
              defaultValue: "undefined",
            },
          ]}
        />
        <DocumentComponent
          title="Panel "
          component={<TimerButtons />}
          propDocs={[
            {        
              prop: "current",
              description: "Flag to identify which state is currently the timer on (Start, Pause, Reset). Ideally this would've just been inside the timer panel but I faced a problem where I couldn't click on the buttons because the panel kept rotating whenever i hovered over the buttons panel. The only way that worked for me was to extract it outside of the timer panel.",
              type: "bool",
              defaultValue: "bool",
            },
          ]}
        />

        

        </div>
      </Container>
    );
  }
}

export default Documentation;
