const TEXT_DATA = {
  fullName: 'Ilya Minchuk',
  position: 'Front-end Developer',
  contacts: {
    email: {
      href: 'mailto:cacatubutyt@gmail.com',
      label: 'cacatubutyt@gmail.com',
    },
    mobilePhone: {
      href: 'tel:+48886898101',
      label: '+48886898101',
    },
    gitHub: {
      href: 'https://github.com/toronto-tokyo',
      label: 'toronto-tokyo',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/ilya-minchuk/',
      label: 'Minchuk Ilya',
    },
  },
  aboutMe:
    'I am impressed by the values and principles: confidence, reliability, professionalism, trust, maintaining an atmosphere of comfort, friendliness and mutual assistance. I believe that this approach guarantees success. If you need a specialist who is motivated to achieve results in work, ready to contribute to the prosperity of the company, I will be happy to become part of your team. I am sure that by gaining experience, I will be able to become an experienced employee who can benefit the company.',
  languages: {
    en: {
      label: 'English',
      data: 'Intermediate (B1)',
    },
    ru: {
      label: 'Russian',
      data: 'Native',
    },
    by: {
      label: 'Belarusian',
      data: 'Native',
    },
    de: {
      label: 'German',
      data: 'Starter',
    },
  },
  skills: [
    {
      key: 'html',
      data: 'HTML5',
    },
    {
      key: 'css',
      data: 'CSS3',
    },
    {
      key: 'scss',
      data: 'SCSS',
    },
    {
      key: 'tailwind',
      data: 'Tailwind CSS',
    },
    {
      key: 'javaScript',
      data: 'JavaScript',
    },
    {
      key: 'typeScript',
      data: 'TypeScript',
    },
    {
      key: 'react',
      data: 'React',
    },
    {
      key: 'rtk',
      data: 'React Toolkit',
    },
    {
      key: 'next',
      data: 'Next',
    },
    {
      key: 'git',
      data: 'GIT',
    },
    {
      key: 'testingLibrary',
      data: 'Testing Library',
    },
  ],
  tools: [
    {
      key: 'trello',
      data: 'Trello',
    },
    {
      key: 'webpack',
      data: 'Webpack',
    },
    {
      key: 'vite',
      data: 'Vite',
    },
    {
      key: 'vsCode',
      data: 'VS Code',
    },
  ],
  workExperience: [
    {
      key: 'hilti',
      position: 'Logistics Assistant',
      period: {
        from: '10/2020',
        to: '07/2021',
      },
      organization: {
        label: 'HILTI',
        link: 'https://www.hilti.by/',
      },
      place: 'Minsk',
    },
    {
      key: 'aps',
      position: 'Transport Specialist',
      period: {
        from: '07/2021',
        to: '09/2022',
      },
      organization: {
        label: 'APS',
        link: 'https://www.aps-solver.com/',
      },
      place: 'Minsk',
    },
  ],
  education: [
    {
      key: 'bseu',
      profession: 'Logistics economist',
      organization: {
        label: 'Belarusian State Economic University',
        link: 'http://bseu.by/english/',
      },
      place: 'Minsk',
      description: 'Studied at the university as a logistics economist.',
    },
    {
      key: 'rss',
      profession: 'Front-end Developer',
      organization: {
        label: 'Rolling Scopes School',
        link: 'https://rs.school/',
      },
      place: 'Minsk',
      description:
        'During my studies I gradually learnt front-end technologies from html to react, reinforcing my knowledge by writing various projects. In the last stages of the course, I worked in a team under the guidance of a mentor on writing final projects. ',
    },
  ],
  certificates: [
    {
      key: 'rss-fe',
      cerfLink: 'https://app.rs.school/certificate/zrky512h',
      title: 'JavaScript',
      school: {
        img: `${process.env.REACT_APP_PUBLIC_URL}/images/logo-rs.svg`,
        label: 'Rolling Scopes School',
        link: 'https://rs.school/',
      },
    },
    {
      key: 'rss-react',
      cerfLink: 'https://app.rs.school/certificate/aiujqcje',
      title: 'React',
      school: {
        img: `${process.env.REACT_APP_PUBLIC_URL}/images/logo-rs.svg`,
        label: 'Rolling Scopes School',
        link: 'https://rs.school/',
      },
    },
    {
      key: 'str-intermediate',
      cerfLink:
        'https://cert.str.by/streamline-certificate/F2F8C90AE528A720FEE4A08AC82A87E2',
      title: 'English B1',
      school: {
        img: `${process.env.REACT_APP_PUBLIC_URL}/images/logo-streamline.png`,
        label: 'Streamline - language school',
        link: 'https://str.by/',
      },
    },
  ],
};

export default TEXT_DATA;
