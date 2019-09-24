/**
 * @name app.js
 * @author C'est moi qui l'ai fait !!!
 * @version 1.0.0
 */
import { MyDate } from './MyDate.class.js';

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
            } else {
                $('#todo-manage').removeAttr('disabled');
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

$('#begin').on('change', (event) => {
    $('#end').attr('min', new MyDate($('#begin').val()));
    $('#end').val(new MyDate($('#begin').val()));
});

// Friendly date management
$('#begin').val(new MyDate().toString()); // Sets the begin date as today
$('#end').val(new MyDate().toString()); // Sets the end date as today
$('#begin').attr('min', new MyDate().toString());
$('#end').attr('min', new MyDate().toString());