import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { fetchToken } from './Services/Slices/AuthSlice';

function App() {
  const dispatch = useDispatch();
  const { token, expiresIn, status, error } = useSelector((state) => state.auth);
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

  useEffect(() => {
    dispatch(fetchToken());
  }, [dispatch]);

  useEffect(() => {
    if (token && expiresIn) {
      const refreshTime = (expiresIn - 60) * 1000;
      if (refreshTime > 0) {
        const timer = setTimeout(() => {
          dispatch(fetchToken());
        }, refreshTime);
        return () => clearTimeout(timer);
      }
    }
  }, [token, expiresIn, dispatch]);

  const isBootstrappingAuth = !token && (status === 'idle' || status === 'loading');
  if (isBootstrappingAuth) {
    return (
      <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
        <div style={{ fontSize: '16px', fontWeight: 600 }}>Loading...</div>
      </div>
    );
  }

  if (!token && status === 'failed') {
    return (
      <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', color: '#b91c1c' }}>
        <div>Failed to load token{error ? `: ${error}` : ''}</div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header user={user} />
      <main className="container-fluid flex-grow-1 main-bg mt-0 pt-3">
        <Dashboard user={user} />
      </main>
    </div>
  );
}

export default App;
