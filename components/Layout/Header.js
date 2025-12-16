// components/Layout/Header.js

import React from 'react';
// import Image from 'next/image'; // 🚨 Image 임포트 주석 처리
// import { List } from 'lucide-react'; // 🚨 List 임포트 주석 처리
import styles from './Header.module.css';

const Header = ({ onMenuToggle, onSave, onCustomize }) => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <button className={styles.hamburgerButton} onClick={onMenuToggle} aria-label="메뉴 열기">
          {/* <List size={28} className={styles.hamburgerIcon} /> 🚨 문제의 15번 라인 대체 */}
          <span style={{ fontSize: '28px', color: '#333' }}>☰</span> 
        </button>
        <div className={styles.promptBar}>
          {/* <Image ... /> 🚨 Image 컴포넌트 대체 */}
          <span style={{ marginRight: '8px' }}>[쿠키]</span>
          <span className={styles.promptText}>cukee/romancerCukee</span>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <button className={styles.actionButton} onClick={onSave} aria-label="전시회 저장하기">
          전시회 저장하기
        </button>
        <button className={styles.actionButton} onClick={onCustomize} aria-label="전시회 꾸미기">
          전시회 꾸미기
        </button>
      </div>
    </header>
  );
};
export default Header;