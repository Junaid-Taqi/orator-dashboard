import React from 'react';

const formatActivityDate = (value) => {
  if (!value) return '';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return String(value);
  return parsed.toLocaleString();
};

const statusLabel = (status) => {
  if (status === 1) return 'pending';
  if (status === 2) return 'in progress';
  if (status === 3) return 'resolved';
  if (status === 4) return 'rejected';
  return `status ${status}`;
};

function ActivityList({ activities = [] }) {
  const items = activities.map((a) => ({
      text: `Report #${a.reportId}: ${statusLabel(a.oldStatus)} -> ${statusLabel(a.newStatus)}${a.comment ? ` (${a.comment})` : ''}`,
      time: formatActivityDate(a.date),
    }));

  return (
    <div className="card card-transparent p-3">
      <h5>Recent Activity</h5>
      {!items.length ? (
        <p className="text-primary mb-0">No recent activity found.</p>
      ) : (
        <ul className="list-unstyled">
          {items.map((a, idx) => (
            <li key={idx} className="mb-2">
              <span className="me-2">*</span>
              <span>{a.text}</span>
              <div className="text-primary fs-12 ms-3">{a.time}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActivityList;
