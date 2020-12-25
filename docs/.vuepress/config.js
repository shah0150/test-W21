module.exports = {
  title: 'MAD9145',
  description: 'Client Applied Projects',
  base: '/mad9145-w20/',
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    lastUpdated: 'Last Updated: ',
    nav: [{
        text: 'Overview',
        link: '/overview/'
      },
      {
        text: 'Assignments',
        link: '/assignments/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/'
      },
    ],
    sidebar: [{
        title: 'Introduction',
        collapsable: true,
        children: [
          ['/overview/', 'Overview'],
          '/overview/course-section-information',
          '/overview/contacts'
        ]
      },
      {
        title: 'Content Modules',
        collapsable: true,
        children: [
          '/modules/research-planning/',
          '/modules/design-prototyping/',
          '/modules/development-testing/',
          '/modules/finalizing-hand-off/'
        ]
      },
      {
          title: 'Assignments',
          collapsable: true,
          children: [
              ['/assignments/#research-planning', 'Research & Planning'],
              ['/assignments/#design-prototyping', 'Design & Prototyping'],
              ['/assignments/#development-testing', 'Development & Testing'],
              ['/assignments/#finalizing-client-hand-off', 'Finalizing & Client Hand-Off']
          ]
      }
    ],
    sidebarDepth: 2
  },
  serviceWorker: {
    updatePopup: true // Boolean | Object, default to undefined.
    // If set to true, the default text config will be: 
    // updatePopup: { 
    //    message: "New content is available.", 
    //    buttonText: "Refresh" 
    // }
  }
}
