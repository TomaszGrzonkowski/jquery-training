$(function() {

    // variables for DOM
    var ul = $("#holiday-dates");

    //Tutaj wpisz cały adres z kluczem, będzie on wyglądał mniej więcej tak:
    //'https://holidayapi.com/v1/holidays?key=21e877a6-77f7-7777-9999-e6f5f4519f25&country=EN&year=2016';
    var holidayUrl = 'https://holidayapi.com/v1/holidays?key=51f36504-7653-4e2f-94b4-1c8fb42e2e2f&country=EN&year=2016';

    function insertHolidays(days) {
        var temp = $('<div>');

        //Użyj sposobu na pobranie wartości z obiektu (nie kluczy) np. pętla for in
        for (var key in days) {
            var holidays = days[key];

            for (var i = 0; i < holidays.length; i++) {
                var holiday = holidays[i];
                var li = createListItem(holiday);
                temp.append(li);
            }
        }

        ul.append(temp.children());
    }

    // Creates a new list item
    function createListItem(holiday) {
        var innerText = holiday.name + holiday.date;
        var newLi = $('<li>').text(innerText);
        return newLi;
    }

    // Calls holidays API
    $.ajax({
        url: holidayUrl,
        dataType: 'json'
    })
    .done(function (res) {
        insertHolidays(res.holidays);
    })
    .fail(function (err) {
        console.error(err);
    });

});
