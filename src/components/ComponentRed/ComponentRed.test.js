import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ComponentRed } from './ComponentRed';

describe('<Contact />', () => {
  test('it should mount', () => {
    render(<ComponentRed />);
    
    const contact = screen.getByTestId('Contact');

    expect(contact).toBeInTheDocument();
  });
});