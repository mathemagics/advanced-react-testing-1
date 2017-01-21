import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from '../src/reducers';
import jsdom from 'jsdom';
import _$ from 'jquery';
import { expect } from 'chai';

// set up test environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

const $ = _$(global.window);

// build render component helper that should render a given react class
export function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
    );
  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

// build helper for simulating events


// set up chai jquery

export { expect }
