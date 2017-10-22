'use strict';

//Get a reference to the `<canvas>` element in the HTML


//Call the `getContext()` method (passing a parameter of `'2'1) to get access
//to the canvas's context brush.



//Give the canvas an event listener for `'mousemove'` events (for when the mouse
//is moved over the canvas). The callback function should draw a small circle at
//the location of the event (use the event's `offsetX` and `offsetY` properties).
//Remember to fill() or stroke() the circle once it's defined!




//Better would be to only have the circles drawn when the mouse button is pressed.
//To keep track of this, create a global `state` variable that is an Object
//with an appropriate property for tracking when the mouse button is down.




//Next, give the canvas an event listeners for `'mousedown'` events (for when the
//mouse button is pressed) and `'mouseup'` events (for when the mouse button is
//released). The callback functions should modify the state to based on whether
//the button is now up or now down.
// 
//Modify the `mousemove' callback so that it only draws circles when the button
//is down.




//Better than drawing circles would be to draw connected lines! Modify the canvas
//callbacks so that:
// 1. On `mousedown` the canvas _begins a new path_, moving to the event location 
// 2. On `mousemove` the canvas draws a line to the event location. Remember to 
//    `stroke()` the path!
//(Because the brush tracks the current path, it effectively provides a global
//state tracking the location of the previous point for drawing lines!)
//
//You should now we able to draw smooth lines!
//You may want to give the brush a thicker `lineWidth`.



//The provided HTML includes an `<input type="color">`, which is an element
//that gets a color input from the user. While this feature is not supported by
//IE or iOS (http://caniuse.com/#feat=input-color), it does work great on other
//browsers!
//
//Add an event listener for this `<input>` that responds to `'input'` events.
//The callback function should set the brush's `strokeStyle` to be the input's
//`value`.
//
//Now you can draw with color!




//Wouldn't it be nice to be able to save your fine artwork to share with others?
//Add code to do the following when the  "save" button is clicked:
// 1. Use the canvas's `toDataUrl()` function to convert the canvas content into
//    png format (pass the string `'image/png'`) as an argument to specify type.
// 2. Create a new `<a>` element that will serve as a link to the image. You do
//    NOT need to attach this to the DOM tree!
// 3. Set the link's `href` attribute to be the produced data url.
// 4. Set the link's `download` attribute to be the name of the file to save the
//    picture as (e.g., `drawing.png`). This attribute is also not supported by
//    IE and iOS (http://caniuse.com/#search=download).
// 5. Programmatically click the link by calling the `click()` method on it!




//Draw a pretty picture and save it in the problem's `img/` folder :)
