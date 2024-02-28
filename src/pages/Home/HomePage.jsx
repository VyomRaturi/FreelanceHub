import React, { useEffect } from 'react';
import Header from "../../components/Header/Navbar";
import Notes from "../../components/Header/Job";
import Footer from "../../components/Header/Footer";
import SplitType from 'split-type';
import { gsap } from "gsap";
import SideCard from "../../components/Header/SideCard"



const HomePage = () => {
    useEffect(() => {
      // Your SplitType logic
      let text = new SplitType('#text');
      let characters = document.querySelectorAll('.char');
  
      for (let i = 0; i < characters.length; i++) {
        characters[i].classList.add('translate-y-full');
      }
  
      // Using gsap instead of gasp
      gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.02,
        duration: 0.5,
      });
    }, []);
  return (
    <>
      <Header />
      <div style={{ marginTop: "20px" }}>
        <h3 id="text" className="text-6xl text-center text-0b5f62 font-lora-bold" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
          FreelancerHub bids you a warm welcome!!
        </h3>
      </div>
      <h5 id="text" className="text-xl text-#000000 font-lora-bold ml-4" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
          Jobs You Might Like:-
        </h5>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px' }}>
      
        <div style={{ width: '66.66%' }}>
          {/* Your Notes component */}
          <Notes />
        </div>
        <div style={{ width: '33.33%' }}>
          
          <SideCard />
        </div>
      </div>


      
      {/* <div style={{ marginTop: "25px" }}> 
        <Notes />
      </div> */}
      
      <Footer />
    </>
  );
};

export default HomePage;
