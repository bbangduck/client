export const shortSentence = (num: number, content: string): string => {
  if (content.length > num) {
    return `${content.substr(0, num)}..`;
  }
  return content;
};
