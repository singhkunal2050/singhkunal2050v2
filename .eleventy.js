const { DateTime } = require("luxon")
const pluginPWA = require("eleventy-plugin-pwa")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const criticalCss = require("eleventy-critical-css");
const util = require('util');


module.exports = function(eleventyConfig) {

  // Add a filter using the Config API
  eleventyConfig.addFilter( "postDate", function(dateObj) {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)    
  });

  // Add a filter for cleaning work url
  eleventyConfig.addFilter( "urlClean", function(url) {
    return url.split("//")[1]
  });

  //  check if isArticlePage
  eleventyConfig.addFilter( "isArticlePage", function(url) {
    return url.split("/").includes('blog')
  });
  
  // debug filter 
  eleventyConfig.addFilter('console', function(value) {
      return util.inspect(value);
  });

  //add plugin
  eleventyConfig.addPlugin(pluginPWA);
  eleventyConfig.addPlugin(syntaxHighlight);
  // eleventyConfig.addPlugin(criticalCss);

  // adding config for tags collection
  // eleventyConfig.addCollection("tagsList", function(collectionApi) {
  //     const tagsList = new Set();
  //     collectionApi.getAll().map( item => {
  //         if (item.data.tags) { // handle pages that don't have tags
  //             item.data.tags.map( tag => tagsList.add(tag))
  //         }
  //     });
  //     return tagsList;
  // });


  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy("./src/fonts");

  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output:"public"
    }
  };
};