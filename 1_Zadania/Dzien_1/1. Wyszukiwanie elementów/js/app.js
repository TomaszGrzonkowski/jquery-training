$(function () {
    console.info('DOM zaladowany!');

    setBackgroundElementOnSection();
    setHoverOnNavInLinksSection();
});

function setBackgroundElementOnSection() {
    $('section').addClass('backgroundElement');
}

function setHoverOnNavInLinksSection() {
    $('.links').find('nav').addClass('hover-effect');
}
