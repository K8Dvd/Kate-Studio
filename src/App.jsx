import { useMemo, useRef, useState } from "react";
import "./index.css";

/*
============================================================
KATE STUDIO — MAIN CONFIG
============================================================

THIS IS THE MAIN PLACE YOU EDIT.

TO ADD A NEW TEMPLATE:

1. Copy one complete template object.
2. Paste it before the closing ];
3. Change the information.
4. Save the file.

The carousel automatically detects new templates.

IMPORTANT:
- preview = URL shown inside the live preview
- link = URL opened when "View Template" is clicked
- price = displayed price
- description = short description
- perfectFor = who the template is good for
- included = things included in the base price
*/

const templates = [
  {
    id: "T001",
    title: "Love Story",
    category: "Romantic Website",
    price: 250,

    // TEMPLATE WEBSITE URL
    preview: "https://t001-love-story-template.netlify.app/",
    link: "https://t001-love-story-template.netlify.app/",

    description:
      "A sweet digital love story made to turn your favorite memories into a beautiful little website.",

    perfectFor:
      "Anniversaries, monthsaries, birthdays, long-distance relationships, and simple romantic surprises.",

    included: [
      "Responsive website",
      "Basic personalization",
      "Names & text replacement",
      "Photo replacement",
      "Mobile-friendly layout",
    ],
  },

  {
    id: "T002",
    title: "Love Notes",
    category: "Interactive Love Letter",
    price: 250,

    // TEMPLATE WEBSITE URL
    preview: "https://t002-love-notes-template.netlify.app/#dear-you",
    link: "https://t002-love-notes-template.netlify.app/#dear-you",

    description:
      "A soft and personal digital letter designed for sweet messages, memories, and little things you want to say.",

    perfectFor:
      "Letters for your partner, Valentine's Day, anniversaries, birthdays, and heartfelt surprises.",

    included: [
      "Responsive website",
      "Basic personalization",
      "Names & text replacement",
      "Photo replacement",
      "Mobile-friendly layout",
    ],
  },

  {
    id: "T003",
    title: "Our Little Universe",
    category: "Interactive Experience",
    price: 399,

    // TEMPLATE WEBSITE URL
    preview: "https://t003-our-little-universe-template.netlify.app/",
    link: "https://t003-our-little-universe-template.netlify.app/",

    description:
      "A more immersive interactive experience filled with animations and little details that make your story feel like its own universe.",

    perfectFor:
      "Big romantic surprises, anniversaries, birthdays, proposals, and couples who want something extra special.",

    included: [
      "Responsive website",
      "Basic personalization",
      "Names & text replacement",
      "Photo replacement",
      "Interactive animations",
      "Mobile-friendly layout",
    ],
  },

  /*
  ============================================================
  ADD NEW TEMPLATES HERE
  ============================================================

  COPY THIS:

  {
    id: "T004",
    title: "Your Template Name",
    category: "Template Category",
    price: 299,

    preview: "https://your-template.netlify.app/",
    link: "https://your-template.netlify.app/",

    description:
      "Short description of your template.",

    perfectFor:
      "Tell buyers what this template is perfect for.",

    included: [
      "Responsive website",
      "Basic personalization",
      "Names & text replacement",
      "Photo replacement",
      "Mobile-friendly layout",
    ],
  },

  ============================================================
  */
];

/*
============================================================
SOCIAL LINKS
============================================================

EDIT THESE IF YOUR SOCIAL LINKS CHANGE.
*/

const SOCIALS = {
  tiktok: "https://www.tiktok.com/@katestudiooo",
  telegram: "https://web.telegram.org/k/",
};

/*
============================================================
ICONS
============================================================
*/

function ArrowLeft() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M19 12H5M11 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.8 8.7c0 5.1-8.8 10.1-8.8 10.1S3.2 13.8 3.2 8.7A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12 4.2 4.2L19 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/*
============================================================
MAIN APP
============================================================
*/

