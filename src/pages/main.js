import React from "react";
import MainPage from "../components/MainPage";
import useContent from "../content/content";
import getFilter from "../filter/filter";
import Footer from "../components/Footer";

export default function Main() {
  const {series} = useContent("series");
  const {films} = useContent("films");
  const slides = getFilter({series, films});

  return (
    <>
      <MainPage slides={slides}/>
      <Footer/>
    </>
  );
};