import * as yup from 'yup';

export const schemaEmail = yup.object().shape({
  email: yup.string().email('올바르지 않은 이메일주소 입니다.').required('이메일을 입력해주세요.'),
});

export const schemaNickName = yup.object().shape({
  nickname: yup.string().required('닉네임을 입력해주세요.'),
});
