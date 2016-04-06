'use strict'

// EXEC
var re = /Hello/ // This is the same as: var re = new RegExp("Hello");
re.exec("Hello World")
console.log('Using EXEC: ',re.exec("Hello World")) // Returns  [ 'Hello', index: 0, input: 'Hello World' ]


// TEST is the same thing as exec except it returns a true/false
re.test("Hello World")
console.log('Using TEST: ', re.test("Hello World")) // Returns true/false


// MATCH
"Hello World".match(/ello/)
console.log("Using MATCH: ", "Hello World".match(/ello/)) // Returns [ 'ello', index: 1, input: 'Hello World' ]


// SEARCH
"Hello World".search(/ello/)
console.log('Using SEARCH: ', "Hello World".search(/ello/)) // Returns the INDEX


// REPLACE
"Hello World".replace("Hello", "Goodbye")
console.log("Using STRING REPLACE: ", "Hello World".replace("Hello", "Goodbye")) // Returns new string

"Hello World".replace(/Hello/, "Goodbye")
console.log("Using REGEX REPLACE: ", "Hello World".replace(/Hello/, "Goodbye")) // Returns new string


"Hello World".match(/^Hell/)
console.log("Match at begining: ","Hello World".match(/^Hell/))

"Hello World".match(/orld$/)
console.log("Match at end: ","Hello World".match(/orld$/))

/* Flags

  i = case insensitive
  g = global
  m = multi-line search

  [] = range [a-z]
  ^ = begins with
  $ = ends with

  Quick ref: http://www.w3schools.com/jsref/jsref_obj_regexp.asp
*/
