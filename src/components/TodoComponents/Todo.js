import React from "react";
import styled from "styled-components";

const Todo = (props) => {
  return (
    <P
      onClick={props.handleCompleted}
      id={props.id}
      completed={props.completed}
    >
      {props.task}
    </P>
  );
};

const P = styled.p`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-family: Futura;
  font-size: 16px;
  line-height: 8px;
`;

export default Todo;
