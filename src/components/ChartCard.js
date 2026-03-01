import React from 'react';

function ChartCard({ title, children }) {
  return (
    <div className="card card-transparent p-3 mb-3">
      <h5>{title}</h5>
      <div className="chart-placeholder" style={{ height: '150px' }}>
        {children || <span className="text-muted">Chart goes here</span>}
      </div>
    </div>
  );
}

export default ChartCard;