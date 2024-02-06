module.exports = {
  siteTitle: 'Henry Mallon',
  siteDescription:
    'Henry Mallon is a recent college graduate with degrees in computer science and cognitive science.',
  siteKeywords:
    'Henry Mallon, Henry, Mallon, henrymallon, software developer, software engineer, AI, computer vision, data analytics, web developer, java developer',
  siteUrl: 'https://henrymallon.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Henry Mallon',
  location: 'California, United States',
  email: 'hdmallon@gmail.com',
  github: 'https://github.com/henrymallon',
  twitterHandle: '@henrymallon',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/henrymallon',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/henrymallon/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/henrymallon',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jugglinghenry',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/henrymallon',
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
