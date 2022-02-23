export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6216acd13814be53a5a219b1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-srku1q4p",
                  apiId: "aee2f056-3c76-471e-b349-18dafa862801",
                },
                {
                  buildHookId: "6216acd24224ea4f51cd73df",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-g4ivaon8",
                  apiId: "76aa8fba-e4d2-49bb-8ff0-bd6e18db9b1e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/chattersley/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-g4ivaon8.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
