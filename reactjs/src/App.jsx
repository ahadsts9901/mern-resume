import "./tailwind.css"
import "./App.css"
import React, { useEffect, useState } from 'react'
import { FaChessBishop, FaCode, FaCar, FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaYoutube, FaHtml5, FaCss3, FaJs, FaBootstrap, FaGitAlt, FaSass, FaFigma, FaReact, FaNodeJs, FaChartPie } from "react-icons/fa";
import { SiAdobephotoshop, SiAntdesign, SiAppwrite, SiChai, SiChakraui, SiDaisyui, SiExpress, SiGooglecloud, SiJquery, SiJsonwebtokens, SiLeetcode, SiMarkdown, SiMocha, SiMongodb, SiMongoosedotws, SiMui, SiNestjs, SiNpm, SiPostman, SiRadixui, SiRedux, SiRender, SiSanity, SiSocketdotio, SiTailwindcss, SiTypescript, SiVercel, SiVite, SiYarn } from "react-icons/si";
import { IoLogoCss3, IoLogoFirebase, IoLogoPwa } from "react-icons/io5"
import { TbBrandNextjs, TbBrandReactNative, TbBrandMysql } from "react-icons/tb";
import { BiLogoNetlify } from "react-icons/bi";
import Icon from "./components/Icon";
import { RiShieldKeyholeLine } from "react-icons/ri";
import axios from "axios"

