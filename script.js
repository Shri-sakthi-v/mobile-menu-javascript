const hamburger = document.querySelector('.navigator_menu');

hamburger.addEventListener('click', () => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const links = document.querySelector('.internal-link');
  const home = document.querySelector('.starting-page');
  const divWrap = document.createElement('div');
  const linksChilds = Array.from(links.children);
  const property = {
    color: '#fff',
    fontSize: '32px',
    fontFamily: 'Poppins sans-serif',
    fontWeight: '600px',
    lineHeight: '44px',
    textDecoration: 'none',
  };

  });
div.appendChild(img);
div.appendChild(links);
divWrap.append(div);
home.appendChild(divWrap);
 divWrap.style.backgroundColor = 'rgba(96, 112, 255,0.9)';
img.src = 'assets/Toolbar.png';
img.style.float = 'right';
img.style.marginRight = '4%';
img.addEventListener('click', () => {
  img.style.cursor = 'pointer';
});
links.style.display = 'flex';
links.style.flexDirection = 'column';
links.style.clear = 'both';
divWrap.style.zIndex = '1';
divWrap.style.position = 'fixed';
divWrap.style.top = '0';
divWrap.style.height = '130vh';
divWrap.style.width = '100%';
div.style.marginTop = '40px';
links.style.listStyle = 'none';
img.addEventListener('click', () => {
  divWrap.style.display = 'none';
});
div.appendChild(img);
div.appendChild(links);
divWrap.append(div);
home.appendChild(divWrap);

for (let i = 0; i < linksChilds.length; i += 1) {
  const elementChildren = linksChilds[i].children;
  elementChildren[0].addEventListener('click', () => {
    divWrap.style.display = 'none';
  });
  for (let j = 0; j < Object.keys(property).length; j += 1) {
    elementChildren[0].style[Object.keys(property)[j]] = property[Object.keys(property)[j]];
  }
  console.log(elementChildren);
}
});

