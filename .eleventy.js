// const pluginSass = require("eleventy-plugin-sass");


module.exports = function(eleventyConfig) {
  // Add a filter using the Config API
  eleventyConfig.addFilter( "myFilter", function() {});

  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");

  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output:"public"
    }
  };
};