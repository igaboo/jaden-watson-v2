import Head from "next/head";

import Animate from "../modules/wrappers/Animate";

import Navbar from "../modules/Navbar/Navbar";
import Hero from "../modules/Hero/Hero";
import About from "../modules/About/About";
import Projects from "../modules/Projects/Projects";
import Hire from "../modules/Hire/Hire";
import Contact from "../modules/Contact/Contact";
import Footer from "../modules/Footer/Footer";
import ScrollToTop from "../modules/ScrollToTop/ScrollToTop";

import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({ initialInView: true });

  return (
    <>
      <Head>
        <title>Jaden Watson | Portfolio</title>
        <meta
          name="description"
          content="Jaden Watson's portfolio, built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div ref={ref}>
        <Hero />
      </div>
      <Animate>
        <hr />
        <div className="anchor" id="about"></div>
        <About />
        <hr />
        <div className="anchor" id="projects"></div>
        <Projects />
        <hr />
        <div className="anchor" id="hire"></div>
        <Hire />
        <hr />
        <div className="anchor" id="contact"></div>
        <Contact />
      </Animate>
      <Footer />
      <ScrollToTop visible={!inView} />
    </>
  );
}
