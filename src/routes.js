
import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";
// import Employee from "views/examples/Employee.js";
// import Register from "views/examples/Register.js";

// import Tables from "views/examples/Tables.js";
// import Icons from "views/examples/Icons.js";
import EmployeeList from "views/Employee/EmployeeList";
import LeaveEmployee from "views/Leave/LeaveEmployee.js";
// import AddEmployee from "views/examples/AddEmployee";
import Holidays from "views/Pages/Holidays";
import Department from "views/Employee/Department";
import EmployeeDashboard from "views/Employee/EmployeeDashboard";
import AdminDashboard from "views/Pages/AdminDashboard";
import AttendanceEmployee from "views/Employee/AttendanceEmployee";

import Designetion from "views/Pages/Designetion";
import LeaveAdmin from "views/Leave/LeaveAdmin";
import AttendanceAdmin from "views/Pages/AttendanceAdmin";
//import LeaveSetting from "views/Leave/LeaveSetting";
import EmployeeSalary from "views/Payroll/EmployeeSalary";
import Payslip from "views/Payroll/Payslip";
// import Admin from "layouts/Admin";




var routes = [
  // only menu
  // {
  //   path: "/admindashboard",
  //   name: "Admin Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   layout: "/admin",
  //   component: <AdminDashboard/>,
  // },
  // {
  //   path: "/employeedashboard",
  //   name: "Employee Dashboard",
  //   icon: "ni ni-building text-red",
  //   layout: "/admin",
  //   component:<EmployeeDashboard/>
  // },
  // {
  //   path: "/EmployeeList",
  //   name: "Employees List",
  //   icon: "ni ni-archive-2 text-green",
  //   component: <EmployeeList />,
  //   layout: "/admin",
  // },

  // {
  //   path: "/leaveemployee",
  //   name: "Leave (Employee)",
  //   icon: "ni ni-collection text-yellow"
  //   ,
  //   component: <LeaveEmployee />,
  //   layout: "/admin",

  // },
  // {
  //   path: "/AttendanceEmployee",
  //   name: "Attendance(Employee)",
  //   layout: "/admin",
  //   icon: "ni ni-spaceship text-pink",
  //   component: <AttendanceEmployee/>,
  // },
  // {
  //   path: "/department",
  //   name: "Department",
  //   icon : "ni ni-badge text-blue",
  //   layout: "/admin",
  //   component: <Department />,
  // },
  // {
  //   path: "/designetion",
  //   name: "Designetion",
  //   icon: "ni ni-single-02 text-red",
  //   layout: "/admin",
  //   component: <Designetion/>,
  // },
  // {
  //   path: "/leaveadmin",
  //   name: "Leave (Admin)",
  //   icon: "ni ni-paper-diploma text-yellow",
  //   layout: "/admin",
  //   component: <LeaveAdmin/>

  // },
  // {
  //   path: "/AttandanceAdmin",
  //   name: "Attenndance (Admin)",
  //   icon: "ni ni-watch-time text-blue",
  //   layout: "/admin",
  //   component: <AttendanceAdmin/>
  // },
  // // {
  // //   path: "/LeaveSetting",
  // //   name: "Leaves Setting",
  // //   icon: "ni ni-settings-gear-65 text-green",
  // //   layout: "/admin",
  // //   component: <LeaveSetting/>
  // // },
  // {
  //   path: "/holidays",
  //   name: "holidays",
  //   component: <Holidays />,
  //   layout: "/admin",
  //   icon: "ni ni-calendar-grid-58 text-info",

  // },
  // {
  //   path: "/EmployeeSalary",
  //   name: "Employee Salary",
  //   layout: "/admin",
  //   component: <EmployeeSalary/>,
  //   icon: "ni ni-credit-card text-blue",
  // },
  // {
  //   path: "/Payslip",
  //   name: "Payslip",
  //   layout: "/admin",
  //   icon : "ni ni-cloud-download-95 text-red",
  //   component: <Payslip/>

  // },

  // submenu
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
   component: <Index />,
    layout: "/admin",
    submenu: [
      {
        path: "/AdminDashboard",
        name: "Admin Dashboard",
        layout: "/admin",
        component: <AdminDashboard/>
      },
      {
        path: "/EmployeeDashboard",
        name: "Employee Dashboard",
      
        layout: "/admin",
        component: <EmployeeDashboard />
      },
    ],
  },
  {
    path: "/employee",
    name: "employee",
    icon: "ni ni-single-02 text-red",
   // component: <Employee />,
    layout: "/admin",
    submenu: [
      {
        path: "/EmployeeList",
        name: "Employees List",
        component: <EmployeeList />,
        layout: "/admin",
      },

      {
        path: "/LeaveEmployee",
        name: "Leave (Employee)",
        component: <LeaveEmployee />,
        layout: "/admin",

      },
      {
        path: "/AttandanceEmployee",
        name: "Attendance(Employee)",
        layout: "/admin",
        component:<AttendanceEmployee/>
      },
      {
        path: "/Department",
        name: "Department",
        layout: "/admin",
        component:<Department/>
      },
      {
        path: "/Designetion",
        icon:"ni ni-credit-card text-black",
        name: "Designetion",
        layout: "/admin",
        component:<Designetion/>
      },
    ],
  },


  {
    path: "/index",
    name: "Admin",
    icon: "ni ni-badge text-orange",
    layout: "/admin",
    submenu: [
      {
        path: "/LeaveAdmin",
        name: "Leave (Admin)",
        layout: "/admin",
        component:<LeaveAdmin/>

      },
      {
        path: "/AttendanceAdmin",
        name: "Attenndance (Admin)",
        layout: "/admin",
        component:<AttendanceAdmin/>
      },
      // {
      //   path: "",
      //   name: "Leaves Setting",
      //   layout: "/admin",
      // },
      {
        path: "/Holidays",
        name: "holidays",
       
        component: <Holidays />,
        layout: "/admin",

      },

    ],
  },
  {
    path: "/index",
    name: "Parroll",
    icon: "ni ni-credit-card text-black",
    layout: "/admin",
    submenu: [
      {
        path: "/EmployeeSalary",
        name: "Employee Salary",
        layout: "/admin",
        component:<EmployeeSalary/>
      },
      {
        path: "/Payslip",
        name: "Payslip",
        layout: "/admin",
        component:<Payslip/>
      },
    ],
  },
  


 

];


export default routes;
