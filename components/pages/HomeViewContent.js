// components/pages/HomeViewContent.js

import React from 'react';
import TicketCard from '../TicketCard/TicketCard'; // 🚨 확장자 .js 확인!
// Character 컴포넌트도 필요하면 import 해야 합니다.
import { ChevronRight, ChevronLeft, List, Heart } from 'lucide-react'; 
// 🚨 전역 CSS import 제거: 'import "../../styles/globals.css";' 와 같은 줄은 제거하세요!
import styles from './HomeViewContent.module.css';


// 🚨 정확한 함수형 컴포넌트 구조 🚨
const getTicketClassName = (index, activeIndex) => {
    // ... (이전에 정의한 좌우 대칭 로직 유지) ...
    if (index === activeIndex) return 'is-active';
    const maxStack = 2;
    const diff = index - activeIndex;

    if (diff > 0 && diff <= maxStack) return `is-stacked-right-${diff}`;
    if (diff < 0 && diff >= -maxStack) return `is-stacked-left-${Math.abs(diff)}`;
    return 'is-hidden';
};

const HomeViewContent = ({ activeIndex, handleNextTicket, handlePrevTicket, ticketsData, handleViewList, handleToggleLike }) => {
    const currentTicket = ticketsData[activeIndex] || ticketsData[0]; 

    // components/pages/HomeViewContent.js (return 내부)

return (
    // 🚨 1) 모든 일반 클래스 이름을 styles.클래스명으로 변경
    <div className={styles.appContentWrapper}> 
        {/* 좌측 텍스트 UI 섹션 */}
        <div className={styles.appLeftSection}>
            {/* ... */}
        </div>

        {/* 우측 카드 스택 섹션 */}
        <div className={styles.appRightSection}>
            <div className={styles.ticketStackContainer}>
                {ticketsData.map((ticket, index) => { 
                    const className = getTicketClassName(index, activeIndex);
                    if (className === 'is-hidden') return null;

                    return (
                        <TicketCard
                            key={ticket.id}
                            title={ticket.title}
                            // ...
                            // 🚨 2) 동적으로 생성된 클래스(is-active, is-stacked-right-1 등)는 styles[변수명]을 사용
                            className={`${styles.ticketItem} ${styles[className]}`}
                        />
                    );
                })}
                
                {/* 화살표 버튼도 styles.xxx 로 변경해야 합니다. */}
                <button className={`${styles.ticketNavButton} ${styles.prev}`} onClick={handlePrevTicket}> <ChevronLeft size={48} color="#fff" /> </button>
                <button className={`${styles.ticketNavButton} ${styles.next}`} onClick={handleNextTicket}> <ChevronRight size={48} color="#fff" /> </button>
            </div>
        </div>
    </div>
);
};
export default HomeViewContent;