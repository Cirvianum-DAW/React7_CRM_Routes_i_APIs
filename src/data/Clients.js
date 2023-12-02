export const obtenirClients = async () => {
  const resposta = await fetch(import.meta.env.VITE_API_URL);
  const resultat = await resposta.json();
  return resultat;
};

export const obtenirClient = async (clientId) => {
  console.log(clientId);
  const resposta = await fetch(`${import.meta.env.VITE_API_URL}/${clientId}`);
  const resultat = await resposta.json();
  return resultat;
};

export const afegirClient = async (client) => {
  console.log(client);
  try {
    const resposta = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    });
    await resposta.json();
  } catch (error) {
    console.log(error);
  }
};

export const actualitzarClient = async (id, dades) => {
  const resposta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dades),
  });
  await resposta.json();
};

export const eliminarClient = async (id) => {
  const resposta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
    method: 'DELETE',
  });
  await resposta.json();
};
