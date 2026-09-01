import { useState } from "react";
import "./index.css";

/*
============================================================
KATE STUDIO — TEMPLATE SHOWCASE
============================================================

EDITABLE AREA:
- Add/edit templates inside the "templates" array below.
- You do NOT need to touch the carousel code.
- When you add more templates, arrows automatically work.
- Change your social links in the SOCIALS section.
- Change prices/details directly inside each template.
============================================================
*/


/* ============================================================
   SOCIALS — EDIT THESE
   ============================================================ */

const SOCIALS = {
  tiktok:
    "https://www.tiktok.com/@katestudiooo",

  telegram:
    "https://web.telegram.org/k/",
};


/* ============================================================
   TEMPLATES
   ============================================================

   TO ADD A NEW TEMPLATE:

   Copy ONE entire object below and paste it after the last one.

   Example:

   {
     id: "T004",
     title: "Your New Template",
     category: "Romantic",
     price: 250,
     description: "Your description here.",
     preview: "https://your-link.netlify.app/",
     link: "https://your-link.netlify.app/",
     tags: ["Romantic", "Elegant"],
   },

   That's it.
   The carousel will automatically include it.
============================================================ */

const templates = [
  {
    id: "T001",
    title: "Love Story",
    category: "Romantic · Storytelling",
    price: 250,

    description:
      "A sweet and intimate digital love story made for couples who want to turn their memories, milestones, and little moments into a beautiful interactive experience.",

    preview:
      "https://t001-love-story-template.netlify.app/",

    link:
      "https://t001-love-story-template.netlify.app/",

    tags: [
      "Love Story",
      "Couples",
      "Anniversary",
    ],
  },

  {
    id: "T002",
    title: "Love Notes",
    category: "Soft · Personal",
    price: 250,

    description:
      "A soft digital love letter experience made for heartfelt messages, memories, photos, and everything you wish you could say to your person.",

    preview:
      "https://t002-love-notes-template.netlify.app/#dear-you",

    link:
      "https://t002-love-notes-template.netlify.app/#dear-you",

    tags: [
      "Love Letter",
      "Couples",
      "Sweet",
    ],
  },

  {
    id: "T003",
    title: "Our Little Universe",
    category: "Interactive · Animated",
    price: 399,

    description:
      "A more immersive interactive experience filled with animations, memories, music, and little details designed to feel like your own tiny universe together.",

    preview:
      "https://t003-our-little-universe-template.netlify.app/",

    link:
      "https://t003-our-little-universe-template.netlify.app/",

    tags: [
      "Interactive",
      "Animated",
      "Premium",
    ],
  },
];


/* ============================================================
   INCLUDED
============================================================ */

const included = [
  "Personal names / couple names",
  "Custom messages and text",
  "Your photos",
  "Date / anniversary details",
  "Basic content replacement",
  "Responsive mobile design",
  "Desktop-friendly layout",
  "Template deployment",
  "Live website link",
  "One minor revision",
];


/* ============================================================
   BASIC PERSONALIZATION
============================================================ */

const personalization = [
  {
    title: "Names & Text",
    description:
      "Your names, greetings, love messages, dates, captions, and other written content can be replaced.",
  },
  {
    title: "Photos",
    description:
      "Send your preferred photos and we will place them into the appropriate sections of the template.",
  },
  {
    title: "Music",
    description:
      "You may provide your preferred song or music link, subject to platform availability.",
  },
  {
    title: "Details",
    description:
      "Dates, nicknames, relationship milestones, short notes, and other basic information can be personalized.",
  },
];


/* ============================================================
   ADD-ONS
============================================================

   ADD / REMOVE ITEMS HERE.
============================================================ */

const addons = [
  {
    name: "Custom Color Palette",
    price: "₱60+",
    description:
      "Want the template to match your preferred colors? Send your chosen HEX colors or a Color Hunt palette.",
  },
  {
    name: "Extra Revision",
    price: "₱60+",
    description:
      "For revisions beyond the one minor revision included in the base package.",
  },
  {
    name: "Additional Customization",
    price: "₱65+",
    description:
      "Small design/content changes outside the included personalization.",
  },
  {
    name: "Extra Section",
    price: "₱100+",
    description:
      "Need an additional section or content block not included in the selected template?",
  },
];


/* ============================================================
   CONDITIONS / TERMS
============================================================ */

