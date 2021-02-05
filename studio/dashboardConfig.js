export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601ceacf83c3147c341bd9f4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-px4pd1jn',
                  apiId: '5d3e76ca-f3e4-4094-8ef8-4618d42aff9c'
                },
                {
                  buildHookId: '601ceacfb9896f7a414c3fb0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dnhvy7ir',
                  apiId: '6119642d-2e82-464f-8a0b-efe112ceb8e8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yugeorpheus/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dnhvy7ir.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
