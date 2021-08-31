module.exports = {
  siteTitle: 'Khushnood Asif | Software Engineer',
  siteDescription:
    'Khushnood Asif is a mechanical engineer/software engineer based in London, UK who develops projects using the latest web technologies and frameworks.',
  siteKeywords:
    'Khushnood Asif, Khushnood, Asif, khushnood-asif, software engineer, front-end engineer, web developer, java, javascript, europe, mechanical engineer',
  siteUrl: 'https://khushnoodasif.com',
  siteLanguage: 'en_UK',
  googleAnalyticsID: 'G-J94JXK50X3',
  name: 'Khushnood Asif',
  location: 'London, UK',
  email: 'khushnood99@gmail.com',
  github: 'https://github.com/khushnoodasif',
  twitterHandle: '@kush_a9_',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/khushnoodasif',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/khushnoodasif',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kush_a9_',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kush_a9_',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Blog',
      url: 'http://blog.khushnoodasif.com',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
