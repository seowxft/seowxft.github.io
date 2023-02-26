module.exports = {
  email: 'seowxft@gmail.com',

  socialMedia: [
    {
      name: 'Twitter2',
      url: 'https://twitter.com/seowxft',
    },
    {
      name: 'GitHub2',
      url: 'https://github.com/seowxft',
    },
    {
      name: 'Googlescholar',
      url: 'https://scholar.google.com/citations?user=6cHp81MAAAAJ',
    },
    {
      name: 'Orcid',
      url: 'http://orcid.org/0000-0002-5930-8929',
    },
    {
      name: 'Osf',
      url: 'https://osf.io/mw7cd/',
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
      name: 'Publications',
      url: '/#projects',
    },
    {
      name: 'Talks',
      url: '/#talks',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'CP Talks',
      url: 'https://seowxft.github.io/cptalks/',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
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
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
