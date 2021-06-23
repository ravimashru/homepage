import React from 'react';

export default function Projects() {

  const tags = {
    datascience: 'Data Science',
    webdev: 'Web Development',
    educ: 'Education',
    ai: 'Artificial Intelligence',
    dl: 'Deep Learning',
    cv: 'Computer Vision',
  };
  
  const projects = [
    {
      title: 'ftbl.world',
      description: 'A site to track live football scores and fixtures for all leagues worldwide',
      tags: ['webdev'],
      url: 'https://ftbl.world'
    },
    {
      title: 'Institute of AI',
      description:
        'High quality and affordable training for everyone in the field of Artificial Intelligence.',
      tags: ['educ', 'ai'],
      url: 'https://github.com/instituteofai',
    },
    {
      title: 'GANdalf',
      description:
        'A Generative Adversarial Network (GAN) to convert sketches to photos and vice versa.',
      tags: ['dl'],
      url: 'https://github.com/mashruravi/GANdalf',
    },
    {
      title: 'clf-tiny-imagenet',
      description:
        'A multi-class classifier for images in the Tiny ImageNet dataset.',
      tags: ['dl', 'cv'],
      url: 'https://github.com/mashruravi/clf-tiny-imagenet/blob/master/A4_20.ipynb',
    },
    {
      title: 'Cellular Automata',
      description:
        'Cells that evolve over time based on the state of neighboring cells, forming a regular pattern regardless of which random initial state you start from.',
      tags: ['webdev'],
      url: 'https://github.com/mashruravi/cellular-automata',
    },
    {
      title: 'Randomizer',
      description:
        'A small tool to pick a random item from a list, or randomize the order of items in a list.',
      tags: ['webdev'],
      url: 'https://github.com/mashruravi/randomizer',
    },
  ];

  return (
    <div className="section-container">
      <div className="section-header">Projects</div>
      <div className="section-body">
        {projects.map(e => {
          return (
            <div key={e.title} className="proj-item" onClick={() => { window.open(e.url, '_blank') }}>
              <div className="proj-item-title">{e.title}</div>
              <div className="proj-item-desc">{e.description}</div>
              <div className="proj-item-spacer"></div>
              <div className="proj-item-tags">
                {e.tags.map(t => (
                  <div key={t} className={`proj-item-tags-itm tag-${t}`}>{tags[t]}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
