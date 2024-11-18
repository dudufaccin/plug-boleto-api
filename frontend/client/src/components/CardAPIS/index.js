import './style.css';

// export default Index;
import React, { useContext } from 'react';
import { ApiContext } from '../../context/apiContext';

const Index = ({ title, background, color }) => {
    const { setSelectedApi } = useContext(ApiContext);

    const handleClick = () => {
        setSelectedApi(title);
    };

    return (
        <div class="ag-format-container">
            <div class="ag-courses_box" onClick={handleClick}>
                <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_date-box"></div>
                        <div class="ag-courses-item_bg" style={{ backgroundColor: background, color: color }}></div>
                    </div>
                </div>
                <div class="ag-courses-item_title">{title}</div>
            </div>
        </div>
    );
};

export default Index;
