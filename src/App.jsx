import { useState, useEffect } from "react";

import "./index.css";

/* KATE STUDIO. Templates live in the list below; how-to is under it. */

const templates = [
  {
    id: "S001",
    title: "Bubble World",
    category: "Interactive Love Experience",
    price: 199,
    original: 249, // regular price (edit me)

    preview: "https://s001-bubble-world-template.netlify.app/",
    link: "https://s001-bubble-world-template.netlify.app/",

    description:
      "A dreamy little world made for two, where bubbles, memories, music, sweet messages, and interactive surprises come together in one playful romantic experience.",

    perfectFor:
      "Anniversaries, birthdays, Valentine's Day, monthsaries, long-distance couples, and cute romantic surprises.",

    included: [
      "Responsive website",
      "Basic personalization",
      "Names & text replacement",
      "Photo replacement",
      "12 photo memories",
      "Interactive bubble surprise",
      "Love story sections",
      "Love letter section",
      "Background music",
      "Animated elements",
      "Mobile-friendly layout",
    ],
  },

  {
    id: "S002",
    title: "Lucky Us",
    category: "Interactive Love Experience",
    price: 269,
    original: 339, // regular price (edit me)

    preview: "https://s002-lucky-us-template.netlify.app/",
    link: "https://s002-lucky-us-template.netlify.app/",

    description:
      "A playful lucky-love experience made for two, combining lucky numbers, memories, photos, music, a couple video, and a heartfelt love letter into one charming romantic website.",

    perfectFor:
      "Anniversaries, birthdays, Valentine's Day, monthsaries, long-distance couples, lucky-date surprises, and romantic gifts.",

    included: [
      "Responsive website",
      "Basic personalization",
      "Names & text replacement",
      "Photo replacement",
      "10 photo memories",
      "Lucky number experience",
      "Love letter section",
      "Background music",
      "Couple video section",
      "Animated elements",
      "Mobile-friendly layout",
    ],
  },

  {
    id: "S003",
    title: "Lucky Date",
    category: "Interactive Love Experience",
    price: 269,
    original: 339, // regular price (edit me)

    preview: "https://s003-lucky-date-template.netlify.app/",
    link: "https://s003-lucky-date-template.netlify.app/",

    description:
      "A playful lucky-date experience made for two, combining lucky numbers, memories, scratch cards, photos, music, and a heartfelt love letter into one charming romantic website.",

    perfectFor:
      "Anniversaries, birthdays, Valentine's Day, monthsaries, long-distance couples, lucky-date surprises, and romantic gifts.",

    included: [
      "Responsive website",
      "Basic personalization",
      "Names & text replacement",
      "Photo replacement",
      "10 photo memories",
      "Lucky number experience",
      "Winning ticket reveal",
      "Interactive scratch cards",
      "Love story sections",
      "Love letter section",
      "Background music",
      "Animated elements",
      "Mobile-friendly layout",
    ],
  },

  {
    id: "B001",
    title: "Museum of Us",
    category: "Interactive Memory Experience",
    price: 199,
    original: 249, // regular price (edit me)

    preview: "https://b001-museum-of-us-template.netlify.app/",
    link: "https://b001-museum-of-us-template.netlify.app/",

    description:
      "A little digital museum dedicated to your love story, where your favorite memories, photos, letters, music, and special moments come together in one beautiful experience.",

    perfectFor:
      "Anniversaries, birthdays, Valentine's Day, monthsaries, proposals, and meaningful romantic surprises.",

    included: [
      "Responsive website",
      "Basic personalization",
      "Names & text replacement",
      "Photo replacement",
      "Interactive museum experience",
      "Curator note / love letter",
      "Background music",
      "Animated museum elements",
      "Mobile-friendly layout",
    ],
  },

  {
    id: "B002",
    title: "Birthday Adventure",
    category: "Interactive Birthday Experience",
    price: 269,
    original: 339, // regular price (edit me)

    preview: "https://b002-birthday-template.netlify.app/",
    link: "https://b002-birthday-template.netlify.app/",

    description:
      "A playful interactive birthday experience filled with mini games, birthday surprises, memories, music, letters, gifts, and a special celebration made for someone's big day.",

    perfectFor:
      "Birthdays, surprise gifts, best friends, partners, family members, long-distance loved ones, and personalized digital birthday surprises.",

    included: [
      "Responsive website",
      "Basic personalization",
      "Name & text replacement",
      "Photo replacement",
      "6 photo memories",
      "Interactive balloon game",
      "Build-your-own birthday cake",
      "Make-a-wish interaction",
      "Interactive gift boxes",
      "Birthday letter collection",
      "Birthday fortune reveal",
      "Couple video section",
      "Background music",
      "Animated elements",
      "Mobile-friendly layout",
    ],
  },

  {
  id: "B003",
  title: "Birthday Cam",
  category: "Interactive Birthday Experience",
  price: 179,
    original: 229, // regular price (edit me)

  preview: "https://b003-birthday-cam-template.netlify.app/",
  link: "https://b003-birthday-cam-template.netlify.app/",

  description:
    "A fun Y2K-inspired birthday camera experience that turns someone's special day into a digital memory file, complete with photos, video, music, a heartfelt letter, a surprise gift, and a birthday wish interaction.",

  perfectFor:
    "Birthdays, best friends, partners, siblings, family members, long-distance loved ones, and fun personalized digital birthday surprises.",

  included: [
    "Responsive website",
    "Basic personalization",
    "Name & text replacement",
    "Photo replacement",
    "6 photo memories",
    "Y2K birthday camera theme",
    "Birthday video section",
    "Long birthday letter",
    "Interactive gift reveal",
    "Make-a-wish interaction",
    "Birthday cake interaction",
    "Background music",
    "Animated elements",
    "Mobile-friendly layout",
  ],
},

{
  id: "B004",
  title: "Birthday Scrapbook",
  category: "Interactive Birthday Experience",
  price: 179,
    original: 229, // regular price (edit me)

  preview: "https://b004-birthday-scrapbook-template.netlify.app/",
  link: "https://b004-birthday-scrapbook-template.netlify.app/",

  description:
    "A colorful digital birthday scrapbook that brings together favorite photos, memories, messages, and birthday surprises into one playful interactive experience.",

  perfectFor:
    "Birthdays, best friends, partners, siblings, family members, long-distance loved ones, and personalized digital birthday surprises.",

  included: [
    "Responsive website",
    "Basic personalization",
    "Name & text replacement",
    "Photo replacement",
    "Digital scrapbook experience",
    "Birthday memory sections",
    "Interactive elements",
    "Birthday messages",
    "Background music",
    "Animated elements",
    "Mobile-friendly layout",
  ],
},


{
  id: "B005",
  title: "Birthday Mail",
  category: "Interactive Birthday Experience",
  price: 179,
    original: 229, // regular price (edit me)

  preview: "https://b005-birthday-mail.netlify.app/",
  link: "https://b005-birthday-mail.netlify.app/",

  description:
    "A sweet digital birthday mail experience designed like a special message delivered just for them, filled with photos, birthday notes, surprises, and interactive moments.",

  perfectFor:
    "Birthdays, best friends, partners, siblings, family members, long-distance loved ones, and personalized digital birthday surprises.",

  included: [
    "Responsive website",
    "Basic personalization",
    "Name & text replacement",
    "Photo replacement",
    "Digital birthday mail experience",
    "Birthday message sections",
    "Interactive elements",
    "Birthday surprises",
    "Background music",
    "Animated elements",
    "Mobile-friendly layout",
  ],
},

{
  id: "B006",
  title: "Birthday Tangled",
  category: "Interactive Birthday Experience",
  price: 269,
    original: 339, // regular price (edit me)

  preview: "https://b005-birthday-tangled.netlify.app/",
  link: "https://b005-birthday-tangled.netlify.app/",

  description:
    "A whimsical interactive birthday experience inspired by tangled letters and little surprises, bringing together photos, messages, memories, music, and playful animations in one colorful digital gift.",

  perfectFor:
    "Birthdays, best friends, partners, siblings, family members, long-distance loved ones, and personalized digital birthday surprises.",

  included: [
    "Responsive website",
    "Basic personalization",
    "Name & text replacement",
    "Photo replacement",
    "Interactive birthday experience",
    "Birthday message sections",
    "Interactive elements",
    "Birthday surprises",
    "Background music",
    "Animated elements",
    "Mobile-friendly layout",
  ],
},



  {
    id: "T001",
    title: "Love Story",
    category: "Romantic Website",
    price: 159,
    original: 199, // regular price (edit me)

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
    price: 159,
    original: 199, // regular price (edit me)

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
    price: 269,
    original: 339, // regular price (edit me)

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

  {
    id: "T004",
    title: "Our Little Garden",
    category: "Interactive Garden Experience",
    price: 269,
    original: 339, // regular price (edit me)

    preview: "https://t004-our-little-garden-template.netlify.app/",
    link: "https://t004-our-little-garden-template.netlify.app/",

    description:
      "A dreamy little garden where your love story blooms through flowers, memories, promises, music, and a bouquet made just for you.",

    perfectFor:
      "Anniversaries, birthdays, Valentine's Day, monthsaries, proposals, and romantic surprises for someone special.",

    included: [
      "Responsive website",
      "Basic personalization",
      "Names & text replacement",
      "Photo replacement",
      "Interactive flower selection",
      "Custom bouquet builder",
      "Flower messages",
      "Keepsake bouquet feature",
      "Animated garden elements",
      "Mobile-friendly layout",
    ],
  },

  {
    id: "T006",
    title: "Mini Polaroid",
    category: "Interactive Memory Experience",
    price: 159,
    original: 199, // regular price (edit me)

    preview: "https://t006-mini-polaroid-template.netlify.app/",
    link: "https://t006-mini-polaroid-template.netlify.app/",

    description:
      "A cute little collection of your favorite memories, presented as interactive polaroids with photos, a handwritten letter, music, and sweet little animations.",

    perfectFor:
      "Anniversaries, birthdays, Valentine's Day, monthsaries, long-distance couples, and cute romantic surprises.",

    included: [
      "Responsive website",
      "Basic personalization",
      "Names & text replacement",
      "Photo replacement",
      "Interactive polaroid memories",
      "Handwritten letter section",
      "Background music",
      "Animated elements",
      "Mobile-friendly layout",
    ],
  },

  {
    id: "W001", title: "Alex & Kate Wedding", category: "Wedding Invitation",
    type: "invitation", occasion: "wedding", rsvp: "premium",
    price: 999, original: 2499, // % off is computed automatically
    preview: "https://w001-wedding-invitation.netlify.app/",
    link: "https://w001-wedding-invitation.netlify.app/",
    description: "A rich, romantic wedding site with Smart RSVP: guests confirm on a themed page, and answers land in a Google Sheet.",
    perfectFor: "Weddings that want a custom look plus easy guest tracking.",
    included: ["Custom themed design", "Smart RSVP page", "Editable guest list", "Guest limit per invite"],
  },
  {
    id: "W002", title: "Wedding Invite (Standard)", category: "Wedding Invitation",
    type: "invitation", occasion: "wedding", rsvp: "standard",
    price: null, original: null,
    preview: "", link: "", // paste the link once it's live
    description: "A polished wedding invitation with your story, schedule, entourage, and venue details. Guests reply through a Google Form.",
    perfectFor: "Couples who want a simple, beautiful invite with RSVP.",
    included: ["Responsive website", "RSVP via Google Forms", "Replies in Google Sheets", "Schedule & venue links"],
  },

/* ============================================================
  ADD NEW TEMPLATES BELOW (copy, paste, edit):

  {
    id: "D001",
    title: "Debut Night",
    category: "Debut Invitation",
    type: "invitation",      // "website" (stories, games) or "invitation" (events with RSVP)
    occasion: "debut",       // see OCCASIONS below for all keys
    rsvp: "standard",        // OPTIONAL: "standard" or "premium". Delete the line if no RSVP.
    price: 299,              // price customers pay now
    original: 399,           // regular price. The % off is computed for you.
    preview: "https://your-site.netlify.app/",
    link: "https://your-site.netlify.app/",
    description: "One or two short sentences.",
    included: ["Responsive website", "RSVP via Google Forms"],
  },

  Websites need no "type" line (they default to "website").
  No link yet? Use preview: "" and link: "" and it shows "Coming soon".
  No price yet? Use price: null and it shows "Message for rate".
  ============================================================ */
];


const TYPES = [
  { key: "website", label: "Interactive Websites", blurb: "Stories and surprises your person can explore." },
  { key: "invitation", label: "Invitations", blurb: "Digital invites with RSVP for any event." },
];

/* One line per occasion. Pick its type, and copy a line to add another.
   Tabs only appear on the Templates page once a template uses that occasion. */
const OCCASIONS = [
  { type: "website", key: "love", label: "Love & Anniversary", icon: "💞", blurb: "Love stories, letters, and surprises." },
  { type: "website", key: "birthday", label: "Birthday", icon: "🎂", blurb: "Games, photos, and messages." },
  { type: "invitation", key: "wedding", label: "Wedding", icon: "💍", blurb: "Elegant invites with RSVP." },
  { type: "invitation", key: "birthday", label: "Birthday", icon: "🎈", blurb: "Fun invites for any age." },
  { type: "invitation", key: "debut", label: "Debut", icon: "👑", blurb: "Glam invites for the big 18." },
  { type: "invitation", key: "christening", label: "Christening & Baptism", icon: "🕊️", blurb: "Gentle invites for a little one." },
  { type: "invitation", key: "babyshower", label: "Baby Shower", icon: "🍼", blurb: "Sweet invites for the newest member." },
  { type: "invitation", key: "bridal", label: "Bridal Shower", icon: "👰", blurb: "Pretty invites for the bride-to-be." },
  { type: "invitation", key: "anniversary", label: "Anniversary", icon: "🥂", blurb: "Celebrate years together." },
  { type: "invitation", key: "reunion", label: "Reunion", icon: "🎉", blurb: "Gather everyone with one link." },
];

const RSVP_TYPES = [
  { key: "standard", label: "Standard RSVP" },
  { key: "premium", label: "Premium RSVP" },
];

const BIRTHDAY_IDS = ["B002", "B003", "B004", "B005", "B006"];
const occasionOf = (id) => (BIRTHDAY_IDS.includes(id) ? "birthday" : "love");

const pct = (t) => (t.original && t.price && t.original > t.price ? Math.round((1 - t.price / t.original) * 100) : 0);

const allTemplates = [...templates].map((t) => ({ ...t, type: t.type || "website", occasion: t.occasion || occasionOf(t.id) }));
const priced = allTemplates.filter((t) => t.price);
const startingAt = priced.length ? Math.min(...priced.map((t) => t.price)) : 0;

const SOCIALS = {
  tiktok: "https://www.tiktok.com/@katestudioweb",
  instagram: "https://www.instagram.com/katestudioweb/",
  telegram: "https://t.me/+ReaPEaPaGKs3MmVl",
};

/* Delivery times live here once, so Policies and FAQ always match. */
const TIMES = {
  draft: "Within 4 business days after your downpayment. We send it as soon as it's ready.",
  standard: "1 to 2 weeks.",
  complex: "Up to 3 weeks for bigger or more complex sites, such as those with RSVP.",
  rush: "Need it in 1–2 days? A rush costs half the price of your website, subject to slot availability.",
};

/* Add-ons: [name, description, price]. Copy a line to add one. */
const ADDONS = [
  ["Rush delivery", "Get your site in 1–2 days, subject to slot availability.", "Half the website price"],
  ["Link lock", "Add a password so only your guests can open your site.", "₱79"],
  ["Extra content", "Additional pages or large amounts of media.", "Quoted based on what you need"],
];

const STEPS = [
  ["Pick a design", "Choose your template, then message us."],
  ["Send your details", "Photos, wording, schedule, and venue links. A shared Google Drive folder works best."],
  ["Get your draft", "Your first draft arrives within 4 business days after the downpayment, sooner if it's done early."],
  ["Go live", "Pay the balance and we'll hand over your final link."],
];

const POLICIES = [
  ["Payment & Booking", [
    ["50% to start", "Pay half upfront to reserve your slot and begin designing. This amount can't be refunded."],
    ["Balance", "The other half is due before we publish and hand over your finished link."],
    ["Refunds", "Once design or drafting has begun, payments are no longer refundable."],
    ["Payment methods", "GCash for customers in the Philippines, and PayPal for customers in the US and other countries. We'll send the payment details once you book."],
  ]],
  ["What We Need From You", [
    ["Everything first", "We begin once we have it all: photos, final wording, entourage, schedule, and venue links."],
    ["Late details", "If anything else comes up, send it quickly so your timeline isn't pushed back."],
    ["Photos", "Use high-resolution images and share them in a Google Drive folder."],
  ]],
  ["Delivery Time", [
    ["First draft", TIMES.draft],
    ["Websites", TIMES.standard],
    ["Bigger sites", TIMES.complex],
    ["Rush", TIMES.rush],
    ["Good to know", "The count starts once all your materials arrive. Rest assured, we deliver as soon as your site is ready."],
  ]],
  ["Edits & Changes", [
    ["Content edits", "Ask for as many content edits as you need while we're designing, like new photos, typo fixes, or a different song."],
    ["Big changes", "A major layout change or redesign after we've started costs ₱150 each."],
    ["24-hour typo warranty", "After we send your final link, you have 24 hours to report typos and we'll fix them for free."],
    ["Double-check", "Please verify names, dates, addresses, and all other contents before sending. We aren't responsible for mistakes in the info you provide."],
  ]],
  ["Link Access", [
    ["Permanent", "Your site stays online permanently."],
    ["Testimonial", "If you enjoyed working with us, we'd love a short testimonial. It's totally optional!"],
  ]],
];

const FAQS = [
  ["When should I book?", "Book as early as you can, well before your invitations need to go out. Most websites take 1 to 2 weeks, and bigger or more complex ones (like sites with RSVP) can take up to 3 weeks. The clock starts once we have all your materials. Your first draft arrives within 4 business days of your downpayment, sooner if it's ready early."],
  ["How do I place an order?", "Pick a template, read the policies, tick the agreement box, then message us on Telegram, TikTok, or Instagram. Your slot is reserved once the 50% downpayment is in."],
  ["Can I see a sample first?", "Yes! Every template has a live preview. Tap Live preview on any card to try it right here."],
  ["What do I need to send?", "High-resolution photos, your final wording, entourage list, event schedule, and venue links. One shared Google Drive folder is easiest. We start once it's all in, so send late details quickly to stay on track."],
  ["Can I request edits?", "Yes. While we're designing, you can ask for content edits like swapping photos, fixing typos, or changing the song. A major layout change after we've started costs ₱150."],
  ["Will it work on phones?", "Yes! Every site is built for phones, tablets, and computers. Guests just open your link, with no app or login."],
  ["How does RSVP work?", "Standard RSVP uses a Google Form, so replies are collected in Google and you can open them in a Google Sheet anytime. Premium RSVP is a themed page that matches your site: guests confirm there, replies are saved to a Google Sheet, and it can use an editable guest list and a limit per invite."],
  ["Can I get a rush order?", "Yes. A 1–2 day rush costs half the price of your website and depends on slot availability."],
  ["How can I pay?", "We accept GCash for customers in the Philippines and PayPal for customers in the US and other countries. We'll send the payment details once you message us."],
  ["Are payments refundable?", "No. The 50% downpayment is non-refundable, and once design or drafting has begun, payments can't be refunded."],
  ["How long will my link stay online?", "Permanently! If you enjoyed the experience, we'd love a short testimonial, but it's optional."],
  ["I don't see my occasion. What now?", "New designs are added regularly. Message us with your idea and we'll let you know what we can do."],
  ["Is there a warranty for typos?", "Yes! After we send your final link, you have 24 hours to report any typos and we'll fix them for free."],
  ["What if my details have a mistake?", "Please double-check names, dates, addresses, and all other contents before sending. We aren't responsible for errors in the information you provide."],
];

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SITE = "https://katestudioweb.netlify.app"; // change if you get a custom domain

const parse = () => {
  const p = window.location.pathname.split("/").filter(Boolean);
  return { page: p[0] || "home", sub: p[1] || "all", sub2: p[2] || "all" };
};

const nav = (path) => {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("navigate"));
};

