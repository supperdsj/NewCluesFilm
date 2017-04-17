var hW = '';

function resizeHtmlFont() {
    hW = $("html").width();
    $("body,html").css("font-size", hW / 16 + "px");
    $$log.debug('$$initRem.resizeHtmlFont');
}

// resizeHtmlFont();
addEventListener("orientationchange", function (e) {
    resizeHtmlFont();
    e.preventDefault();
});
addEventListener("resize", function (e) {
    resizeHtmlFont();
    e.preventDefault();
});
$(document).ready(function () {
    resizeHtmlFont();
});