/*
var str = "Mr Blue has a blue house and a blue car";

var res = str.replace(
  /blue|house|car/gi, 
  function ( $0, $1,){
    console.log( $0, $1);
    return '&&&';
    return x.toUpperCase();
    }
  );

const res = str.replace(/\bb.*?e\b/ig, 'yes');

console.log(str, '\n'.padEnd(40, '='), '\n', res);
*/

/*
function replacer(match, p1, p2, p3, p4, offset, string) {
   // p1 is nondigits, p2 digits, and p3 non-alphanumerics 
   console.log('match:', match, 'p1:', p1, 'offset:', offset, 'string', string);
   return [p1, p2, p3].join(' - '); 
};
 
var newString = 'abc12345#$*%bh'.replace(
/([\D]*)(\d*)([\W]*(bh))/,
replacer); 

console.log(newString); // abc - 12345 - #$*%
*/

var re = /((\w+)\s(\w+))/; 
var str = 'John Smith'; const name = 'abu adnaan'
var newstr = str.replace(re, `$2, $1 + $2-${name} = $3`); 
console.log(newstr); // Smith, John