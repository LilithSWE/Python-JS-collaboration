import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import LoginInput from '../components/login-page/LoginInput';
import { getTextWithFirstLetterUpperCase } from '../assets/utils/helperfunctions/helperfunctions';

const mockedChangeInput = vi.fn();

describe('#LoginInput', () => {
  beforeEach(() => {
    mockedChangeInput.mockClear();
  });

  it('checks if input renders and that the submit event works', () => {
    const text = 'username';
    const value = 'john';

    render(<LoginInput text={text} value={value} changeInput={mockedChangeInput} />);

    const firstUpperCaseText = getTextWithFirstLetterUpperCase(text);
    const input = screen.getByLabelText(firstUpperCaseText);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', text);
    expect(input).toHaveValue(value);

    fireEvent.change(input, { target: { value: 'doe' } });

    expect(mockedChangeInput).toHaveBeenCalled();
  });

  it('checks if label renders and type is correct', () => {
    const text = 'password';
    const value = '';

    render(<LoginInput text={text} value={value} changeInput={mockedChangeInput} />);
    const firstUpperCaseText = getTextWithFirstLetterUpperCase(text);
    const label = screen.getByText(firstUpperCaseText);
    const input = screen.getByLabelText(firstUpperCaseText);

    expect(label).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
  });
});
