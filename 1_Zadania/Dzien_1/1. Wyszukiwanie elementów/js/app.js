$(function () {
    console.info('DOM zaladowany!');

    setBackgroundElementOnSection();
    setHoverOnNavInLinksSection();
    setBorderOnLiInMainSection();
    setMoreClassesOnLiInMainSection();
});

function setBackgroundElementOnSection() {
    $('section').addClass('backgroundElement');
}

function setHoverOnNavInLinksSection() {
    $('.links').find('nav').addClass('hover-effect');
}

function setBorderOnLiInMainSection() {
    $('.main').find('li').addClass('borderClass');
}

function setMoreClassesOnLiInMainSection() {
    $('.main').find('li').addClass('colorText backgroundElement');
}
