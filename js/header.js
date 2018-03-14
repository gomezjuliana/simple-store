(function(){fetch('/assets/data.json').then(res => res.json()).then(sayHi)})();

function sayHi(res) {
  const logo = createLogo(res.header.logo_url);
  const menu = createMenu(res.header.menu);
  //array.push(log, menu).join('')

}

function createLogo(logo) {
  return [`<img src=${logo}`]
}

function createMenu(menu){
  return menu.map(function(item){
    return `<li>${item}</li>`
  })
}

/*
<div><logo><hamburger></div>
<div><img></div>
<div><text></div>
*/