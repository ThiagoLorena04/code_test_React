import React from 'react'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Input } from './components/Form/Input';
import { Select } from './components/Select/Select';

function App() {
  return(
    <div>
      <FormularioCadastro/>   
      <Input id="nome" label="Nome"/> 
      <Input id="email" label="Email" /> 
      <Select options={["Smartphone", "Notebook"]}/>
    </div>
  )
}



export default App;
