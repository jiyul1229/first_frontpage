import React from 'react';
import './Research.css'; 

const Research = () => {
    return (
        <div className="search-container">
            {/* 검색 입력 필드 */}
            <input type="text" placeholder="구글에서 검색" />
            <div className="button-group">
                {/* 검색 버튼 */}
                <button>구글 검색</button>
            </div>
        </div>
    );
};

export default Research;
