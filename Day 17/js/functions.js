
let bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const articleMatch = new RegExp(/^(The |A |An )/);

bands.sort((a, b) => {
  let articleA = a.match(articleMatch) || '';
  let articleB = b.match(articleMatch) || '';

  a = a.replace(articleA[0].trim(), '');
  b = b.replace(articleB[0].trim(), '');

  if (a.toLowerCase() > b.toLowerCase())
    return 1;
  else if (a.toLowerCase() === b.toLowerCase())
    return 0;
  else 
    return -1;
});

document.querySelector('#result-ul').innerHTML = bands.map(band => `<li>${band}</li>`).join('');
