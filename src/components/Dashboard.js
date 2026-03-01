import React from 'react';
import StatsCard from './StatsCard';
import ChartCard from './ChartCard';
import ActivityList from './ActivityList';
import DisplayStatus from './DisplayStatus';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container-fluid pb-4">
        <div className="row">
          <div className="col-12">
            <h3 className='m-0'>Dashboard</h3>
            <p className="text-primary">Monitor your digital signage network</p>
          </div>
        </div>

        {/* top stats row */}
        <div className="row">
          <StatsCard iconClass="bi bi-display text-primary" value="24" label="Total Displays" subtext="+2 this week" />
          <StatsCard iconClass="bi bi-eye text-green" value="45.2K" label="Total Views" subtext="+12% this week" />
          <StatsCard iconClass="bi bi-bar-chart text-purple" value="124" label="Active Content" subtext="18 scheduled" />
          <StatsCard iconClass="bi bi-graph-up text-orange" value="78%" label="Avg. Engagement" subtext="+5% this month" />
        </div>

        {/* second row charts */}
        <div className="row">
          <div className="col-md-6">
            <ChartCard title="Content Distribution" />
          </div>
          <div className="col-md-6">
            <ChartCard title="Total Views" />
          </div>
        </div>

        {/* third row lists */}
        <div className="row">
          <div className="col-md-6">
            <ActivityList />
          </div>
          <div className="col-md-6">
            <DisplayStatus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;