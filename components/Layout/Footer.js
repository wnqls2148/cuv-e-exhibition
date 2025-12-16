// components/Layout/Footer.js

import React, { useState, useRef } from 'react'; // 🚨 useState, useRef 추가
//import Image from 'next/image'; 
import styles from './Footer.module.css';

// 🚨 필요한 모든 props를 받도록 수정합니다.
const Footer = ({ onRecommend, onCountIncrease, onPromptClick, setCurrentPrompt, currentPrompt }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setCurrentPrompt(e.target.value);
  };
  
  // 전체 div를 클릭하면 Input에 포커스를 맞춥니다.
  const handleInputContainerClick = () => {
    inputRef.current.focus();
  };

  // Enter 키를 눌러 프롬프트를 제출하는 로직 (선택 사항)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && currentPrompt.trim() !== '') {
        onPromptClick(currentPrompt); // onPromptClick 핸들러를 실행 (exhibition.js에 정의됨)
        setCurrentPrompt(''); // 입력 후 초기화
        inputRef.current.blur(); // 포커스 해제
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.fixedElements}>
        {/* 🚨 복구된 Image 컴포넌트를 다시 <div>로 대체합니다. */}
        {/* Image 컴포넌트 복구 */}
        <div 
            style={{ width: 90, height: 90, backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}
            className={styles.avatarImage} // CSS 모듈 스타일 유지
        >
          [Curator]
        </div>
        <div className={styles.speechBubble}>
          안녕, 길초MZ 큐레이터 김엠지예요. <br/> 밀고 도파민 터지는 영화만 추천해줄게요.
        </div>
      </div>
      
      {/* 🚨 프롬프트 입력 영역: <button> 대신 <div>로 변경하고 Input 로직 연결 */}
      <div 
        className={styles.promptInput} 
        onClick={handleInputContainerClick}
      >
        <div className={styles.inputWrapper}>
            {/* 🚨 플레이스홀더 텍스트 */}
            {(!isFocused && currentPrompt.trim() === '') && (
                <span className={styles.placeholderText}>
                    cukee 프롬포트 입력하기
                </span>
            )}
            
            {/* 🚨 실제 Input 필드 */}
            <input
                ref={inputRef}
                type="text"
                className={styles.actualInput}
                value={currentPrompt}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} // Enter 키 이벤트 연결
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                  if (currentPrompt.trim() === '') {
                    setIsFocused(false);
                  }
                }}
            />
        </div>
        
        {/* 🚨 1. 누락되었던 화살표(submitArrow)와 promptInput 닫는 태그 복원 */}
        <span className={styles.submitArrow}>→</span> 
      </div> {/* 👈 promptInput div를 닫습니다. (누락된 태그 복원) */}
      
      <div className={styles.actionButtons}>
        <button className={styles.bottomButton} onClick={onRecommend}>
          조금 더 감동적인 영화를 원해!
        </button>
        <button className={styles.bottomButton} onClick={onCountIncrease}>
          영화 개수를 더 늘려줘!
        </button>
      </div>
    </footer>
  );
};
export default Footer;