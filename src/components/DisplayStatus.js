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
          <li key={idx} className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <strong>{d.name}</strong>
              <div className="small text-primary">{d.location}</div>
            </div>
            <div className="text-end">
              <div className={d.status === 'online' ? 'text-success' : 'text-danger'}>{d.status}</div>
              <div className="small text-primary">{d.uptime} uptime</div>
              <div className="small text-primary">{d.views} views</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayStatus;