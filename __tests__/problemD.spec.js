//problem config
const JS_FILE_PATH = 'problemD/js/index.js';
const HTML_FILE_PATH = 'problemD/index.html';

//dependencies
const fs = require('fs');
const path = require('path');
const md5 = require('md5');

//my custom matchers
const styleMatchers = require('../lib/style-matchers.js');
expect.extend(styleMatchers);

//load the HTML content to test with
const html = fs.readFileSync(HTML_FILE_PATH, 'utf-8');

//mock log so we don't get extra output
//console['log'] = jest.fn();


/** Begin tests **/

describe('Source code is valid', () => {
  test('JavaScript lints without errors', async () => {
    expect([JS_FILE_PATH]).toHaveNoEsLintErrors();
  });
});

describe('Includes the jQuery library', () => {
  test('Imported jQuery first', () => {
    document.documentElement.innerHTML = html; //let's just do this now
    expect(document.querySelector('script').src).toMatch(/jquery/i);    
  })
})

describe('Created a poll builder', () => {
  let solution; //define at global scope for unit testing functions
  
  beforeAll(() => {
    document.documentElement.innerHTML = html; //redo, just in case

    //load JavaScript libraries separately
    $ = require('jquery'); //jQuery for convenience    
    solution = require('../'+JS_FILE_PATH); //actually load the JavaScript file!
  });

  describe('Rendered an initial "input group"', () => {
    test('Created an <input> element with appropriate attributes', () => {
      let input = $('input');
      expect(input.length).toBe(1); //has an input
      expect(input.hasClass('form-control')).toBe(true);
      expect(input.attr('type')).toEqual('text');
      expect(input.attr('placeholder')).toEqual('Your option here');
    })

    test('Created a <label> for the input', () => {
      let label = $('label');
      expect(label.length).toBe(1); //has a label
      expect(label.text()).toMatch('1.'); //has correct text
      expect(label.next('input').length).toBe(1); //is before the input
    })

    test('Wrapped label and input in a `.input-group`', () => {
      let group = $('.input-group');
      expect(group.length).toBe(1);
      expect(group.children('label').length).toBe(1); //has child label
      expect(group.children('input').length).toBe(1); //has child input
    })
  })

  describe('Adds new input boxes', () => {
    test('Adds a second `.input-group` on button press', () => {
      $('#add-button').click(); //click the button

      expect($('.input-group').length).toBe(2); //should now be two of them!
      expect($('.input-group').last().children('input').length).toBe(1); //should have an input too
      expect($('.input-group:first label').first().text()).toMatch('1.'); //has right label
      expect($('.input-group:last label').last().text()).toMatch('2.'); //has right label
    })

    test('Adds a third `.input-group` on subsequent button press', () => {
      $('input').val('Test input initial'); //modify the values (as if we typed!). Applies to all
      
      $('#add-button').click(); //click the button again!

      expect($('.input-group').length).toBe(3); //should now be three of them (not 4)
      expect($('.input-group:last label').text()).toMatch('3.'); //check label
    })

    test('New input groups have blank inputs', () => {
      expect($('input:first').val()).not.toEqual('');
      expect($('input:last').val()).toEqual('');
    })
  })

  describe('Includes "remove" buttons for each input', () => {

    test('Input groups contain remove buttons', () => {
      expect($('.input-group:first .input-group-btn').length).toBe(0); //first one has no button
      expect($('.input-group:eq(1) .input-group-btn').length).toBe(1); //middle one does
      expect($('.input-group:last .input-group-btn').length).toBe(1); //last one does
    })

    test('Remove button removes the element', () => {
      $('input:eq(1)').val('Test input element middle'); //make them unique
      $('input:eq(2)').val('Test input element last'); //make them unique
      
      $('.input-group:eq(1) button').click(); //click the button on element 1

      expect($('input:eq(1)').val()).toEqual('Test input element last'); //element 1 is now last
    })

    test('Label numbers updated on removal', () => {
      expect($('.input-group:last label').text()).toEqual('2.');      
    })
  })
})
