import React from 'react';
import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import Formulari from '../components/Formulari';
import Error from '../components/Error';
import { afegirClient } from '../data/Clients';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const dades = Object.fromEntries(formData.entries());
  const email = formData.get('email');

  // Validacions
  const errors = [];
  if (Object.values(dades).includes('')) {
    errors.push({ text: 'Tots els camps són obligatoris' });
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  if (!regex.test(email)) {
    errors.push({ text: 'El correu electrònic no és vàlid' });
  }

  // Reteornar errors en cas que hi hagin
  if (Object.keys(errors).length) {
    console.log('Hi ha errors');
    return errors;
  }

  // Si hem arribat fins aquí, és que hem superat la validació: Afegim el client
  // Aquesta pot demorar-se ja que estem fen una crida a la API (en aquest cas un POST)
  await afegirClient(dades);
  return redirect('/');
};

export const NouClient = () => {
  const errors = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="mb-2 text-center text-3xl font-black text-indigo-700">
        Nou Client
      </h1>
      <p className="text-bold mt-3 text-center text-2xl">
        Necessitem les teves dades! 🤓 Omple el formulari.
      </p>
      <div className="flex justify-end">
        <button
          className="my-5 rounded bg-indigo-700 px-3 py-1 font-bold text-white hover:bg-indigo-900"
          onClick={() => navigate(-1)}
        >
          Tornar
        </button>
      </div>

      <div className=" mx-auto rounded-md bg-white px-5 py-10 shadow md:w-3/4">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error.text}</Error>)}
        <Form method="post" noValidate>
          <Formulari />
          <input
            type="submit"
            className="mt-2 w-full rounded-md bg-indigo-700 p-2 font-bold uppercase text-white hover:bg-indigo-900"
            value="Registrar nou client"
          />
        </Form>
      </div>
    </>
  );
};

export default NouClient;
