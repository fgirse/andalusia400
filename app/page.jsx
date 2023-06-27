"use client";

import { archidaught, lontoutline } from '../utils/fonts';
import Head from "next/head";
import { benefitOne, benefitTwo } from "../components/data";
import Image from "next/image"
import { Benefits, Container, CTA, DarkSwitch, Data, Faq, Feed, Form, Hero, Hero2,Nav, Navbar, PopupWidget, Team, SectionTitle,Testimonials,Timeline ,Video, Features, } from "../components";

const Home = () => {
  return (
    <>
    <section className='h-[100%]'>
      <div id="content" className='bg-[url("/assets/images/redRoofs3.png")] <div className        bg-cover w-full flex-center flex-col bg-no-repeat md:bg-[url("/assets/images/villageAndalusia.png")]  lg:h-[85vh] lg:bg-[url("/assets/images/andalusiaRedRoofs.jpg")] lg:bg-cover flex flex-wrap lg:w-[100vw]'>
      <div className={lontoutline.className}>
      <h1 className="head_text bg-white/60 lg:bg-transparent text-center lg:text-[3rem]lg:text-left lg:ml-56">
        Wohntraum
        <br
        className='max-md:hidden' />
      <span className='orange_gradient text-center'> Andalusia</span>
      </h1>
      </div>
      

      </div>
      <Feed/>
  </section>

  

    <section id="section_Timeline" className='w-[100vw] h-auto bg-slate-700'> 
    <Hero />
   
    <Image src="/assets/images/LogoWA.svg" height="80" width="120" alt="Logo WA" className='mt-5 mb-5 w-32 lg:w-36 mx-auto'/>
    <div className={archidaught.className}>
    
          <SectionTitle
        title=" Warum wir Ihnen Ihre Wohnträume in Andalusien erfüllen können!!!">
        Wir die Wohntraum Andalusia SI erheben an uns die höchsten Qualitätsansprüche Ihnen als unsere Kunden, den Traum einer Ihnen gerecht werdenden Immoblie zu verwirklichen. Transparenz & Vertrauen sind dabei die wichtigsten Meilensteine unseres Handelns. 
      </SectionTitle>
      </div>
      </section>
      <section id="section_Timeline" className='w-[100vw] h-auto bg-slate-700'>
      <div className={archidaught.className}>
      <Image src="/assets/images/LogoWA.svg" height="80" width="120" alt="Logo WA" className='mt-5 mb-5 w-32 lg:w-36 mx-auto'/>
      <SectionTitle
        pretitle="Chronologischer Ablauf eines Immobilienprojektes"
        title="Immobilienkauf  Timeline">
        Timeline zur Umsetzung Verwirklichung eines Immobilienprojektes mit der Wohntraum Andalusia SI.
      </SectionTitle>
       <Timeline />
       </div>
       </section>
       
      <section id="section_Info1" className="">
                      <Benefits data={benefitOne} />
      </section>
       
       <section id="section_Info2" className="">               
               <Benefits imgPos="right" data={benefitTwo} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                        m                                            
       </section>
       <section id="section_Video"className=''>
       <SectionTitle
        pretitle="Videodemonstration"
        title="Demonstrationsbeispiel einer Musterimmobilie">
        In dieser Videodemonstration zeigen wir ein Musterbeispiel einer Immobilie, welche für den Eigner durch die Wohnraum Andalusia GmbH verwirklicht erfolgreich vermittelt wurde 
      </SectionTitle>
      <Video />

       </section>
       <section id="section_Testimonial" className=''>
       <SectionTitle
        pretitle="Testimonials"
        title="Das sagen unsere Kunden">
        Lesen Sie selbst warum unsere Kunden mit ihren Wohnträumen sich vertrauensvoll an uns wenden
      </SectionTitle>
      <Testimonials />
       </section>
       <section id="section_FAQ" className=''>
       <SectionTitle  pretitle="FAQ" title="Die wichtigsten und die am Häufigsten gestellten Fragen">
        Transparenz ist die oberste Devise der Wohntraum Andalusia GmbH. Nur durch eine  vertrauensvolle Verbindung ist ein gemeisamer erfolgreicher Geschäftsabschluss möglich.
      </SectionTitle>
      <Faq />  
                                                                       
      <section id="section_Features" className=''>
       <Features />
       </section>
      
       </section>

       <section id="section_Features" className=''>
       <Features/>
       </section>

       <section id="section_Team" className=''>
       <Team />
       </section>
    
       <PopupWidget />
       
       
    </>
  )
}

export default Home







{/*const Home = () => {
  return (
 
    >
          <SectionTitle
        title=" Warum wir Ihnen Ihre Wohnträume in Andalusien erfüllen können!!!">
        Wir die Wohntraum Andalusia GmbH erheben an uns die höchsten Qualitätsansprüche Ihnen als unsere Kunden, den Traum einer Ihnen gerecht werdenden Immoblie zu verwirklichen. Transparenz & Vertrauen sind dabei die wichtigsten Meilensteine unseres Handelns. 
0      </SectionTitle>
     
      
      
      
    </>
  );
}

export default Home*/}