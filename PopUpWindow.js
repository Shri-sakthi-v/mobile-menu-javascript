const projects = {
  p1: {
    name: 'Tonic     ',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'assets/Snapshoot Portfolio.png',
    technolgies: ['HTML', 'CSS', 'Javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['CANOPY', 'Back End Dev', 2023],
  },
  p2: {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'assets/Snapshoot Portfolio (1).png',
    technolgies: ['HTML', 'CSS', 'Javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['CANOPY', 'Back End Dev', 2023],
  },
  p3: {
    name: 'Tonic     ',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'assets/Snapshoot Portfolio (2).png',
    technolgies: ['HTML', 'CSS', 'Javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['CANOPY', 'Back End Dev', 2023],
  },
  p4: {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'assets/Snapshoot Portfolio (3).png',
    technolgies: ['HTML', 'CSS', 'Javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['CANOPY', 'Back End Dev', 2023],
  },
};

const myWork = document.querySelector('#working');

function createMobileProjectCard(key) {
  const projectSection = document.createElement('section');
  const img = document.createElement('img');
  const general = document.createElement('div');
  const infGeneral = document.createElement('div');
  const title = document.createElement('h3');
  const inf = document.createElement('p');
  const description = document.createElement('p');
  const techns = document.createElement('ul');
  const btnLoad = document.createElement('a');
  const footer = document.createElement('footer');
  const externalLink = document.createElement('div');
  externalLink.appendChild(btnLoad);
  externalLink.classList.add('external_link');
  footer.appendChild(techns);
  footer.appendChild(externalLink);
  general.appendChild(title);
  general.appendChild(infGeneral);
  general.appendChild(description);
  general.appendChild(footer);
  general.classList.add('general');
  infGeneral.appendChild(inf);
  infGeneral.id = 'general_inf';
  projectSection.appendChild(img);
  img.src = projects[key].img;
  img.alt = 'Image project';
  img.classList.add('project_image');
  projectSection.appendChild(general);
  title.innerHTML = projects[key].name;
  inf.innerHTML = `${projects[key].generalInf[0]}  &bullet;  ${projects[key].generalInf[1]}  &bullet;  ${projects[key].generalInf[2]}`;
  inf.classList.add('title');
  description.innerHTML = projects[key].description.substring(0, Math.max(130,
    Math.floor(0.4 * projects[key].description.length)));
  description.classList.add('project_description');

  projects[key].technolgies.forEach((element) => {
    techns.innerHTML = `${techns.innerHTML}<li>${element} </li>`;
  });
  techns.classList.add('skills');
  techns.id = 'skills_0';
  btnLoad.innerHTML = 'See Project';
  btnLoad.href = '#';
  projectSection.appendChild(general);
  projectSection.id = key;

  return projectSection;
}

Object.keys(projects).forEach((key) => {
  myWork.appendChild(createMobileProjectCard(key));
});

const popUpBtn = document.querySelectorAll('.external_link');
const btnSource = document.createElement('a');
const btnLive = document.createElement('a');
const externalButton = document.createElement('div');
const wrapper = document.createElement('div');
const home = document.querySelector('.starting-page');
const cancelBtn = document.createElement('img');
const imgWrapper = document.createElement('div');
const header = document.createElement('div');
const title = document.createElement('h3');
const infos = document.createElement('p');
const image = document.createElement('img');
const description = document.createElement('p');
const skills = document.createElement('ul');
const fullwindow = document.createElement('div');

imgWrapper.classList.add('pop-header-div');
cancelBtn.src = 'assets/component.svg';
imgWrapper.appendChild(cancelBtn);

description.classList.add('project_description');

infos.classList.add('inf');

const bottom = document.createElement('div');
const mobilePart = document.createElement('div');

title.classList.add('pop-header-h3');
header.appendChild(title);
title.style.marginLeft = '32px';
header.appendChild(imgWrapper);
header.classList.add('pop-header');
btnSource.innerHTML = '<img src="assets/liveView.png" alt="Live version"> ';
btnLive.innerHTML = '<img src="assets/crossmark.png" alt="Live version"> ';
externalButton.appendChild(btnLive);
externalButton.appendChild(btnSource);

bottom.appendChild(skills);
bottom.appendChild(externalButton);

mobilePart.appendChild(description);
mobilePart.appendChild(bottom);
mobilePart.classList.add('mobile-part-class');
mobilePart.querySelector('p').classList.add('pop-header-description');
infos.style.marginLeft = '32px';
image.classList.add('project_image');
image.classList.add('pop-header-img');

wrapper.appendChild(header);
wrapper.appendChild(infos);
wrapper.appendChild(image);
wrapper.appendChild(mobilePart);

/*wrapper.style.zIndex = '999';
wrapper.style.position = 'absolute';
wrapper.style.top = '0'; rd*/
fullwindow.style.zIndex = '999';
fullwindow.style.position = 'absolute';
fullwindow.style.top = '0'; 
fullwindow.style.width= '100%';

wrapper.classList.add('pop-window');
wrapper.style.visibility = 'hidden';
/*home.appendChild(wrapper); rd*/
fullwindow.appendChild(wrapper);
fullwindow.classList.add('full-window');
home.appendChild(fullwindow);

popUpBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const parentId = btn.parentElement.parentElement.parentElement.id;
    title.innerHTML = projects[parentId].name;
    infos.innerHTML = `${projects[parentId].generalInf[0]}  &bullet;  ${projects[parentId].generalInf[1]}  &bullet;  ${projects[parentId].generalInf[2]}`;
    image.src = projects[parentId].img;
    description.innerHTML = projects[parentId].description.substring(0,
      Math.min(250, projects[parentId].description.length));
    skills.innerHTML = '';
    projects[parentId].technolgies.forEach((element) => {
      skills.innerHTML = `${skills.innerHTML}<li>${element} </li>`;
    });

    skills.classList.add('skills');
    skills.classList.add('techns');

    home.style.backgroundColor = 'rgba(193, 199, 208, 1)';
    wrapper.style.visibility = 'visible';

    wrapper.style.position = 'fixed';
    fullwindow.style.visibility = 'visible';

    fullwindow.style.position = 'fixed';
  });
});
const cancel = document.querySelector('.pop-header-div, .pop-header');

cancel.addEventListener('click', () => {
  document.querySelector('.pop-window').style.visibility = 'hidden';
  home.style.backgroundColor = '#fff';
  wrapper.style.position = 'hidden';
  fullwindow.style.position = 'hidden';

});
