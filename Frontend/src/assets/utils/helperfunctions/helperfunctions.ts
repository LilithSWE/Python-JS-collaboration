export const getTextWithFirstLetterUpperCase = (text: string) => {
  const uppercaseText = text.substring(0, 1).toUpperCase() + text.substring(1, text.length);
  return uppercaseText;
};

export const getSeperatedText = (text: string, includedText: string) => {
  let newText = '';

  if (text.includes(includedText)) {
    newText = text.replace(includedText, ` ${includedText}`);
    return newText;
  } else {
    return text;
  }
};
