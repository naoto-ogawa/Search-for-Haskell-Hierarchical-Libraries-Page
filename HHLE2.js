// Haskell Hierarchical Libraries Easier

const toggle = e => e.style.display = e.style.display === 'none' ? 'block' : 'none';

const hideAll = function(sel) {
  document.querySelectorAll(sel).forEach(e => toggle(e));
}

// hide all explanations.
hideAll('.doc')

var allsrc = document .querySelectorAll('.src')
Array.prototype.slice.call(allsrc, 1) // excludes the description of the header.
  .forEach(
    e => e.addEventListener('click',
      x => toggle(x.target.nextSibling)
    )
  );

// event for a header.
document.querySelector('#module-header').addEventListener('click',
  e => toggle(document.querySelector('#description > .doc'))
)

// close instances.
document.querySelectorAll('details').forEach(e => e.removeAttribute('open',''));

//
document.querySelector('#package-header').addEventListener('click',
  e => {
    location.href = window.location.href.substring(0, window.location.href.indexOf('docs'))
  });