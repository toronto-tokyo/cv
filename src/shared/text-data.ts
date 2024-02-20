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
      key: 'eslint',
      data: 'ESLint',
    },
    {
      key: 'prettier',
      data: 'Prettier',
    },
    {
      key: 'husky',
      data: 'Husky',
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
        label: 'Streamline',
        link: 'https://str.by/',
      },
    },
  ],
  projects: [
    {
      key: 'qraphQL-playground',
      name: {
        link: 'https://toronto-tokyo-graphql.netlify.app/',
        label: 'QraphQL Playground',
      },
      description: [
        'GraphQL is a playground/IDE for graphQL requests, that works with a user-specified open GraphQL endpoint(should support CORS).',
        'I ran this project on team lead position in team of 3 developers. Mainly responsible for meeting deadlines, allocating subtasks to developers, conducting scrum planning and sprint retrospective meets.',
      ],
      pullRequest: {
        link: 'https://github.com/mir-org/graphiql-app/pull/12',
        label: 'Pull Request',
      },
      deploy: {
        link: 'https://toronto-tokyo-graphql.netlify.app/',
        label: 'Deploy',
      },
      skills: [
        'Team work',
        'React',
        'Redux Toolkit',
        'TypeScript',
        'Testing Library',
      ],
    },
    {
      key: 'e-commerce-pureJS',
      name: {
        link: 'https://mir-org.github.io/eCommerce-Application/#',
        label: 'E-commerce with pure JavaScript',
      },
      description: [
        'This platform replicates real-world shopping experiences in a digital environment. It is a comprehensive online shopping portal that provides an interactive and seamless experience to users from product discovery to checkout, including: user authorization(registration, login, user profile page), product searching, products filtering and sorting, cart functionality',
      ],
      pullRequest: {
        link: 'https://github.com/mir-org/eCommerce-Application/pull/5',
        label: 'Pull Request',
      },
      deploy: {
        link: 'https://mir-org.github.io/eCommerce-Application/#',
        label: 'Deploy',
      },
      skills: [
        'Team work',
        'TypeScript',
        'JavaScript Classes',
        'SCSS',
        'CommerceTools',
        'Jest',
      ],
    },
    {
      key: 'e-commerce-reactJS',
      name: {
        link: 'https://toronto-tokyo-closet.netlify.app/',
        label: 'E-commerce with React - In Development',
      },
      description: [
        'This platform replicates real-world shopping experiences in a digital environment. It is a comprehensive online shopping portal that provides an interactive and seamless experience to users from product discovery to checkout, including: user authorization(registration, login, user profile page), product searching, products filtering and sorting, cart functionality',
      ],
      pullRequest: {
        link: 'https://github.com/toronto-tokyo/e-commerce-react/pull/5',
        label: 'Pull Request',
      },
      deploy: {
        link: 'https://toronto-tokyo-closet.netlify.app/',
        label: 'Deploy',
      },
      skills: [
        'React',
        'Redux Toolkit',
        'TypeScript',
        'Tailwind',
        'CommerceTools',
      ],
    },
    {
      key: 'rss-css-selectors',
      name: {
        link: 'https://rolling-scopes-school.github.io/toronto-tokyo-JSFE2023Q1/RSS-CSS-Selectors/',
        label: 'CSS Selectors',
      },
      description: ['It is a fun game to learn and practice CSS selectors.'],
      pullRequest: {
        link: 'https://github.com/toronto-tokyo/RSS-CSS-Selectors/pull/2',
        label: 'Pull Request',
      },
      deploy: {
        link: 'https://rolling-scopes-school.github.io/toronto-tokyo-JSFE2023Q1/RSS-CSS-Selectors/',
        label: 'Deploy',
      },
      skills: ['TypeScript', 'JavaScript Classes', 'CSS', 'Webpack'],
    },
    {
      key: 'minesweeper',
      name: {
        link: 'https://rolling-scopes-school.github.io/toronto-tokyo-JSFE2023Q1/minesweeper/',
        label: 'Minesweeper',
      },
      description: ['Copy of minesweeper game'],
      pullRequest: {
        link: 'https://github.com/toronto-tokyo/minesweeper/pull/1',
        label: 'Pull Request',
      },
      deploy: {
        link: 'https://rolling-scopes-school.github.io/toronto-tokyo-JSFE2023Q1/minesweeper/',
        label: 'Deploy',
      },
      skills: ['JavaScript Classes', 'SCSS', 'Webpack'],
    },
  ],
  yearOfCreation: '2024',
};

export default TEXT_DATA;
