$(function () {
    $('dt').on('mouseenter', showElementInfo);
    $('.hero-buttons').find('button').on('click', showElementData);

    initSuperheroDescriptionsToggle();
});

function showElementInfo(event) {
    console.info(event.target.nodeName, event.target.innerHTML);
}

function showElementData(event) {
    console.log($(event.target).data('feature'));
}

function initSuperheroDescriptionsToggle() {
    var superheroDescription = $('.superhero-description');
    superheroDescription.find('dd').hide();
    superheroDescription.find('dt').on('click', toggleSuperheroDescription);
}

function toggleSuperheroDescription() {
    $(this).next().slideToggle();
}
