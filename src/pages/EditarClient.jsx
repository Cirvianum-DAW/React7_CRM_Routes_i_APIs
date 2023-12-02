import React from 'react';
import {
  Form,
  useNavigate,
  useLoaderData,
  useActionData,
  redirect,
} from 'react-router-dom';
import Formulari from '../components/Formulari';
import { obtenirClient, actualitzarClient } from '../data/Clients';
import Error from '../components/Error';

export const loader = async ({ params }) => {
  const client = await obtenirClient(params.clientID);
  if (Object.values(client).length === 0) {
    throw new Response('', { status: 404, statusText: 'No hi ha resultats' });
  }
  return client;
};

export const action = async ({ request, params }) => {
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

  // Actualitzar el client
  await actualitzarClient(params.clientID, dades);
  return redirect('/');
};

const EditarClient = () => {
  const navigate = useNavigate();
  const client = useLoaderData();
  const errors = useActionData();
  return (
    <>
      <h1 className="mb-2 text-center text-3xl font-black text-amber-500">
        Editar Client
      </h1>
      <p className="text-bold mt-3 text-center text-2xl">
        Pots modificar les dades del client
      </p>
      <div className="flex justify-end">
        <button
          className="my-5 rounded bg-amber-200 px-3 py-1 font-bold text-black hover:bg-amber-300"
          onClick={() => navigate(-1)}
        >
          Tornar
        </button>
      </div>

      <div className=" mx-auto rounded-md bg-white px-5 py-10 shadow md:w-3/4">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error.text}</Error>)}
        <Form method="post" noValidate>
          <Formulari client={client} />
          <input
            type="submit"
            className="mt-2 w-full rounded-md bg-amber-200 p-2 font-bold uppercase text-black hover:bg-amber-300"
            value="Modificar el Client"
          />
        </Form>
      </div>
    </>
  );
};

export default EditarClient;
