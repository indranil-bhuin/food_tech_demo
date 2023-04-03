import React from 'react';
import renderer from 'react-test-renderer';
import CustomText from '../src/components/atoms/CustomText';

describe('CustomText', () => {
  it('renders text with proper styling', () => {
    const tree = renderer
      .create(<CustomText color="#000000">Hello, World!</CustomText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
