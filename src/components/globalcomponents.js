import styled from "styled-components";


export const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;


export const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
margin: 0;
height: 90%auto;
width: 90%;
`;


export const ButtonOne = styled.button`
  /* If it's a small button use less padding */
  padding: ${props => props.small ? '0.25em 1em' : '0.5em 2em'};

`;
