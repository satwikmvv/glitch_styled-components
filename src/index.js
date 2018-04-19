import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import styled, { keyframes } from "styled-components";
import "./globalStyles";

const noise = keyframes`
  $steps:20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
`;
const noise1 = keyframes`
  $steps:20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
`;

const Text = styled.div`
  color: white;
  font-size: 100px;
  position: relative;
  width: 400px;
  margin: 0 auto;

  &:hover {
    color: red;
  }

  &:after {
    content: "SHANKY KOJJA";
    position: absolute;
    left: 2px;
    text-shadow: -1px 0 red;
    top: 0;
    color: white;
    background: black;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: ${noise} 2s infinite linear alternate-reverse;
  }
  &:before {
    content: "SHANKY KOJJA";
    position: absolute;
    left: -2px;
    text-shadow: 1px 0 blue;
    top: 0;
    color: white;
    background: black;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: ${noise1} 3s infinite linear alternate-reverse;
  }
`;

const App = () => <Text>SHANKY KOJJA</Text>;

render(<App />, document.getElementById("root"));
