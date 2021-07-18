/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { mutate } from 'swr';
import { clearCache } from 'react-router-cache-route';
import EscapeMoment from '../../molecules/EscapeMoment';
import EscapeReviewSentence from '../../molecules/EscapeReviewSentence';
import ExtraReview from '../ExtraReview';
import axiosAPI from '../../../utils/axios';
import * as S from './style';
import { ReducerType } from '../../../stores/rootReducer';
import usePopAlarm from '../../../hooks/usePopAlarm';
import { themeKindCheckBox } from '../../../stores/ThemeReviewReducer/themeKind';
import useReviewInfinite from '../../../swr/useReviewInfinite';

const ReviewDetail = (): ReactElement => {
  const { themeId } = useParams<ParamsTypes>();
  const history = useHistory();
  const [popAlarm] = usePopAlarm();
  const reviewId = useSelector<ReducerType, number>((state) => state.reviewIdSlice);
  const themeKindBox = useSelector<ReducerType, typeof themeKindCheckBox>((state) => state.themeKindBox);
  const hardBox = useSelector<ReducerType, SurveyItemProps[]>((state) => state.hardBox);
  const scaryBox = useSelector<ReducerType, SurveyItemProps[]>((state) => state.scaryBox);
  const activityBox = useSelector<ReducerType, SurveyItemProps[]>((state) => state.activityBox);
  const scenarioBox = useSelector<ReducerType, SurveyItemProps[]>((state) => state.scenarioBox);
  const interiorBox = useSelector<ReducerType, SurveyItemProps[]>((state) => state.interiorBox);
  const problemBox = useSelector<ReducerType, SurveyItemProps[]>((state) => state.problemBox);
  const [imagesArray, setImagesArray] = useState<File[]>([]);
  const [comment, setComment] = useState('');
  const [surveyResults, setSurveyResults] = useState<SurveyResultsType | null>(null);
  const [isRevalidate, setIsRevalidate] = useState(false);
  useReviewInfinite(themeId, 'LATEST', isRevalidate);

  const reduceSurvey = (surveyType: SurveyItemProps[]) => {
    const result = surveyType.reduce<string[]>((acc, curr) => {
      if (curr.clicked) acc.push(curr.api);
      return acc;
    }, []);
    return result[0];
  };

  useEffect(() => {
    const genres = themeKindBox.reduce<string[]>((acc, curr) => {
      if (curr.clicked) acc.push(curr.api);
      return acc;
    }, []);
    const hard = reduceSurvey(hardBox);
    const scary = reduceSurvey(scaryBox);
    const activity = reduceSurvey(activityBox);
    const scenario = reduceSurvey(scenarioBox);
    const interior = reduceSurvey(interiorBox);
    const problem = reduceSurvey(problemBox);
    setSurveyResults({
      genreCodes: genres,
      perceivedDifficulty: hard,
      perceivedHorrorGrade: scary,
      perceivedActivity: activity,
      scenarioSatisfaction: scenario,
      interiorSatisfaction: interior,
      problemConfigurationSatisfaction: problem,
    });
  }, [themeKindBox, hardBox, scaryBox, activityBox, scenarioBox, interiorBox, problemBox]);

  const uploadReviewDetail = async (data: FormData) => {
    try {
      if (data.get('files')) {
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
        setIsRevalidate((prev) => !prev);
      } else {
        await axiosAPI({
          method: 'post',
          url: `/api/reviews/${reviewId}/details`,
          data: {
            comment,
          },
        });
        setIsRevalidate((prev) => !prev);
      }
    } catch (error) {
      const { status } = error?.response?.data;
      if (status === 4408 || status === 4416) {
        history.push('/');
      }
    }
  };

  const uploadSurvey = async () => {
    try {
      await axiosAPI({
        method: 'post',
        url: `/api/reviews/${reviewId}/surveys`,
        data: surveyResults,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    imagesArray.forEach((image) => {
      formData.append('files', image);
    });

    if (
      surveyResults?.genreCodes &&
      surveyResults?.interiorSatisfaction &&
      surveyResults?.perceivedActivity &&
      surveyResults?.perceivedDifficulty &&
      surveyResults?.perceivedHorrorGrade &&
      surveyResults?.problemConfigurationSatisfaction &&
      surveyResults?.scenarioSatisfaction
    ) {
      uploadReviewDetail(formData);
      uploadSurvey();
      setSurveyResults(null);
      setComment('');
      setImagesArray([]);
      history.push(`/theme/${themeId}`);
      popAlarm('리뷰작성을 성공하였습니다.');
    } else if (
      !surveyResults?.genreCodes[0] &&
      !surveyResults?.interiorSatisfaction &&
      !surveyResults?.perceivedActivity &&
      !surveyResults?.perceivedDifficulty &&
      !surveyResults?.perceivedHorrorGrade &&
      !surveyResults?.problemConfigurationSatisfaction &&
      !surveyResults?.scenarioSatisfaction
    ) {
      uploadReviewDetail(formData);
      setSurveyResults(null);
      setComment('');
      setImagesArray([]);
      history.push(`/theme/${themeId}`);
      popAlarm('리뷰작성을 성공하였습니다.2');
    } else {
      popAlarm('리뷰를 완성해주세요.');
    }
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

interface SurveyItemProps {
  id: number;
  content: string;
  clicked: boolean;
  api: string;
}
interface SurveyResultsType {
  genreCodes: string[];
  perceivedDifficulty: string;
  perceivedHorrorGrade: string;
  perceivedActivity: string;
  scenarioSatisfaction: string;
  interiorSatisfaction: string;
  problemConfigurationSatisfaction: string;
}
