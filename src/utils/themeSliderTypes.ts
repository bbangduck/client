const FilterTypes = [
  {
    id: 1,
    title: '유형',
    types: [
      { id: 1, type: '전체', api: '' },
      { id: 2, type: '장치형', api: 'DEVICE' },
      { id: 3, type: '문제형', api: 'PROBLEM' },
      { id: 4, type: '반반형', api: 'HALF' },
    ],
  },
  {
    id: 2,
    title: '평점',
    types: [
      { id: 1, type: '전체', api: '' },
      { id: 2, type: '4', api: 'FOUR_OR_MORE' },
      { id: 3, type: '3', api: 'THREE_OR_MORE' },
      { id: 4, type: '2', api: 'TWO_OR_MORE' },
    ],
  },
  {
    id: 3,
    title: '추천인원',
    types: [
      { id: 1, type: '전체', api: '' },
      { id: 2, type: '5인', api: 'FIVE' },
      { id: 3, type: '4인', api: 'FOUR' },
      { id: 4, type: '3인', api: 'THREE' },
      { id: 5, type: '2인', api: 'TWO' },
      { id: 6, type: '1인', api: 'ONE' },
    ],
  },
  {
    id: 4,
    title: '난이도',
    types: [
      { id: 1, type: '전체', api: '' },
      { id: 2, type: '레벨 5', api: 'VERY_DIFFICULT' },
      { id: 3, type: '레벨 4', api: 'DIFFICULT' },
      { id: 4, type: '레벨 3', api: 'NORMAL' },
      { id: 5, type: '레벨 2', api: 'EASY' },
      { id: 6, type: '레벨 1', api: 'VERY_EASY' },
    ],
  },
  {
    id: 5,
    title: '활동성',
    types: [
      { id: 1, type: '전체', api: '' },
      { id: 2, type: '레벨 3', api: 'VERY_ACTIVITY' },
      { id: 3, type: '레벨 2', api: 'NORMAL' },
      { id: 4, type: '레벨 1', api: 'LITTLE_ACTIVITY' },
    ],
  },
];

export default FilterTypes;
