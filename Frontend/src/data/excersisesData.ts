import data from '../data/excersises.json';

export const musclesData = data
  .map((excercise, index) => {
    return { id: index, muscle: excercise.muscle };
  })
  .filter((muscle, index, muscles) => {
    return index === muscles.findIndex(m => m.muscle === muscle.muscle);
  });

musclesData.unshift({ id: 0, muscle: 'All' });
musclesData.forEach((excercise, index) => (excercise.id = index));

export const excersisesData = data
  .map((excercise, index) => {
    return { id: index, excercise: excercise.type };
  })
  .filter((type, index, types) => {
    return index === types.findIndex(t => t.excercise === type.excercise);
  });

excersisesData.unshift({ id: 0, excercise: 'All' });
excersisesData.forEach((excercise, index) => (excercise.id = index));
