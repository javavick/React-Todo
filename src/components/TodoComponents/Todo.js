import React from "react";
import styled from "styled-components";

const Todo = (props) => {
  return (
    <div>
      <P
        onClick={props.handleCompleted}
        id={props.id}
        completed={props.completed}
      >
        {props.task}
      </P>
      <br />
    </div>
  );
};

const P = styled.p`
  display: inline-block;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-family: Futura;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 5px;
`;

export default Todo;
