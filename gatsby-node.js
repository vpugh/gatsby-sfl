const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const bashoPages = path.resolve('src/templates/personal-basho-pages.js');
  const userPages = path.resolve('src/templates/user-pages.js');

  return graphql(`{
    allBashos {
      edges {
        node {
          id
        }
      }
    }
    allUsers {
      edges {
        node {
          id
        }
      }
    }
  }`)
  .then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allBashos.edges.forEach(({ node }) => {
      createPage({
        path: `/basho/${node.id}`,
        component: bashoPages,
        context: {
          bashoId: node.id,
        }
      })
    })

    res.data.allUsers.edges.forEach(({ node }) => {
      createPage({
        path: `/users/${node.id}`,
        component: userPages,
        context: {
          userId: node.id,
        }
      })
    })
  })
}