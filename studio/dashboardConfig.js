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
                  buildHookId: '5e69cc662250d2a0efe8dc85',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-idkdu3gv',
                  apiId: '6e5b0276-f076-4a3e-8479-5fb984670baa'
                },
                {
                  buildHookId: '5e69cc66f62359ab1da03f82',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ww2gw4f6',
                  apiId: 'fa2f67fd-8c16-4942-b03c-c0dd2e7f0398'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivanvanderbyl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ww2gw4f6.netlify.com', category: 'apps'}
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
