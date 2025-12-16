import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PosterGallery from '../components/Exhibition/PosterGallery.js';
// 🚨 1. 폴더 이름을 'Layout' (대문자 L)으로, 확장자를 '.js'로 통일합니다. 🚨
import MainLayout from '../components/Layout/MainLayout.js'; 

// 🚨 2. HomeViewContent 임포트 (경로 문제 없음)
import HomeViewContent from '../components/pages/HomeViewContent.js';


// 🚨 임시 데이터 (최소 5개 데이터 유지 요구 사항에 맞춰 3개 추가)
const INITIAL_TICKETS_DATA = [
    { id: 1, title: 'short form lover MZ', tags: ['하이틴', '로코', '단편'], imageUrl: '...', color: 'var(--color-primary)', likes: 103, curator: 'MZ 큐레이터 김앤지', curatorMsg: '안녕! MZ 큐레이터 김앤지예요.\n밀고 도파민 터지는 영화만 추천해줄게요.' },
    { id: 2, title: 'Classic Movie Night', tags: ['고전', '드라마', '명작'], imageUrl: '...', color: '#16a085', likes: 85, curator: '클래식 전문가', curatorMsg: '시간을 초월한 명작을 경험해보세요.' },
    { id: 3, title: 'Sci-fi Thriller', tags: ['SF', '스릴러', '미래'], imageUrl: '...', color: '#34495e', likes: 201, curator: '미래 전문가', curatorMsg: '새로운 차원의 스릴을 느껴보세요.' },
    { id: 4, title: 'Fantasy Adventure', tags: ['판타지', '모험', '액션'], imageUrl: '...', color: '#8e44ad', likes: 55, curator: '모험가', curatorMsg: '현실을 벗어난 환상의 세계로 초대합니다.' },
    { id: 5, title: 'Documentary Insight', tags: ['다큐', '역사', '지식'], imageUrl: '...', color: '#2c3e50', likes: 78, curator: '지식인', curatorMsg: '세상을 깊이 이해하는 통찰력을 얻으세요.' },
];

export default function ExhibitionPage() { 
    const [currentPrompt, setCurrentPrompt] = useState('');
    const router = useRouter(); 
    const [activeIndex, setActiveIndex] = useState(0);
    const [ticketsData, setTicketsData] = useState(INITIAL_TICKETS_DATA);

    // 🚨 [Header] 햄버거 메뉴 상태 추가
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    
    // 🚨 [Header] 메뉴 토글 함수
    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
        console.log('메뉴 열림 상태:', !isMenuOpen);
    };

    // [로직] 순환 및 상태 관리 함수 - 카드 스택이 정상 작동하도록 수정했습니다.
    const handleNextTicket = () => { 
        // 다음 카드 (인덱스 + 1): 배열의 끝에서 멈춤
        setActiveIndex(prev => (prev < ticketsData.length - 1 ? prev + 1 : prev)); 
    };
    const handlePrevTicket = () => { 
        // 이전 카드 (인덱스 - 1): 0에서 멈춤
        setActiveIndex(prev => (prev > 0 ? prev - 1 : 0)); 
    };
    const handleViewList = () => { router.push('/list'); };
    
    // [Header/Footer 액션 핸들러]
    const handleSave = () => console.log('전시회 저장 기능!');
    const handleCustomize = () => console.log('전시회 꾸미기 기능!');
    const handleRecommend = () => console.log('감동적인 영화 추천 기능 (화면 전환)');
    const handleCountIncrease = () => console.log('영화 개수 증가 기능 (화면 전환)');
    const handlePromptClick = (submittedPrompt) => { // <-- submittedPrompt 인수를 받도록 추가
    if (submittedPrompt && submittedPrompt.trim() !== '') {
        // 프롬프트가 비어있지 않다면, 검색 결과 페이지로 이동 (예: /search?q=프롬프트내용)
        router.push(`/search?q=${encodeURIComponent(submittedPrompt.trim())}`);
        console.log(`검색 페이지로 이동: ${submittedPrompt}`);
    } else {
        console.log('프롬프트가 비어있습니다. 이동하지 않습니다.');
    }
};
    
    // 이외의 핸들러 (like, ticketClick)도 여기에 정의되어야 합니다.

    return (
        <MainLayout 
            onMenuToggle={handleMenuToggle} // 🚨 햄버거 메뉴 토글 기능 전달
            onSave={handleSave}
            onCustomize={handleCustomize}
            onRecommend={handleRecommend}
            onCountIncrease={handleCountIncrease}
            onPromptClick={handlePromptClick}
            setCurrentPrompt={setCurrentPrompt} 
            currentPrompt={currentPrompt}
        > 
        {/* 🚨 [수정] 3D 갤러리 컴포넌트 삽입 */}
            <PosterGallery 
                // 갤러리에 필요한 데이터나 핸들러는 필요 시 여기에 전달합니다.
            />
        <HomeViewContent 
                activeIndex={activeIndex}
                handleNextTicket={handleNextTicket}
                handlePrevTicket={handlePrevTicket}
                ticketsData={ticketsData}
                // ... (나머지 props 전달)
            />
        </MainLayout>
    );
};