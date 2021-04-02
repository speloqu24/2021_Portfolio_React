import React from "react";

const resume = "./Assets/Social-Media-Icons/Personal/Samantha_Peloquin.pdf";


function About() {
  return (
    <>
      <div className="prow row">
        <div className="col abt">
          <img
            src="./Assets/Social-Media-Icons/Personal/Beach.jpg"
            className="persImg"
            alt="onthebeach"
          />
          <p className="abtp">
            Thanks for coming by, my name is Samantha and I want to talk to you
            for a moment about why I think the creation of diverse applications
            are important.
            <br />
            <br />
            The way technology is expanding these days our minds are growing and
            becoming more unique in approaches to solutions. With that being
            said I do find myself witnessing the box it puts small businesses
            in. There are 100 different ways to do one thing, we all know that.
            But what is the best and right way to do it for your company or
            industry? Developing the skill set to create applications that are
            user friendly, appealing, functionally adequate and not so robust
            where users are left scared of it, has me creating the applications
            I do.
            <br />
            <br />
            It's a fun and appropriate challenge to make. The worlds oldest
            technology was the chopping tool. The chopping tool was carved from
            stone and used, as you guessed, to chop things. These SIMPLE tools
            were created to accomplish the same task as a sharp knife. Now they
            just look sexier. So many are intimidated by technology because of
            the robustness of some of the gadgets, systems and applications out
            there. I believe that's because they just don't know the answer to
            the question What is the best and right way to do what I need to do.
            <br />
            <br />
            My point is, as a developer I will take a goal oriented custom
            approach that will result in an easy to use and highly efficient
            application without reinventing the tools to do it.
          </p>
          <a
            className="btn btn-secondary"
            href={resume}
            target="_blank"
            download="Samantha_Peloquin"
          >
            <i className="fa fa-download"></i>
            Download Full Resume
          </a>
          <button
            className="btn btn-secondary"
            href="https://calendly.com/speloqu24"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
}
export default About;
