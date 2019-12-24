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
      title: 'DataTau',
      description:
        'A newsboard for content related to Data Science, inspired by HackerNews.',
      tags: ['datascience', 'webdev'],
    },
    {
      title: 'Institute of AI',
      description:
        'High quality and affordable training for everyone in the field of Artificial Intelligence.',
      tags: ['educ', 'ai'],
    },
    {
      title: 'GANdalf',
      description:
        'A Generative Adversarial Network (GAN) to convert sketches to photos and vice versa.',
      tags: ['dl'],
    },
    {
      title: 'tiny-imagenet',
      description:
        'A multi-class classifier for images in the Tiny ImageNet dataset.',
      tags: ['dl', 'cv'],
    },
    {
      title: 'Cellular Automata',
      description:
        'Cells that evolve over time based on the state of neighboring cells, forming a regular pattern regardless of which random initial state you start from.',
      tags: [],
    },
    {
      title: 'Skyworld',
      description: 'A website for a travel agency.',
      tags: ['webdev'],
    },
    {
      title: 'The Holy Kitchen',
      description: 'A website for a restaurant.',
      tags: ['webdev'],
    },
    {
      title: 'Randomizer',
      description:
        'A small tool to pick a random item from a list, or randomize the order of items in a list.',
      tags: [],
    },
  ];

  return (
    <div className="section-container">
      <div className="section-header">Projects</div>
      <div className="section-body">
        {projects.map(e => {
          return (
            <div key={e.title} className="proj-item">
              <div className="proj-item-title">{e.title}</div>
              <div className="proj-item-desc">{e.description}</div>
              <div className="proj-item-spacer"></div>
              <div className="proj-item-tags">
                {e.tags.map(e => (
                  <div className={`proj-item-tags-itm tag-${e}`}>{tags[e]}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
