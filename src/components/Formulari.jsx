import React from 'react';

const Formulari = ({ client }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-indigo-800" htmlFor="nom">
          Nom:
        </label>
        <input
          id="nom"
          type="text"
          className="mt-2 block w-full bg-gray-50 p-3 focus:border-indigo-500"
          placeholder="Nom del Client"
          name="nom"
          defaultValue={client?.nom}
        />
      </div>
      <div className="mb-4">
        <label className="text-indigo-800" htmlFor="empresa">
          Empresa:
        </label>
        <input
          id="empresa"
          type="text"
          className="mt-2 block w-full bg-gray-50 p-3 focus:border-indigo-500"
          placeholder="Empresa del Client"
          name="empresa"
          defaultValue={client?.empresa}
        />
      </div>

      <div className="mb-4">
        <label className="text-indigo-800" htmlFor="email">
          Correu electrònic:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full bg-gray-50 p-3 focus:border-indigo-500"
          placeholder="Correu electrònic del Client"
          name="email"
          defaultValue={client?.email}
        />
      </div>

      <div className="mb-4">
        <label className="text-indigo-800" htmlFor="telefon">
          Telèfon:
        </label>
        <input
          id="telefon"
          type="tel"
          className="mt-2 block w-full bg-gray-50 p-3 focus:border-indigo-500"
          placeholder="Telèfon del Client"
          name="telefon"
          defaultValue={client?.telefon}
        />
      </div>

      <div className="mb-4">
        <label className="text-indigo-800" htmlFor="notes">
          Notes:
        </label>
        <textarea
          as="textarea"
          id="notes"
          type="text"
          className="align-self mt-2 block h-40 w-full bg-gray-50 p-3 focus:border-indigo-500"
          placeholder="Notes del Client"
          name="notes"
          defaultValue={client?.notes}
        />
      </div>
    </>
  );
};

export default Formulari;
