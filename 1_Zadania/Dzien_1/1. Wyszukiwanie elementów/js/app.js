$(function () {
    console.info('DOM zaladowany!');

    setBackgroundElementOnSection();
});

function setBackgroundElementOnSection() {
    $('section').addClass('backgroundElement');
}
