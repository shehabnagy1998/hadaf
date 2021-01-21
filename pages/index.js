import React, { Component } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/StudioAgency/MainBanner";
import Services from "../components/StudioAgency/Services";
import OurWorks from "../components/StudioAgency/OurWorks";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import About from "../components/StudioAgency/About";
import About2 from "../components/StudioAgency/About2";
import Feedback from "../components/Common/Feedback";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";
import FaqContent from "../components/Faq/FaqContent";
import Axios from "axios";
import { API } from "../helper/CONST";

const StudioAgency = ({ galleryData, newsData, partnerData }) => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <MainBanner />
      <Services />
      <OurWorks partnerData={partnerData} />
      {/* <FunFactsTwo /> */}
      <About />
      {/* <Feedback /> */}
      <FaqContent />
      <About2 />
      <LatestNewsSlider newsData={newsData} />
      <CtaAreaTwo />
      <Partner galleryData={galleryData} />
      <Footer />
    </React.Fragment>
  );
};

export default StudioAgency;

export const getServerSideProps = async ({ res }) => {
  const galleryData = await Axios({
    baseURL: API,
    url: "/api/gallery",
    method: "GET",
  });
  const partnerData = await Axios({
    baseURL: API,
    url: "/api/partner",
    method: "GET",
  });
  const newsData = await Axios({
    baseURL: API,
    url: "/api/news",
    method: "GET",
  });
  return {
    props: {
      galleryData: galleryData.data,
      partnerData: partnerData.data,
      newsData: newsData.data,
    },
  };
};
