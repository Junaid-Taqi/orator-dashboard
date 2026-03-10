import React from 'react';
import { useTranslation } from '../Services/Localization/Localization';

function DisplayStatus({ displays: apiDisplays = [] }) {
  const t = useTranslation();
  const items = apiDisplays.map((d) => ({
      name: d.name || `Display ${d.displayId}`,
      location: d.location || '-',
      status: t(d.statusText ? d.statusText : (Number(d.status) === 1 ? 'online' : 'offline')),
      uptime: d.uptime || '-',
      views: d.views || null,
    }));

  return (
    <div className="card card-transparent p-3">
      <h5 className="mb-4">{t('displayStatus')}</h5>
      {!items.length ? (
        <p className="text-primary mb-0">{t('noDisplays')}</p>
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
                <div className={d.status === t('online') ? 'text-green online fs-12' : 'text-danger offline fs-12'}>{d.status}</div>
                <div className="fs-12 text-primary">{d.uptime} {t('uptime')}</div>
                {!!d.views && <div className="fs-12 text-primary">{d.views} {t('views')}</div>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayStatus;
