import AnimatedHeading from "./AnimatedHeading";

const teamMembers = [
  {
    id: "left",
    name: "TEAM MEMBER",
    role: "",
    style: "aboutAvatarPlaceholder",
    social: "in",
  },
  {
    id: "center",
    name: "FOUNDER",
    role: "X",
    style: "aboutAvatarFounder",
    class: "aboutAvatarFounderClass",
    social: "x",
    icon: "images/team_b.png",
    socialHref: "https://x.com/alaouigrowth",
  },
  {
    id: "right",
    name: "TEAM MEMBER",
    role: "",
    style: "aboutAvatarPlaceholder",
    social: "in",
  },
];

export default function AboutUs() {
  return (
    <section className="aboutSection" id="team">
      <div className="wrapper">
      <AnimatedHeading className="aboutTitle" variant="right">
        A LITTLE
        <br />
        <span className="aboutTitleAccent">ABOUT US</span>
      </AnimatedHeading>

      <div className="aboutGrid">
        {teamMembers.map((member) => (
          <article key={member.id} className={`aboutCard ${member?.class}`}>
            <div className={`aboutAvatar ${member.style}`}>
              {member.icon ? (
                <>
                <img src={member.icon} />
                </>
              ) : (
                <span className="aboutAvatarQuestionMark">?</span>
              )}
            </div>
            <p className={`aboutName ${member.id === "center" ? "aboutNameCenter" : ""}`}>
              {member.name}
            </p>
            <p className="aboutSocial">
              {"socialHref" in member && member.socialHref ? (
                <a
                  href={member.socialHref}
                  className="aboutSocialLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {member.role || member.social}
                </a>
              ) : (
                member.role || member.social
              )}
            </p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
