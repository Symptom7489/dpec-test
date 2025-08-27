module.exports = function (eleventyConfig) {
  // ✅ Copy the admin folder to _site/admin
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  // ✅ Copy images folder (now the source of all media)
  eleventyConfig.addPassthroughCopy("images");

  // ✅ Optional: if you have CSS, JS, or other assets in root folders
  // eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.addPassthroughCopy("js");

  // ✅ Collection for members
  eleventyConfig.addCollection("member", function (collectionApi) {
    return collectionApi.getFilteredByGlob("members/*.md");
  });

  return {
    dir: {
      input: ".",     // Project root
      output: "_site" // Output folder
    }
  };
};