const App = () => {

  const [rank, setRank] = useState(null)

  useEffect(() => {
    getRank()
  }, [])

  const getRank = async () => {

    try {

      const resp = await axios.get("https://committers.top/rank_only/pakistan.json")

      const users = resp.data.user

      for (let i = 0; i < users.length; i++) {

        if (users[i] === "ahadsts9901") {
          setRank(i + 1)
          break
        }

      }

    } catch (error) {
      console.log(error)
      setRank(null)
    }

  }

  console.log(rank)

  return (
    <>
      <div className="shadow w-[44em] h-[64em] bg-[#fff] p-[2em]">
        <div className="flex justify-left items-center w-[100%] h-[6em]">
          <div className="w-[2em] h-[6em] bg-[#fff] flex justify-center items-center"></div>
          <div className="w-[14em] h-[6em] bg-[#fdcb00]">
            <div className="flex justify-center items-center gap-[1em] w-[100%] h-[100%] py-[0.5em] px-[1em]">
              <i className="bi bi-geo-alt-fill text-[1.5em] self-start pt-[0.4em]"></i>
              <a target="_blank" href="https://goo.gl/maps/1nEvLEH2b3TAhfdw5" className="text-[0.8em] font-bold">
                Gulshane Iqbal, Metroville 3 Block 2, Abul Hasan Ispahani Road, Karachi
              </a>
            </div>
          </div>
          <div className="w-[24em] h-[6em] bg-[#fff] flex justify-around items-center gap-[1em] p-[1em]">
            <a target="_blank" href="tel:+923130019086" className="flex flex-col justify-right h-[100%] items-start gap-[0.5em] text-[0.8em]">
              <p className="text-[1em]">Phone</p>
              <p className="text-[0.8em]">+923-130019086</p>
            </a>
            <a target="_blank" href="mailto:muhammadahadansari2@gmail.com" className="flex flex-col justify-right h-[100%] items-start gap-[0.5em] text-[0.8em] w-[10em]">
              <p className="text-[1em]">Email</p>
              <p className="text-[0.8em]">muhammadahad ansari2@gmal.com</p>
            </a>
            <a target="_blank" href="https://social-media-web-0lwr.onrender.com/" className="flex flex-col justify-right h-[100%] items-start gap-[0.5em] text-[0.8em]">
              <p className="text-[1em]">Portfolio</p>
              <p className="text-[0.8em]">https://social-media-web-0lwr.onrender.com/</p>
            </a>
          </div>
        </div>
        <div className="flex justify-left items-center w-[100%] h-[12em]">
          <div className="w-[2em] h-[12em] bg-[#21212f]"></div>
          <img className="w-[14em] h-[12em] object-cover grayscale-[100%] contrast-[2.5]" src="https://avatars.githubusercontent.com/u/120649081?v=4" />
          <div className="img-div w-[14em] h-[12em] bg-[#fdcb00] absolute ml-[2em] z-[20] opacity-[0.5]"></div>
          <div className="relative p-[0.5em_2.5em] w-[24em] h-[12em] bg-[#21212f] text-[#fff] flex flex-col justify-center items-start gap-[0.6em]">
            <div className="absolute top-0 right-0 flex flex-col justify-start items-end triangle">
              <p className="text-right font-bold pr-[12px] pt-2 pad-tri">Top {rank}th</p>
              <p className="text-right pr-2 text-[0.7em] font-bold w-[60%]">Pakistan's Github User</p>
            </div>
            <h1 className="text-[1.8em] flex gap-4 items-start">
              <p>Abdul</p>
              <b className="border-b-2 border-[#fdcb00] pb-[0em]">Ahad</b>
            </h1>
            <p className="text-[0.8em]">MERN Stack Developer</p>
            <p className="text-[0.6em]">
              To offer my skills in an organization offering a visionary career track and a working environment that will enhance my skills and add value to the organization.
            </p>
          </div>
        </div>
        <div className="flex justify-left items-center w-[100%] h-[40em]">
          <div className="w-[2em] h-[40em] bg-[#fff]"></div>
          <div className="flex flex-col justify-right gap-[0.8em] w-[14em] h-[40em] bg-[#fdcb00] p-[1em] pl-[1.6em] pr-[0em]">
            <h1 className="text-[left] w-[100%] text-[1.5em] border-b-2 border-[#21212f] pb-[0.3em] font-bold">Education</h1>
            <p className="text-[1em] font-bold">Matric</p>
            <p className="text-[0.9em] font-normal">Taj Terbeeyat Project No 2 Engish School</p>
            <p className="text-[1em] font-bold">Intermediate</p>
            <p className="text-[0.9em] font-normal">Government Degree Science And Commerce College Korangi</p>
            <p className="text-[1em] font-bold">Web & Mobile App</p>
            <p className="text-[0.9em] font-normal">Saylani Mass IT Training</p>
            <p className="text-[left] w-[100%] text-[1.5em] border-b-2 border-[#21212f] pb-[0.3em] font-bold">Hobbies</p>
            <div className="flex flex-col justify-center items-center gap-[1em] text-[0.8em] p-[1em_0em]">
              <div className="flex justify-left w-[100%] items-center gap-[1em]">
                <FaCode className="w-[1.3em] h-[1.3em] pt-[0.1em] rounded-[20px]" />
                <p>Programming</p>
              </div>
              <div className="flex justify-left w-[100%] items-center gap-[1em]">
                <FaChessBishop className="w-[1.3em] h-[1.3em] pt-[0.1em] rounded-[20px]" />
                <p>Chess</p>
              </div>
              <div className="flex justify-left w-[100%] items-center gap-[1em] h-[fit-content]">
                <FaCar className="w-[1.3em] h-[1.3em] pt-[0.1em] rounded-[20px]" />
                <p>Travelling</p>
              </div>
            </div>
            <p className="text-[left] w-[100%] text-[1.5em] border-b-2 border-[#21212f] pb-[0.3em] font-bold">Social Media</p>
            <div className="flex justify-around items-center w-[100%] h-[fit-content] gap-[1em] text-[0.8em] pr-[2em]">
              <a target='_blank' href="https://github.com/ahadsts9901" className='text-[1.5em]'><FaGithub className="w-[1.2em] h-[1.2em] pt-[0.1em]" /></a>
              <a target='_blank' href="https://www.linkedin.com/in/muhammad-ahad-%F0%9F%87%B5%F0%9F%87%B8-3136b1236/" className='text-[1.5em]'><FaLinkedin className="w-[1.2em] h-[1.2em] pt-[0.1em]" /></a>
              <a target='_blank' href="https://leetcode.com/ahadsts990/" className='text-[1.5em]'><SiLeetcode className="w-[1.2em] h-[1.2em] pt-[0.1em]" /></a>
              <a target='_blank' href="https://wa.me/+923130019086" className='text-[1.5em]'><FaWhatsapp className="w-[1.2em] h-[1.2em] pt-[0.1em]" /></a>
              <a target='_blank' href="https://www.npmjs.com/~ahadsts9901" className='text-[1.5em]'><SiNpm className="w-[1.2em] h-[1.2em] pt-[0.1em]" /></a>
            </div>
          </div>
          <div className="w-[24em] h-[40em] bg-[#fff] p-[2em] pt-[1em] pr-0 flex flex-col justify-right items-start gap-[1em]">
            <h2 className="text-[1.5em] font-bold">Experience</h2>
            <p className="text-[0.85em] border-b-2 border-[#fdcb00] pb-[0.5em]">Software Developer Experience (18 Months)</p>

            <a target="_blank" href="https://pk.linkedin.com/company/techzonelearning" className="flex justify-left items-center gap-[1em] text-[0.8em] w-[100%]">
              <p className="p-[0.5em_1em] text-[#fff] bg-[#21212f] rounded-[0.7em] w-[13em] text-center">Sep 2023 - Nov 2023</p>
              <p className="font-bold">Trainer</p>
            </a>

            <a target="_blank" href="https://www.eaisoft.com/" className="flex justify-left items-center gap-[1em] text-[0.8em] w-[100%]">
              <p className="p-[0.5em_1em] text-[#fff] bg-[#21212f] rounded-[0.7em] w-[13em] text-center">Nov 2023 - Present</p>
              <p className="font-bold">MERN Stack</p>
            </a>

            <h2 className="text-[1.5em] font-bold pt-[0.5em]">Best Projects</h2>
            <div className="experties flex flex-wrap gap-2">
              <a target="_blank" href="https://github.com/ahadsts9901/social-app-nextjs" className="bg-[#dadada] p-[4px] rounded-sm flex justify-center items-center font-bold text-[0.8em]">Social posting app (V2)</a>
              <a target="_blank" href="https://github.com/ahadsts9901/polling-app" className="bg-[#dadada] p-[4px] rounded-sm flex justify-center items-center font-bold text-[0.8em]">Voting App</a>
              <a target="_blank" href="https://github.com/ahadsts9901/drawing-app" className="bg-[#dadada] p-[4px] rounded-sm flex justify-center items-center font-bold text-[0.8em]">Paint App</a>
              <a target="_blank" href="https://github.com/ahadsts9901/smit-b9-mini-hackathon" className="bg-[#dadada] p-[4px] rounded-sm flex justify-center items-center font-bold text-[0.8em]">Blogging app</a>
              <a target="_blank" href="https://github.com/ahadsts9901/gaming-zone" className="bg-[#dadada] p-[4px] rounded-sm flex justify-center items-center font-bold text-[0.8em]">Gaming Zone</a>
              <a target="_blank" href="https://github.com/ahadsts9901/chat-app-nextjs" className="bg-[#dadada] p-[4px] rounded-sm flex justify-center items-center font-bold text-[0.8em]">Chat app Nextjs</a>
              <a target="_blank" href="https://github.com/ahadsts9901/nestjs-chat-app" className="bg-[#dadada] p-[4px] rounded-sm flex justify-center items-center font-bold text-[0.8em]">Chat app Nestjs</a>
              <a target="_blank" href="https://github.com/ahadsts9901/smit-b9-final-hackathon" className="bg-[#dadada] p-[4px] rounded-sm flex justify-center items-center font-bold text-[0.8em]">Attendance app</a>
              <a target="_blank" href="https://github.com/ahadsts9901/smit-b8-final-hackathon" className="bg-[#dadada] p-[4px] rounded-sm flex justify-center items-center font-bold text-[0.8em]">Shopping app</a>
              <a target="_blank" href="https://github.com/ahadsts9901/blog-app-sanity-nextjs" className="bg-[#dadada] p-[4px] rounded-sm flex justify-center items-center font-bold text-[0.8em]">Blog app sanity</a>
            </div>

            <h2 className="text-[1.5em] font-bold">Expertise</h2>
            <div className="experties flex justify-start items-start gap-2 flex-wrap">
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Git</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Javascript</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Typescript</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Nextjs</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Reactjs</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Nodejs</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Expressjs</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Mongodb</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Nestjs</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Tailwindcss</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Material UI</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Redux Toolkit</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">Firebase</p>
              <p className="font-bold text-[0.8em] bg-[#dadada] p-[4px] px-2 rounded-sm">React Native</p>
              {/* <FaGitAlt className="w-[1.5em] h-[1.5em]" /> */}
              {/* <FaHtml5 className="w-[1.5em] h-[1.5em]" /> */}
              {/* <IoLogoCss3 className="w-[1.5em] h-[1.5em]" /> */}
              {/* <FaJs className="w-[1.5em] h-[1.5em]" /> */}
              {/* <FaBootstrap className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiTailwindcss className="w-[1.5em] h-[1.5em]" /> */}
              {/* <IoLogoFirebase className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiAppwrite className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiTypescript className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiGooglecloud className="w-[1.5em] h-[1.5em]" /> */}
              {/* <FaSass className="w-[1.5em] h-[1.5em]" /> */}
              {/* <FaFigma className="w-[1.5em] h-[1.5em]" /> */}
              {/* <FaReact className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiVite className="w-[1.5em] h-[1.5em]" /> */}
              {/* <TbBrandNextjs className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiRedux className="w-[1.5em] h-[1.5em]" /> */}
              {/* <FaNodeJs className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiExpress className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiNestjs className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiMongodb className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiPostman className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiJsonwebtokens className="w-[1.5em] h-[1.5em]" /> */}
              {/* <IoLogoPwa className="w-[1.5em] h-[1.5em]" /> */}
              {/* <TbBrandReactNative className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiNpm className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiYarn className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiMui className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiChakraui className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiAntdesign className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiDaisyui className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiRadixui className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiSanity className="w-[1.5em] h-[1.5em]" /> */}
              {/* <RiShieldKeyholeLine className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiSocketdotio className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiMocha className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiChai className="w-[1.5em] h-[1.5em]" /> */}
              {/* <FaChartPie className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiRender className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiMarkdown className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiAdobephotoshop className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiVercel className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiMongoosedotws className="w-[1.5em] h-[1.5em]" /> */}
              {/* <BiLogoNetlify className="w-[1.5em] h-[1.5em]" /> */}
              {/* <SiJquery className="w-[1.5em] h-[1.5em]" /> */}
              {/* <TbBrandMysql className="w-[1.5em] h-[1.5em]" /> */}
              {/* <Icon className="pineCone" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
