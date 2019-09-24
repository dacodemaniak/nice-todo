/**
 * @name app.js
 * @author C'est moi qui l'ai fait !!!
 * @version 1.0.0
 */

// Todo form manager
// -step 1) : Listen for a clic in the todo-form object
$('#todo-form').on(
    'click', // Event listened
    function(event) { // Event handler (callback)
        console.log('Hey, you are clicking on me ?');
    }
);

// Native javascript
//let form = document.querySelector('#todoForm');
//form.addEventListener('click', function(event) {});