// components/TicketCard/TicketCard.js

import React from 'react';

// Next.js에서 동적으로 사용되는 TicketCard 컴포넌트
const TicketCard = ({ 
    title, 
    tags, 
    imageUrl, 
    color, 
    likes, 
    curator, 
    curatorMsg, 
    className // HomeViewContent.js에서 동적으로 스택 클래스가 전달됩니다.
}) => {
  return (
    // className을 포함하여 HomeViewContent.module.css의 스타일을 적용합니다.
    <div 
        className={className} 
        style={{ 
            backgroundColor: color || 'white', 
            borderRadius: '12px',
            padding: '20px',
            boxSizing: 'border-box'
        }}
    >
      <div style={{ padding: '10px' }}>
        <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
        <p style={{ margin: '0 0 5px 0', fontSize: '0.9em', color: '#666' }}>
          태그: {tags ? tags.join(', ') : 'N/A'}
        </p>
        <p style={{ margin: '0', fontSize: '0.8em', color: '#999' }}>
          큐레이터: {curator}
        </p>
        {/* 임시 이미지 플레이스홀더를 여기에 추가하거나, CSS 배경을 사용할 수 있습니다. */}
      </div>
    </div>
  );
};

// 🚨 'Element type is invalid' 오류를 해결하는 핵심: 반드시 default export를 사용해야 합니다.
export default TicketCard;