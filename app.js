(function(){fetch('data.json').then(res => res.json()).then(sayHi)})();

function sayHi(res) {
    console.log(res);
}