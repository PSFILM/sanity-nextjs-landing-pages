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
                  buildHookId: '61f88f7fb0f94100591502a5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-13erpoga',
                  apiId: '6ebff34f-07a4-45b8-b94c-96a541409bab'
                },
                {
                  buildHookId: '61f88f7fe05717006f7b1f3d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-de7yzb3q',
                  apiId: '0941c44b-37c6-4a0d-999b-fd01f2774304'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PSFILM/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-de7yzb3q.netlify.app', category: 'apps'}
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
