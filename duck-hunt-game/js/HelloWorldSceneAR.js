'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      position: -10
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  moving = () => {
    console.log('position: ', this.state.position)
    if (this.state.position > 10) {
      this.setState({ position: -10 })
    } else {
      let newPosition = this.state.position + 0.05;
      console.log('new position: ', newPosition)
      this.setState({ position: newPosition })
    }
  }

  render() {

    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[this.state.position, 0, -1]} style={styles.helloWorldTextStyle} />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      setInterval(this.moving, 1);
      this.setState({
        text: "Eli Sucks"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
