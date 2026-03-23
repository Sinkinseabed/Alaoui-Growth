const faqItems = [
  "How Does Working With Alaoui Growth Actually Work?",
  "How Does The X Boost Service Work?",
  "Can You Help Before Token Generation Event (TGE)?",
  "Stance On KOL Marketing, Is It Still Worth It?",
  "Do You Handle FUD And Narrative Attacks?",
  "What Types Of Projects Do You Turn Down?",
  "What Does It Cost To Work With You?",
];

export default function FAQ() {
  return (
    <section className="faqSection" id="faq">
      <h2 className="faqTitle">FAQ</h2>
      <p className="faqSubtitle">Frequently Asked Questions</p>

      <div className="faqList">
        {faqItems.map((item) => (
          <article key={item} className="faqItem">
            <p className="faqItemText">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
