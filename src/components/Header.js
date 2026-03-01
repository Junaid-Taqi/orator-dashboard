import React, { useEffect, useRef, useState } from 'react';
// using Bootstrap Icons (already installed) instead of FontAwesome

const Header = ({ user }) => {

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };

    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [userMenuOpen]);

  const handleLogout = () => {
    setUserMenuOpen(false);
    window.location.href = '/c/portal/logout';
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#396C8D' }}>
      <div className="container-fluid">

        {/* Left Side */}
        <div>
          <span className="navbar-brand mb-0 h1 text-white">
            MUNICIPALITY OF TISNO
          </span>
          <div className="text-white small">
            Monitor your digital signage network
          </div>
        </div>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {/* Custom User Dropdown */}
            <li className="nav-item" ref={userMenuRef}>
              <div style={{ position: "relative" }}>

                <button
                  type="button"
                  className="btn d-flex align-items-center text-white"
                  onClick={() => setUserMenuOpen(v => !v)}
                  style={{ background: "transparent", border: "none" }}
                >
                  {/* user avatar icon */}
                  <i className="bi bi-person-circle me-2" />

                  <div className="text-start me-2">
                    <div style={{ fontWeight: 600 }}>
                      {user?.fullName || "User Name"}
                    </div>
                    <div style={{ fontSize: "12px" }}>
                      {user?.email || "user@email.com"}
                    </div>
                  </div>

                  <i className={`bi ${userMenuOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
                </button>

                {userMenuOpen && (
                  <div
                    className="bg-white shadow rounded"
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "110%",
                      minWidth: "200px",
                      zIndex: 1000
                    }}
                  >
                    <button
                      className="dropdown-item d-flex align-items-center"
                      type="button"
                    >
                      <i className="bi bi-person me-2"></i>
                      Profile
                    </button>

                    <button
                      className="dropdown-item d-flex align-items-center text-danger"
                      type="button"
                      onClick={handleLogout}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Logout
                    </button>
                  </div>
                )}

              </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;