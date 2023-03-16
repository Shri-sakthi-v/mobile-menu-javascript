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
