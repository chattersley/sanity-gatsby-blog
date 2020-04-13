export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e94daa6f92e1701759d500d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o81v3t69',
                  apiId: '33dc180f-db32-4d39-973c-da12df7d47f7'
                },
                {
                  buildHookId: '5e94daa6bff9af0d5eb798ea',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yhn52ix2',
                  apiId: 'e3ec9744-079d-4585-906f-b4106d53f5a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chattersley/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yhn52ix2.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
