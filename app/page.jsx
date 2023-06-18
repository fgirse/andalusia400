"use client";

import Feed from "@components/Feed";
import Team from "@sections/Team";
import { archidaught } from '../utils/fonts';


import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Image from "next/image"
const Home = () => {
  return (
    <>

      <Hero />
     
      <div className={archidaught.className}>
          <SectionTitle
        title=" Warum wir Ihnen Ihre Wohnträume in Andalusien erfüllen können!!!">
        Wir die Wohntraum Andalusia GmbH erheben an uns die höchsten Qualitätsansprüche Ihnen als unsere Kunden, den Traum einer Ihnen gerecht werdenden Immoblie zu verwirklichen. Transparenz & Vertrauen sind dabei die wichtigsten Meilensteine unseres Handelns. 
0      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Videodemonstration"
        title="Demonstarationsbeispiel einer Musterimmobilie">
        In dieser Videodemonstration zeigen wir ein Musterbeispiel einer Immobilie, welche für den Eigner durch die Wohnraum Andalusia GmbH verwirklicht erfolgreich vermittelt wurde 
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Das sagen unsere Kunden">
        Lesen Sie selbst warum unsere Kunden mit ihren Wohnträumen sich vertrauensvoll an uns wenden
      </SectionTitle>
      <Testimonials />
      <SectionTitle  pretitle="FAQ" title="Die wichtigsten und die am Häufigsten gestellten Fragen">
        Transparenz ist die oberste Devise der Wohntraum Andalusia GmbH. Nur durch eine  vertrauensvolle Verbindung ist ein gemeisamer erfolgreicher Geschäftsabschluss möglich.
      </SectionTitle>
      <Faq />                                                                    
      <Footer />
      <PopupWidget /></div>
    </>
  );
}

export default Home;





{/*const Home = () => (
   <>
  <section className='bg-[url("/assets/images/andalusiaRedRoofs.jpg")]
   bg-cover bg-no-repeat h-[80vh]
   w-full flex-center flex-col rounded-2xl'>
    <div className={archidaught.className}>
    <div className="mt-[-10vh] bg-gray-300/10 rounded-2xl px-3 py-3">
    <h1 className='head_text text-center'>
      Wohntraum
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Andalusia</span>
    </h1>
    </div>
    <p className='desc text-center'>
 
    </p>
    </div>
    <Feed />  
</section>
  

   </>
);

export default Home;*/}