const conditions = [
  "Base price covers personalization of the selected existing template.",
  "Basic personalization includes names, text, photos, dates, and similar content replacement.",
  "One minor revision is included after the first version is presented.",
  "The included revision is for small corrections or minor adjustments only.",
  "Major redesigns, new sections, structural changes, or additional features may require an add-on fee.",
  "Custom color palettes are not included in the base price and start at ₱60.",
  "For custom colors, please provide HEX codes or a palette reference such as Color Hunt.",
  "Work starts once the required content and materials have been provided.",
  "Standard delivery is 3–5 days.",
  "If the website is completed earlier, it may be delivered ahead of the estimated timeframe.",
  "Delivery time may depend on the completeness of the client's submitted materials and revision requests.",
  "The client is responsible for providing accurate names, dates, messages, photos, links, and other materials.",
  "The client must review the final website before approval.",
  "Once the final version is approved, additional changes may be treated as paid revisions.",
  "Third-party services, music availability, external links, or platform restrictions are outside Kate Studio's control.",
];


/* ============================================================
   COMPONENT — ICON
============================================================ */

function ArrowIcon({ direction = "right" }) {
  return (
    <span className="arrow-icon" aria-hidden="true">
      {direction === "left" ? "←" : "→"}
    </span>
  );
}


/* ============================================================
   COMPONENT — TEMPLATE CARD
============================================================ */

