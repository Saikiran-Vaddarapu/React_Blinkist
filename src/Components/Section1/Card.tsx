import React from "react";
import Image from "../Atoms/Image";
import SearchBar from "./SearchBar";
import Banner from "./Banner";

function Card(): JSX.Element
{
  return (
  <>
  <Banner />
  <SearchBar />
  <Image isRead="currently"/>
  </>
  );
}

export default Card;