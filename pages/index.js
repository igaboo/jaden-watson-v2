import Head from "next/head";

import Animate from "../layout/wrappers/Animate";

import Navbar from "../layout/1. Navbar/Navbar";
import Hero from "../layout/2. Hero/Hero";
import About from "../layout/3. About/About";
import Projects from "../layout/4. Projects/Projects";
import Hire from "../layout/5. Hire/Hire";
import Contact from "../layout/6. Contact/Contact";
import Footer from "../layout/7. Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";

import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref, inView] = useInView({ initialInView: true });
  const [navRef, navInView] = useInView({ initialInView: true });

  return (
    <>
      <ScrollToTop visible={!inView} />
      <Head>
        <title>Jaden Watson | Portfolio</title>
        <meta
          name="description"
          content="Jaden Watson's portfolio, built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={navRef}></div>
      <Navbar />

      <div ref={ref}>
        <Hero />
      </div>
      <Animate>
        <div className="anchor" id="about"></div>
        <About />
        <div className="anchor" id="projects"></div>
        <Projects />
        {/* <div className="anchor" id="hire"></div> */}
        {/* <Hire /> */}
        <div className="anchor" id="contact"></div>
        <Contact />
      </Animate>
      <Footer />
      <ScrollIndicator visible={!navInView} />
    </>
  );
}
