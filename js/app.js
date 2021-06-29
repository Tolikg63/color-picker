let banner = document.createElement('div');
document.addEventListener('click', function(e) {
   banner.style.cssText = `
      border: 2px solid;
      position: absolute;
      font-size: 28px;
      background-color: rgba(28, 45, 69, .5);
   `;
   banner.innerHTML = `
      <ul>
         <li>${e.target.style.backgroundColor}</li>
      </ul>
   `;
   banner.style.top = e.pageY + 'px';
   banner.style.left = e.pageX + 'px';
   banner.style.color = e.target.style.backgroundColor;
   banner.style.bordeColor = e.target.style.backgroundColor;
   document.body.append(banner);
});

function Rounds() {
   let rnd = parseInt(Math.random() * 50);
   let size = parseInt(Math.random() * 150) + 'px'
   for (let i = 0; i <= rnd; i++) {
      let round = document.createElement('div');``
      round.style.position =  'relative';
      round.style.width = size;
      round.style.height = size;
      round.style.top = parseInt(Math.random() * 400) + 'px';
      round.style.left = parseInt(Math.random() * 1000) + 'px';
      round.style.backgroundColor = color();
      document.body.append(round);
   }
}

function color() {
   const r = parseInt(Math.random() * 256);
   const g = parseInt(Math.random() * 256);
   const b = parseInt(Math.random() * 256);
   return `rgb(${r}, ${g}, ${b})`;
}

Rounds();