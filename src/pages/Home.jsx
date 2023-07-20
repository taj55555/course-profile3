import React from "react";
import grp from "../assets/homegrap.svg";
import ShowButton from "../components/fake";

const Home = () => {
  return (
    <section className="pt-[90px]">
      <div className="mx-[15px] md:ml-[260px] xl:px-[20px]">
        <h1 className=" text-[2rem] font-bold leading-[1.2] text-[#272727]">
          Welcome to Open Connect
        </h1>
        <p className=" my-[27px] text-[16px] text-[#3b3b3b]">
          The goal of the Netflix Open Connect programme is to provide our
          millions of Netflix subscribers with the highest-quality viewing
          experience possible. We achieve this goal by partnering with Internet
          Service Providers (ISPs) to deliver our content more efficiently. We
          partner with over a thousand ISPs to localise substantial amounts of
          traffic with Open Connect Appliance embedded deployments, and we have
          an open peering policy at our interconnection locations. If you are an
          ISP with a substantial amount of Netflix traffic, review this
          information to learn more about the programme.
        </p>

        <p className="text-[16px] text-[#3b3b3b] mb-[20px]">
          For more information about Open Connect, see:
        </p>

        <ul className=" list-disc pl-[35px] flex flex-col gap-4 text-[#f0ac2e]">
          <li>
            Open Connect Briefing Paper: A co-operative approach to content
            delivery (PDF – English only)
          </li>
          <li>Overview of Open Connect (PDF – English only)</li>
          <li>Open Connect blog post</li>
        </ul>

        <p className="text-[16px] text-[#3b3b3b] py-[20px]">
          Key links on this site:
        </p>

        <ul className=" list-disc pl-[35px] flex flex-col gap-4 text-[#f0ac2e]">
          <li>ISP partnership options</li>
          <li>Engagement process</li>
          <li>Requirements for deploying embedded Open Connect Appliances</li>
          <li>Deploying embedded appliances</li>
          <li>Peering guidelines and contact information</li>
          <li>Peering locations</li>
        </ul>

        <p className="text-[16px] text-[#3b3b3b] py-[20px]">
          Fill in the appliance request form if you are interested in embedded
          appliance solutions.
        </p>
      </div>

      <div className=" py-[30px]">
        <div className=" w-full h-[30px] bg-[#ECB246] shadow-md"></div>
        <div className=" w-full h-[30px] bg-gray-950"></div>
      </div>

      <section>
        <div className="mx-[15px] xl:px-[20px] md:ml-[260px]">
          <h1 className=" text-[2rem] font-bold leading-[1.2] text-[#272727]">
            How to get started
          </h1>

          <p className="text-[16px] text-[#3b3b3b] py-[20px]">
            The following diagram shows the typical workflow for a new ISP
            partner engagement:
          </p>

          <img src={grp} alt="" className="my-[20px]" />

          <p>
            To begin the engagement process, you complete one of the following
            actions:
          </p>
        </div>
      </section>

      <ShowButton />
    </section>
  );
};

export default Home;
