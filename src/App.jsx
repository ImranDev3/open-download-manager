import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import DownloadList from './components/DownloadList';

function App() {
  const [showAddUrl, setShowAddUrl] = useState(false);

  return (
    <div className="app-container">
      <Toolbar onAddUrl={() => setShowAddUrl(true)} />
      
      <div className="main-area">
        <Sidebar />
        <DownloadList />
      </div>

      {showAddUrl && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100 }}>
          <div style={{ backgroundColor: 'var(--bg-toolbar)', padding: '24px', borderRadius: '8px', width: '500px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ marginBottom: '16px' }}>Enter new address to download</h3>
            <input type="text" placeholder="https://example.com/file.zip" style={{ width: '100%', padding: '10px', backgroundColor: 'var(--bg-dark)', border: '1px solid var(--border-color)', color: 'white', outline: 'none', marginBottom: '20px' }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button onClick={() => setShowAddUrl(false)} style={{ padding: '8px 16px', background: 'transparent', border: '1px solid var(--border-color)', color: 'white', cursor: 'pointer', borderRadius: '4px' }}>Cancel</button>
              <button onClick={() => setShowAddUrl(false)} style={{ padding: '8px 16px', background: 'var(--accent-color)', border: 'none', color: 'white', cursor: 'pointer', borderRadius: '4px' }}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
