import React from 'react';

const mockDownloads = [
  { id: 1, name: 'Ubuntu-22.04-desktop-amd64.iso', size: '3.4 GB', status: 'Downloading', progress: 45, timeLeft: '12 min', speed: '4.5 MB/s', date: '2023-10-25' },
  { id: 2, name: 'VSCodeSetup-x64-1.83.1.exe', size: '89.2 MB', status: 'Completed', progress: 100, timeLeft: '-', speed: '-', date: '2023-10-24' },
  { id: 3, name: 'Adobe_Premiere_Pro_2023.zip', size: '2.1 GB', status: 'Paused', progress: 12, timeLeft: 'Unknown', speed: '0 KB/s', date: '2023-10-25' },
];

const DownloadList = () => {
  return (
    <div className="content-area">
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Size</th>
            <th>Status</th>
            <th>Time Left</th>
            <th>Transfer Rate</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {mockDownloads.map(file => (
            <tr key={file.id}>
              <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '20px', height: '24px', backgroundColor: 'var(--text-muted)', borderRadius: '2px' }} />
                {file.name}
              </td>
              <td>{file.size}</td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="progress-bar-container">
                    <div className="progress-fill" style={{ width: `${file.progress}%`, backgroundColor: file.progress === 100 ? 'var(--success)' : 'var(--accent-color)' }} />
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{file.progress}%</span>
                </div>
              </td>
              <td>{file.timeLeft}</td>
              <td>{file.speed}</td>
              <td>{file.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DownloadList;
