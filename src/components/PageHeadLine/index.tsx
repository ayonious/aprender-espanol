import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

import {
  ColoredWords,
  GetStartButton,
  Headline,
  HeadlineSub,
  HeadlineText,
  ProductLogoHomePage,
} from "./styles";

const ColoredText = ({ text }) => <ColoredWords>{text}</ColoredWords>;
const UnColoredText = ({ text }) => <span>{text}</span>;

const GetStartedButton = () => (
  <GetStartButton>
    <Link to={useBaseUrl("docs/")}>Vamos</Link>
  </GetStartButton>
);

const ProductLogo = () => (
  <ProductLogoHomePage alt="CheatSheet logo" src={useBaseUrl("img/logo.png")} />
);

const PageHeadLine = () => {
  return (
    <Headline>
      <HeadlineSub>
        <HeadlineText>
          <ProductLogo />
          <UnColoredText text="Mis" />
          <ColoredText text=" Notas" />
          <UnColoredText text=" sobre" />
          <ColoredText text=" Aprender Espanol" />
        </HeadlineText>
        <GetStartedButton />
      </HeadlineSub>
    </Headline>
  );
};

export default PageHeadLine;
