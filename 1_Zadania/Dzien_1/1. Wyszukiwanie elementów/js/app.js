$(function () {
    console.info('DOM zaladowany!');

    setBackgroundElementOnSection();
    setHoverOnNavInLinksSection();
    setBorderOnLiInMainSection();
    setMoreClassesOnLiInMainSection();
    makeMenuLinksRed();
    addCreepyHeaderClass();
    logMenuElements();
    logFormInputValues();
    doStuffWithCodersLink();
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

function addCreepyHeaderClass() {
    var h1 = $('h1');

    h1.addClass('creepyHeader');
    h1.parent().css({
        borderWidth: '2px',
        borderColor: 'blue',
        borderStyle: 'double'
    });

    h1.next().addClass('crazy');

    if (h1.next().hasClass('crazy')) {
        console.info('OK');
    }
}

function logMenuElements() {
    var menuElems = $('.menu').children();

    console.log(menuElems.first());
    console.log(menuElems.eq(2));
    console.log(menuElems.last());

    menuElems.addClass('menuLinks');

    menuElems.eq(2).hide();
}

function logFormInputValues() {
    var formInputs = $('.form').find('input');

    formInputs.each(function () {
        console.log($(this).val());
    });
}

function doStuffWithCodersLink() {
    var codersLink = $('#codersLink');
    var codersLinkHref = codersLink.attr('href');

    console.log(codersLinkHref);

    codersLink.attr('href', 'www.google.pl');
}
