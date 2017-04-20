var hW = '';

function resizeHtmlFont() {
    hW = $("html").width()/16;
    hH = $("html").height()/28;
    $("body,html").css("font-size", hW>hH?hH:hW+ "px");
}

// resizeHtmlFont();
// addEventListener("orientationchange", function (e) {
//     resizeHtmlFont();
//     e.preventDefault();
// });
// addEventListener("resize", function (e) {
//     resizeHtmlFont();
//     e.preventDefault();
// });
$(document).ready(function () {
    resizeHtmlFont();
});