export default function App() {
  const carouselRef = useRef(null);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [agreed, setAgreed] = useState(false);

  /*
  ============================================================
  CAROUSEL
  ============================================================

  Works with:
  - desktop arrows
  - mobile arrows
  - touch/swipe
  - any number of cards
  */

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const card = carousel.querySelector(".template-card");

    if (!card) return;

    const gap = 22;
    const amount = card.getBoundingClientRect().width + gap;

    carousel.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  };

  /*
  ============================================================
  SECTION NAVIGATION
  ============================================================
  */

  const scrollToSection = (id) => {
    setMobileMenu(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /*
  ============================================================
  CONTACT MESSAGE
  ============================================================
  */

  const contactMessage = useMemo(
    () =>
      encodeURIComponent(
        "Hi Kate Studio! I’m interested in ordering a digital website template. I have read and understood the ordering conditions and would like to ask about the available templates and customization options."
      ),
    []
  );

  const telegramLink = `${SOCIALS.telegram}?text=${contactMessage}`;

  return (
    <div className="site-shell">

      {/* ======================================================
          TOP RIBBON
          ====================================================== */}

      <div className="top-ribbon">
        <span>♡</span>
        Digital websites made with care
        <span>♡</span>
      </div>

      {/* ======================================================
          NAVBAR
          ====================================================== */}

      <header className="navbar">
        <div className="nav-inner">

          <button
            className="brand"
            onClick={() => scrollToSection("home")}
            aria-label="Go to homepage"
          >
            <span className="brand-main">KATE STUDIO</span>
            <span className="brand-sub">DIGITAL LOVE STORIES</span>
          </button>

          <nav className={`nav-links ${mobileMenu ? "open" : ""}`}>
            <button onClick={() => scrollToSection("templates")}>
              Templates
            </button>

            <button onClick={() => scrollToSection("included")}>
              What's Included
            </button>

            <button onClick={() => scrollToSection("addons")}>
              Add-ons
            </button>

            <button onClick={() => scrollToSection("conditions")}>
              Conditions
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMobileMenu((value) => !value)}
            aria-label="Open menu"
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? "×" : "☰"}
          </button>
        </div>
      </header>

      {/* ======================================================
          HERO
          ====================================================== */}

      <main>

        <section className="hero" id="home">

          <div className="hero-decoration bow bow-one">
            ୨୧
          </div>

          <div className="hero-decoration bow bow-two">
            ୨୧
          </div>

          <div className="hero-decoration sparkle sparkle-one">
            ✦
          </div>

          <div className="hero-decoration sparkle sparkle-two">
            ✧
          </div>

          <div className="hero-content">

            <div className="eyebrow">
              <HeartIcon />
              DIGITAL WEBSITES FOR YOUR FAVORITE PERSON
            </div>

            <h1>
              A little website
              <br />
              <em>made just for you.</em>
            </h1>

            <p>
              Thoughtfully designed digital love stories, letters, and
              interactive experiences made to turn your memories into
              something you can keep and share.
            </p>

            <div className="hero-actions">

              <button
                className="primary-button"
                onClick={() => scrollToSection("templates")}
              >
                Browse Templates
                <ArrowRight />
              </button>

              <button
                className="text-button"
                onClick={() => scrollToSection("conditions")}
              >
                Read before ordering
                <span>→</span>
              </button>

            </div>

            <p className="hero-note">
              STARTING AT ₱250 · MADE WITH CODE + CARE
            </p>

          </div>
        </section>

        {/* ====================================================
            TEMPLATE INTRO
            ==================================================== */}

        <section className="intro-section" id="templates">

          <div className="section-heading centered">

            <span className="mini-label">
              THE COLLECTION
            </span>

            <h2>
              Choose your little corner of the internet.
            </h2>

            <p>
              Pick a template that fits your story. Every website is
              coded and prepared individually, so your final version
              feels personal instead of looking like a generic copy-paste page.
            </p>

          </div>
        </section>

        {/* ====================================================
            TEMPLATE CAROUSEL
            ==================================================== */}

        <section className="designs-section">

          <div className="carousel-heading">

            <div>
              <span className="mini-label">
                LIVE PREVIEWS
              </span>

              <h2>
                See it before you choose it.
              </h2>
            </div>

            <div className="carousel-controls">

              <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                aria-label="Previous template"
              >
                <ArrowLeft />
              </button>

              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                aria-label="Next template"
              >
                <ArrowRight />
              </button>

            </div>

          </div>

          <div
            className="design-carousel"
            ref={carouselRef}
            aria-label="Template carousel"
          >

            {templates.map((template, index) => (

              <article
                className="template-card"
                key={template.id}
                style={{
                  "--card-index": index,
                }}
              >

                {/* LIVE WEBSITE PREVIEW */}

                <div className="template-preview">

                  <iframe
                    src={template.preview}
                    title={`${template.title} live preview`}
                    loading="lazy"
                    scrolling="yes"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />

                  <div className="preview-overlay">

                    <span className="preview-label">
                      LIVE PREVIEW · {template.id}
                    </span>

                    <a
                      className="preview-open"
                      href={template.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open full site ↗
                    </a>

                  </div>

                </div>

                {/* TEMPLATE INFORMATION */}

                <div className="template-info">

                  <div className="template-topline">

                    <span className="template-code">
                      {template.id}
                    </span>

                    <span className="template-category">
                      {template.category}
                    </span>

                  </div>

                  <h3>
                    {template.title}
                  </h3>

                  <p className="template-description">
                    {template.description}
                  </p>

                  <div className="perfect-for">

                    <span>
                      PERFECT FOR
                    </span>

                    <p>
                      {template.perfectFor}
                    </p>

                  </div>

                  <div className="included-mini">

                    {template.included
                      .slice(0, 4)
                      .map((item) => (

                        <span key={item}>
                          <CheckIcon />
                          {item}
                        </span>

                      ))}

                  </div>

                  <div className="price-row">

                    <div>

                      <span className="price-label">
                        STARTING PRICE
                      </span>

                      <strong>
                        ₱{template.price}
                      </strong>

                    </div>

                    <a
                      className="view-button"
                      href={template.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Template
                      <ArrowRight />
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

          <div className="carousel-hint">
            <ArrowLeft />
            <span>
              Swipe or use the arrows to explore
            </span>
            <ArrowRight />
          </div>

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
                <em>It's your story.</em>
              </h2>

              <p>
                Every website is coded and customized with intention.
                The goal isn't to give you another generic downloadable
                template — it's to give you a little digital space that
                feels like it belongs to the two of you.
              </p>

              <p>
                Kate Studio focuses on clean responsive design,
                thoughtful details, and experiences that work beautifully
                on both phones and desktops.
              </p>

            </div>

            <div className="promise-card">

              <div className="promise-icon">
                ♡
              </div>

              <h3>
                Coded with care.
              </h3>

              <div className="promise-line" />

              <p>
                Built using real web development practices with
                responsive layouts, clean structure, and attention
                to the little details.
              </p>

              <div className="promise-details">
                <span>RESPONSIVE</span>
                <span>PERSONALIZED</span>
                <span>MOBILE FRIENDLY</span>
                <span>HAND CODED</span>
              </div>

            </div>

          </div>

        </section>

        {/* ====================================================
            WHAT'S INCLUDED
            ==================================================== */}

        <section className="process-section" id="included">

          <div className="section-heading centered">

            <span className="mini-label">
              WHAT YOU GET
            </span>

            <h2>
              Simple from order to delivery.
            </h2>

            <p>
              The base price already covers the essentials.
              You only pay more when you request something
              outside the standard personalization.
            </p>

          </div>

          <div className="process-grid">

            <div className="process-card">
              <span>01</span>
              <div className="process-icon">♡</div>

              <h3>Choose</h3>

              <p>
                Pick your favorite template and send the details
                needed for personalization.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <div className="process-icon">✎</div>

              <h3>Personalize</h3>

              <p>
                Names, messages, dates, photos, and other included
                content are prepared for you.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <div className="process-icon">⌘</div>

              <h3>Code</h3>

              <p>
                Your website is edited, tested, and optimized
                for different screen sizes.
              </p>
            </div>

            <div className="process-card">
              <span>04</span>
              <div className="process-icon">♡</div>

              <h3>Review</h3>

              <p>
                You receive a preview and can request the
                included minor revision before final approval.
              </p>
            </div>

            <div className="process-card">
              <span>05</span>
              <div className="process-icon">↗</div>

              <h3>Deliver</h3>

              <p>
                Expected delivery is 3–5 days. If your website
                is completed sooner, it may be delivered ahead
                of schedule.
              </p>
            </div>

          </div>

        </section>

        {/* ====================================================
            ADD-ONS
            ==================================================== */}

        <section className="addons-section" id="addons">

          <div className="section-heading centered">

            <span className="mini-label">
              OPTIONAL ADD-ONS
            </span>

            <h2>
              Want a little extra?
            </h2>

            <p>
              The base template already comes with basic personalization.
              Add-ons are only charged when they require additional
              design, coding, editing, or preparation.
            </p>

          </div>

          <div className="addon-grid">

            <div className="addon-card">

              <span className="addon-number">
                ADD-ON 01
              </span>

              <h3>
                Custom Color Palette
              </h3>

              <p>
                Want something other than the original template colors?
                Request a custom palette based on your preferred colors
                or reference.
              </p>

              <strong>
                STARTS AT ₱60
              </strong>

            </div>

            <div className="addon-card">

              <span className="addon-number">
                ADD-ON 02
              </span>

              <h3>
                Extra Revision
              </h3>

              <p>
                One minor revision is included after the initial preview.
                Additional revision rounds may require an extra fee
                depending on the amount of work.
              </p>

              <strong>
                QUOTED DEPENDING ON WORK
              </strong>

            </div>

            <div className="addon-card">

              <span className="addon-number">
                ADD-ON 03
              </span>

              <h3>
                Custom Feature
              </h3>

              <p>
                Want a feature that isn't already part of the template?
                Examples include new sections, interactions, special
                effects, or custom functionality.
              </p>

              <strong>
                QUOTED FIRST
              </strong>

            </div>

            <div className="addon-card">

              <span className="addon-number">
                ADD-ON 04
              </span>

              <h3>
                Extra Content
              </h3>

              <p>
                Additional pages, sections, media preparation,
                or unusually large amounts of content may require
                additional work.
              </p>

              <strong>
                QUOTED DEPENDING ON WORK
              </strong>

            </div>

          </div>

          <div className="color-note">

            <span>
              TIP
            </span>

            For custom colors, send the HEX codes you want.
            You can find palette inspiration from Color Hunt.

          </div>

        </section>

        {/* ====================================================
            BASIC PERSONALIZATION
            ==================================================== */}

        <section className="info-banner">

          <div className="info-banner-inner">

            <div>

              <span className="mini-label">
                BASIC PERSONALIZATION
              </span>

              <h2>
                Make the template yours.
              </h2>

              <p>
                Basic personalization includes changing the names,
                messages, dates, photos, and other editable content
                already designed into the chosen template.
              </p>

            </div>

            <div className="file-badges">
              <span>TEXT</span>
              <span>PHOTOS</span>
              <span>NAMES</span>
              <span>DATES</span>
            </div>

          </div>

        </section>

        {/* ====================================================
            CONDITIONS
            ==================================================== */}

        <section className="terms-section" id="conditions">

          <div className="terms-card">

            <div className="section-heading">

              <span className="mini-label">
                PLEASE READ BEFORE ORDERING
              </span>

              <h2>
                Small rules that keep everything clear.
              </h2>

              <p>
                Please review these conditions before sending
                your order so both sides know what is included.
              </p>

            </div>

            <div className="terms-grid">

              <div>
                <h3>01 · PAYMENT</h3>

                <p>
                  Orders are confirmed according to the payment
                  arrangement communicated by Kate Studio before
                  work begins. Work may start once the required
                  payment or confirmation has been received.
                </p>
              </div>

              <div>
                <h3>02 · DELIVERY</h3>

                <p>
                  Standard estimated delivery is 3–5 days.
                  This is an estimate, not a guaranteed exact
                  delivery time. Completed websites may be
                  delivered earlier.
                </p>
              </div>

              <div>
                <h3>03 · CONTENT</h3>

                <p>
                  The buyer is responsible for providing accurate
                  names, messages, dates, photos, links, and other
                  requested content. Delays in receiving complete
                  content may affect delivery.
                </p>
              </div>

              <div>
                <h3>04 · ONE MINOR REVISION</h3>

                <p>
                  One minor revision is included after the initial
                  preview. Minor means small text, image, spacing,
                  or similar adjustments that do not require
                  redesigning the template.
                </p>
              </div>

              <div>
                <h3>05 · MAJOR CHANGES</h3>

                <p>
                  Major redesigns, new sections, custom features,
                  substantial layout changes, or extensive content
                  changes are not included in the base price and
                  may be quoted separately.
                </p>
              </div>

              <div>
                <h3>06 · COLOR CHANGES</h3>

                <p>
                  The original template palette is included.
                  A fully custom color palette is an optional
                  add-on starting at ₱60 because colors may need
                  to be adjusted across multiple design elements.
                </p>
              </div>

              <div>
                <h3>07 · APPROVAL</h3>

                <p>
                  Please review the preview carefully before final
                  approval. Once approved, additional changes may
                  be treated as a new revision or add-on depending
                  on the work required.
                </p>
              </div>

              <div>
                <h3>08 · TEMPLATE RIGHTS</h3>

                <p>
                  The purchase covers the personalized website
                  service for the buyer. Original template code,
                  design systems, assets, and reusable source
                  materials remain the property of Kate Studio
                  unless otherwise agreed.
                </p>
              </div>

              <div>
                <h3>09 · THIRD-PARTY SERVICES</h3>

                <p>
                  External services, hosting, domains, paid fonts,
                  paid assets, music licensing, or other third-party
                  costs are not automatically included unless
                  specifically stated.
                </p>
              </div>

              <div>
                <h3>10 · CONTENT RESPONSIBILITY</h3>

                <p>
                  Buyers are responsible for having permission to
                  provide and use the photos, music, messages, logos,
                  and other content supplied for their website.
                </p>
              </div>

              <div>
                <h3>11 · PRIVACY</h3>

                <p>
                  Information and files submitted for customization
                  should be limited to what is necessary for the order.
                  Do not send passwords, payment-card details, or
                  other sensitive account credentials.
                </p>
              </div>

              <div>
                <h3>12 · COMMUNICATION</h3>

                <p>
                  Please keep order details and revision requests
                  in the designated communication channel so
                  instructions remain clear and can be properly followed.
                </p>
              </div>

            </div>

            {/* ==================================================
                WORKING AGREEMENT CHECKBOX
                ================================================== */}

            <div className="agreement-box">

              <label className="agreement-label">

                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) =>
                    setAgreed(event.target.checked)
                  }
                />

                <span className="custom-checkbox">
                  {agreed && <CheckIcon />}
                </span>

                <span>
                  I have read and understood the information above,
                  including the pricing, delivery estimate,
                  personalization scope, revision policy,
                  add-ons, and ordering conditions.
                </span>

              </label>

              {/* CONTACT BUTTONS ONLY APPEAR ENABLED AFTER CHECKING */}

              <div className="locked-buttons">

                <a
                  className={`locked-contact telegram ${
                    agreed ? "enabled" : ""
                  }`}
                  href={agreed ? telegramLink : undefined}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={!agreed}
                  onClick={(event) => {
                    if (!agreed) {
                      event.preventDefault();
                    }
                  }}
                >
                  Message on Telegram ↗
                </a>

                <a
                  className={`locked-contact tiktok ${
                    agreed ? "enabled" : ""
                  }`}
                  href={agreed ? SOCIALS.tiktok : undefined}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={!agreed}
                  onClick={(event) => {
                    if (!agreed) {
                      event.preventDefault();
                    }
                  }}
                >
                  Visit TikTok ↗
                </a>

              </div>

              <p className="agreement-note">

                {agreed
                  ? "You're all set — you can now contact Kate Studio."
                  : "Please check the box above to enable the contact buttons."}

              </p>

            </div>

          </div>

        </section>

        {/* ====================================================
            FAQ
            ==================================================== */}

        <FAQ />

        {/* ====================================================
            CONTACT
            ====================================================

            No duplicate direct-contact buttons here.
            The actual contact buttons are in Conditions,
            after the checkbox.
            ==================================================== */}

        <section className="contact-section" id="contact">

          <div className="contact-content">

            <div className="contact-decoration">
              ୨୧
            </div>

            <span className="mini-label">
              READY WHEN YOU ARE
            </span>

            <h2>
              Let's make something sweet.
            </h2>

            <p>
              Choose a template, prepare your content, and
              review the ordering conditions above. Once you've
              checked the agreement box, you can contact Kate Studio.
            </p>

            <button
              className="contact-button"
              onClick={() => scrollToSection("conditions")}
            >
              Review Conditions & Contact
              <ArrowRight />
            </button>

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
              DIGITAL LOVE STORIES
            </span>

          </div>

          <p>
            Thoughtfully designed & coded digital experiences.
          </p>

          <div className="footer-links">

            <button onClick={() => scrollToSection("templates")}>
              Templates
            </button>

            <button onClick={() => scrollToSection("conditions")}>
              Conditions
            </button>

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

          </div>

        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Kate Studio. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

/*
============================================================
FAQ COMPONENT
============================================================
*/

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "What does basic personalization include?",
      answer:
        "Basic personalization includes the editable content already intended by the chosen template, such as names, messages, dates, photos, and similar content replacement.",
    },

    {
      question: "Can I request a different color?",
      answer:
        "Yes. The original template color palette is included. A custom color palette is an optional add-on starting at ₱60 because changing colors throughout a design can require additional editing.",
    },

    {
      question: "Can I request something that isn't in the template?",
      answer:
        "Yes, depending on the request. New sections, custom interactions, major layout changes, and other features may require an additional fee. The price will be discussed before the extra work begins.",
    },

    {
      question: "How long does the website take?",
      answer:
        "The standard estimated delivery is 3–5 days. If your website is completed earlier, it may be delivered ahead of schedule.",
    },

    {
      question: "Is a revision included?",
      answer:
        "Yes. One minor revision is included after the initial preview. Larger changes or additional revision rounds may have an additional fee.",
    },

    {
      question: "Do I need to know how to code?",
      answer:
        "No. You only need to provide the information and files requested for your chosen template. Kate Studio handles the coding and website preparation.",
    },
  ];

  return (
    <section className="faq-section">

      <div className="section-heading centered">

        <span className="mini-label">
          FAQ
        </span>

        <h2>
          A few things you might be wondering.
        </h2>

      </div>

      <div className="faq-list">

        {questions.map((item, index) => {

          const isOpen = openIndex === index;

          return (
            <div
              className={`faq-item ${
                isOpen ? "open" : ""
              }`}
              key={item.question}
            >

              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(
                    isOpen ? null : index
                  )
                }
                aria-expanded={isOpen}
              >

                <span>
                  {item.question}
                </span>

                <span className="faq-plus">
                  {isOpen ? "−" : "+"}
                </span>

              </button>

              <div className="faq-answer">
                <p>
                  {item.answer}
                </p>
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}