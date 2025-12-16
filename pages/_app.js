// pages/_app.js
import '../styles/globals.css'; // 🚨 전역 스타일 (CSS 변수, Body 패딩) 로드

function MyApp({ Component, pageProps }) {
  // MainLayout은 exhibition.js 안에서만 사용하도록 분리합니다.
  // _app.js는 모든 페이지에 공통적인 스타일만 로드합니다.
  return <Component {...pageProps} />;
}

export default MyApp;