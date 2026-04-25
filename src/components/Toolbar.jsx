import React from 'react';
import { FiPlusSquare, FiPlay, FiPause, FiStopCircle, FiTrash2, FiSettings, FiClock } from 'react-icons/fi';

const Toolbar = ({ onAddUrl }) => {
  return (
    <div className="toolbar">
      <button className="toolbar-btn accent" onClick={onAddUrl}>
        <FiPlusSquare size={24} />
        <span style={{ fontSize: '11px' }}>Add URL</span>
      </button>
      <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border-color)', margin: '0 8px' }} />
      <button className="toolbar-btn">
        <FiPlay size={24} />
        <span style={{ fontSize: '11px' }}>Resume</span>
      </button>
      <button className="toolbar-btn">
        <FiStopCircle size={24} />
        <span style={{ fontSize: '11px' }}>Stop</span>
      </button>
      <button className="toolbar-btn">
        <FiStopCircle size={24} color="#ff4444" />
        <span style={{ fontSize: '11px' }}>Stop All</span>
      </button>
      <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border-color)', margin: '0 8px' }} />
      <button className="toolbar-btn">
        <FiTrash2 size={24} />
        <span style={{ fontSize: '11px' }}>Delete</span>
      </button>
      <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border-color)', margin: '0 8px' }} />
      <button className="toolbar-btn">
        <FiSettings size={24} />
        <span style={{ fontSize: '11px' }}>Options</span>
      </button>
      <button className="toolbar-btn">
        <FiClock size={24} />
        <span style={{ fontSize: '11px' }}>Scheduler</span>
      </button>
    </div>
  );
};

export default Toolbar;
