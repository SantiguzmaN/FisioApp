import React from 'react';
import '../../styles/patientProfile.css';
import { useEffect } from 'react';
import { useSearchState } from '../../store/searchProvider';
import { useState } from 'react';

const Patient = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState(1);
  const [cc, setCc] = useState('');
  const [email, setEmail] = useState('');
  const [rh, setRh] = useState('');
  const [eps, setEps] = useState('');
  const [movil, setMovil] = useState('');
  const [phone, setPhone] = useState('');
  const [allergies, setAllergies] = useState('');
  const [basePathology, setBasePathology] = useState('');
  const [companion, setCompanion] = useState('');
  const [companionMovil, setCompanionMovil] = useState('');
  const [photo, setPhoto] = useState('');

  const { user } = useSearchState();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setLastName(user.lastName);
      setSex(user.sex);
      setAge(user.age);
      setCc(user.cc);
      setEmail(user.email);
      setRh(user.rh);
      setEps(user.eps);
      setMovil(user.movil);
      setPhone(user.phone);
      setAllergies(user.allergies);
      setBasePathology(user.basePathology);
      setCompanion(user.companion);
      setCompanionMovil(user.companionMovil);
      setPhoto(user.photo);
    }
  }, [user]);

  return (
    <div>
      <div>Nombre: {name}</div>
      <div>Apellido: {lastName}</div>
      <div>Sexo: {sex}</div>
      <div>edad: {age}</div>
      <div>Cedula de ciudadania: {cc}</div>
      <div>E-mail: {email}</div>
      <div>Rh: {rh}</div>
      <div>Eps: {eps}</div>
      <div>Celular: {movil}</div>
      <div>Telefono fijo: {phone}</div>
      <div>Alergias: {allergies}</div>
      <div>Patologia base: {basePathology}</div>
      <div>Acompañante: {companion}</div>
      <div>Celular acompañante: {companionMovil}</div>
    </div>
  );
};

export default Patient;
