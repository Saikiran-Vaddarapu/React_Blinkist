import React from "react";
import Image from "../Atoms/Image";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import ImCard from "../Testing/ImCard";

function Card(): JSX.Element
{
  return (
  <>
  <Banner />
  <SearchBar />
  <ImCard isFirst = {false}/>
  </>
  );
}

export default Card;