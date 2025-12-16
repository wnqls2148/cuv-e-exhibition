// components/Exhibition/PosterGallery.js (액자 5개만 렌더링)

import React, { useState } from 'react';
import styles from './PosterGallery.module.css';

// 5개의 포스터 데이터 (예시)
const initialPosters = [
    { id: 1, title: '아무도 머물지 않았다', posterUrl: '/posters/poster1.jpg' },
    { id: 2, title: '늑대소년', posterUrl: '/posters/poster2.jpg' }, 
    { id: 3, title: '다만 널 사랑하고 있어', posterUrl: '/posters/poster3.jpg' },
    { id: 4, title: '노트북', posterUrl: '/posters/poster4.jpg' },
    { id: 5, title: '스프링 피버', posterUrl: '/posters/poster5.jpg' },
];

const PosterGallery = () => {
    // 현재 중앙 액자 틀(인덱스 2)에 표시되어야 할 포스터 데이터의 인덱스
    const [currentIndex, setCurrentIndex] = useState(2); 
    const numPosters = initialPosters.length; 

    const handleSlide = (direction) => {
        setCurrentIndex(prevIndex => {
            let newIndex;
            if (direction === 'next') {
                newIndex = (prevIndex + 1) % numPosters;
            } else {
                newIndex = (prevIndex - 1 + numPosters) % numPosters;
            }
            return newIndex;
        });
    };

    const renderFrames = () => {
        const frameIndexes = [0, 1, 2, 3, 4];
        
        return frameIndexes.map((frameIndex) => {
            const dataIndex = (currentIndex + (frameIndex - 2) + numPosters) % numPosters;
            const posterData = initialPosters[dataIndex];
            
            return (
                <div 
                    key={frameIndex}
                    className={styles.posterFrame}
                    style={{ 
                        '--frame-idx': frameIndex, 
                        '--current-data-idx': currentIndex 
                    }} 
                >
                    <div className={styles.posterContent}>
                        <img 
                            src={posterData.posterUrl} 
                            alt={posterData.title} 
                            className={styles.posterImage} 
                        />
                    </div>
                    
                    <div className={styles.frameOverlay}>
                        <img 
                            src="/images/Group 2416.png" 
                            alt="액자 틀" 
                            className={styles.frameImage}
                        />
                    </div>
                </div>
            );
        });
    };

    return (
        <div className={styles.galleryContainer}>
            <button 
                className={`${styles.arrow} ${styles.leftArrow}`}
                onClick={() => handleSlide('prev')}
            >
                {'<'}
            </button>

            {/* 🚨 이 트랙이 중앙에 정렬됩니다. */}
            <div className={styles.carouselTrack}>
                {renderFrames()}
            </div>

            <button 
                className={`${styles.arrow} ${styles.rightArrow}`}
                onClick={() => handleSlide('next')}
            >
                {'>'}
            </button>
        </div>
    );
};

export default PosterGallery;