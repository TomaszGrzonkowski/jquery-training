$(function () {
    $('dt').on('mouseenter', showElementInfo);
});

function showElementInfo(event) {
    console.info(event.target.nodeName, event.target.innerHTML);
}
