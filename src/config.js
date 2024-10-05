module.exports = {
  email: 'biswajitkaushik02@gmail.com',

  name: 'Biswajit Kaushik',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/biswajit-k',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/speedo_sorted',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/biswajit-kaushik',
    },
  ],

  youtube: 'https://www.youtube.com/@biswajit-k-yt',

  navLinks: [
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Projects',
      url: '/projects',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Resume',
      url: '/resume',
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
