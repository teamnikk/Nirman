/**
 * ============================================================
 *  ESTRUCTURA 2K26 — SITE CONFIGURATION
 *  Edit ALL content here. No need to touch any other file.
 * ============================================================
 */

const SITE_CONFIG = {

  /* ── GENERAL ─────────────────────────────────────────── */
  festName: "ESTRUCTURA 2K26",
  tagline: "The Ultimate Civil Engineering Fest",
  society: "Nirmaan Society",
  department: "Department of Civil Engineering",
  university: "DCRUST Murthal",
  date: "15 May 2026",
  venue: "MV Block, DCRUST Murthal",
  registrationLink: "https://forms.gle/G7ZX8vU5rQ7zrY178",
  registrationDeadline: "10 May 2026",

  /* ── HERO ─────────────────────────────────────────────── */
  hero: {
    heading: "ESTRUCTURA",
    subHeading: "2K26",
    description:
      "The Ultimate Civil Engineering Fest — hosted by Nirmaan, the official society of the Civil Engineering Department, DCRUST Murthal. Build. Compete. Conquer.",
    ctaText: "Register Now →",
    ctaLink: "https://forms.gle/G7ZX8vU5rQ7zrY178",
  },

  /* ── ABOUT ────────────────────────────────────────────── */
  about: {
    heading: "About the Fest",
    body: `ESTRUCTURA 2K26 is the flagship annual civil engineering fest of DCRUST Murthal, 
    organized by <strong>Nirmaan Society</strong> — the official civil engineering society of the 
    institution. The fest brings together brilliant engineering minds to showcase creativity, 
    technical prowess, and collaborative spirit through a series of challenging and exciting events.
    <br><br>
    Designed to bridge the gap between academics and practical exposure, ESTRUCTURA 2K26 offers 
    students an unmatched platform to demonstrate skills in structural engineering, problem-solving, 
    and critical thinking — all while competing, learning, and having fun.`,
    highlights: [
      { icon: "🏗️", label: "6+ Events" },
      { icon: "🎓", label: "DCRUST Murthal" },
      { icon: "📜", label: "Certificates for All" },
      { icon: "🤝", label: "Networking" },
    ],
  },

  /* ── EVENTS ───────────────────────────────────────────── */
  events: [
    {
      name: "Treasure Hunt",
      time: "11:30 AM – 2:00 PM",
      description:
        "A campus-wide adventure that tests your observation, teamwork, and civil engineering knowledge. Navigate clues across the campus to claim victory.",
      icon: "🗺️",
      tag: "Team Event",
      color: "#F59E0B",
    },
    {
      name: "Quiz",
      time: "12:00 PM – 1:00 PM",
      description:
        "A rapid-fire quiz testing your knowledge of civil engineering fundamentals, structures, materials, and current industry trends.",
      icon: "🧠",
      tag: "Individual",
      color: "#3B82F6",
    },
    {
      name: "Tower of Cards",
      time: "2:20 PM – 2:50 PM",
      description:
        "Build the tallest freestanding tower using only playing cards. A test of patience, structural intuition, and steady hands.",
      icon: "🃏",
      tag: "Team Event",
      color: "#8B5CF6",
    },
    {
      name: "Jenga",
      time: "2:20 PM – 2:50 PM",
      description:
        "The classic stacking game with an engineering twist. Strategic extraction and structural stability collide in this crowd favourite.",
      icon: "🪵",
      tag: "Individual",
      color: "#EF4444",
    },
    {
      name: "Bridge the Gap",
      time: "2:55 PM – 3:40 PM",
      description:
        "Design and construct a bridge using limited materials. The bridge will be load-tested — engineering judgement and creativity are your best tools.",
      icon: "🌉",
      tag: "Team Event",
      color: "#10B981",
    },
    {
      name: "What the Buck",
      time: "3:00 PM – 3:30 PM",
      description:
        "A hilarious and challenging civil trivia and dumb charades mashup. React fast, guess smart, and score the most — a fan favourite every year.",
      icon: "🎭",
      tag: "Team Event",
      color: "#F97316",
    },
  ],

  /* ── SCHEDULE ─────────────────────────────────────────── */
  schedule: [
    { time: "10:00 AM", title: "Registration & Check-In", desc: "MV Block Entrance", icon: "📋" },
    { time: "10:30 AM", title: "Inauguration Ceremony", desc: "MV Block Auditorium", icon: "🎙️" },
    { time: "11:30 AM", title: "Treasure Hunt Begins", desc: "Campus-wide", icon: "🗺️" },
    { time: "12:00 PM", title: "Civil Quiz", desc: "MV Block Hall", icon: "🧠" },
    { time: "02:20 PM", title: "Tower of Cards + Jenga", desc: "MV Block Ground Floor", icon: "🃏" },
    { time: "02:55 PM", title: "Bridge the Gap", desc: "Workshop Area", icon: "🌉" },
    { time: "03:00 PM", title: "What the Buck", desc: "MV Block Stage", icon: "🎭" },
    { time: "04:00 PM", title: "Prize Distribution & Closing", desc: "MV Block Auditorium", icon: "🏆" },
  ],

  /* ── ANNOUNCEMENT ─────────────────────────────────────── */
  announcement: {
    heading: "📢 Open Announcement",
    body: `<strong>ESTRUCTURA 2K26</strong> is officially open for all students of DCRUST Murthal! 
    Whether you are a civil engineering student or from any other department, all are welcome to 
    participate and witness the grandeur of civil innovation.<br><br>
    🎓 <strong>Certificates of Participation</strong> will be awarded to every registered participant.<br>
    🏆 <strong>Winners & Runners-Up</strong> receive special prizes and recognition certificates.<br>
    🤝 <strong>Volunteer opportunities</strong> are available for students wishing to contribute to the fest.<br><br>
    Don't miss this opportunity to be part of DCRUST's most exciting civil engineering celebration. 
    Seats are limited — <strong>Register before ${SITE_CONFIG ? "10 May 2026" : "the deadline"}</strong>!`,
  },

  /* ── COORDINATORS ─────────────────────────────────────── */
  coordinators: [
    {
      name: "Anshuman Hooda",
      role: "Event Coordinator",
      phone: "8950406937",
      avatar: "AH",
      color: "#3B82F6",
    },
    {
      name: "Vinay Khatri",
      role: "Event Coordinator",
      phone: "7056183187",
      avatar: "VK",
      color: "#10B981",
    },
  ],

  /* ── GALLERY ──────────────────────────────────────────── */
  gallery: {
    heading: "ESTRUCTURA 2025 — Highlights",
    subtext:
      "Glimpses from last year's fest. Replace images inside the /images folder to update.",
    /* 
      ADD YOUR IMAGES in the /images/ folder.
      Format: { src: "images/your-image.jpg", caption: "Caption text" }
    */
    images: [
      { src: "images/gallery1.jpg", caption: "Bridge Building Challenge" },
      { src: "images/gallery2.jpg", caption: "Quiz Competition" },
      { src: "images/gallery3.jpg", caption: "Treasure Hunt" },
      { src: "images/gallery4.jpg", caption: "Award Ceremony" },
      { src: "images/gallery5.jpg", caption: "Tower of Cards" },
      { src: "images/gallery6.jpg", caption: "Team Events" },
    ],
  },

  /* ── FOOTER ───────────────────────────────────────────── */
  footer: {
    credit: "Made by Nikhil Sain",
    creditLink: "https://www.linkedin.com/in/your-linkedin-here", // ← Replace with your LinkedIn URL
    email: "nirmaan@dcrust.ac.in",
    instagram: "https://instagram.com/nirmaan_dcrust",
  },
};
