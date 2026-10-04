"use client";

import { MagicButton } from "@/components/ui/MagicButton";
import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosMail, IoMdArrowRoundBack } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import {
  education,
  projects,
  publications,
  skills,
  socialMedia,
  workExperience,
} from "@/data";

const email = "sbalvinder.fr@gmail.com";
const github = "https://github.com/balv1nder";
const linkedin = "https://www.linkedin.com/in/balvind3rsingh/";

const STICKY_GAP = 24; // px of breathing room below the pinned sidebar

/**
 * `position: sticky` with a `top` offset pins an element once its top edge
 * reaches that offset. When the sidebar is taller than the viewport, a `top` of
 * 0 would pin it immediately and bury its lower half off-screen, and a `bottom`
 * offset does nothing (it shifts an element upward, which is clamped away here).
 *
 * The fix is a *negative* top equal to the sidebar's overflow: the sidebar then
 * scrolls with the page until its bottom edge reaches the bottom of the
 * viewport, and pins there. Sidebars that already fit just use 0.
 */
const useStickyTop = (ref: React.RefObject<HTMLElement>) => {
  const [top, setTop] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const overflow = el.offsetHeight + STICKY_GAP - window.innerHeight;
      setTop(overflow > 0 ? -overflow : 0);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  return top;
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="border-b-2 w-full h-fit SG_500 lg:text-2xl max-lg:text-xl max-lg:text-start pb-4 mt-10">
    {children}
  </div>
);

const SideBlock = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col lg:items-start items-center max-lg:text-center mt-4 w-60">
    <div className="lg:text-sm text-[#FFD29F] SG_normal">{label}</div>
    <div className="mt-2 SG_300 text-sm">{children}</div>
  </div>
);

