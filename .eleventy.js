module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    // Global UIDs - https://www.npmjs.com/package/nunjucks-global-uid
    const nunjucks = require('nunjucks');
    const env = nunjucks.configure('views');

    const njkguid = require('nunjucks-global-uid')(env);
    njkguid.reset();

    guids = {};

    eleventyConfig.addNunjucksShortcode("setId", function(ns) {
        guids[ns] = env.globals.uid(ns);
        return ''
    });

    eleventyConfig.addNunjucksShortcode("getId", function(ns) {
        return guids[ns];
    });

    // Adding a Stylesheet
    // https://www.digitalocean.com/community/tutorials/how-to-create-and-deploy-your-first-eleventy-website

    // Copy the `css` directory to the output
    // eleventyConfig.addPassthroughCopy('./src/assets/css');

    // Watch the `css` directory for changes
    // eleventyConfig.addWatchTarget('./src/assets/css');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
