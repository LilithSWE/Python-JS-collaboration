import { render, screen } from '@testing-library/react';
import LoginButton from '../components/login-page/LoginButton';
import { describe, it } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { MockedLoginProvider } from '../__mocks__/MockedLoginProvider';
import { mockedLoginContextValues } from '../__mocks__/MockedLoginProvider';

describe('#LoginButton', () => {
  it('checks if button is rendered, have correct text, submitLoginForm should be called when click event fires', () => {
    const buttonText = 'Login';

    render(
      <MockedLoginProvider>
        <LoginButton />
      </MockedLoginProvider>
    );

    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockedLoginContextValues.submitLoginForm).toHaveBeenCalled();

    console.log('button clicked');
  });
});
