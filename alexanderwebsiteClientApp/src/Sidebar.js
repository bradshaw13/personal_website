import './Sidebar.css';

function Sidebar() {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      }
      const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
      }
      return (
          <div>
            <div id="mySidenav" className="sidenav">
              <a href="" className="closebtn" onClick={closeNav}>&times;</a>
              <a href="https://www.mlb.com/">About</a>
              <a href="https://www.mlb.com/">Services</a>
              <a href="https://www.mlb.com/">Clients</a>
              <a href="https://www.mlb.com/">Contact</a>
            </div>
            
            
            <div className="openSide" onClick={openNav}>&#9776;</div>
          </div>
    
      );
}

export default Sidebar;
