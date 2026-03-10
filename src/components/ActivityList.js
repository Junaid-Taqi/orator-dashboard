import React from 'react';
import { useTranslation } from '../Services/Localization/Localization';

const formatActivityDate = (value) => {
  if (!value) return '';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return String(value);
  return parsed.toLocaleString();
};

const statusLabel = (status, t) => {
  if (status === 1) return t('statusPending');
  if (status === 2) return t('statusInProgress');
  if (status === 3) return t('statusResolved');
  if (status === 4) return t('statusRejected');
  return `status ${status}`;
};

function ActivityList({ activities = [] }) {
  const t = useTranslation();
  const items = activities.map((a) => ({
      text: `${t('report')} #${a.reportId}: ${statusLabel(a.oldStatus, t)} -> ${statusLabel(a.newStatus, t)}${a.comment ? ` (${a.comment})` : ''}`,
      time: formatActivityDate(a.date),
    }));

  return (
    <div className="card card-transparent p-3">
      <h5>{t('recentActivity')}</h5>
      {!items.length ? (
        <p className="text-primary mb-0">{t('noRecentActivity')}</p>
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
