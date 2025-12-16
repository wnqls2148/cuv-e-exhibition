// components/Layout/MainLayout.js (수정)

import React from 'react';
// 🚨 Header와 Footer 임포트 시 확장자 (.js)를 명확히 명시합니다. 🚨
//import Header from './Header.js';
//import Footer from './Footer.js';
import Header from './Header'; // 확장자 제거
import Footer from './Footer'; // 확장자 제거

const MainLayout = ({ children, onMenuToggle, setCurrentPrompt, currentPrompt, onPromptClick, ...props }) => { 
    return (
        <div className="main-layout-container">
            <Header onMenuToggle={onMenuToggle} {...props} /> 
            <main className="main-content-wrapper">
                {children} 
            </main>
            <Footer setCurrentPrompt={setCurrentPrompt}
                onPromptClick={onPromptClick}
                currentPrompt={currentPrompt}
                {...props} />
        </div>
    );
};
export default MainLayout;