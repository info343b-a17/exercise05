'use strict';

/* Follow the below instructions to use jQuery to create an interactive
   survey builder.
   Be sure and reference functions in the jQuery API for more details:
      
      http://api.jquery.com/

  Note that a better style would be to use a global `state` variable to keep 
  track of the poll as it is built; but this exercise will represent state
  with the DOM itself to provide more jQuery method practice!
*/

/* BEFORE YOU DO ANYTHING ELSE, modify the HTML so it imports the jQuery script
   Put the <script> tag for jQuery _BEFORE_ the <script> tag for this file! */


/* Start by using jQuery to create some DOM elements that make a nice form */

//Use the jQuery selector function `$()` to select the '#poll-options' element



//Use console.log to log out that variable (to show that everything works)



//Use the jQuery selector function `$()` to create a new `<input>` element
//Remember to include the < > when specifying the new element to make!



//Use the `.append()` method to append your new input element to the selected
//poll options element.



//Use the `.addClass()` method to add the 'form-control' class to your input



//Use the `.attr()` method to set the following attributes of the input:
//  - 'type' should be 'text'
//  - 'placeholder' should be 'Your option here' 
//Do this with only a single function call!



//Create a new `<label>` element with the HTML:
//    '<label class="input-group-addon"></label>'
//You can just use the `$()` function to specify the entire HTML String



//Use the `.text()` method to specify the text of the label: "1."



//Attach the label to the DOM tree BEFORE the input.
//Hint: see http://api.jquery.com/category/manipulation/dom-insertion-outside/



//Surround ("wrap") both the <input> and the <label> with the element
//  '<div class="input-group">'
//Use the group selector (the comma ,) to select both elements with jQuery
//Hint: http://api.jquery.com/category/manipulation/dom-insertion-around/




/* Now we'll make it so you can add new inputs! */

//Select the `#add-button` and register an event listener that responds to clicks.



  /*The following steps should occur in the callback when the button is clicked 
    (there is a lot to do!)*/

  //Select the first `.input-group` element on the page (which you just made).
  //Use the ':first' pseudoclass (see: http://api.jquery.com/first-selector/)
  // - If you don't use that pseudoclass, your options will increase exponentially!

  

  //Use the `.clone()` method to duplicate that `.input-group` element.
  //Then attach the duplicate as the last child of the `#poll-options` element.

  

  //Select all the `<input>` elements on the screen, and use the `.length`
  //property to determine how many there are. 
  //Log out this value out.

  

  //Select the `<label>` element IN the duplicate. Hint: use the `.children()`
  //method to only select child elements of a selection.

  

  //Set the text of this new label to be the number of options.

  

  //Any values the user has typed in will be copied along with the `.input-group`
  //Select the duplicate's `<input>` element and set its value to be empty ''.
  //Hint: use the `.val()` method.

  

  //Extra: provide a `for` attribute for the label that refers to a unique `id` 
  //attribute of the `<input>` (which you'll need to provide). This supports
  //accessibility. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label

  


  /* Finally (still in the `add-button` callback!) you'll give a "remove" button 
     to these new inputs (we can't remove the first option) */

  //Add the following elements(s) at the end of your new duplicate 'input-group'
  //  `<span class="input-group-btn">
  //     <button type="button" class="btn btn-danger">
  //       <span class="fa fa-times" aria-label="remove"></span>
  //     </button>
  //   </span>`
  //Note that you can use the backticks `` to make a multi-line String.

  

  //Select that button you just created. Because the button is inside a `<span>`
  //you can't use .children(); try .find() instead

  

  //Add a click event listener to that remove button

  

    //The following steps should occur when the remove button is clicked:

    //Use jQuery to select the target of the event (`event.target`)
    //This will give you a "jQuery object" of the target that supports jQuery 
    //methods!
  
    

    //Select the target button's parent `.input-group` and remove it.
    //See https://api.jquery.com/parents/ and https://api.jquery.com/remove/ 

    

    //Now that you've removed items, you'll need to re-number ALL the labels
    //Select all the `<label>` elements and use the `.text()` function
    //Hint: Look at how this function can take a callback as a parameter!
    //      http://api.jquery.com/text/#text-function

    


    /* Here's the end of the remove button callback... */
    
    

/* And that's the end of the add option callback! */



//Congratulations for getting to the end! For an extra challenge:
//
//Add the ability to move options down in the list. In effect, swap 
//the location of the `.input-group` with the one below it.
//
//When you create a new input group, add the following html BEFORE the label to 
//include a "move down" button
//   `<span class="input-group-btn">
//     <button type="button" class="btn btn-default">
//       <span class="fa fa-chevron-down"" aria-label="move down"></span>
//     </button>
//   </span>`
// Add an event listener to this new button so that when clicked it:
//   1. Selects the <input> of the clicked input-group, as well as the 
//      <input> below it (separately)
//   2. Swaps the location of those two elements elements