/* Page titles + descriptions for Google. */
const setMeta = (sel, attr, val) => {
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement(sel.startsWith("link") ? "link" : "meta");
    const m = sel.match(/\[(.+?)="(.+?)"\]/);
    el.setAttribute(m[1], m[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, val);
};

const seoFor = (r) => {
  if (r.page === "templates") {
    const ty = TYPES.find((x) => x.key === r.sub) || TYPES[0];
    const oc = OCCASIONS.find((o) => o.type === ty.key && o.key === r.sub2);
    const path = `/templates/${ty.key}${oc ? `/${oc.key}` : ""}`;
    return ty.key === "website"
      ? {
          path,
          title: `${oc ? oc.label + " " : ""}Interactive Website Templates | Kate Studio`,
          desc: `Interactive ${oc ? oc.label.toLowerCase() + " " : "love, birthday, and anniversary "}websites you can try live before you order. Real coded websites, personalized and delivered as one shareable link.`,
        }
      : {
          path,
          title: `${oc ? oc.label + " " : ""}Digital Invitations with RSVP | Kate Studio`,
          desc: `Digital ${oc ? oc.label.toLowerCase() + " " : "wedding, debut, baptism, and event "}invitations with Standard or Premium RSVP. Preview the live website, then order. Shared as one link.`,
        };
  }
  if (r.page === "policies")
    return { path: "/policies", title: "Payment, Delivery Time, Policies & FAQ | Kate Studio", desc: "How ordering works: 50% downpayment, GCash and PayPal payments, delivery time, edits, typo warranty, and answers to common questions." };
  return { path: "/", title: "Kate Studio | Interactive Websites & Digital Invitations", desc: "Custom-coded interactive websites for love, birthdays, and anniversaries, plus digital invitations with RSVP for weddings, debuts, baptisms, and more." };
};

function Price({ t }) {
  if (!t.price) return <span className="ask">Message for rate</span>;
  const off = pct(t);
  return (
    <div className="price">
      {off > 0 && <s>₱{t.original}</s>}
      <strong>₱{t.price}</strong>
      {off > 0 && <em>-{off}%</em>}
    </div>
  );
}

function Card({ t, onPreview }) {
  return (
    <article className="card">
      <div className="thumb" onClick={() => t.link && onPreview(t)}>
        {t.preview ? <iframe src={t.preview} title={`${t.title} preview`} loading="lazy" /> : <div className="soon">Preview coming soon</div>}
        <span className="id">{t.id}</span>
        {t.rsvp && <span className={t.rsvp === "premium" ? "tag prem" : "tag"}>{t.rsvp === "premium" ? "Premium RSVP" : "Standard RSVP"}</span>}
      </div>
      <div className="body">
        <small>{t.category}</small>
        <h3>{t.title}</h3>
        <p>{t.description}</p>
        <div className="foot">
          <Price t={t} />
          {t.link ? <button className="btn sm" onClick={() => onPreview(t)}>Live preview <Arrow /></button> : <span className="muted-sm">Coming soon</span>}
        </div>
      </div>
    </article>
  );
}

function Preview({ t, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); };
  }, [onClose]);
  return (
    <div className="modal" onClick={onClose}>
      <div className="mbox" onClick={(e) => e.stopPropagation()}>
        <div className="mbar">
          <div><b>{t.title}</b><Price t={t} /></div>
          <div className="row">
            <a className="btn ghost sm" href={t.link} target="_blank" rel="noreferrer">New tab ↗</a>
            <a className="btn sm" href="/policies/contact">Book this</a>
            <button className="x" onClick={onClose} aria-label="Close">×</button>
          </div>
        </div>
        <iframe src={t.preview || t.link} title={`${t.title} live preview`} />
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero wrap">
        <div>
          <h1>Websites for your <em>favorite moments.</em></h1>
          <p>Love stories, birthday surprises, and wedding invitations, all coded by hand and delivered as one link you can send to anyone.</p>
          <div className="row">
            <a className="btn" href="/templates/website">Browse templates <Arrow /></a>
            <a className="btn ghost" href="/policies">Policies & FAQ</a>
          </div>
          {startingAt > 0 && <p className="note">Starting at <b>₱{startingAt}</b></p>}
        </div>
            </section>

      <section className="wrap">
        <div className="dp">
          <b>50%</b>
          <div>
            <h2>Just 50% down to book your slot.</h2>
            <p>Pay the rest only when your site is ready to go live.</p>
            <p className="paystrip">Pay with GCash (Philippines) or PayPal (International / US)</p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="head"><span className="label">Shop by occasion</span><h2>What are we celebrating?</h2></div>
        {TYPES.map((ty) => (
          <div className="grp" key={ty.key}>
            <div className="grp-h">
              <div><h3>{ty.label}</h3><p>{ty.blurb}</p></div>
              <a className="btn ghost sm" href={`/templates/${ty.key}`}>See all <Arrow /></a>
            </div>
            <div className="occ">
              {OCCASIONS.filter((o) => o.type === ty.key).map((o) => {
                const n = allTemplates.filter((t) => t.type === ty.key && t.occasion === o.key).length;
                const inner = (
                  <>
                    <span>{o.icon}</span>
                    <h3>{o.label}</h3>
                    <p>{o.blurb}</p>
                    <small>{n ? <>{n} {n === 1 ? "design" : "designs"} <Arrow /></> : "Coming soon"}</small>
                  </>
                );
                return n ? <a key={o.key} className="ocard" href={`/templates/${ty.key}/${o.key}`}>{inner}</a> : <div key={o.key} className="ocard dim">{inner}</div>;
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="wrap">
        <div className="head"><span className="label">How it works</span><h2>Four easy steps.</h2></div>
        <div className="steps">
          {STEPS.map(([h, p], i) => <div className="step" key={h}><b>0{i + 1}</b><h3>{h}</h3><p>{p}</p></div>)}
        </div>
      </section>

      <section className="wrap">
        <div className="about">
          <div>
            <span className="label">About</span>
            <h2>Hi, I'm Kate!</h2>
            <p>I design and code every site myself, from the first sketch to the final link. Kate Studio began with my love for designing, and now it's how I help people share their milestones in a way they'll be proud of.</p>
          </div>
          <a className="btn" href="https://kateannedavid.netlify.app/" target="_blank" rel="noreferrer">See my work <Arrow /></a>
        </div>
      </section>
    </>
  );
}

function Templates({ type, occ }) {
  const [rsvp, setRsvp] = useState("all");
  const [active, setActive] = useState(null);
  const ty = TYPES.some((x) => x.key === type) ? type : "website";
  const ofType = allTemplates.filter((t) => t.type === ty);
  const occs = OCCASIONS.filter((o) => o.type === ty && ofType.some((t) => t.occasion === o.key));
  const oc = occs.some((o) => o.key === occ) ? occ : "all";
  const shown = ofType.filter((t) => (oc === "all" || t.occasion === oc) && (rsvp === "all" || t.rsvp === rsvp));

  useEffect(() => setRsvp("all"), [type, occ]);
  const go = (a, b) => { nav(`/templates/${a}${b && b !== "all" ? `/${b}` : ""}`); };

  return (
    <section className="wrap">
      <div className="head"><span className="label">Templates</span><h1 className="h1s">{ty === "website" ? "Interactive website templates" : "Digital invitations with RSVP"}</h1>
        <p className="intro">{ty === "website" ? "Real coded websites for love stories, birthdays, and anniversaries. Try each one live, then we personalize it with your names, photos, and messages." : "Invitations for weddings, debuts, baptisms, and more, with Standard or Premium RSVP. Preview the live website, then we personalize it for your event."}</p></div>
      <div className="tabs big">
        {TYPES.map((x) => <button key={x.key} className={ty === x.key ? "on" : ""} onClick={() => go(x.key)}>{x.label}</button>)}
      </div>
      <div className="tabs">
        {[{ key: "all", label: "All occasions" }, ...occs].map((o) => (
          <button key={o.key} className={oc === o.key ? "on" : ""} onClick={() => go(ty, o.key)}>{o.label}</button>
        ))}
      </div>
      {ty === "invitation" && (
        <div className="tabs sub">
          <span>RSVP type:</span>
          {[{ key: "all", label: "Any" }, ...RSVP_TYPES].map((r) => (
            <button key={r.key} className={rsvp === r.key ? "on" : ""} onClick={() => setRsvp(r.key)}>{r.label}</button>
          ))}
        </div>
      )}
      <div className="grid">{shown.map((t) => <Card t={t} key={t.id} onPreview={setActive} />)}</div>
      {!shown.length && <p className="empty">Nothing here yet. New designs are on the way!</p>}
      {active && <Preview t={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function Policies({ sub }) {
  const [agreed, setAgreed] = useState(false);
  useEffect(() => {
    if (sub === "contact") setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 60);
  }, [sub]);
  const [open, setOpen] = useState(0);
  const msg = encodeURIComponent("Hi Kate Studio! I'd like to order a website. I've read the payment, delivery, and edit policies.");
  const lock = (href) => ({
    href: agreed ? href : undefined, target: "_blank", rel: "noreferrer",
    "aria-disabled": !agreed, onClick: (e) => !agreed && e.preventDefault(),
  });
  return (
    <>
      <section className="wrap">
        <div className="head"><span className="label">Before you order</span><h1 className="h1s">Policies</h1></div>
        <div className="dp small"><b>50%</b><div><h2>Downpayment to start</h2><p>Non-refundable. The balance is paid before your final link is released.</p></div></div>
        <div className="pay">
          <div className="paycard gc"><span>🇵🇭 Philippines</span><h3>GCash</h3><p>For customers in the Philippines.</p></div>
          <div className="paycard pp"><span>🌎 International / US</span><h3>PayPal</h3><p>For customers in the US and other countries.</p></div>
        </div>
        <div className="notes">
          <p>💌 Every invitation is delivered as a digital link you can share anywhere.</p>
          <p>🎨 Each site is built from scratch with HTML, CSS, and JavaScript, no drag-and-drop builders.</p>
        </div>
        <div className="pol">
          {POLICIES.map(([h, rows]) => (
            <div className="pcard" key={h}><h3>{h}</h3>{rows.map(([k, v]) => <p key={k}><b>{k}.</b> {v}</p>)}</div>
          ))}
        </div>
        <div className="head" style={{ marginTop: 40 }}><span className="label">Optional</span><h2>Add-ons</h2></div>
        <div className="addons">{ADDONS.map(([h, p, pr]) => <div key={h}><h4>{h}</h4><p>{p}</p><b className="apr">{pr}</b></div>)}</div>
      </section>

      <section className="wrap narrow">
        <div className="head"><span className="label">FAQ</span><h2>Quick answers.</h2></div>
        {FAQS.map(([q, a], i) => (
          <div className={open === i ? "faq open" : "faq"} key={q}>
            <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>{q}<span>{open === i ? "−" : "+"}</span></button>
            {open === i && <p>{a}</p>}
          </div>
        ))}
      </section>

      <section className="wrap" id="contact">
        <div className="contact">
          <h2>Ready to book?</h2>
          <label className="agree">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
            <span>I've read and agree to the payment, delivery, and edit policies above.</span>
          </label>
          <div className="row">
            <a className={agreed ? "btn" : "btn off"} {...lock(`${SOCIALS.telegram}?text=${msg}`)}>Message on Telegram ↗</a>
            <a className={agreed ? "btn ghost" : "btn ghost off"} {...lock(SOCIALS.tiktok)}>TikTok ↗</a>
            <a className={agreed ? "btn ghost" : "btn ghost off"} {...lock(SOCIALS.instagram)}>Instagram ↗</a>
          </div>
          <p className="note">{agreed ? "Great, we can't wait to hear from you!" : "Tick the box to unlock the contact buttons."}</p>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState(parse);
  const [menu, setMenu] = useState(false);
  const [ann, setAnn] = useState("");

  // Edit public/announcement.json to change the top banner (set "show": false to hide it).
  useEffect(() => {
    fetch(`/announcement.json?t=${Date.now()}`).then((r) => r.json()).then((d) => setAnn(d.show && d.text ? d.text : "")).catch(() => {});
  }, []);

  useEffect(() => {
    const on = () => { setRoute(parse()); setMenu(false); window.scrollTo(0, 0); };
    const click = (e) => {
      const a = e.target.closest && e.target.closest("a");
      const h = a && a.getAttribute("href");
      if (!h || !h.startsWith("/") || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      nav(h);
    };
    window.addEventListener("popstate", on);
    window.addEventListener("navigate", on);
    document.addEventListener("click", click);
    return () => {
      window.removeEventListener("popstate", on);
      window.removeEventListener("navigate", on);
      document.removeEventListener("click", click);
    };
  }, []);

  useEffect(() => {
    const m = seoFor(route);
    document.title = m.title;
    setMeta('meta[name="description"]', "content", m.desc);
    setMeta('link[rel="canonical"]', "href", SITE + m.path);
    setMeta('meta[property="og:title"]', "content", m.title);
    setMeta('meta[property="og:description"]', "content", m.desc);
    setMeta('meta[property="og:url"]', "content", SITE + m.path);
  }, [route]);

  const links = [["home", "Home", "/"], ["templates", "Templates", "/templates/website"], ["policies", "Policies & FAQ", "/policies"]];

  return (
    <div className="shell">
      {ann && <div className="announce">{ann}</div>}
      <header className="nav">
        <div className="wrap nav-in">
          <a className="brand" href="/">
            <img className="logo" src="/logo.jpg" alt="Kate Studio logo" />
            <span>Kate Studio<small>digital invitations & love stories</small></span>
          </a>
          <nav className={menu ? "links open" : "links"}>
            {links.map(([k, l, h]) => <a key={k} href={h} className={route.page === k ? "act" : ""}>{l}</a>)}
            <a className="cta-sm" href="/policies/contact">Book now</a>
          </nav>
          <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? "×" : "☰"}</button>
        </div>
      </header>

      <main>
        {route.page === "templates" ? <Templates type={route.sub} occ={route.sub2} /> : route.page === "policies" ? <Policies sub={route.sub} /> : <Home />}
      </main>

      <footer className="footer">
        <div className="wrap">
          <span className="brand"><img className="logo" src="/logo.jpg" alt="" /><span>Kate Studio</span></span>
          <p>© {new Date().getFullYear()} Kate Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}