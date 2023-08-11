
import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import Profile from "views/examples/Profile";
import AdminDashboard from "views/Pages/AdminDashboard";
import EmployeeDashboard from "views/Employee/EmployeeDashboard";
import EmployeeList from "views/Employee/EmployeeList";
import LeaveEmployee from "views/Leave/LeaveEmployee";
import AttendanceEmployee from "views/Employee/AttendanceEmployee";
import Department from "views/Employee/Department";
import Designetion from "views/Pages/Designetion";
import LeaveAdmin from "views/Leave/LeaveAdmin";
import AttendanceAdmin from "views/Pages/AttendanceAdmin";
import Holidays from "views/Pages/Holidays";
import EmployeeSalary from "views/Payroll/EmployeeSalary";
import Payslip from "views/Payroll/Payslip";



const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props?.location?.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/logo.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props?.location?.pathname)}
        />
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/admin/index" replace />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/EmployeeDashboard"  element={<EmployeeDashboard/>}/>
          <Route path="/EmployeeList" element={<EmployeeList/>}/>
          <Route path="/LeaveEmployee" element={<LeaveEmployee/>}/>
          <Route path="/AttandanceEmployee" element={<AttendanceEmployee/>}/>
          <Route path="/Department" element={<Department/>}/>
          <Route path="/Designetion"   element={<Designetion/>}/>
          <Route path="/LeaveAdmin" element={<LeaveAdmin/>}/> 
          <Route path="/AttendanceAdmin" element={<AttendanceAdmin/>}/> 
          <Route path="/Holidays" element={<Holidays/>} />
          <Route path="/EmployeeSalary" element={<EmployeeSalary/>}/> 
          <Route path="/Payslip" element={<Payslip/>}/> 
          
                


        </Routes>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
