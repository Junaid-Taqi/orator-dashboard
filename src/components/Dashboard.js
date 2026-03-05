import React, { useEffect, useMemo, useState } from 'react';
import StatsCard from './StatsCard';
import ActivityList from './ActivityList';
import DisplayStatus from './DisplayStatus';
import { serverUrl } from '../Services/Constants/Constants';

function Dashboard() {
  const [summary, setSummary] = useState({
    counters: {},
    displayStatus: [],
    recentActivity: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const user = JSON.parse(sessionStorage.getItem("liferayUser")) || {
    "userId": "24608",
    "fullName": "admin lahore",
    "email": "admin@lahore.com",
    "groups": [
      {
        "id": "24593",
        "name": "Municipility One"
      }
    ]
  }

  const groupId = user?.groups?.[0]?.id;

  useEffect(() => {
    const fetchDashboardSummary = async () => {
      if (!groupId) {
        setLoading(false);
        setError('Group not found for current user.');
        return;
      }

      setLoading(true);
      setError('');
      try {
        const token = sessionStorage.getItem('token') || '';
        const response = await fetch(`${serverUrl}/o/adminSideCitizenReports/getDashboardSummary`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ groupId: String(groupId) }),
        });

        const data = await response.json();
        if (!response.ok || !data?.success) {
          setError(data?.message || 'Failed to load dashboard summary.');
          return;
        }

        setSummary({
          counters: data?.data?.counters || {},
          displayStatus: data?.data?.displayStatus || [],
          recentActivity: data?.data?.recentActivity || [],
        });
      } catch (e) {
        setError('Failed to load dashboard summary.');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardSummary();
  }, [groupId]);

  const counters = summary.counters || {};

  return (
    <div className="dashboard">
      <div className="container-fluid pb-4">
        <div className="row">
          <div className="col-12">
            <h3 className='m-0'>Dashboard</h3>
            <p className="text-primary">Monitor your digital signage network</p>
            {!!error && <p className="text-danger mb-0">{error}</p>}
          </div>
        </div>

        {/* top stats row */}
        <div className="row">
          <StatsCard
            iconClass="bi bi-display text-primary"
            value={loading ? '...' : String(counters.totalDisplays ?? 0)}
            label="Total Displays"
            subtext={counters.totalDisplaysSubtitle || ''}
          />
          <StatsCard
            iconClass="bi bi-eye text-green"
            value={loading ? '...' : String(counters.totalReports ?? 0)}
            label="Total Reports"
            subtext={counters.totalReportsSubtitle || ''}
          />
          <StatsCard
            iconClass="bi bi-bar-chart text-purple"
            value={loading ? '...' : String(counters.activeContent ?? 0)}
            label="Active Content"
            subtext={counters.activeContentSubtitle || ''}
          />
          <StatsCard
            iconClass="bi bi-graph-up text-orange"
            value={loading ? '...' : String(counters.totalUsers ?? 0)}
            label="Total Users"
            subtext={counters.totalUsersSubtitle || ''}
          />
        </div>

        {/* second row charts */}
        {/* <div className="row">
          <div className="col-md-6">
            <div className="card card-transparent p-3 mb-3">
              <DonutChart
                title="Content Distribution"
                data={[
                  ['Online', 70],
                  ['Offline', 30]
                ]}
                colors={[ '#4bc0c0', '#eea3a3' ]}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-transparent p-3 mb-3">
              <DonutChart
                title="Total Views"
                data={[
                  ['Views Today', 2546],
                  ['Remaining', 10000 - 2546]
                ]}
                colors={[ '#9cff63', '#84C7FF' ]}
              />
            </div>
          </div>
        </div> */}

        {/* third row lists */}
        <div className="row">
          <div className="col-md-6">
            <ActivityList activities={summary.recentActivity} />
          </div>
          <div className="col-md-6">
            <DisplayStatus displays={summary.displayStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
