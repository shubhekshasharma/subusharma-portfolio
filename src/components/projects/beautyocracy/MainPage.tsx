"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function BeautyocracyMainPage() {
  return (
    <div className="flex flex-col min-h-[80vh] bg-white px-6 py-20">
      <main className="w-full max-w-5xl mx-auto space-y-20">

        <Header />

        <section className="w-full h-100 md:h-[500px] relative flex items-center justify-center overflow-hidden">
        <img
            src="/images/beautyocracy/beautyocracy.gif"
            alt="Project GIF"
            className="absolute inset-0 w-full h-full object-cover"
        />
        </section>

        <section className="w-full bg-gray-50 py-16">
          <div className="w-full md:w-4/5 mx-auto flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2" style={{ color: "#FA9370" }}>Overview</h2>
              <p>
                <b> <u>Beautyocracy</u> is a platform where women of color discover and shop beauty, together.</b> 
                On the app (coming soon), users engage with products and content perfectly tailored to 
                their identity, experiences, and preferences, then easily shop what they love.
                <br />
                <br />
                As a <b>  UX/UI Design Intern </b> , I was working closely with senior designers from <b> <u> Minimum Studio </u></b> , 
                the engineering team, and the product manager to help <b> launch the beta version </b>  of the platform.
              </p>
            </div>

            <div className="flex-1">
              <div className="flex-1">
                <div className="flex flex-col gap-2">
                    <div>
                    <h3 className="font-semibold" style={{ color: "#FA9370" }}>ROLE</h3>
                    <p>UX/UI Design Intern</p>
                    </div>
                    <div>
                    <h3 className="font-semibold" style={{ color: "#FA9370" }}>TIMELINE</h3>
                    <p>12 weeks (September - December 2021)</p>
                    </div>
                    <div>
                    <h3 className="font-semibold" style={{ color: "#FA9370" }}>TOOLS USED</h3>
                    <p>Figma, Framer, Miro, Adobe Illustrator</p>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-8">
        <div className="w-full md:w-4/5 mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#FA9370" }}>
            The Challenge
            </h2>
            <h3 className="text-xl font-semibold mb-4">
            Designing a Community-Driven Platform
            </h3>
            <p className="text-gray-700">
            Our challenge here was to design a platform that is powered by community to 
            fulfill Beautyocracy's mission of{" "}
            <b>
                building a better world for people of color by democratizing access to all the beauty industry has to offer.
            </b>
            </p>
        </div>
        </section>


        <section className="w-full bg-gray-50 py-16">
        <div className="w-full md:w-4/5 mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#FA9370" }}>Contributions</h2>
          <h3 className="text-xl font-semibold mb-6">My Involvement in the Project</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="flex flex-col items-center text-left">
              <img src="/images/beautyocracy/synthesis.png" alt="Synthesis & Feature Ideation" className="w-full h-auto mb-4" />
              <div className="w-full text-left">
                <h4 className="font-semibold mb-2">Synthesis & Feature Ideation</h4>
                <p className="text-gray-700 leading-relaxed">
                  Synthesized qualitative information gathered from research to understand user 
                  <b> needs, behaviors, and emotions </b> and identify insights, patterns, and trends through thematic analysis.
                  
                  <br/>
                  <br/>

                  Participated in brainstorming sessions for <b> ideation </b> of the product features 
                  and <b> user flows </b>  based on the insights gathered from synthesis.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-left">
              <img src="/images/beautyocracy/style-guide.png" alt="Style Guide" className="w-full h-auto mb-4" />
              <div className="w-full text-left">
                <h4 className="font-semibold mb-2">Style Guide</h4>
                <p className="text-gray-700 leading-relaxed">
                  Built a comprehensive <b>style guide and pattern library </b>for company rebranding.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-left">
              <img src="/images/beautyocracy/wireframing.png" alt="Wireframing Iterations" className="w-full h-auto mb-4" />
              <div className="w-full text-left">
                <h4 className="font-semibold mb-2">Wireframing Iterations</h4>
                <p className="text-gray-700 leading-relaxed">
                  Developed the <b>wireframes and low-fidelity prototypes</b> to map the content and features on the web app.

                  Constantly iterated on the wireframes based on the feedback from team members to effectively 
                  <b> communicate interaction and design ideas </b>.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-left">
              <img src="/images/beautyocracy/usability-testing.png" alt="Usability Testing & User Research" className="w-full h-auto mb-4" />
               <div className="w-full text-left">
                <h4 className="font-semibold mb-2">Usability Testing & User Research</h4>
                <p className="text-gray-700 leading-relaxed">
                  Created research plans and <b>led 5 usability tests </b> to evaluate the usability of the app Beta.
                  <br/>
                  
                  Planned and conducted 3 user interviews to further uncover user perceptions, needs, and frustrations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="w-full bg-white py-16">
          <div className="w-full md:w-4/5 mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Process</h2>
            <div className="sticky top-0 bg-white z-50 py-4 shadow-sm">
              <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mb-2">1</div>
                  <span>Research</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: "#fe2a62", color: "white" }}>2</div>
                  <span>Ideation</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 text-gray-800 flex items-center justify-center mb-2">3</div>
                  <span>Design</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 text-gray-800 flex items-center justify-center mb-2">4</div>
                  <span>Test</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
