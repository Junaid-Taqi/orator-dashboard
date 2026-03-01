import React from 'react';

const activities = [
  { text: "Display 'Lobby Screen 1' went online", time: "2 minutes ago" },
  { text: "New content 'Spring Sale Banner' uploaded", time: "15 minutes ago" },
  { text: "Playlist 'Morning Schedule' started", time: "1 hour ago" },
  { text: "Display 'Cafeteria TV' offline", time: "2 hours ago" },
  { text: "Content 'Welcome Video' reached 1K views", time: "3 hours ago" }
];

function ActivityList() {
  return (
    <div className="card card-transparent p-3">
      <h5>Recent Activity</h5>
      <ul className="list-unstyled">
        {activities.map((a, idx) => (
          <li key={idx} className="mb-2">
            <span className="me-2">•</span>
            <span>{a.text}</span>
            <div className="text-primary fs-12 ms-3">{a.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;