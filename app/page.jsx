"use client";

import { archidaught } from '../utils/fonts';
import Head from "next/head";
import { benefitOne, benefitTwo } from "../components/data";
import Image from "next/image"
import { Benefits, Container, CTA, DarkSwitch, Data, Faq, Feed, Form, Hero, Nav, Navbar, PopupWidget, Team, SectionTitle,Testimonials, Video } from "../components";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className="head_text text-center">
        Discover & Share
        <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts.
    </p>
    <Feed/>
    </section>
  )
}

export default Home







{/*const Home = () => {
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
      <Team />                                                                  
      
      <PopupWidget /></div>
    </>
  );
}

export default Home*/}