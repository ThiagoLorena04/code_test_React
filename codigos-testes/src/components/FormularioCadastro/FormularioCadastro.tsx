import React from "react";

interface FormularioCadastroProps {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  titulo?: string;
}

interface FormData {
  nome: string;
  email: string;
  senha: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

function FormularioCadastro({ 
  onSuccess, 
  onError, 
  titulo = "Cadastro de usuário" 
}: FormularioCadastroProps) {
  const [form, setForm] = React.useState<FormData>({
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

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [target.name]: target.value });
  }

  async function handleSubmit(event: React.FormEvent) {
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
        
        // Callback de sucesso personalizado
        if (onSuccess) {
          onSuccess(data);
        }
        
        // Limpa o formulário após sucesso
        setForm({
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
      } else {
        console.log("Erro ao cadastrar usuário", data);
        alert("Erro ao cadastrar usuário");
        
        if (onError) {
          onError(data);
        }
      } 
    } catch (error) {
      console.log("Erro ao cadastrar usuário", error);
      alert("Erro ao cadastrar usuário");
      
      if (onError) {
        onError(error);
      }
    }
  }
   
  return (
    <div>
      <h1>{titulo}</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="nome" 
          value={form.nome} 
          placeholder="Nome"
          onChange={handleChange}
          required
        />

        <input 
          type="email" 
          name="email" 
          value={form.email} 
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input 
          type="password" 
          name="senha" 
          value={form.senha} 
          placeholder="Senha"
          onChange={handleChange}
          required
        />

        <input 
          type="text" 
          name="cep" 
          value={form.cep} 
          placeholder="CEP"
          onChange={handleChange}
          required
        />

        <input 
          type="text"
          name="rua"
          placeholder="Rua"
          value={form.rua}
          onChange={handleChange}
          required
        />
      
        <input 
          type="text"
          name="numero"
          placeholder="Número"
          value={form.numero}
          onChange={handleChange}
          required
        />
        
        <input 
          type="text"
          name="bairro"
          placeholder="Bairro"
          value={form.bairro}
          onChange={handleChange}
          required
        />
        
        <input 
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={form.cidade}
          onChange={handleChange}
          required
        />
        
        <input 
          type="text"
          name="estado"
          placeholder="Estado"
          value={form.estado}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioCadastro;