import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tailwindcss/tailwind.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@material-tailwind/react';

import { UserProvider } from './Context/userContext';

import LoginForm  from './pages/Login/LoginForm'
import RegisterForm from './pages/Register/RegisterForm'
import HomePage from './pages/HomePage/HomePage';
import EventsPage from './pages/EventsPage/EventsPage';
import MyOrders from './pages/My Orders/MyOrders';
import MyTickets from './pages/My Tickets/MyTickets';
import BuyTicket from './pages/BuyTicketPage/BuyTicketPage';
import CreateEvent from './pages/Create Event/CreateEvent';
import ModifyEvent from './pages/Modify Event/ModifyEvent';
import AddTiers from './pages/Add Tiers/AddTiers';
import AdminEvents from './pages/Admin Events/AdminEvents';
import EventsPermit from './pages/Event Permits/EventPermits';
import ModifyStaff from './pages/Modify Staff/ModifyStaff';
import QRPage from './pages/QRPage/QR';
import TransferTicket from './pages/Transfer Ticket/TransferTicket';
import ReceiveTicket from './pages/Receive Ticket/ReceiveTicket';
import AdminUsers from './pages/Admin Users/AdminUsers';
import EditPermitUsers from './pages/Edit Permit Users/EditPermitUsers';
import TicketValidationPage from './pages/Ticket Validation/TicketValidation';
import MyEvents from './pages/My Events/MyEvents';

const router = createHashRouter([
  {
    path: '/',
    element: <LoginForm />
  },
  {
    path: '/register',
    element: <RegisterForm />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/events',
    element: <EventsPage />
  },
  {
    path: '/myorders',
    element: <MyOrders />
  },
  {
    path: '/mytickets',
    element: <MyTickets />
  },
  {
    path: '/buytickets/:code',
    element: <BuyTicket/>
  },
  {
    path: '/admin-event/createevent',
    element: <CreateEvent />
  },
  {
    path: '/admin-event/modifyevent/:eventCode',
    element: <ModifyEvent />
  },
  {
    path: '/admin-event/addtiers/:eventCode',
    element: <AddTiers />
  },
  {
    path: '/admin-event/',
    element: <AdminEvents />
  },
  {
    path: '/admin-event/modifyevent/addtier',
    element: <AddTiers />
  },
  {
    path: '/admin-event/eventpermit/:eventCode',
    element: <EventsPermit />
  },
  {
    path: '/admin-event/modifystaff/:eventCode',
    element: <ModifyStaff />
  },
  {
    path: '/qr/:eventCode/:ticketCode/tier/:ticketTier/register/:transactionCode',
    element: <QRPage />
  },
  {
    path: '/transferticket/:eventCode/:ticketCode/tier/:ticketTier/register/:transactionCode',
    element: <TransferTicket/>
  },
  {
    path: '/receiveticket',
    element: <ReceiveTicket />
  },
  {
    path: '/admin-users',
    element: <AdminUsers />
  },
  {
    path: '/admin-users/permits-user/:userCode',
    element: <EditPermitUsers />
  },
  {
    path: '/admin-scanner',
    element: <TicketValidationPage/>
  },
  {
    path: '/historyevents',
    element: <MyEvents/>
  },
  {
    path: '/permits-user',
    element: <EditPermitUsers />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <UserProvider>
    <RouterProvider router={router}>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </RouterProvider>
  </UserProvider>
);