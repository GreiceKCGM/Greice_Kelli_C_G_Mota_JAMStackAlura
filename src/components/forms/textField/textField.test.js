import React from 'react';
import { render, screen } from '../../../infra/test/testUtils';
import TextField from './index';

describe('<textField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Greice"
        onChange={() => {}}
        name="nome"
      />,

    );

    // screen.debug();

    const textField = screen.getByPlaceholderText(/nome/i);

    expect(textField).toMatchSnapshot();
  });
});
