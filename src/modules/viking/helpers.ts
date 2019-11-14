import { FEMALE_NAMES, MALE_NAMES } from './constants';

export const getRandomElementFromArr = (arr: any[]) => {
  const randomIndex = Math.round(Math.random() * arr.length);
  return arr[randomIndex];
};

export const generateVikingName = (gender: 'male' | 'female'): string => {
  if (gender === 'male') {
    const firstName = getRandomElementFromArr(MALE_NAMES);
    const surNameBase = getRandomElementFromArr(MALE_NAMES);
    return `${firstName} ${surNameBase}sson`;
  }

  if (gender === 'female') {
    const firstName = getRandomElementFromArr(FEMALE_NAMES);
    const surNameBase = getRandomElementFromArr(FEMALE_NAMES);
    return `${firstName} ${surNameBase}sdottir`;
  }

  return '';
};

export const generateNVikingNames = (gender: 'male' | 'female', amount: Number): string[] => {
  const names = [];
  for (let i = 0; i < amount; i++) {
    names.push(generateVikingName(gender));
  }
  return names;
};
