import React from 'react'

function App() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: "", 
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '', 
  });

  function handleChange({target}) {
    setForm({...form, [target.name]: target.value});
  };

  async function handleSubmit(event) {
  event.preventDefault();

  try {
    const response = await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Sucesso, usuário criado", data);
      alert("Usuário cadastrado com sucesso!");
    } else {
      console.log("Erro ao cadastrar usuário", data);
      alert("Erro ao cadastrar usuário");
    } 
  } catch (error) {
    console.log("Erro ao cadastrar usuário", error);
    alert("Erro ao cadastrar usuário");
  }
} 
   
  return (
    <div>

      <h1>Cadastro de usuário.</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="nome" 
          value={form.nome} 
          placeholder="Nome"
          onChange={handleChange}
        />

          <input 
          type="email" 
          name="email" 
          value={form.email} 
          placeholder="email"
          onChange={handleChange}
        />

          <input 
          type="password" 
          name="senha" 
          value={form.senha} 
          placeholder="Senha"
          onChange={handleChange}
        />

          <input 
          type="text" 
          name="cep" 
          value={form.cep} 
          placeholder="CEP"
          onChange={handleChange}
        />

         <input 
        type="text"
        name="rua"
        placeholder="Rua"
        value={form.rua}
        onChange={handleChange}
      />
      
        <input 
          type="text"
          name="numero"
          placeholder="Número"
          value={form.numero}
          onChange={handleChange}
        />
        
        <input 
          type="text"
          name="bairro"
          placeholder="Bairro"
          value={form.bairro}
          onChange={handleChange}
        />
        
        <input 
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={form.cidade}
          onChange={handleChange}
        />
        
        <input 
          type="text"
          name="estado"
          placeholder="Estado"
          value={form.estado}
          onChange={handleChange}
        />

        <button type='submit'>Enviar</button>
      
      </form>
    </div>
  )
}



export default App;
