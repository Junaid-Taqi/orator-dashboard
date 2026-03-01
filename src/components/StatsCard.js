import React from 'react';

function StatsCard({ iconClass, value, label, subtext }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="card card-transparent p-3">
        <div className="d-flex align-items-center">
          <i className={`${iconClass} fs-1 me-3`}></i>
          <div>
            <h3 className="mb-0">{value}</h3>
            <div>{label}</div>
            {subtext && <small className="text-primary">{subtext}</small>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;