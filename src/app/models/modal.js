import React, { useState } from 'react';
import 'public/style.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidTelefone, setIsValidTelefone] = useState(true);
    const [isValidCep, setIsValidCep] = useState(true);
  
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(email));
    };
  
    const validateCep = () => {
      const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
      setIsValidCep(cepRegex.test(cep));
    };

    const formatCep = (value) => {
        const cleanedValue = value.replace(/[^\d]/g, '');
        const cepRegex = /^(\d{5})(\d{3})$/;
        const formattedValue = cleanedValue.replace(cepRegex, '$1-$2');
        setCep(formattedValue);
      };
    
      const handleCepChange = (e) => {
        const { value } = e.target;
        formatCep(value);
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      validateEmail();
      validateTelefone();
      validateCep();
  
    if (isValidEmail && isValidTelefone && isValidCep) {
        
     }
    };
    if (!isOpen) {
        return null;
     }
  

  return (
    <div className="modal-container p-8 rounded-lg fixed inset-0 z-50">
  <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
    <div className="flex justify-end">
      <button className="close" onClick={onClose}>
        <AiOutlineCloseCircle className="h-6 w-6 text-gray-700 hover:text-white" />
      </button>
    </div>
    <h2 className="text-center text-2xl text-gray-700 mb-6 border-b ">Cadastro</h2>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block font-medium text-gray-700">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          className={`w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            !isValidEmail ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Digite seu e-mail"
          required
        />
        {!isValidEmail && (
          <p>E-mail inválido</p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block font-medium text-gray-700">Senha</label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Digite sua senha"
          required
        />
      </div>
      <div>
        <label htmlFor="repeat_password" className="block font-medium text-gray-700">Senha novamente</label>
        <input
          type="password"
          id="repeat_password"
          className="w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Digite sua senha novamente"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="first_name" className="block font-medium text-gray-700">Nome</label>
          <input
            type="text"
            id="first_name"
            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div>
          <label htmlFor="last_name" className="block font-medium text-gray-700">Sobrenome</label>
          <input
            type="text"
            id="last_name"
            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Digite seu sobrenome"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block font-medium text-gray-700">Telefone</label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            id="phone"
            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Digite seu telefone (ex: 83 98765-4321)"
            required
          />
        </div>
        <div>
          <label htmlFor="cep" className="block font-medium text-gray-700">Cep</label>
          <input
            type="text"
            value={cep}
            onChange={handleCepChange}
            onBlur={validateCep}
            id="cep"
            className={`w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
              !isValidCep ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Digite seu CEP (ex: 58.135-000)"
            required
          />
          {!isValidCep && (
            <p className="text-sm text-red-500">CEP inválido</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
      >
        Cadastrar
      </button>
    </form>
  </div>
</div>


  );
};

export default Modal;
