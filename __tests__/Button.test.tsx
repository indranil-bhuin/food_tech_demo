import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/components/atoms/Button';

describe('Button', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Button
        onPress={() => console.log('Button pressed!')}
        text="Test Button"
        style={{ marginBottom: 10 }}
        backgroundColor="#FFFFFF"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
