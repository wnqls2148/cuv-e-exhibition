// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
    const router = useRouter();

    useEffect(() => {
        // 서버 오류를 피하기 위해 클라이언트 측에서 리다이렉트를 실행합니다.
        router.replace('/exhibition'); 
    }, [router]);

    // 리다이렉션이 완료될 때까지 화면에 아무것도 표시하지 않습니다.
    return null; 
}

export default IndexPage;