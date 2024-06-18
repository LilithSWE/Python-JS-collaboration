import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it } from 'vitest';
import CreateAccountButton from '../components/login-page/CreateAccountButton';
import { MockedLoginProvider } from '../__mocks__/MockedLoginProvider';
import { mockedLoginContextValues } from '../__mocks__/MockedLoginProvider';

describe('#CreateAccountButton', () => {
  it('button should render, display correct text & changeActivePage should be called', () => {
    const buttonText = 'Create Account';

    render(
      <MockedLoginProvider>
        <CreateAccountButton />
      </MockedLoginProvider>
    );

    const button = screen.getByText(buttonText);

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockedLoginContextValues.changeActivePage).toHaveBeenCalled();
  });
});
