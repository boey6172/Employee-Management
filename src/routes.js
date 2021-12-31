import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../src/layouts/DashboardLayout';
import MainLayout from '../src/layouts/MainLayout';
// import LoginView from '../src/views/auth/LoginView';
import NotFoundView from '../src/views/errors/NotFoundView';
import Test from '../src/views/test/test';
import Reg from '../src/views/registration';

//document type
import DocumentType from '../src/views/maintenances/documentType';
import CreateDocumentType from '../src/views/maintenances/documentType/create';

//region assignment
import RegionAssignment from '../src/views/maintenances/regionAssignment';
import CreateRegionAssignment from '../src/views/maintenances/regionAssignment/create';

//Religion
import CreateReligion from '../src/views/maintenances/religion/create';
import Religion from '../src/views/maintenances/religion';


import Signup from '../src/views/signup';

//ranks
import CreateRank from '../src/views/maintenances/rank/create';
import Rank from '../src/views/maintenances/rank';
import Login from '../src/views/auth/Login';





import PrivateAdminRoute from "./middleware/PrivateAdminRoute";
import Index from '../src/views/registration';
// import Home from "./views/home";
// import Account from "./views/account";
// import Expenses from "./views/expenses";
// import Users from "./views/users";
// import CreateExpense from "./views/expenses/form"
// import ViewExpenses from "./views/expenses/view";
// import MaintenanceCategory from "./views/maintenance/category"
// import MaintenancePayment from "./views/maintenance/payment"
// import MaintenanceSupplier from "./views/maintenance/supplier"
// import CreateCategory from "./views/maintenance/category/form"
// import CreatePayment from "./views/maintenance/payment/form"
// import CreateSupplier from "./views/maintenance/supplier/form"
// import ExpensesReport from "./views/reports/expenses"
// import Employees from "./views/employees"








const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [

      {
         path: 'dashboard', 
         element: <PrivateAdminRoute component= {Reg} />
      },
      // {
      //   path: 'myprofile', 
      //   element: <PrivateAdminRoute component= {Account} />
      // },
      // {
      //   path: 'expenses', 
      //   element: <PrivateAdminRoute component= {Expenses} />
      // },
      // {
      //   path: 'users', 
      //   element: <PrivateAdminRoute component= {Users} />
      // },
      // {
      //   path: 'createExpense', 
      //   element: <PrivateAdminRoute component= {CreateExpense} />
      // },
      // {
      //   path: 'maintenance/category', 
      //   element: <PrivateAdminRoute component= {MaintenanceCategory} />
      // },
      // {
      //   path: 'maintenance/createcategory', 
      //   element: <PrivateAdminRoute component= {CreateCategory} />
      // },
      // {
      //   path: 'maintenance/payment', 
      //   element: <PrivateAdminRoute component= {MaintenancePayment} />
      // },
      // {
      //   path: 'maintenance/createpayment', 
      //   element: <PrivateAdminRoute component= {CreatePayment} />
      // },
      // {
      //   path: 'maintenance/supplier', 
      //   element: <PrivateAdminRoute component= {MaintenanceSupplier} />
      // },
      // {
      //   path: 'maintenance/createsupplier', 
      //   element: <PrivateAdminRoute component= {CreateSupplier} />
      // },
      // {
      //   path: 'expenses/view', 
      //   element: <PrivateAdminRoute component= {ViewExpenses} />
      // },
      // {
      //   path: 'report/expenses', 
      //   element: <PrivateAdminRoute component= {ExpensesReport} />
      // },
      // {
      //   path: 'employees', 
      //   element: <PrivateAdminRoute component= {Employees} />
      // },
      { path: '404', element: <PrivateAdminRoute component ={NotFoundView} /> },
      { path: '*', element: <Navigate to="/app/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      // { path: 'login', element: <LoginView /> },
      { path: 'test', element: <Test /> },
      { path: '404', element: <NotFoundView /> },
      { path: 'createdocumenttype', element: <CreateDocumentType /> },
      { path: 'documenttype', element: <DocumentType /> },
      { path: 'createrank', element: <CreateRank /> },
      { path: 'rank', element: <Rank /> },
      { path: 'createregionAssignment', element: <CreateRegionAssignment /> },
      { path: 'regionAssignment', element: <RegionAssignment /> },
      { path: 'createreligion', element: <CreateReligion /> },
      { path: 'religion', element: <Religion /> },
      { path: 'registration', element: <Reg /> },
      { path: 'signup', element: <Signup /> },
      { path: '/', element: <Navigate to="/test" /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'login', element: <Login /> },

      
    ]
  }
];

export default routes;
