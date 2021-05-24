import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('이메일 형식이 맞지않습니다.').required('이메일을 입력해주세요.'),
  nickname: yup.string().required('닉네임을 입력해주세요.'),
});

export default schema;
