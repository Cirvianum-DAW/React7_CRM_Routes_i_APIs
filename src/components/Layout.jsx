import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="bg-indigo-800 px-5 py-10 md:w-1/4">
        <h2 className="text-center text-4xl font-black text-white">
          CRM - Clients
        </h2>
        <nav className="mt-10">
          <Link
            to="/"
            className={`block p-2 font-bold text-white hover:rounded-md hover:bg-amber-300 hover:text-black ${
              location.pathname === '/' ? 'text-amber-200' : ''
            }`}
          >
            Client
          </Link>
          <Link
            to="/clients/nou"
            className={`block p-2 font-bold text-white hover:rounded-md hover:bg-amber-300 hover:text-black ${
              location.pathname === '/clients/nou' ? 'text-amber-200' : ''
            }`}
          >
            Nou client
          </Link>
        </nav>
      </aside>
      <main className="overflow-scroll p-10 md:h-screen md:w-3/4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
