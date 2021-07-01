import React from 'react';

import ftblworldpng from '../images/projects/ftblworld.png';
import portfoliopng from '../images/projects/portfolio.png';
import obsidianpluginpng from '../images/projects/obsidianplugin.png';
import denonetspng from '../images/projects/denonets.png';
import gandalfpng from '../images/projects/gandalf.png';
import tinyimagenetpng from '../images/projects/tinyimagenet.png';
import rpsclfpng from '../images/projects/rpsclf.png';

export default function Projects() {
  const projects = [
    {
      title: 'ftbl.world',
      description:
        'A web application built using NestJS and React to view live football scores and fixtures of matches all over the world. Hosted on GitHub Pages and Heroku.',
      image: ftblworldpng,
      url: 'https://ftbl.world',
    },
    {
      title: 'Rock Paper Scissors Classifier',
      description:
        'A rock-paper-scissors classifier built using fast.ai while reading chapter 2 of fastbook.',
      image: rpsclfpng,
      url: 'https://github.com/ravimashru/rps-classifier',
    },
    {
      title: 'Portfolio',
      description:
        'This site! Built using React and Gatsby to host my professional information and blog.',
      image: portfoliopng,
      url: 'https://ravimashru.dev',
    },
    {
      title: 'Obsidian Plugin - Show File Path',
      description:
        'An Obsidian plugin to show the path of the currently active file.',
      image: obsidianpluginpng,
      url: 'https://github.com/ravimashru/obsidian-show-file-path',
    },
    {
      title: 'deno-nets',
      description:
        'A Typescript library to build, train and use deep neural networks in Deno. Built using Hacktoberfest 2020.',
      image: denonetspng,
      url: 'https://github.com/ravimashru/deno-nets',
    },
    {
      title: 'GANdalf',
      description:
        'A Generative Adversarial Network (GAN) to convert sketches to photos and vice versa. Built using TensorFlow.',
      image: gandalfpng,
      url: 'https://github.com/ravimashru/GANdalf',
    },
    {
      title: 'Tiny ImageNet Classifier',
      description:
        'A multi-class classifier for images in the Tiny ImageNet dataset. Built using TensorFlow.',
      image: tinyimagenetpng,
      url:
        'https://github.com/ravimashru/clf-tiny-imagenet/blob/master/A4_20.ipynb',
    },
  ];

  return (
    <div className="section-container">
      <div className="section-header">Personal projects</div>
      <div className="section-body">
        {projects.map(e => {
          return (
            <div
              key={e.title}
              className="proj-item"
              onClick={() => {
                window.open(e.url, '_blank');
              }}
            >
              <div className="proj-item-image-ctr">
                <img className="proj-item-image" src={e.image} />
              </div>
              <div className="proj-item-overlay">
                <div className="proj-item-title">{e.title}</div>
                <div className="proj-item-desc">{e.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
