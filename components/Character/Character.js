import React from 'react';

// Character 컴포넌트는 큐레이터 아바타 이미지를 표시합니다.
const Character = ({ imageUrl, message }) => {
    return (
        <div className="character-container">
            {/* 🚨 임시: 실제 Image 컴포넌트가 나중에 들어갈 위치입니다. */}
            <div style={{ width: 90, height: 90, backgroundColor: '#eee', borderRadius: '50%' }}>
                [캐릭터]
            </div>
            {/* 🚨 메시지 박스는 Footer에서 구현되므로 여기서는 간단히 둠 */}
        </div>
    );
};

export default Character;