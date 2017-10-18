const { resolve } = require("path");

const projectRoot = process.cwd();
const selfRoot = resolve(__dirname, "../");

const resolveProjectDirectory = relativePath =>
  resolve(projectRoot, relativePath);
const resolveSelfDirectory = relativePath => resolve(selfRoot, relativePath);

module.exports = {
  projectRoot,
  projectBuild: resolveProjectDirectory("./dist"),
  projectBuildIndexJs: resolveProjectDirectory("./src/index.js"),
  projectIndexJs: resolveProjectDirectory("./src/index.js"),
  projectPackageJson: resolveProjectDirectory("./package.json"),
  projectSrc: resolveProjectDirectory("./src"),
  dotenv: resolveProjectDirectory("./.env"),
  selfRoot,
  selfESLintConfig: resolveSelfDirectory("./config/.eslintrc.js"),
  selfWebpackConfig: resolveSelfDirectory("./config/webpack.config.js"),
  selfPrettierBin: resolveSelfDirectory("./node_modules/.bin/prettier"),
  selfPrettierConfig: resolveSelfDirectory("./config/.prettierrc.json"),
  selfPrettierIgnore: resolveSelfDirectory("./config/.prettierignore")
};
