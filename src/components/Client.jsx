import React from 'react';
import { useNavigate, Form, redirect } from 'react-router-dom';
import { eliminarClient } from '../data/Clients';

export const action = async ({ params }) => {
  await eliminarClient(params.clientID);
  return redirect('/');
};

const Client = ({ client }) => {
  const navigate = useNavigate();
  const { nom, empresa, email, telefon, id } = client;
  // Tailwind tip: "space" va molt bé per separar tots els elements sense haver de fer-ho individualment!
  return (
    <tr className="border-b">
      <td className="space-y-2 p-6">
        <p className="text-2xl  text-gray-800">{nom}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-6">
        <p>
          <span className="font-bold uppercase text-gray-800">Email: </span>
          {email}
        </p>
        <p>
          <span className="font-bold uppercase text-gray-800">Telèfon: </span>
          {telefon}
        </p>
      </td>
      <td className="p-6">
        <div className="flex justify-center">
          <button
            type="button"
            className="grow-1 mr-2 flex items-center justify-center rounded bg-green-200 px-4 py-2 text-xs font-bold uppercase text-green-800"
            onClick={() => navigate(`/clients/${id}/editar`)}
          >
            Editar
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
          <Form
            method="post"
            action={`/clients/${id}/eliminar`}
            onSubmit={(e) => {
              if (!confirm('Desitges eliminar aquest client?')) {
                e.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="grow-1 flex items-center justify-center rounded bg-red-200 px-4 py-2 text-xs font-bold uppercase text-red-800"
            >
              Eliminar
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </Form>
        </div>
      </td>
    </tr>
  );
};

export default Client;
