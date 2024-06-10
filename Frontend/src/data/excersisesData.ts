import data from '../data/excersises.json';
import { getTextWithFirstLetterUpperCase } from '../assets/utils/helperfunctions/helperfunctions';

export const musclesData = data
  .map((excersise, index) => {
    return { id: index, muscle: getTextWithFirstLetterUpperCase(excersise.muscle.replace('_', '')) };
  })
  .filter((muscle, index, muscles) => {
    return index === muscles.findIndex(m => m.muscle === muscle.muscle);
  });

export const excersisesData = data
  .map((excersise, index) => {
    return { id: index, excersise: getTextWithFirstLetterUpperCase(excersise.type.replace('_', '')) };
  })
  .filter((type, index, types) => {
    return index === types.findIndex(t => t.excersise === type.excersise);
  });
