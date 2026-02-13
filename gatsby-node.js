exports.createPages = async ({ actions }) => {
  actions.createRedirect({ fromPath: `/index.html`, toPath: `/`, isPermanent: true })
}