function TemplateCard({ template, onView }) {
  return (
    <article className="template-card">

      {/* LIVE TEMPLATE PREVIEW */}
      <div className="template-preview">

        <iframe
          src={template.preview}
          title={`${template.title} live preview`}
          loading="lazy"
          scrolling="no"
        />

        <div className="preview-gradient" />

        <div className="preview-top">
          <span>{template.id}</span>
          <span>LIVE PREVIEW</span>
        </div>

        <div className="preview-bottom">
          <span>Click below to view full template</span>
        </div>

      </div>


      {/* TEMPLATE INFORMATION */}
      <div className="template-content">

        <div className="template-meta">
          <span>{template.id}</span>
          <span>{template.category}</span>
        </div>

        <h3>{template.title}</h3>

        <p className="template-description">
          {template.description}
        </p>


        {/* TAGS */}
        <div className="template-tags">
          {template.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>


        {/* PRICE */}
        <div className="price-area">
          <div>
            <span className="price-label">Starts at</span>
            <strong>₱{template.price}</strong>
          </div>

          <button
            className="view-button"
            onClick={() => onView(template)}
          >
            View Template
            <ArrowIcon />
          </button>
        </div>

      </div>

    </article>
  );
}


/* ============================================================
   COMPONENT — TEMPLATE MODAL
============================================================ */

function TemplateModal({ template, onClose }) {
  if (!template) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >

      <div
        className="template-modal"
        onClick={(event) => event.stopPropagation()}
      >

        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>


        {/* BIG PREVIEW */}
        <div className="modal-preview">

          <iframe
            src={template.preview}
            title={`${template.title} preview`}
            loading="eager"
            scrolling="no"
          />

        </div>


        <div className="modal-body">

          <div className="modal-meta">
            {template.id} · {template.category}
          </div>

          <h2>{template.title}</h2>

          <div className="modal-price">
            Starts at <strong>₱{template.price}</strong>
          </div>

          <p className="modal-description">
            {template.description}
          </p>


          <div className="modal-section">

            <h3>Perfect for</h3>

            <div className="modal-tags">
              {template.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

          </div>


          <div className="modal-section">

            <h3>Want this template?</h3>

            <p>
              Send us your preferred template, names, photos,
              messages, dates, and other details. We'll personalize
              the existing design for you.
            </p>

            <a
              className="modal-live-button"
              href={template.link}
              target="_blank"
              rel="noreferrer"
            >
              Open Full Template
              <ArrowIcon />
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   MAIN APP
============================================================ */

export default function App() {

  const [currentPage, setCurrentPage] = useState(0);

  const [selectedTemplate, setSelectedTemplate] =
    useState(null);

  const [termsChecked, setTermsChecked] =
    useState(false);


  /*
  ============================================================
  CAROUSEL SETTINGS

  Desktop = 4 cards
  Tablet  = 2 cards
  Mobile  = 1 card

  CSS controls how many are visually shown.
  React only moves the carousel.
  ============================================================
  */

  const totalTemplates = templates.length;


  /*
  We use one-card movement.
  This makes adding templates completely automatic.
  */

  const nextSlide = () => {

    setCurrentPage((previous) => {

      if (previous >= totalTemplates - 1) {
        return 0;
      }

      return previous + 1;
    });
  };


  const previousSlide = () => {

    setCurrentPage((previous) => {

      if (previous <= 0) {
        return totalTemplates - 1;
      }

      return previous - 1;
    });
  };


  const goToSlide = (index) => {
    setCurrentPage(index);
  };


  return (
    <div className="site-shell">


      {/* ======================================================
         TOP BAR
      ====================================================== */}

      <div className="top-ribbon">
        <span>Kate Studio</span>
        <i>✦</i>
        Digital templates made with care
      </div>


      {/* ======================================================
         NAVIGATION
      ====================================================== */}

      <header className="navbar">

        <div className="nav-inner">

          <a
            href="#home"
            className="brand"
          >
            <span className="brand-main">
              KATE STUDIO
            </span>

            <span className="brand-sub">
              DIGITAL LOVE EXPERIENCES
            </span>
          </a>


          <nav className="nav-links">

            <a href="#templates">
              Templates
            </a>

            <a href="#personalization">
              Personalization
            </a>

            <a href="#addons">
              Add-ons
            </a>

            <a href="#terms">
              Terms
            </a>

          </nav>

        </div>

      </header>


      {/* ======================================================
         HERO
      ====================================================== */}

      <main>

        <section
          className="hero"
          id="home"
        >

          <div className="hero-decoration decoration-one">
            ✦
          </div>

          <div className="hero-decoration decoration-two">
            ♡
          </div>

          <div className="hero-decoration decoration-three">
            ✧
          </div>


          <div className="hero-content">

            <div className="eyebrow">
              <span>♡</span>
              Made for your story
            </div>

            <h1>
              Little websites
              <br />
              for <em>big feelings.</em>
            </h1>

            <p>
              Personalized digital love experiences designed
              to turn your memories, messages, and moments
              into something you can keep and share.
            </p>


            <div className="hero-actions">

              <a
                className="primary-button"
                href="#templates"
              >
                Browse Templates
                <ArrowIcon />
              </a>

              <a
                className="text-button"
                href="#personalization"
              >
                What's included?
                <span>↓</span>
              </a>

            </div>


            <div className="hero-note">
              STARTING AT ₱250 · 3–5 DAY DELIVERY
            </div>

          </div>

        </section>


        {/* ====================================================
           TEMPLATE INTRO
        ==================================================== */}

        <section className="intro-section">

          <div className="section-heading centered">

            <span className="mini-label">
              THE COLLECTION
            </span>

            <h2>
              Choose the feeling.
            </h2>

            <p>
              Pick a template that already feels like you.
              We'll personalize the content so your final
              website feels uniquely yours.
            </p>

          </div>

        </section>


        {/* ====================================================
           TEMPLATE GALLERY
        ==================================================== */}

        <section
          className="templates-section"
          id="templates"
        >

          <div className="gallery-header">

            <div>

              <span className="mini-label">
                KATE STUDIO TEMPLATES
              </span>

              <h2>
                Made to be experienced.
              </h2>

            </div>


            {/* ARROWS */}

            <div className="carousel-controls">

              <button
                className="carousel-arrow"
                onClick={previousSlide}
                aria-label="Previous templates"
              >
                ←
              </button>

              <button
                className="carousel-arrow"
                onClick={nextSlide}
                aria-label="Next templates"
              >
                →
              </button>

            </div>

          </div>


          {/* ==================================================
             CAROUSEL

             IMPORTANT:
             DO NOT EDIT THIS.

             Just add templates above.
          ================================================== */}

          <div className="carousel-window">

            <div
              className="carousel-track"
              style={{
                transform:
                  `translateX(-${currentPage * 25}%)`,
              }}
            >

              {templates.map((template) => (

                <div
                  className="carousel-item"
                  key={template.id}
                >

                  <TemplateCard
                    template={template}
                    onView={setSelectedTemplate}
                  />

                </div>

              ))}

            </div>

          </div>


          {/* DOTS */}

          <div className="carousel-dots">

            {templates.map((template, index) => (

              <button
                key={template.id}
                className={
                  index === currentPage
                    ? "carousel-dot active"
                    : "carousel-dot"
                }
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${template.id}`}
              />

            ))}

          </div>


          <p className="gallery-note">
            More templates will be added to the collection.
            <span>♡</span>
          </p>

        </section>


        {/* ====================================================
           WHY KATE STUDIO
        ==================================================== */}

        <section className="why-section">

          <div className="why-inner">

            <div className="why-copy">

              <span className="mini-label">
                WHY KATE STUDIO
              </span>

              <h2>
                Not just a template.
                <br />
                <em>It's yours.</em>
              </h2>

              <p>
                Every template is coded and designed with
                intention. Instead of giving you a generic
                file and leaving you to figure everything out,
                Kate Studio handles the personalization and
                deployment for you.
              </p>

              <p>
                You choose the design. You provide the story.
                We turn them into a little digital experience
                made specifically for you.
              </p>

            </div>


            <div className="promise-card">

              <div className="promise-icon">
                ✿
              </div>

              <h3>
                Coded with care.
              </h3>

              <div className="promise-line" />

              <p>
                Built from scratch with responsive,
                lightweight code so your website looks
                beautiful without unnecessary heaviness.
              </p>

              <div className="promise-details">

                <span>RESPONSIVE</span>
                <span>LIGHTWEIGHT</span>
                <span>PERSONALIZED</span>
                <span>DEPLOYED</span>

              </div>

            </div>

          </div>

        </section>


        {/* ====================================================
           PERSONALIZATION
        ==================================================== */}

        <section
          className="personalization-section"
          id="personalization"
        >

          <div className="section-heading centered">

            <span className="mini-label">
              BASIC PERSONALIZATION
            </span>

            <h2>
              What's included?
            </h2>

            <p>
              Your selected template already comes with
              basic personalization. You don't need to
              rebuild the website yourself.
            </p>

          </div>


          <div className="personalization-grid">

            {personalization.map((item, index) => (

              <article
                className="personalization-card"
                key={item.title}
              >

                <span className="card-number">
                  0{index + 1}
                </span>

                <div className="small-icon">
                  ✦
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>

            ))}

          </div>


          <div className="included-box">

            <div>

              <span className="mini-label">
                INCLUDED IN THE BASE PRICE
              </span>

              <h3>
                Your little details,
                <br />
                already taken care of.
              </h3>

            </div>


            <div className="included-list">

              {included.map((item) => (

                <div key={item}>
                  <span className="check">
                    ✓
                  </span>

                  {item}
                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ====================================================
           ADD-ONS
        ==================================================== */}

        <section
          className="addons-section"
          id="addons"
        >

          <div className="section-heading centered">

            <span className="mini-label">
              WANT A LITTLE EXTRA?
            </span>

            <h2>
              Add-ons
            </h2>

            <p>
              Basic personalization is included. Additional
              design work can be requested separately.
              Add-ons start at ₱60.
            </p>

          </div>


          <div className="addon-grid">

            {addons.map((addon, index) => (

              <article
                className="addon-card"
                key={addon.name}
              >

                <span className="addon-number">
                  0{index + 1}
                </span>

                <h3>
                  {addon.name}
                </h3>

                <p>
                  {addon.description}
                </p>

                <strong>
                  {addon.price}
                </strong>

              </article>

            ))}

          </div>


          <div className="palette-note">

            <div className="palette-symbol">
              ◌
            </div>

            <div>

              <strong>
                About custom colors
              </strong>

              <p>
                The template's original color palette is
                included. If you want a different custom
                palette, that's an add-on starting at ₱60.
                You can send HEX codes or choose a palette
                from Color Hunt.
              </p>

            </div>

          </div>

        </section>


        {/* ====================================================
           PROCESS
        ==================================================== */}

        <section className="process-section">

          <div className="section-heading centered">

            <span className="mini-label">
              HOW IT WORKS
            </span>

            <h2>
              Simple from start to finish.
            </h2>

          </div>


          <div className="process-grid">

            <article className="process-card">
              <span>01</span>

              <div className="process-icon">
                ♡
              </div>

              <h3>
                Choose
              </h3>

              <p>
                Pick your preferred Kate Studio template
                and send us your order details.
              </p>

            </article>


            <article className="process-card">
              <span>02</span>

              <div className="process-icon">
                ✎
              </div>

              <h3>
                Send
              </h3>

              <p>
                Provide your names, messages, photos,
                dates, music, and other details.
              </p>

            </article>


            <article className="process-card">
              <span>03</span>

              <div className="process-icon">
                ✦
              </div>

              <h3>
                We code
              </h3>

              <p>
                We personalize and prepare your selected
                template for you.
              </p>

            </article>


            <article className="process-card">
              <span>04</span>

              <div className="process-icon">
                ✓
              </div>

              <h3>
                Review
              </h3>

              <p>
                You'll receive the first version and may
                request one minor revision.
              </p>

            </article>


            <article className="process-card">
              <span>05</span>

              <div className="process-icon">
                ↗
              </div>

              <h3>
                Receive
              </h3>

              <p>
                Once approved, we'll provide your live
                website link.
              </p>

            </article>

          </div>

        </section>


        {/* ====================================================
           DELIVERY BANNER
        ==================================================== */}

        <section className="delivery-section">

          <div className="delivery-inner">

            <div>

              <span className="mini-label">
                DELIVERY
              </span>

              <h2>
                3–5 days,
                <br />
                sometimes sooner.
              </h2>

              <p>
                Our standard delivery time is 3–5 days.
                If your website is completed earlier,
                we'll gladly send it ahead of schedule.
              </p>

            </div>


            <div className="delivery-badge">

              <span>
                ESTIMATED
              </span>

              <strong>
                3–5
              </strong>

              <span>
                DAYS
              </span>

            </div>

          </div>

        </section>


        {/* ====================================================
           TERMS
        ==================================================== */}

        <section
          className="terms-section"
          id="terms"
        >

          <div className="terms-card">

            <div className="section-heading">

              <span className="mini-label">
                BEFORE YOU ORDER
              </span>

              <h2>
                A few important things.
              </h2>

              <p>
                Please read these before placing an order
                so expectations are clear for both sides.
              </p>

            </div>


            <div className="terms-grid">

              {conditions.map((condition, index) => (

                <div key={condition}>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {condition}
                  </p>

                </div>

              ))}

            </div>


            {/* WORKING CHECKBOX */}

            <div className="agreement-box">

              <label className="agreement-label">

                <input
                  type="checkbox"
                  checked={termsChecked}
                  onChange={(event) =>
                    setTermsChecked(
                      event.target.checked
                    )
                  }
                />

                <span className="custom-checkbox">

                  {termsChecked && "✓"}

                </span>


                <span>
                  I have read and understood the
                  personalization, revision, delivery,
                  add-on, and approval conditions above.
                </span>

              </label>


              <div className="agreement-status">

                {termsChecked
                  ? "✓ You may now contact Kate Studio."
                  : "Please check the box before contacting us."}

              </div>


              <div className="locked-buttons">

                <a
                  href={termsChecked ? SOCIALS.tiktok : undefined}
                  target={termsChecked ? "_blank" : undefined}
                  rel="noreferrer"
                  className={
                    termsChecked
                      ? "contact-button enabled"
                      : "contact-button"
                  }
                  onClick={(event) => {
                    if (!termsChecked) {
                      event.preventDefault();
                    }
                  }}
                >
                  TikTok
                </a>


                <a
                  href={
                    termsChecked
                      ? SOCIALS.telegram
                      : undefined
                  }
                  target={termsChecked ? "_blank" : undefined}
                  rel="noreferrer"
                  className={
                    termsChecked
                      ? "contact-button enabled telegram"
                      : "contact-button"
                  }
                  onClick={(event) => {
                    if (!termsChecked) {
                      event.preventDefault();
                    }
                  }}
                >
                  Telegram
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* ====================================================
           CONTACT
        ==================================================== */}

        <section className="contact-section">

          <div className="contact-decoration">
            ♡
          </div>

          <div className="contact-content">

            <span className="mini-label">
              HAVE A TEMPLATE IN MIND?
            </span>

            <h2>
              Let's make it yours.
            </h2>

            <p>
              Choose a design, prepare your little details,
              and let Kate Studio handle the rest.
            </p>


            <div className="contact-buttons">

              <a
                className={
                  termsChecked
                    ? "contact-button large enabled"
                    : "contact-button large"
                }
                href={
                  termsChecked
                    ? SOCIALS.tiktok
                    : undefined
                }
                target={
                  termsChecked
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
                onClick={(event) => {
                  if (!termsChecked) {
                    event.preventDefault();
                  }
                }}
              >
                Message on TikTok
                <ArrowIcon />
              </a>


              <a
                className={
                  termsChecked
                    ? "contact-button large telegram enabled"
                    : "contact-button large telegram"
                }
                href={
                  termsChecked
                    ? SOCIALS.telegram
                    : undefined
                }
                target={
                  termsChecked
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
                onClick={(event) => {
                  if (!termsChecked) {
                    event.preventDefault();
                  }
                }}
              >
                Contact on Telegram
                <ArrowIcon />
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ======================================================
         FOOTER
      ====================================================== */}

      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <span className="brand-main">
              KATE STUDIO
            </span>

            <span className="brand-sub">
              DIGITAL LOVE EXPERIENCES
            </span>

          </div>


          <div className="footer-links">

            <a
              href={SOCIALS.tiktok}
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>

            <a
              href={SOCIALS.telegram}
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>

            <a href="#terms">
              Terms
            </a>

          </div>

        </div>


        <p className="copyright">
          © {new Date().getFullYear()} Kate Studio.
          Designed & coded with care.
        </p>

      </footer>


      {/* ======================================================
         MODAL
      ====================================================== */}

      <TemplateModal
        template={selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
      />

    </div>
  );
}