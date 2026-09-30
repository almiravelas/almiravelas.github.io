// All the text on your site lives in this one file.
// Edit it to change what visitors read: no layout code to touch.
//
// This file is kept out of git (see .gitignore). A generic copy,
// site.example.js, is what gets committed. When you edit this file,
// also update the SITE_CONTENT secret on GitHub so the live site matches.

export const site = {
  // Browser tab title and the description search engines show
  title: 'Almira Velasquez — Product Designer & Developer',
  description: 'Almira Velasquez is a product designer and developer based in Manila, Philippines.',

  // Hero and sidebar
  name: 'Almira Velasquez',
  greeting: 'Hello, I’m Almira Velasquez!',
  headline: 'I turn complex, emerging tech into delightful, accessible experiences.',
  location: 'Manila, Philippines',

  // The role line rotates through these every 3 seconds.
  // `hero` is one line; `side` may use <br> to break the line in the sidebar.
  roles: [
    { hero: 'Product designer and developer', side: 'Product designer<br>and developer' },
    { hero: 'Designer', side: 'Designer' },
    { hero: 'Developer', side: 'Developer' },
    { hero: 'QA tester', side: 'QA tester' },
    { hero: 'DLSU Student', side: 'DLSU Student' },
  ],

  // Sidebar links (replace the two placeholders with your own)
  email: 'you@example.com',
  linkedin: 'https://www.linkedin.com/in/your-profile',

  menu: [
    { label: 'works', href: '/#works' },
    { label: 'resume', href: '/resume' },
    { label: 'about', href: '/about' },
  ],

  // Featured works and the text of each work's own page.
  // Add, remove or reorder items here. `slug` becomes /works/<slug>/
  // Put images in public/images/works/ and use src: '/images/works/your-file.png'
  works: [
    {
      name: 'Project SakAI',
      slug: 'project-sakai',
      type: 'Undergrad Thesis · Remote Sensing',
      tags: ['Python', 'GIS', 'Machine Learning'],
      page: {
        headline: 'Add a one-sentence headline for this project.',
        summary: 'A GIS-based crop suitability and remote sensing classification system for highland agriculture in Benguet, built as our undergraduate thesis.',
        role: ['Your role'],
        skills: ['Your skills'],
        team: ['Your team'],
        timeline: ['Your timeline'],
        chapters: [
          {
            id: 'overview',
            label: 'Overview',
            blocks: [
              {
                eyebrow: 'About this project',
                heading: 'Replace this with your case study.',
                paragraphs: [
                  'Write what the problem was, what you did and what happened. Add more chapters and blocks as you go.',
                ],
              },
            ],
          },
        ],
      },
    },
    {
      name: 'Blocki',
      slug: 'blocki',
      type: 'Web App · Productivity',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      page: {
        headline: 'Blocki: rebuilding the Canvas dashboard out of blocks a student can arrange.',
        summary: 'An all-in-one productivity web app for DLSU students, built on the Canvas LMS API for STSWENG (Software Engineering) in Term 3, AY 2024–2025.',
        link: { label: 'Visit blocki.vercel.app', href: 'https://blocki.vercel.app/' },
        role: ['Analyst', 'UI Design & Front-end'],
        skills: ['Requirements Analysis', 'Branding & UI Design', 'Next.js + Tailwind'],
        team: ['7 students', 'PO, 2 analysts, 3 devs, QA'],
        timeline: ['~11 weeks, 2025', '5 two-week sprints'],
        chapters: [
          {
            id: 'problem',
            label: 'Problem',
            blocks: [
              {
                eyebrow: 'The student’s dilemma',
                heading: 'Where does a student’s schoolwork actually live?',
                image: { caption: 'Add a screenshot or diagram here' },
                paragraphs: [
                  'Canvas holds the coursework, but planning happens everywhere else: to-do apps, calendars, focus timers, habit trackers. Every one of them is another window to switch to, and every switch is a chance to get distracted.',
                ],
              },
              {
                eyebrow: 'The scene',
                heading: 'Getting one assignment onto your radar takes five apps.',
                stats: [
                  { value: '5', label: 'apps' },
                  { value: '4', label: 'context switches' },
                  { value: '1', label: 'assignment' },
                ],
                paragraphs: [
                  'Our lead developer described it in our midterm pitch: she had tried Forest, TickTick, Todoist, Habitica and Flipd. Each worked for a while, but the more windows were open, the easier it was to drift.',
                  'Canvas itself offers a limited to-do list and calendar and almost no customization. BetterCanvas changes how Canvas looks, but it can’t add the tools students already reach for.',
                ],
              },
            ],
          },
          {
            id: 'opportunity',
            label: 'The Opportunity',
            blocks: [
              {
                eyebrow: 'Connecting the dots',
                heading: 'Students were stitching their own system together; we could give them one surface to build it on.',
              },
              {
                eyebrow: 'How might we',
                big: true,
                heading: 'Bring Canvas and a student’s everyday productivity tools into one customizable page, so staying on track doesn’t mean switching tabs?',
              },
            ],
          },
          {
            id: 'solution',
            label: 'Solution',
            blocks: [
              {
                eyebrow: 'Final build',
                heading: 'Everything is a block.',
                paragraphs: [
                  'Canvas courses, a calendar, a to-do list, a progress tracker and a focus timer are each a block. In edit mode, students add, remove, drag and resize blocks, and the layout saves to their account. Think Notion blocks, but wired into Canvas.',
                ],
                link: { label: 'Visit blocki.vercel.app', href: 'https://blocki.vercel.app/' },
              },
              {
                eyebrow: 'The Canvas block',
                heading: 'Canvas, mirrored instead of copied.',
                paragraphs: [
                  'Blocki reads Canvas live through the API as the signed-in student, so it only ever shows what that student can already see. Course data is never saved to our database. MongoDB only holds Blocki’s own settings, layouts and tracker data.',
                  'Students can view modules, files, announcements, groups and feedback, and submit work directly. Uploads land in a BlockiUploads folder in their Canvas files. Quizzes deliberately redirect to Canvas so teachers can still see tab switching and Blocki never gives an edge.',
                ],
              },
              {
                eyebrow: 'Interactive calendar',
                heading: 'Canvas deadlines and personal plans on one calendar.',
                paragraphs: [
                  'Students toggle their Canvas due dates on or off and drag their own tasks to new days. Dates a teacher set in Canvas stay locked, because moving them in Blocki wouldn’t move the real deadline.',
                ],
              },
              {
                eyebrow: 'Advanced todo',
                heading: 'Tasks that follow you into tomorrow.',
                paragraphs: [
                  'Unfinished tasks carry over to the next day. Tasks take priority tags from P1 to P4, can be grouped by priority or due date, link to a course, and show up on the calendar once they have a date. Anything overdue turns red.',
                ],
              },
              {
                eyebrow: 'The tracker',
                heading: 'Progress you can see at a glance.',
                paragraphs: [
                  'The tracker came from our “At a Glance” sketches. The pixel version is my favorite: upload any picture, Blocki turns it grayscale, and every task you finish paints a random pixel back into color, a bit like earning XP in Habitica.',
                ],
              },
              {
                eyebrow: 'Signing in',
                heading: 'Getting into Canvas the right way.',
                cards: [
                  {
                    label: 'Ruled out · Us',
                    title: 'Build on mock data',
                    text: 'Our professor ruled it out. The point was to prove it works on live Canvas.',
                  },
                  {
                    label: 'Ruled out · The student',
                    title: 'Students paste their own access token',
                    text: 'Explicitly against the Canvas API Policy.',
                  },
                  {
                    label: 'Ruled out · Canvas',
                    title: 'An LTI key',
                    text: 'LTI tools live inside Canvas. Blocki is a separate site.',
                  },
                  {
                    label: 'Shipped · The university',
                    title: 'OAuth2 with a DLSU-issued developer key',
                    text: '“Login with Canvas,” approved by ASIST and the Data Protection Officer.',
                  },
                ],
                paragraphs: [
                  'This decision shaped the whole project. We wrote a proposal listing every Canvas API endpoint we needed and why, requested an unscoped developer key, and replaced student IDs with “self” in API calls so we never handled them.',
                ],
              },
            ],
          },
          {
            id: 'build',
            label: 'Design Process',
            blocks: [
              {
                eyebrow: 'What guided our designs?',
                heading: 'Guiding Principles.',
                cards: [
                  {
                    label: 'Principle 1',
                    title: 'Everything is a block',
                    text: 'If a student doesn’t need it, they can remove it.',
                  },
                  {
                    label: 'Principle 2',
                    title: 'Canvas stays the source of truth',
                    text: 'Read it live, never store it, redirect when needed.',
                  },
                  {
                    label: 'Principle 3',
                    title: 'Make progress visible',
                    text: 'Show what’s done, not only what’s due.',
                  },
                ],
              },
              {
                eyebrow: 'My role',
                heading: 'An analyst sits between the user stories and the code.',
                paragraphs: [
                  'Oliver and I were the team’s two analysts. We worked with our Product Owner to turn 27 user stories into features, designed the flows and interface in Figma, set the brand, and then built the UI in Next.js and Tailwind.',
                ],
              },
            ],
          },
        ],
      },
    },
    {
      name: 'Hotel Booking System',
      slug: 'hotel-booking-system',
      type: 'Full Stack · Web App',
      tags: ['Next.js', 'MySQL', 'Tailwind'],
      page: {
        headline: 'Add a one-sentence headline for this project.',
        summary: 'A short summary of this project.',
        role: ['Your role'],
        skills: ['Your skills'],
        team: ['Your team'],
        timeline: ['Your timeline'],
        chapters: [
          {
            id: 'overview',
            label: 'Overview',
            blocks: [
              {
                eyebrow: 'About this project',
                heading: 'Replace this with your case study.',
                paragraphs: [
                  'Write what the problem was, what you did and what happened. Add more chapters and blocks as you go.',
                ],
              },
            ],
          },
        ],
      },
    },
    {
      name: 'DocumentVision',
      slug: 'documentvision',
      type: 'AI Tool · Web App',
      tags: ['React', 'OCR', 'Data Visualization'],
      page: {
        headline: 'Add a one-sentence headline for this project.',
        summary: 'A short summary of this project.',
        role: ['Your role'],
        skills: ['Your skills'],
        team: ['Your team'],
        timeline: ['Your timeline'],
        chapters: [
          {
            id: 'overview',
            label: 'Overview',
            blocks: [
              {
                eyebrow: 'About this project',
                heading: 'Replace this with your case study.',
                paragraphs: [
                  'Write what the problem was, what you did and what happened. Add more chapters and blocks as you go.',
                ],
              },
            ],
          },
        ],
      },
    },
    {
      name: 'UX Society Project',
      slug: 'ux-society-project',
      type: 'UI/UX · Web & Branding',
      tags: ['Figma', 'Branding', 'User Research'],
      page: {
        headline: 'Add a one-sentence headline for this project.',
        summary: 'A short summary of this project.',
        role: ['Your role'],
        skills: ['Your skills'],
        team: ['Your team'],
        timeline: ['Your timeline'],
        chapters: [
          {
            id: 'overview',
            label: 'Overview',
            blocks: [
              {
                eyebrow: 'About this project',
                heading: 'Replace this with your case study.',
                paragraphs: [
                  'Write what the problem was, what you did and what happened. Add more chapters and blocks as you go.',
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};