import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

/*
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
*/

// Use 'describe' to group together similar tests
describe('App' , () => {

  // Use 'it' to test a single attribute of a target
  it('BOOM! renders something', () => {

    // create an instance of App
    const component = renderComponent(App);

    // Use 'expect' to make an 'assertion' about a target
    expect(component).to.contain('React App');
  });

});