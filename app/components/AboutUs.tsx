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
    class:"aboutAvatarFounderClass",
    social: "x",
    icon: "images/team_b.png"
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
      <h2 className="aboutTitle">
        A LITTLE
        <br />
        <span className="aboutTitleAccent">ABOUT US</span>
      </h2>

      <div className="aboutGrid">
        {teamMembers.map((member) => (
          <article key={member.id} className={`aboutCard ${member?.class}`}>
            <div className={`aboutAvatar ${member.style}`}>
              {member.icon ? (
                <>
                <img src={member.icon} />
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
      </div>
    </section>
  );
}
