/**
 * @name app.js
 * @author C'est moi qui l'ai fait !!!
 * @version 1.0.0
 */
import { MyDate } from './MyDate.class.js';
import { Todo } from './Todo.class.js';

// Todo form manager
// -step 1) : Listen for a clic in the todo-form object : Complete
// -step 2) : if click listened, then... enable button
$('#todo-form').on(
    'keyup change', // Events listened (cause user is able to use his mouse...)
    function(event) { // Event handler (callback)
        const fields = [
            $('#todo-title'),
            $('#begin'),
            $('#end')
        ];
        // Loop over fields...
        let enableButton = true; // Default considers the form is fullfilled
        fields.forEach((field, index) => {
            // Tester si "field" est vide
            if (field.val().trim().length === 0) {
                enableButton = false; // Hey hey... but one is not correctly filled
            } else {
                if (field.attr('id') === 'todo-title') {
                    if (field.val().trim().length > 0) {
                        $('.alert.alert-warning').addClass('d-none');
                    }
                }
            }
        });

        // Games are made... 
        if (enableButton) {
            // Before to release the button... check for dates
            console.log('Begin : ' + $('#begin').val() + ' ' + $('#end').val());

            const begin = new Date($('#begin').val()); // Make an instance of Date object with user entry
            const end = new Date($('#end').val());

            if (end < begin) {
                // Really not possible !
                $('#todo-manage').attr('disabled', 'disabled');
                $('.alert.alert-danger').removeClass('d-none');
            } else {
                $('#todo-manage').removeAttr('disabled');
                $('.alert.alert-danger').addClass('d-none');
            }

        } else {
            // Not correctly fullfilled
            $('#todo-manage').attr('disabled', 'disabled');
        }

    }
);

// Error management
$('#todo-title').on(
    'blur', // End user leaves that field
    function(event) {
        if ($(this).val().trim().length === 0) {
            // I have to remove the d-none class of the target element
            $('.alert.alert-warning').removeClass('d-none');
        } else {
            $('.alert.alert-warning').addClass('d-none');
        }
    }
);

$('#begin').on('blur', function(event) {
    const begin = new Date($('#begin').val());
    const end = new Date($('#end').val());

    if (end < begin && end) {
        console.log('Pb');
        $('.alert.alert-danger').removeClass('d-none');
    } else {
        console.log('Ok');
        $('.alert.alert-danger').addClass('d-none');
    }
});

$('#end').on('blur', function(event) {
    const begin = new Date($('#begin').val());
    const end = new Date($('#end').val());

    if (end < begin && begin) {
        console.log('Pb');
        $('.alert.alert-danger').removeClass('d-none');
    } else {
        console.log('Ok');
        $('.alert.alert-danger').addClass('d-none');
    }
});

/*$('#begin').on('change', (event) => {
    $('#end').attr('min', new MyDate($('#begin').val()));
    $('#end').val(new MyDate($('#begin').val()));
});*/

/* Friendly date management
$('#begin').val(new MyDate().toString()); // Sets the begin date as today
$('#end').val(new MyDate().toString()); // Sets the end date as today
$('#begin').attr('min', new MyDate().toString());
$('#end').attr('min', new MyDate().toString());*/

/**
 * Form handling
 * document.getElementById('todo-form');
 */
$('#todo-form').on(
    'submit',
    // ES6 arrow function equiv : function(event){}
    (event) => {
        event.preventDefault(); // Empêche l'événement par défaut !

        // Get user entries
        const todo = (new Todo())
            .setTitle($('#todo-title').val())
            .setBeginDate($('#begin').val())
            .setEndDate($('#end').val());

        // Add a row in the html table
        const row = $('<tr>');

        // Add a col in the brand new row
        const checkBoxCol = $('<td>');

        // Create a brand new checkbox...
        const checkBox = $('<input>');
        checkBox
            .attr('type', 'checkbox')
            .addClass('form-control')
            .addClass('check-todo'); // Method chaining
        // Place the checkbox into the checkBoxCol
        checkBox.appendTo(checkBoxCol);

        // Create the title col
        const titleCol = $('<td>');
        // Set the content of the new col
        titleCol.html(todo.getTitle());

        // Last (but not least...) col : buttons (see later)
        // TODO : Ajouter les boutons
        const buttonsCol = $('<td>');
        buttonsCol.html('&nbsp;');

        // Place those three columns on the row
        row.append(checkBoxCol);
        row.append(titleCol);
        row.append(buttonsCol);

        $('tbody').append(row);
    }
);