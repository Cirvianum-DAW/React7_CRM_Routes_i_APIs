import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Client from '../components/Client';
import { obtenirClients } from '../data/Clients';

export const loader = () => {
  const clients = obtenirClients();
  return clients;
};

const Index = () => {
  const clients = useLoaderData();
  return (
    <>
      <h1 className="mb-2 text-center text-3xl font-black text-indigo-700">
        Clients
      </h1>
      <p className="mt-3 text-center">Administra els teus clients</p>
      {clients.length ? (
        <table className="mt-10 w-full table-auto bg-white">
          <thead className="bg-indigo-700 text-white">
            <tr>
              <th className="py-2">Nom</th>
              <th className="py-2">Email</th>
              <th className="py-2">Accions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {clients.map((client) => (
              <Client key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-3 text-center">No hi ha clients</p>
      )}
    </>
  );
};

export default Index;
