import React, {useEffect, useRef, useState} from 'react';
// using Bootstrap Icons for all icons (already installed)

const Header = ({user}) => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null);

    // Click outside to close menu logic
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
        <nav className="displays-dashboard__nav main-bg">
            <div className="header-left">
                <h5 className="header-title text-primary">MUNICIPALITY OF TISNO</h5>
                <p className="header-subtitle fs-12 m-0">Monitor your digital signage network</p>
            </div>

            <div className="displays-dashboard__nav-user-wrap" ref={userMenuRef}>
                <button
                    type="button"
                    className="displays-dashboard__nav-user"
                    onClick={() => setUserMenuOpen((v) => !v)}
                    aria-expanded={userMenuOpen}
                    aria-haspopup="true"
                >
                    <i className="bi bi-person-circle nav-user-icon" />

                    <div className="nav-user-info">
                        <span className="nav-user-name">{user?.fullName || "User Name"}</span>
                        <span className="nav-user-email">{user?.email || "user@email.com"}</span>
                    </div>

                    {/* Toggle Arrow Logic */}
                    <div className="nav-user-chevron-box">
                        <i className={`bi ${userMenuOpen ? 'bi-chevron-up' : 'bi-chevron-down'} nav-user-chevron`} />
                    </div>
                </button>

                {/* Dropdown Menu */}
                {userMenuOpen && (
                    <div className="displays-dashboard__nav-user-menu" role="menu">
                        <button type="button" className="displays-dashboard__nav-user-menu-item" role="menuitem">
                            <i className="bi bi-person" style={{marginRight: '10px'}} />
                            Profile
                        </button>
                        <button
                            type="button"
                            className="displays-dashboard__nav-user-menu-item displays-dashboard__nav-user-menu-item--logout"
                            role="menuitem"
                            onClick={handleLogout}
                        >
                            <i className="bi bi-box-arrow-right" style={{marginRight: '10px'}} />
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;