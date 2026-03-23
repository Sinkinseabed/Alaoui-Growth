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
    social: "x",
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
      <h2 className="aboutTitle">
        A LITTLE
        <br />
        <span className="aboutTitleAccent">ABOUT US</span>
      </h2>

      <div className="aboutGrid">
        {teamMembers.map((member) => (
          <article key={member.id} className="aboutCard">
            <div className={`aboutAvatar ${member.style}`}>
              {member.id === "center" ? (
                <>
                  <div className="aboutFounderTop">ALAOUI</div>
                  <div className="aboutFounderBottom">CAPITAL</div>
                </>
              ) : null}
            </div>
            <p className={`aboutName ${member.id === "center" ? "aboutNameCenter" : ""}`}>
              {member.name}
            </p>
            <p className="aboutSocial">{member.role || member.social}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
