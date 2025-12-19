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

  // Format date range for experience - takes an experience data object
  eleventyConfig.addFilter( "formatDateRange", function(experienceData) {
    if (!experienceData || !experienceData.date_start) return "";
    const start = DateTime.fromJSDate(experienceData.date_start).toFormat("MMM yyyy");
    if (experienceData.is_current) {
      return `${start} – Present`;
    }
    if (experienceData.date_end) {
      const end = DateTime.fromJSDate(experienceData.date_end).toFormat("MMM yyyy");
      return `${start} – ${end}`;
    }
    return start;
  });

  // Sort by order field
  eleventyConfig.addFilter( "sortByOrder", function(array) {
    if (!array || !Array.isArray(array)) {
      return [];
    }
    return array.sort((a, b) => {
      const orderA = (a && a.data && a.data.order) ? a.data.order : 0;
      const orderB = (b && b.data && b.data.order) ? b.data.order : 0;
      return orderA - orderB;
    });
  });

  //  check if isArticlePage
  eleventyConfig.addFilter( "isArticlePage", function(url) {
    return url.split("/").includes('blog') || url.split("/").includes('snippet');
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