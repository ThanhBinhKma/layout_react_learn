import React from 'react' ;

 function Sidebar() {
    return (
       
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    {/* Sidebar - Brand */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink" />
      </div>
      <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>
    {/* Divider */}
    <hr className="sidebar-divider my-0" />
    {/* Nav Item - Dashboard */}
    <li className="nav-item active">
      <a className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt" />
        <span>Dashboard</span></a>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider" />
    
    <li className="nav-item">
      <a className="nav-link" href="charts.html">
        <i className="fas fa-fw fa-chart-area" />
        <span>Charts</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="tables.html">
        <i className="fas fa-fw fa-table" />
        <span>Tables</span></a>
    </li>
    <hr className="sidebar-divider d-none d-md-block" />
  </ul>  
        
    )
}
export default Sidebar;
