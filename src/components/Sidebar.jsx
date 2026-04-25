import React from 'react';
import { FiFolder, FiFileText, FiMusic, FiVideo, FiArchive, FiGrid } from 'react-icons/fi';

const categories = [
  { name: 'All Downloads', icon: <FiGrid /> },
  { name: 'Compressed', icon: <FiArchive /> },
  { name: 'Documents', icon: <FiFileText /> },
  { name: 'Music', icon: <FiMusic /> },
  { name: 'Programs', icon: <FiFolder /> },
  { name: 'Video', icon: <FiVideo /> },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div style={{ marginBottom: '16px' }}>
        {categories.map((cat, index) => (
          <div key={index} className={`sidebar-item ${index === 0 ? 'active' : ''}`}>
            {cat.icon}
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
      
      <div style={{ padding: '0 24px', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>Queues</div>
      <div className="sidebar-item">
        <FiFolder />
        <span>Main Download Queue</span>
      </div>
    </div>
  );
};

export default Sidebar;
