import React, { Component } from 'react';
import { Canvas } from 'react-canvas-js';

const sample2 = {
  "maxParticles": 50,
  "colors": [
    "#2E1D62",
    "#513D91",
    "#487EEF",
    "#11A887"
  ],
  "shapes": [
    "circle"
  ],
  "size": 10,
  "minSpeed": 0.05,
  "maxSpeed": 0.2,
  "alpha": 0.7,
  "backgroundColor": "#f1f1f1"
};

export default class bgAnima extends Component {
  render() {
    return (
      <Canvas options={sample2} />
    )
  }
}