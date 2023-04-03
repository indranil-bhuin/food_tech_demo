import React from 'react';
import renderer from 'react-test-renderer';
import SplashScreen from '../src/screens/SplashScreen';

test('SplashScreen renders correctly', () => {
  const tree = renderer.create(<SplashScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
