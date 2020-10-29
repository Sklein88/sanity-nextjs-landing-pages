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
                  buildHookId: '5f9afbf21c44a8208e23deb7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gvz1x2ng',
                  apiId: 'e07adeda-1611-4592-ad66-06c21ca598d4'
                },
                {
                  buildHookId: '5f9afbf226b61b2b2db01a20',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-u5s47q5i',
                  apiId: '6af647bd-1181-4fdb-bd31-9440715b5cb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sklein88/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-u5s47q5i.netlify.app', category: 'apps'}
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
