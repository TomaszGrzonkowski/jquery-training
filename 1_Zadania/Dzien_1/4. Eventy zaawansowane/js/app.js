$(function () {
    addPanelAfterPeopleSection();
    initPeopleEditor();
});

function addPanelAfterPeopleSection() {
    var panel = $('<div>Lorem ipsum...</div>', {class: 'panel'});

    panel
        .css('color', 'transparent')
        .on('mouseenter', function () {
            $(this).css('color', '');
        })
        .on('mouseleave', function () {
            $(this).css('color', 'transparent');
        });

    $('.people').after(panel);
}


function initPeopleEditor() {
    var people = $('.people');

    people.find('li').append(createRemoveBtn()).append(createEditBtn());

    people.on('click', '.remove-item', removeItem);
    people.on('click', '.edit-item', editItem);
}

function createRemoveBtn() {
    return $('<button class="remove-item" type="button">Usun</button>');
}

function createEditBtn() {
    return $('<button class="edit-item" type="button">Edytuj</button>');
}

function removeItem() {
    $(this).parent().remove();
}

function editItem() {
    var editBtn = $(this);
    var parentElement = editBtn.parent();
    var controlBtns = parentElement.find('button');

    if (parentElement.data('editing')) {
        parentElement.data('editing', false);
        editBtn.text('Edytuj');

        var newName = parentElement.find('input').val();
        parentElement.html('').append(newName).append(controlBtns);
    } else {
        parentElement.data('editing', true);
        editBtn.text('Zatwierdz');

        parentElement.find('button').remove();

        var oldName = parentElement.text();
        parentElement.html('').append(createNameInput(oldName)).append(controlBtns);
    }
}

function createNameInput(optionalValue) {
    var nameInput = $('<input type="text">');
    nameInput.val(optionalValue || '');
    return nameInput;
}
