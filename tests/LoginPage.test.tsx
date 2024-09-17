import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '../src/components/LoginPage';

test('renders login page', () => {
  render(<LoginPage />);
  const loginForm = screen.getByTestId('login-form');
  expect(loginForm).toBeInTheDocument();
});

test('displays error message on invalid credentials', () => {
  render(<LoginPage />);
  const usernameInput = screen.getByLabelText('Username');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByRole('button', { name: 'Login' });

  // Simulate entering invalid credentials
  usernameInput.value = 'invalid_username';
  passwordInput.value = 'invalid_password';
  submitButton.click();

  const errorMessage = screen.getByText('Invalid username or password');
  expect(errorMessage).toBeInTheDocument();
});

test('redirects to authenticated page on successful login', () => {
  render(<LoginPage />);
  const usernameInput = screen.getByLabelText('Username');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByRole('button', { name: 'Login' });

  // Simulate entering valid credentials
  usernameInput.value = 'valid_username';
  passwordInput.value = 'valid_password';
  submitButton.click();

  // Check if the authenticated page is rendered
  const authenticatedPage = screen.getByTestId('authenticated-page');
  expect(authenticatedPage).toBeInTheDocument();
});