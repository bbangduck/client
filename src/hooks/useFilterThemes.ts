import { useState } from 'react';

const useFilterThemes = () => {
  const [themeType, setThemeType] = useState('');
  const [rating, setRating] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [activity, setActivity] = useState('');

  // console.log(`themeType${themeType}`);
  // console.log(`rating${rating}`);
  // console.log(`numberOfPeople${numberOfPeople}`);
  // console.log(`difficulty${difficulty}`);
  // console.log(`activity${activity}`);

  // const result = `/api/themes?amount=10&&pageNum=1&&difficulty=NORMAL&&activity=`;
  return [setThemeType, setRating, setNumberOfPeople, setDifficulty, setActivity];
};

export default useFilterThemes;
