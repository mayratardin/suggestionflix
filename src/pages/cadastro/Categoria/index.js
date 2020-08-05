import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Loader from '../../../components/carregando';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

const CadastroCategoria = () => {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const URL_VALUE = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias' : 'https://suggestionflix.herokuapp.com/categorias';

    // Valores dos campos do form
    fetch(URL_VALUE, {
      method: 'POST',
      body: JSON.stringify({
        titulo: values.titulo,
        descricao: values.descricao,
        cor: values.cor,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(async (res) => {
        const responseFieldValues = await res.json();
        setCategorias([...categorias, responseFieldValues]); // adicionando os novos valores no estado
        clearForm();
      });
  };

  useEffect(() => {
    const URL_VALUE = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias' : 'https://suggestionflix.herokuapp.com/categorias';

    fetch(URL_VALUE)
      .then(async (res) => {
        const responseReq = await res.json();

        setCategorias([
          ...responseReq,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

        <form onSubmit={handleSubmit} autoComplete="off">


          <FormField
            label="Nome"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

        <Button>
          Cadastrar
        </Button>
        </form>
        
        <br />

        {categorias.length === 0 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            margin: '40px 0',
          }}
          >
             <Loader />
            <div style={{ fontSize: '12px', color: '#fff', marginTop: '10px' }}>Aguarde, carregando categorias...</div>
          </div>
        )}
                  <tbody>
                    {categorias.map((category, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <tr key={index}>
                        <td>{category.titulo}</td>
                        <td style={{ display: 'flex' }}>
                          {}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  <br />

                  <Link to="/">
                           Ir para home
                  </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;