import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import {Frameworks} from "../components/Frameworks";
const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About me!</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt=""
          />
          <div className="z-10">
            <p className="headtext">
              <span className="font-bold text-xl">नमस्ते</span> ! I am Shreyas
              Kulkarni
            </p>
            <p className="subtext">
              I am a student at University if Illinois at Urbana-Champaign,
              currently pursuing my Masters in Information Management. I have a
              keen interest in all things data, tech and algorithms. I love
              visuals more than ice-cream, weird but true!
            </p>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
          </div>
        </div>
        {/* grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            className="flex items-center justify-center w-full h-full"
            ref={ grid2Container }
          >
            <p className="flex items-end text-5xl text-gray-500">
              LIFE IS 0101
            </p>
            <Card
              text="Data Science"
              style={{
                rotate: "-10deg",
                top: "65%",
                left: "45%",
              }}
              containerRef={grid2Container}
            />
            <Card
              text="LLM"
              style={{
                rotate: "40deg",
                top: "30%",
                left: "5%",
              }}
              containerRef={grid2Container}
            />
            <Card
              text="Database"
              style={{
                rotate: "-50deg",
                top: "20%",
                left: "65%",
              }}
              containerRef={grid2Container}
            />
            <Card
              text="Programming"
              style={{
                rotate: "60deg",
                top: "20%",
                left: "25%",
              }}
              containerRef={grid2Container}
            />
            <Card
              text="AI"
              style={{
                rotate: "10deg",
                top: "72%",
                left: "5%",
              }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/icons8-python-48.png"
              style={{
                rotate: "0deg",
                top: "45%",
                right: "5%",
              }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/icons8-r-project-48.png"
              style={{
                rotate: "50deg",
                top: "65%",
                right: "5%",
              }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/icons8-javascript-48.png"
              style={{
                rotate: "-40deg",
                top: "4%",
                left: "5%",
              }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/icons8-opencv-48.png"
              style={{
                rotate: "20deg",
                top: "13%",
                left: "45%",
              }}
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* grid 2 */}
        <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
                <p className="headtext -ml-2">Time-Zone</p>
                <p className="subtext -ml-2">I'm currently based in the United States and open to remote as well as on-site work. I wish I was on mars, the corner office would look good!</p>
            </div>
            <figure className="absolute left-[40%] top-[0%]">
              <Globe />
            </figure>
        </div>
        {/* grid 2 */}
        <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className="text-center headtext">Want to keep AI weird? Email me!</p>
                <CopyEmailButton />
            </div>
        </div>
        {/* grid 2 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText text-xl">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications. Orbits as coding things? Yes please!
              Who is the sun though?
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
