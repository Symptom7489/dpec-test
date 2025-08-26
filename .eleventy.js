module.exports = function(eleventyConfig) {
  // Only copy the admin folder to root of _site
  eleventyConfig.addPassthroughCopy({ "static/admin": "admin" });

  // Optional: copy uploads too
  eleventyConfig.addPassthroughCopy({ "static/uploads": "uploads" });

  // Collection for members
  eleventyConfig.addCollection("member", function(collectionApi) {
    return collectionApi.getFilteredByGlob("members/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
