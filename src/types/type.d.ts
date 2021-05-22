interface Window {
  Kakao: any;
}

interface NoticeItemInfoType {
  noticeItemInfo: {
    title: string;
    date: string;
    content: string;
  };
}

interface KakaoResType {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}