const Resume = () => {
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const stickyTop = useStickyTop(sidebarRef);

  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/Balvinder_CV.pdf";
    link.download = "BalvinderSingh-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // overflow-x-clip rather than overflow-hidden: the latter makes this a
    // scroll container, which stops the sticky sidebar below from working.
    <div className="bg-[#000319] SG_normal overflow-x-clip">
      <a href="/">
        <span className="absolute top-10 left-10">
          <IoMdArrowRoundBack className="w-10 h-10" />
        </span>
      </a>
      <div className="flex lg:flex-row lg:items-start flex-col gap-4 max-lg:mt-10 lg:m-10 m-3">
        {/* ---------------- Sidebar ---------------- */}
        {/* Scrolls with the page until its bottom edge reaches the bottom of
            the viewport, then pins while the main column keeps scrolling. */}
        <div
          ref={sidebarRef}
          style={{ top: stickyTop }}
          className="col-span-1 lg:w-[25rem] w-full lg:sticky lg:self-start"
        >
          <div className="mt-0 gap-2 flex flex-col justify-start items-center lg:border-r-2 max-lg:justify-center">
            <div className="rounded-full lg:w-[220px] lg:h-[220px] w-48 h-48 overflow-hidden">
              <img src="./mypic.png" alt="Balvinder Singh" />
            </div>
            <p className="SG_700 text-4xl lg:hidden">Balvinder Singh</p>

            <div className="w-fit lg:mt-[-1rem] mt-2" onClick={handleClick}>
              <MagicButton
                title="Download PDF"
                icon={<FaDownload />}
                position="right"
              />
            </div>

            <SideBlock label="Quick Links">
              <div className="flex flex-row justify-center items-center gap-x-2">
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin className="w-7 h-7" />
                </a>
                <a href={`mailto:${email}`} className="text-xl">
                  <IoIosMail className="w-10 h-10" />
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <FaGithub className="w-7 h-7" />
                </a>
              </div>
            </SideBlock>

            <SideBlock label="Looking For">
              <p>
                A 5–6 month software engineering internship from May 2027 —
                backend systems and applied AI.
              </p>
            </SideBlock>

            {skills.map((group) => (
              <SideBlock key={group.label} label={group.label}>
                <p>{group.items}</p>
              </SideBlock>
            ))}

            <SideBlock label="Education">
              {education.map((ed) => (
                <div
                  key={ed.id}
                  className="flex flex-row justify-center items-start gap-x-2 mb-4"
                >
                  <div className="w-10 h-10">
                    <IoSchool className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <p>{ed.school}</p>
                    <p className="SG_300 text-sm">{ed.degree}</p>
                    <p className="SG_300 text-xs text-[#c3c0bc]">{ed.period}</p>
                  </div>
                </div>
              ))}
            </SideBlock>

            <SideBlock label="Also">
              <p>
                English C1 (IELTS 8.0) · Hindi native · German A1 · LeetCode
                1600+
              </p>
            </SideBlock>
          </div>
        </div>

        {/* ---------------- Main column ---------------- */}
        <div className="w-full max-lg:w-[80vw] max-lg:mx-auto max-lg:items-center lg:mx-10 flex flex-row">
          <div className="w-full">
            <div className="border-b-2 w-full h-fit max-lg:mt-10">
              <p className="SG_700 lg:text-4xl mb-2 max-lg:hidden">
                Balvinder Singh
              </p>
              <p className="SG_300 text-[#FFD29F] mb-6 max-lg:text-center">
                Software Engineer — Backend Systems &amp; Applied AI · Paris,
                France
              </p>
              <p className="SG_300 mb-8 lg:text-base max-lg:text-center">
                MSc Artificial Intelligence student at CentraleSupélec with 1.5+
                years at OYO, building backend services and internal tools for
                hotels in Europe, the UK, the USA and the UAE. Experienced with
                scalable distributed backend systems, and co-author of two IEEE
                papers applying LLMs, retrieval-augmented generation and machine
                learning to healthcare and cybersecurity.
              </p>
              <p className="SG_500 lg:text-2xl max-lg:text-xl max-lg:text-start mb-4">
                Work Experience
              </p>
            </div>

            {workExperience.map((job) => (
              <div key={job.id} className="flex flex-col my-5">
                <div className="SG_500 lg:text-2xl text-xl mb-2">
                  <div className="flex flex-row justify-between items-baseline">
                    <p className="font-extrabold">{job.company}</p>
                    <p className="SG_300 lg:text-sm text-[#c3c0bc]">
                      {job.location}
                    </p>
                  </div>

                  {job.roles.map((role) => (
                    <div key={role.title} className="mt-3">
                      <div className="flex flex-row justify-between max-sm:flex-col">
                        <p className="lg:text-xl text-lg">{role.title}</p>
                        <div className="flex flex-row SG_300 items-center lg:text-sm text-[#c3c0bc] gap-x-1">
                          <MdDateRange color="#c3c0bc" className="h-5 w-5" />
                          <p>{role.period}</p>
                        </div>
                      </div>
                      <div className="SG_300 lg:text-base text-sm ml-6 mt-2">
                        <ul className="list-disc">
                          {role.points.map((point) => (
                            <li key={point} className="mb-1">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* ---------------- Projects ---------------- */}
            <SectionHeading>Projects</SectionHeading>
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col my-5">
                <div className="flex flex-row justify-between items-baseline max-sm:flex-col">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="SG_500 lg:text-xl text-lg font-extrabold flex flex-row items-center gap-x-2 hover:text-[#FFD29F] transition-colors"
                  >
                    {project.title}
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                  <p className="SG_300 lg:text-sm text-[#c3c0bc]">
                    {project.date}
                  </p>
                </div>
                <p className="SG_300 lg:text-base text-sm mt-2">
                  {project.des}
                </p>
                <div className="SG_300 lg:text-base text-sm ml-6 mt-2">
                  <ul className="list-disc">
                    {project.highlights.map((h) => (
                      <li key={h} className="mb-1">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-row flex-wrap gap-2 mt-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-lg bg-[#10132E] text-[#c1c2d3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* ---------------- Publications ---------------- */}
            <SectionHeading>Publications</SectionHeading>
            {publications.map((pub) => (
              <div key={pub.id} className="flex flex-col my-5">
                <div className="flex flex-row justify-between items-baseline max-sm:flex-col">
                  <p className="SG_500 lg:text-xl text-lg font-extrabold">
                    {pub.title}
                  </p>
                  <p className="SG_300 lg:text-sm text-[#c3c0bc]">{pub.date}</p>
                </div>
                <p className="SG_300 text-sm text-[#FFD29F] mt-1">
                  {pub.venue} · {pub.note}
                </p>
                <p className="SG_300 lg:text-base text-sm mt-2">{pub.des}</p>
              </div>
            ))}

            {/* ---------------- Awards ---------------- */}
            <SectionHeading>Awards &amp; Achievements</SectionHeading>
            <div className="SG_300 lg:text-base text-sm ml-6 mt-3 mb-7">
              <ul className="list-disc">
                <li>
                  Team Building Block Award at OYO, for supporting the Motel 6
                  (USA) acquisition.
                </li>
                <li>
                  1st among 200+ teams at the National Catapult Techathon,
                  Mahindra Logistics.
                </li>
                <li>
                  Top 10 and finalist, Google APAC AI for Impact Hackathon.
                </li>
                <li>Among the top 30 teams selected for Smart India Hackathon.</li>
                <li>
                  Finalist at HackBVICAM, InnovateX, HackNSUT and SRMHacks.
                </li>
                <li>
                  Contingent leader for E-Summit, IIT Bombay 2024; won awards
                  across multiple competitions.
                </li>
                <li>
                  1st in Pitch Perfect, the startup pitching competition run by
                  the Incubation Cell, NSUT.
                </li>
              </ul>
            </div>

            <div className="flex flex-row items-center gap-x-3 mb-10 max-lg:justify-center">
              {socialMedia.map((profile) => (
                <a
                  key={profile.id}
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg bg-opacity-75 rounded-lg border border-black-300"
                >
                  <img src={profile.img} alt="" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
