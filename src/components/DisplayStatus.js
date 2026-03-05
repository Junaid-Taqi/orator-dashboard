import React from 'react';

function DisplayStatus({ displays: apiDisplays = [] }) {
  const items = apiDisplays.map((d) => ({
      name: d.name || `Display ${d.displayId}`,
      location: d.location || '-',
      status: d.statusText || (Number(d.status) === 1 ? 'online' : 'offline'),
      uptime: d.uptime || '-',
      views: d.views || null,
    }));

  return (
    <div className="card card-transparent p-3">
      <h5>Display Status</h5>
      {!items.length ? (
        <p className="text-primary mb-0">No displays found.</p>
      ) : (
        <ul className="list-unstyled">
          {items.map((d, idx) => (
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
                {!!d.views && <div className="fs-12 text-primary">{d.views} views</div>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayStatus;
