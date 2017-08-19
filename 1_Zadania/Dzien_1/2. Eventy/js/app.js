$(function () {
    $('dt').on('mouseenter', showElementInfo);
    $('.hero-buttons').find('button').on('click', showElementData);

    initSuperheroDescriptionsToggle();
    initFoodShopping();
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

function initFoodShopping() {
    var shoppings = $('.shopping');
    shoppings.find('button').on('click', addFruit);
}

function addFruit() {
    var btn = $(this);

    if (btn.hasClass('added')) {
        btn.removeClass('added').text('Dodaj').parent().css('border', '');
    } else {
        btn.addClass('added').text('Dodano').parent().css('border', '1px solid green');
    }
}
