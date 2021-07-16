/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearCache } from 'react-router-cache-route';
import EscapeMoment from '../../molecules/EscapeMoment';
import EscapeReviewSentence from '../../molecules/EscapeReviewSentence';
import ExtraReview from '../ExtraReview';
import axiosAPI from '../../../utils/axios';
import * as S from './style';
import { ReducerType } from '../../../stores/rootReducer';

const ReviewDetail = (): ReactElement => {
  const history = useHistory();
  const reviewId = useSelector<ReducerType>((state) => state.reviewIdSlice);
  const [imagesArray, setImagesArray] = useState<File[]>([]);
  const [comment, setComment] = useState('');

  const uploadReviewDetail = async (data: FormData) => {
    try {
      const response = await axiosAPI({
        method: 'post',
        url: '/api/files/images',
        data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const fileInfos = response.data;
      const reviewImages = fileInfos.map((info: { fileId: string; fileName: string }) => {
        return { fileStorageId: info.fileId, fileName: info.fileName };
      });

      await axiosAPI({
        method: 'post',
        url: `/api/reviews/${reviewId}/details`,
        data: {
          reviewImages,
          comment,
        },
      });
    } catch (error) {
      const { status } = error?.response?.data;
      if (status === 4408 || status === 4416) {
        history.push('/');
      }
    }
  };

  const uploadSurvey = () => {};

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    imagesArray.forEach((image) => {
      formData.append('files', image);
    });

    uploadReviewDetail(formData);

    clearCache();
  };

  return (
    <div>
      <S.PTag>사진 및 감상평</S.PTag>
      <EscapeMoment setImagesArray={setImagesArray} />
      <form onSubmit={onSubmit}>
        <EscapeReviewSentence setComment={setComment} comment={comment} />
        <ExtraReview />
        <S.BtnBox>
          <S.Btn type="submit" data-blink="blink">
            작성 완료
          </S.Btn>
        </S.BtnBox>
      </form>
    </div>
  );
};

export default ReviewDetail;
