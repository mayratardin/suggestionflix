import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [valor, setValores] = useState(valoresIniciais);
  
  
    function setValor(chave, valor) {
      // chave: nome, descricao, bla, bli
      setValores({
        ...valor,
        [chave]: valor, // nome: 'valor'
      })
    }
  
    function handleChange(infosDoEvento) {
      setValor(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }
  
    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {valor.nome}</h1>
  
        <form onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([
              ...categorias,
              valor
            ]);
  
            setValores(valoresIniciais)
        }}>
  
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={valor.nome}
            onChange={handleChange}
          />
  
          <FormField
            label="Descrição"
            type="????"
            name="descricao"
            value={valor.descricao}
            onChange={handleChange}
          />
          {/* <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={valor.descricao}
                name="descricao"
                onChange={handleChange}
              />
            </label>
          </div> */}
  
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={valor.cor}
            onChange={handleChange}
          />
          {/* <div>
            <label>
              Cor:
              <input
                type="color"
                value={valor.cor}
                name="cor"
                onChange={handleChange}
              />
            </label>
          </div> */}
  
          <button>
            Cadastrar
          </button>
        </form>
        
  
        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>
  
        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
  }
  
  export default CadastroCategoria;