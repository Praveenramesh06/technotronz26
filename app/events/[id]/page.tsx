import Link from "next/link"

// Event data mapping
const eventData: Record<
  string,
  {
    title: string
    description: string[]
    rounds: { name: string; description: string }[]
    venue: string
    dateTime: string
    rules: string[]
    coordinators: { name: string; phone: string }[]
    fileCode: string
  }
> = {
  "workshop-1": {
    title: "WORKSHOP 1",
    description: [
      "Venture into the unknown depths of emerging technology where reality bends and possibilities are limitless.",
      "This classified briefing will expose you to advanced systems that exist beyond conventional understanding.",
      "Only those brave enough to face the shadows of innovation will emerge with knowledge from the other side.",
    ],
    rounds: [
      { name: "Round 1", description: "Exploration Phase - Navigate the foundational concepts" },
      { name: "Round 2", description: "Final Showdown - Apply your knowledge in the ultimate test" },
    ],
    venue: "E-Block Lab 204",
    dateTime: "February 28, 2025 — 10:00 AM to 1:00 PM",
    rules: [
      "Participants must arrive 15 minutes before the scheduled time",
      "Bring your own laptop with required software pre-installed",
      "Team size: 2-3 members",
      "No external assistance or internet access during rounds",
    ],
    coordinators: [
      { name: "John Doe", phone: "9876543210" },
      { name: "Jane Doe", phone: "9876543211" },
    ],
    fileCode: "FILE-001",
  },
  "workshop-2": {
    title: "WORKSHOP 2",
    description: [
      "Explore the parallel dimensions of innovation where technology transcends its earthly limitations.",
      "Hands-on experiments with cutting-edge tools that blur the line between science and the supernatural.",
      "The veil between worlds grows thin as you master techniques from realms unknown.",
    ],
    rounds: [
      { name: "Round 1", description: "Discovery Phase - Uncover hidden technological secrets" },
      { name: "Round 2", description: "Implementation Phase - Build something extraordinary" },
    ],
    venue: "Tech Hub - Room 302",
    dateTime: "February 28, 2025 — 2:00 PM to 5:00 PM",
    rules: [
      "Individual participation only",
      "Basic programming knowledge required",
      "Materials will be provided on-site",
      "Certificates awarded to all participants",
    ],
    coordinators: [
      { name: "Mike Wheeler", phone: "9876543212" },
      { name: "Eleven", phone: "9876543213" },
    ],
    fileCode: "FILE-002",
  },
  "workshop-3": {
    title: "WORKSHOP 3",
    description: [
      "Unlock hidden potentials in the realm of tech where the impossible becomes inevitable.",
      "Secrets from the Upside Down revealed to those who dare to look beyond the surface.",
      "Transform your understanding of technology in ways that defy conventional explanation.",
    ],
    rounds: [
      { name: "Round 1", description: "Initiation - Enter the realm of advanced concepts" },
      { name: "Round 2", description: "Mastery - Prove your worth in the final challenge" },
    ],
    venue: "Innovation Center - Hall A",
    dateTime: "March 1, 2025 — 9:00 AM to 12:00 PM",
    rules: [
      "Pre-registration mandatory",
      "Bring government-issued ID for verification",
      "Limited seats available - first come, first served",
      "No photography or recording allowed",
    ],
    coordinators: [
      { name: "Dustin Henderson", phone: "9876543214" },
      { name: "Lucas Sinclair", phone: "9876543215" },
    ],
    fileCode: "FILE-003",
  },
  hackathon: {
    title: "HACKATHON",
    description: [
      "48 hours in the Upside Down. Build or be consumed by the void of infinite possibilities.",
      "Push the boundaries of creation as time warps around you in this ultimate coding challenge.",
      "Only the strongest minds will survive the darkness and emerge with solutions to save the world.",
    ],
    rounds: [
      { name: "Round 1", description: "Ideation Phase - Pitch your concept to the council" },
      { name: "Round 2", description: "Development Sprint - 24 hours of intense building" },
      { name: "Round 3", description: "Final Presentation - Showcase your creation" },
    ],
    venue: "Main Auditorium & Computer Labs",
    dateTime: "February 28-29, 2025 — 48 Hours Non-Stop",
    rules: [
      "Team size: 3-4 members",
      "Original work only - no pre-built solutions",
      "Must use at least one API from sponsors",
      "Sleeping bags and refreshments allowed",
      "Mentors available throughout the event",
    ],
    coordinators: [
      { name: "Steve Harrington", phone: "9876543216" },
      { name: "Nancy Wheeler", phone: "9876543217" },
    ],
    fileCode: "FILE-004",
  },
  codeathon: {
    title: "CODEATHON",
    description: [
      "Race against time in the shadow realm of algorithms where every second counts.",
      "Solve puzzles that twist reality and challenge your perception of what's possible.",
      "The clock ticks down as you navigate through increasingly complex challenges.",
    ],
    rounds: [
      { name: "Round 1", description: "Warm-up Challenges - Easy to Medium difficulty" },
      { name: "Round 2", description: "Final Battle - Hard problems only" },
    ],
    venue: "Computer Science Lab 101",
    dateTime: "March 1, 2025 — 2:00 PM to 6:00 PM",
    rules: [
      "Individual participation",
      "Languages allowed: C, C++, Java, Python",
      "Internet access prohibited during contest",
      "Plagiarism results in immediate disqualification",
    ],
    coordinators: [
      { name: "Robin Buckley", phone: "9876543218" },
      { name: "Eddie Munson", phone: "9876543219" },
    ],
    fileCode: "FILE-005",
  },
  "bot-lf": {
    title: "BOT LF",
    description: [
      "Line following automatons navigate the dark corridors of the Upside Down.",
      "Program your creation to sense the path through shadow and light.",
      "Only the most precise machines will find their way through the maze.",
    ],
    rounds: [
      { name: "Round 1", description: "Time Trials - Complete the track" },
      { name: "Round 2", description: "Final Race - Head-to-head competition" },
    ],
    venue: "Robotics Arena - Ground Floor",
    dateTime: "March 1, 2025 — 10:00 AM to 2:00 PM",
    rules: [
      "Bot dimensions: Max 20cm x 20cm",
      "Pre-built bots allowed",
      "Maximum 2 attempts per round",
      "No wireless controllers",
    ],
    coordinators: [
      { name: "Jonathan Byers", phone: "9876543220" },
      { name: "Argyle", phone: "9876543221" },
    ],
    fileCode: "FILE-006",
  },
  "bot-ba": {
    title: "BOT BA",
    description: [
      "Battle arena where machines clash in supernatural combat from another dimension.",
      "Build your warrior to dominate the arena and destroy all opposition.",
      "Only one will emerge victorious from the chaos of the Upside Down battleground.",
    ],
    rounds: [
      { name: "Round 1", description: "Qualifying Battles - Prove your bot's worth" },
      { name: "Round 2", description: "Semi-Finals - The survivors clash" },
      { name: "Round 3", description: "Grand Final - Champion crowned" },
    ],
    venue: "Robotics Arena - Ground Floor",
    dateTime: "March 1, 2025 — 3:00 PM to 7:00 PM",
    rules: [
      "Weight limit: 5kg maximum",
      "No projectiles or flammable materials",
      "Wireless control mandatory",
      "Safety inspection required before competition",
    ],
    coordinators: [
      { name: "Murray Bauman", phone: "9876543222" },
      { name: "Dmitri Antonov", phone: "9876543223" },
    ],
    fileCode: "FILE-007",
  },
  "design-event": {
    title: "DESIGN EVENT",
    description: [
      "Create visuals that transcend dimensions and bend reality to your artistic will.",
      "Channel the supernatural energy of the Upside Down into your designs.",
      "Show us visions that exist beyond the veil of ordinary perception.",
    ],
    rounds: [
      { name: "Round 1", description: "Theme Reveal - 2 hours to create" },
      { name: "Round 2", description: "Presentation - Defend your vision" },
    ],
    venue: "Design Studio - Block C",
    dateTime: "February 28, 2025 — 11:00 AM to 3:00 PM",
    rules: [
      "Software: Adobe Suite or Figma only",
      "Original artwork required",
      "Submit in PNG/PDF format",
      "Theme revealed at event start",
    ],
    coordinators: [
      { name: "Max Mayfield", phone: "9876543224" },
      { name: "Erica Sinclair", phone: "9876543225" },
    ],
    fileCode: "FILE-008",
  },
  quiz: {
    title: "QUIZ",
    description: [
      "Test your knowledge of the mysteries that lurk beyond ordinary understanding.",
      "Questions that probe the depths of technology, science, and the unknown.",
      "Only those with minds sharp as Demogorgon claws will prevail.",
    ],
    rounds: [
      { name: "Round 1", description: "Written Prelims - Top 20 qualify" },
      { name: "Round 2", description: "Buzzer Round - Quick-fire questions" },
      { name: "Round 3", description: "Final Showdown - The ultimate test" },
    ],
    venue: "Seminar Hall 2",
    dateTime: "March 1, 2025 — 11:00 AM to 1:00 PM",
    rules: [
      "Team size: 2 members",
      "No electronic devices allowed",
      "Questions in English only",
      "Judge's decision is final",
    ],
    coordinators: [
      { name: "Will Byers", phone: "9876543226" },
      { name: "Joyce Byers", phone: "9876543227" },
    ],
    fileCode: "FILE-009",
  },
  "non-tech-1": {
    title: "NON TECH 1",
    description: [
      "Activities from another dimension where technology takes a back seat.",
      "Challenge your mind and body in ways that defy conventional competition.",
      "The Upside Down has more mysteries than just circuits and code.",
    ],
    rounds: [
      { name: "Round 1", description: "Elimination Games" },
      { name: "Round 2", description: "Finals" },
    ],
    venue: "Open Air Theatre",
    dateTime: "February 28, 2025 — 4:00 PM to 6:00 PM",
    rules: ["Individual participation", "Comfortable clothing recommended", "Rules explained at venue", "Have fun!"],
    coordinators: [
      { name: "Hopper", phone: "9876543228" },
      { name: "Karen Wheeler", phone: "9876543229" },
    ],
    fileCode: "FILE-010",
  },
  "non-tech-2": {
    title: "NON TECH 2",
    description: [
      "More supernatural challenges await the brave souls who venture here.",
      "Leave your laptops behind and embrace the chaos of the unknown.",
      "Sometimes the greatest adventures require no technology at all.",
    ],
    rounds: [
      { name: "Round 1", description: "Team Challenges" },
      { name: "Round 2", description: "Individual Finals" },
    ],
    venue: "Sports Complex",
    dateTime: "March 1, 2025 — 4:00 PM to 6:00 PM",
    rules: ["Team size: 4 members", "Sportswear mandatory", "ID cards required", "Spirit of sportsmanship expected"],
    coordinators: [
      { name: "Bob Newby", phone: "9876543230" },
      { name: "Barb Holland", phone: "9876543231" },
    ],
    fileCode: "FILE-011",
  },
  tech: {
    title: "TECH",
    description: [
      "Technical challenges that push the boundaries of reality and possibility.",
      "Prove your mastery over machines and code in this ultimate test.",
      "The Upside Down rewards those who understand its technological secrets.",
    ],
    rounds: [
      { name: "Round 1", description: "Technical Quiz" },
      { name: "Round 2", description: "Hands-on Challenge" },
    ],
    venue: "Tech Hub - Main Hall",
    dateTime: "February 28, 2025 — 1:00 PM to 4:00 PM",
    rules: [
      "Individual participation",
      "Bring your own laptop",
      "Internet access provided",
      "Multiple domains covered",
    ],
    coordinators: [
      { name: "Dr. Brenner", phone: "9876543232" },
      { name: "Dr. Owens", phone: "9876543233" },
    ],
    fileCode: "FILE-012",
  },
  flagship: {
    title: "FLAGSHIP",
    description: [
      "The ultimate event. Face the Demogorgon of all challenges and emerge victorious.",
      "Every skill you possess will be tested in this legendary competition.",
      "Only the chosen ones will conquer the flagship and claim eternal glory.",
    ],
    rounds: [
      { name: "Round 1", description: "Qualifier - Survival of the fittest" },
      { name: "Round 2", description: "Semi-Final - The elite clash" },
      { name: "Round 3", description: "Grand Finale - Legend is born" },
    ],
    venue: "Main Auditorium",
    dateTime: "March 1, 2025 — All Day Event",
    rules: [
      "Team size: 3-5 members",
      "Multi-disciplinary challenges",
      "Surprise elements throughout",
      "Flagship trophy + cash prize for winners",
      "Registration closes 24 hours before event",
    ],
    coordinators: [
      { name: "Vecna", phone: "9876543234" },
      { name: "Mind Flayer", phone: "9876543235" },
    ],
    fileCode: "FILE-013",
  },
  "paper-presentation-1": {
    title: "PAPER PRESENTATION 1",
    description: [
      "Present your research findings from the depths of the unknown scientific frontier.",
      "Share discoveries that challenge conventional understanding of our world.",
      "The brightest minds gather to illuminate the darkness with knowledge.",
    ],
    rounds: [
      { name: "Round 1", description: "Abstract Submission Review" },
      { name: "Round 2", description: "Presentation & Q&A" },
    ],
    venue: "Conference Room - Block A",
    dateTime: "February 28, 2025 — 9:00 AM to 12:00 PM",
    rules: [
      "Team size: 1-2 members",
      "10 minutes presentation + 5 minutes Q&A",
      "PPT format only",
      "Original research preferred",
    ],
    coordinators: [
      { name: "Scott Clarke", phone: "9876543236" },
      { name: "Principal Coleman", phone: "9876543237" },
    ],
    fileCode: "FILE-014",
  },
  "paper-presentation-2": {
    title: "PAPER PRESENTATION 2",
    description: [
      "Share discoveries that defy conventional understanding and open new portals of thought.",
      "Your research could be the key to unlocking mysteries yet unsolved.",
      "Present to the council and change the course of technological history.",
    ],
    rounds: [
      { name: "Round 1", description: "Paper Screening" },
      { name: "Round 2", description: "Live Presentation" },
    ],
    venue: "Conference Room - Block B",
    dateTime: "March 1, 2025 — 9:00 AM to 12:00 PM",
    rules: [
      "IEEE format required",
      "Plagiarism check mandatory",
      "Domain: AI/ML, IoT, Cybersecurity",
      "Best paper award available",
    ],
    coordinators: [
      { name: "Alexei", phone: "9876543238" },
      { name: "Yuri", phone: "9876543239" },
    ],
    fileCode: "FILE-015",
  },
}

