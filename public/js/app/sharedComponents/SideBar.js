import React from 'react'

var SideBar = ({host}) =>
  <aside className="main-sidebar">
    <section className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview menu-open">
                <a href={host + "/index.html"}>
                    <i className="fa fa-home"></i> <span>Home</span>
                </a>
            </li>
            <li className="active treeview menu-open">
                <a href={host + "/qzstring/index.html"}>
                    <i className="fa fa-font"></i> <span>String Tools</span>
                </a>
            </li>
            <li className="active treeview menu-open">
                <a href={host + "/qzstring/config.html"}>
                    <i className="fa fa-gear"></i> <span>Config</span>
                </a>
            </li>
            <li className="active treeview menu-open">
                <a href={host + "/qzstring/about.html"}>
                    <i className="fa fa-info-circle"></i> <span>About</span>
                </a>
            </li>
        </ul>
    </section>
  </aside>;

export default SideBar;
