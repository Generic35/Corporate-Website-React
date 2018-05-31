import React from 'react';

import MainSlider from "./MainSlider";
import Features from "./Features";
import RecentWorks from "./RecentWorks";
import OurServices from "./OurServices";
import Middle from "./Middle";
import Content from "./Content";
import Partners from "./Partners";
import ContactInfo from './ContactInfo';

const Home = () => {
  return (
    <div>
        <MainSlider />
        <Features />
        <RecentWorks />
        <OurServices />
        <Middle />
        <Content />
        <Partners />
        <ContactInfo />
    </div>
  );
};

export default Home;