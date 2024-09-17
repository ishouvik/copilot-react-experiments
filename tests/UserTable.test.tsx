import React from 'react';
import { render } from '@testing-library/react';
import UserTable from '../src/components/UserTable';

test('renders user table', () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const { getByText } = render(<UserTable users={users} />);

  expect(getByText('John Doe')).toBeInTheDocument();
  expect(getByText('Jane Smith')).toBeInTheDocument();
});