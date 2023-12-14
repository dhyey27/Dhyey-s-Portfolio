import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hey there, I'm Dhyey Chikani,from Rajkot, Gujarat!
         I'm in my final year, diving deep into the world of Computer Science and Engineering at VIT Bhopal University.


        </p>

        <br />

        <p className="text-xl">
        🚀 I'm a dedicated CS enthusiast, fueled by a love for full-stack development and tackling challenges head-on with my programming prowess.<br></br><br></br>
🌟 Beyond coding, I'm all about capturing the beauty of nature through photography and videography, swinging bats on the cricket field, and tinkering with electronics for some DIY fun!
          
        </p>
      </div>
    </div>
  );
};

export default About;
