import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <button className="sidebar-button">置为当前图层</button>
            <button className="sidebar-button">图层匹配</button>
            <button className="sidebar-button">锁定图层</button>
            <button className="sidebar-button">特性匹配</button>
        </div>
    );
};

export default Sidebar;
