$(function () {
    $('dt').on('mouseenter', showElementInfo);
    $('.hero-buttons').find('button').on('click', showElementData);
});

function showElementInfo(event) {
    console.info(event.target.nodeName, event.target.innerHTML);
}

function showElementData(event) {
    console.log($(event.target).data('feature'));
}
