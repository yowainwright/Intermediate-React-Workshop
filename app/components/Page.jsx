import Link from 'next/link';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  html {
      font-family: sans-serif;
      background: linear-gradient(to right, #673ab7, #512da8);
      box-sizing: border-box;
    }
  * {
    box-sizing: inherit;
  }
  body {
    display: grid;
    min-height:100vh;
    align-items: center;
    justify-items: center;
  }
  a {
    color: #ffc600;
  }
`;

const PageDivStyles = styled.div`
  width: 500px;
  padding: 10px 0;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  display: grid;
  height: 50vh;
  grid-template-rows: auto auto 1fr;
  &:before,
  &:after {
    display: block;
    content: '';
    background: white;
    width: 100%;
    height: 100%;
    top: 0;
    transform: rotate(2deg);
    z-index: -2;
    position: absolute;
    box-shadow: 0 0 10 rgba(0, 0, 0, 0.3);
  }
  &:after {
    transform: rotate(-2deg);
  }
`;

const PageH1Styles = styled.h1`
  text-align: center;
  font-size: 70px;
  color: black;
  margin: 0;
`;

const Page = props => (
  <PageDivStyles>
    <Link href="/">
      <a>
        <PageH1Styles>Take Notes!</PageH1Styles>
      </a>
    </Link>
    {props.children}
  </PageDivStyles>
);

export default Page;
