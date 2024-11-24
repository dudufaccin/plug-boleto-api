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
        <div className="ag-format-container">
            <div className="ag-courses_box" onClick={handleClick}>
                <div className="ag-courses_item">
                    <div className="ag-courses-item_link">
                        <div className="ag-courses-item_date-box"></div>
                        <div className="ag-courses-item_bg" style={{ backgroundColor: background, color: color }}></div>
                    </div>
                </div>
                <div className="ag-courses-item_title">{title}</div>
            </div>
        </div>
    );
};

export default Index;
