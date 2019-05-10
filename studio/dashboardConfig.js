export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5cd5885d7d901434f9cddc26',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages9876543-studio',
                  apiId: '84981e50-64c1-48fb-a753-f3d03b60a62c'
                },
                {
                  buildHookId: '5cd5885d664002533f557b70',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages9876543',
                  apiId: '2132966d-066d-4e7e-b5e2-f6c1acfa7f99'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nextjs-landing-pages9876543',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages9876543.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
