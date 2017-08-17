$(function () {
    console.info('DOM zaladowany!');

    setBackgroundElementOnSection();
    setHoverOnNavInLinksSection();
    setBorderOnLiInMainSection();
    setMoreClassesOnLiInMainSection();
    makeMenuLinksRed();
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

function makeMenuLinksRed() {
    var listItems = $('.menu').find('li').addClass('redLinks').first().addClass('xl-font');
}
