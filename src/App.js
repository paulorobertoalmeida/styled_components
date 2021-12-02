import styled ,{ThemeProvider}from 'styled-components'
import './App.css';
import {Wrapper, Title, Rotate, ButtonOne } from './components/globalcomponents'


const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`


// Advanced.

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};

function App() {
  return (
    <container>
    <Wrapper>
      <Title>this is the app to test Styled Components</Title>
      <h1>Hello Moto</h1>
      <Input medium placeholder="Hello moto"/>
      <Input padding="2em" placeholder="Padded" />
      <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
     
    </Wrapper>
    <ButtonOne>hello</ButtonOne>
  </container>
  );
}

export default App;
