import React, { ReactElement } from 'react';
import ReviewItem from '../ReviewItem';

const ReviewList = (): ReactElement => {
  const arr = [1, 2, 3];

  return (
    <ul>
      {arr.map((ar) => (
        <ReviewItem key={ar} />
      ))}
    </ul>
  );
};

export default ReviewList;