// Default event for unknown IDs
const defaultEvent = {
  title: "CLASSIFIED EVENT",
  description: [
    "This event file has been sealed by Hawkins National Laboratory.",
    "The contents remain classified until further notice from the Department.",
    "Unauthorized access will result in immediate termination of clearance.",
  ],
  rounds: [
    { name: "Round 1", description: "Information Redacted" },
    { name: "Round 2", description: "Information Redacted" },
  ],
  venue: "Location Classified",
  dateTime: "Date & Time TBD",
  rules: ["Clearance Level 4 required", "Non-disclosure agreement mandatory", "Await further instructions"],
  coordinators: [{ name: "Agent [REDACTED]", phone: "CLASSIFIED" }],
  fileCode: "FILE-XXX",
}

export default async function EventDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = eventData[id] || defaultEvent

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background image with slow zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-bg-zoom"
        style={{
          backgroundImage: `url('/images/image.png')`,
        }}
      />

      {/* Dark red overlay for text contrast */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-transparent to-red-950/40" />

      {/* VHS grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-40 opacity-[0.06] animate-grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none z-40 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-red-500/70 hover:text-red-400 font-mono text-xs sm:text-sm tracking-wider mb-6 sm:mb-8 transition-colors"
          >
            <span>←</span>
            <span>RETURN TO EVENTS</span>
          </Link>

          {/* Main Title */}
          <div className="text-center mb-8 sm:mb-12 animate-content-fade-in">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-red-600 tracking-[0.1em] sm:tracking-[0.15em] mb-4 sm:mb-6 animate-flicker drop-shadow-[0_0_40px_rgba(220,38,38,0.9)]">
              {event.title}
            </h1>

            {/* Pulsing neon divider */}
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-red-600 to-red-600 animate-energy-beam" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600 animate-pulse-glow shadow-[0_0_15px_rgba(220,38,38,1)]" />
              <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-red-600 to-transparent animate-energy-beam-delay" />
            </div>
          </div>

          {/* Classified Dossier Card */}
          <div
            className="relative bg-black/90 border border-red-800/60 p-6 sm:p-8 lg:p-10 overflow-hidden animate-card-fade-in"
            style={{
              boxShadow: "0 0 40px rgba(220, 38, 38, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Scanline animation inside card */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent h-[200%] animate-scanline-scroll" />
            </div>

            {/* Distressed texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise2)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Corner marks */}
            <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-red-600/70" />
            <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-red-600/70" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-red-600/70" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-red-600/70" />

            {/* Classified label */}
            <div className="absolute -top-1 left-4 sm:left-6 bg-red-900/90 text-red-300 text-[10px] sm:text-xs px-3 py-1 font-mono tracking-widest">
              CLASSIFIED // {event.fileCode}
            </div>

            {/* Content sections */}
            <div className="space-y-6 sm:space-y-8 mt-4">
              {/* Event Description */}
              <section
                className="animate-content-fade-in opacity-0"
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
              >
                <h3 className="font-serif text-lg sm:text-xl text-red-500 tracking-wider mb-3 animate-flicker hover:animate-glitch-1 transition-all cursor-default">
                  EVENT DESCRIPTION
                </h3>
                <div className="space-y-2">
                  {event.description.map((para, i) => (
                    <p key={i} className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-red-800/50 to-transparent" />

              {/* Number of Rounds */}
              <section
                className="animate-content-fade-in opacity-0"
                style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
              >
                <h3 className="font-serif text-lg sm:text-xl text-red-500 tracking-wider mb-3 animate-flicker hover:animate-glitch-1 transition-all cursor-default">
                  NUMBER OF ROUNDS
                </h3>
                <ul className="space-y-2">
                  {event.rounds.map((round, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm sm:text-base flex items-start gap-2 animate-list-item-fade opacity-0"
                      style={{ animationDelay: `${0.4 + i * 0.1}s`, animationFillMode: "forwards" }}
                    >
                      <span className="text-red-600 mt-1">▸</span>
                      <span>
                        <span className="text-red-400">{round.name}:</span> {round.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-red-800/50 to-transparent" />

              {/* Venue & Date/Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <section
                  className="animate-content-fade-in opacity-0"
                  style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
                >
                  <h3 className="font-serif text-lg sm:text-xl text-red-500 tracking-wider mb-3 animate-flicker hover:animate-glitch-1 transition-all cursor-default">
                    VENUE
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base flex items-center gap-2">
                    <span className="text-red-600">◉</span>
                    {event.venue}
                  </p>
                </section>

                <section
                  className="animate-content-fade-in opacity-0"
                  style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
                >
                  <h3 className="font-serif text-lg sm:text-xl text-red-500 tracking-wider mb-3 animate-flicker hover:animate-glitch-1 transition-all cursor-default">
                    DATE & TIME
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base flex items-center gap-2">
                    <span className="text-red-600">◉</span>
                    {event.dateTime}
                  </p>
                </section>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-red-800/50 to-transparent" />

              {/* Rules & Guidelines */}
              <section
                className="animate-content-fade-in opacity-0"
                style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
              >
                <h3 className="font-serif text-lg sm:text-xl text-red-500 tracking-wider mb-3 animate-flicker hover:animate-glitch-1 transition-all cursor-default">
                  RULES & GUIDELINES
                </h3>
                <ul className="space-y-2">
                  {event.rules.map((rule, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm sm:text-base flex items-start gap-2 animate-list-item-fade opacity-0"
                      style={{ animationDelay: `${0.7 + i * 0.08}s`, animationFillMode: "forwards" }}
                    >
                      <span className="text-red-600 mt-1">⬡</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-red-800/50 to-transparent" />

              {/* Event Coordinators */}
              <section
                className="animate-content-fade-in opacity-0"
                style={{ animationDelay: "0.85s", animationFillMode: "forwards" }}
              >
                <h3 className="font-serif text-lg sm:text-xl text-red-500 tracking-wider mb-3 animate-flicker hover:animate-glitch-1 transition-all cursor-default">
                  EVENT COORDINATORS
                </h3>
                <ul className="space-y-2">
                  {event.coordinators.map((coord, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm sm:text-base flex items-center gap-2 animate-list-item-fade opacity-0"
                      style={{ animationDelay: `${0.9 + i * 0.1}s`, animationFillMode: "forwards" }}
                    >
                      <span className="text-red-600">☎</span>
                      <span>
                        <span className="text-red-400">{coord.name}</span> — {coord.phone}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Register Button */}
              <div
                className="pt-4 sm:pt-6 text-center animate-content-fade-in opacity-0"
                style={{ animationDelay: "1s", animationFillMode: "forwards" }}
              >
                <Link
                  href="/registration"
                  className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-3 sm:py-4 bg-transparent border-2 border-red-600 text-red-500 font-serif text-base sm:text-lg tracking-[0.15em] overflow-hidden transition-all duration-300 hover:text-red-300 hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] animate-border-pulse"
                >
                  {/* Ripple effect container */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="absolute w-2 h-2 bg-red-600/50 rounded-full opacity-0 group-hover:animate-portal-ripple" />
                  </span>

                  {/* Button glow background */}
                  <span className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-300" />

                  <span className="relative z-10 group-hover:animate-button-glitch">REGISTER NOW →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
