import React from 'react';

const displays = [
  { name: 'Lobby Screen 1', location: 'Main Entrance', status: 'online', uptime: '99.84%', views: '2.5K' },
  { name: 'Cafeteria TV', location: 'Employee Cafeteria', status: 'offline', uptime: '95.25%', views: '1.8K' },
  { name: 'Conference Room A', location: '3rd Floor', status: 'online', uptime: '100%', views: '987' },
  { name: 'Retail Display 1', location: 'Store Front', status: 'online', uptime: '98.55%', views: '3.2K' },
  { name: 'Waiting Area Screen', location: 'Reception', status: 'online', uptime: '99.11%', views: '2.1K' }
];

function DisplayStatus() {
  return (
    <div className="card card-transparent p-3">
      <h5>Display Status</h5>
      <ul className="list-unstyled">
        {displays.map((d, idx) => (
          <li key={idx} className="d-flex justify-content-between align-items-center mb-2 displayStatusRecord px-3 py-2 rounded">
            <div className="d-flex align-items-center">
              <i className="bi bi-display fs-3 me-3 text-primary"></i>
              <div>
                <strong>{d.name}</strong>
                <div className="fs-12 text-primary">{d.location}</div>
              </div>
            </div>
            <div className="text-end">
              <div className={d.status === 'online' ? 'text-green online fs-12' : 'text-danger offline fs-12'}>{d.status}</div>
              <div className="fs-12 text-primary">{d.uptime} uptime</div>
              <div className="fs-12 text-primary">{d.views} views</div>
            </div>
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default DisplayStatus;