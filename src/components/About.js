import React from "react";

function About() {
  return (
    <>
      <div className="prow row">
        <div className="col abt">
          <p className="abtp">
            Thanks for coming by, my name is Samantha and I want to talk to you
            for a moment about why I think the creation of diverse applications
            are important.
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
            The worlds oldest technology was the chopping tool. The chopping
            tool was carved from stone and used, as you guessed, to chop things.
            These SIMPLE tools were created to accomplish the same task as a
            sharp knife. Now they just look sexier. So many are intimidated by
            technology because of the robustness of some of the gadgets, systems
            and applications out there. I believe that's because they just don't
            know the answer to the question What is the best and right way to do
            what I need to do.
            <br />
            As a developer I will take a goal oriented, custom approach that
            will result in an easy to use and highly efficient application
            without reinventing the chopping tool to do it.
          </p>
        </div>
        <div class="col">
          <img
            src="./Assets/Social-Media-Icons/Personal/Beach.jpg"
            className="persImg"
            alt="onthebeach"
          />
          <div class="download">
            <a
              className="btn btn-secondary"
              href="./Assets/Social-Media-Icons/Personal/Samantha_Peloquin.pdf"
              download="Samantha_Peloquin"
            >
              <i className="fa fa-download"></i>
              Download Full Resume
            </a>
          </div>
          <img
            src="./Assets/Social-Media-Icons/Personal/Travel.jpg"
            className="persImg"
            alt="newzealand"
          />
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
