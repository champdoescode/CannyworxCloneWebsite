import React from "react";
import { Grid1 } from "../../components/Grid1";
import { Grid2 } from "../../components/Grid2";
import Gallery from "./components/Gallery";
import { Landing } from "./components/Landing";
import Section from "./components/Section";
import Services from "./components/Services";

const features = [
  {
    icon: "./images/select.png",
    title: "BENEVOLENT TEAM",
    description:
      "We’ll soak ourselves in your craft, your product and your persona – till the time where we’re simply a wing of your own team.",
  },
  {
    icon: "./images/select.png",
    title: "CONVERGENCE OF STRATEGY & DESIGN",
    description:
      "We transform mission-driven organizations through branding, marketing, and digital communications for rapid growth.",
  },
  {
    icon: "./images/select.png",
    title: "LUCID EXECUTION",
    description:
      "We think big but we value simplicity. Sometimes the simplest ideas bring high payoffs. We unleash rapid growth and elevate to the pinnacle of potential.",
  },
];
const features2 = [
  {
    icon: "./images/select.png",
    title: "NBC TEAM",
    description:
      "We’ll soak ourselves in your craft, your product and your persona – till the time where we’re simply a wing of your own team.",
  },
  {
    icon: "./images/select.png",
    title: "BNC TEAM",
    description:
      "We’ll soak ourselves in your craft, your product and your persona – till the time where we’re simply a wing of your own team.",
  },
];
const Home = () => {
  return (
    <>
      <Landing />
      <Grid1 features={features} />
      {/* <Grid2 /> */}
      <Services/>
      <Section heading="Businesses we have empowered digitally!" description="Our innovative business framework is faster, superior, tested way to unlock your digital"/>
      <Gallery/>
      <Section heading="Let's Work Together" description="We’re passionate about brilliant ideas and the execution that brings it all together in one beautiful experience. If you are too, call or send us an email to get started."/>
      <Grid1 features={features2} />
      
    </>
  );
};

export const x = 10;

export default Home;
