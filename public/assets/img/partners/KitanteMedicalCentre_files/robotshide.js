// This looks for tags with classes called robothide and replaces them with the variables specified in the data-contents.
// This file should be disallowed in robots.txt so that the robots don't index certain things like highlighted listings. Mantis#794
jQuery(function($) {
    $(".robothide").each(function() {
        $(this).replaceWith(window[$(this).data("contents")]);
    });
});
