module.exports = {
  lintOnSave: false,
  // Keep the root path for local/Jenkins builds; GitHub Pages uses /vpdl/.
  publicPath: process.env.DEPLOY_TO_PAGES === "true" ? "/vpdl/" : "/",
};
