$(function () {
    insertPanelElement();
    initAddingPeople();
    insertSpanElements();
    initListElementTransfer();
});


function insertPanelElement() {
    var panelElement = $('<div class="panel"></div>');
    $('.people').after(panelElement)
    panelElement.text('Dowolny teskt wstawiony w panel.');
}


function initAddingPeople() {
    var submitBtn = $('.people').find('input[type="submit"]');
    submitBtn.on('click', addPerson);
}

function addPerson() {
    var userName = getUserName();
    var userAge = getUserAge();

    var newPerson = $('<li></li>').text(userName);
    newPerson.attr('data-age', userAge);

    var peopleList = $('.people').find('ul');
    peopleList.append(newPerson);

    colorListItems(peopleList.find('li'));
}

function getUserName() {
    return $('#addUser').val();
}

function getUserAge() {
    return $('#age').val();
}

function colorListItems(list) {
    list.each(function () {
        var listItem = $(this);
        var age = listItem.data('age');

        if (age <= 15) {
            listItem.css('color', 'green');
        }
        else if (age <= 40) {
            listItem.css('color', 'blue');
        }
        else {
            listItem.css('color', 'brown');
        }
    });
}


function insertSpanElements() {
    var panel = $('.where-i-am');

    panel.append(createSpanElement(1, 'append'));
    panel.prepend(createSpanElement(2, 'prepend'));
    panel.after(createSpanElement(3, 'after'));
    panel.before(createSpanElement(4, 'before'));
}

function createSpanElement(index, methodName) {
    return $('<span>').text(index + '. Jestem tutaj ' + methodName).css('minWidth', '50%');
}


function initListElementTransfer() {
    var blocks = $('.block');
    blocks.on('click', moveToRightColumn);
}

function moveToRightColumn() {
    var block = $(this);
    var blockParent = block.parent();

    if (blockParent.hasClass('left')) {
        block.appendTo(blockParent.next());
    }
}
