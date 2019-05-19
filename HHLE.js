// Haskell Hierarchical Libraries Easier
//

// input
const $source = document.createElement("input");
$source.setAttribute("type","text");
$source.setAttribute("maxlength","30");
$source.setAttribute("size","30");
$source.setAttribute("placeholder","key word");

var allA = document.querySelectorAll('a');
var quickJump = Array.prototype.slice.call(allA, 0, 1)[0];
var anchers   = Array.prototype.slice.call(allA, 3);
var top       = document.querySelectorAll('#module-list > ul > li');

// add input text.
quickJump.parentNode.insertBefore($source, quickJump);

const typeHandler = function(evt) {
  var matchLib = Array.prototype.slice.call(anchers)
                  .filter(e1 => e1.text.includes(evt.target.value))
                  .map(e1 => e1.text)
  anchers.forEach(an =>
    an.parentNode.parentNode.style.display =
      matchLib.findIndex(me => me.includes(an.text))>-1 ? 'block' : 'none'
  );

  top.forEach(t =>
    t.style.display =
      matchLib.findIndex(me => me.includes(t.firstChild.textContent))>-1 ? 'block' : 'none'
  );
}
$source.addEventListener('input', typeHandler)
