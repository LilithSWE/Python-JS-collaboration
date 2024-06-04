export const getTextWithFirstLetterUpperCase = (text: string) => {
  const uppercaseText =
    text.substring(0, 1).toUpperCase() + text.substring(1, text.length);
  return uppercaseText;
};
