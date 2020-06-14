import React, { useState, useEffect } from "react";
import { MdAdd, MdCancel } from "react-icons/md";
import { Redirect } from 'react-router-dom';
import "./style.scss";

import api from '../../../src/services/api';

import Warning from "../Warning";

function Vehicle() {
  const [msg, setMessage] = useState();
  const [vehicle, setVehicle] = useState('');
  const [hasPlate, setHasPlate] = useState(0);

  const callPlates = async ()=>{
    const apiCall = await api.get('/vehicle', {
      headers: { authorization: `Bearer ${sessionStorage.getItem('token')}`}
    });
    setVehicle(apiCall.data.data)
  }

  useEffect(()=>{
    callPlates();
  }, [hasPlate])

  function registerPlate() {
    const plate = document.querySelector("#plateInput").value;
    const msg = document.querySelector(".bg-danger").classList;
    
    if (invalidPlate(plate)) {
      msg.remove("warning-msg");
      msg.add("warning-msg-show");
      return
    }
    const data = { "plate": plate };
    msg.remove("warning-msg-show");
    msg.add("warning-msg");

    api.post('/vehicle', data, {
      headers: { 
        "authorization": `Bearer ${sessionStorage.getItem('token')}`,
        "Content-Type": "application/json"
      }
    })
    .then((res)=>{ 
      document.querySelector('#plateInput').value = '';
      setVehicle(res.data.data)})
    .then(()=>{ callPlates() })
    .catch(()=>{
      alert('Ocorreu algum problema no servidor, tente novamente mais tarde')
    })
  }

  function invalidPlate(plate) {
    const hasEspecialChar = /[^a-zA-Z0-9 ]/;
    if (hasEspecialChar.test(plate)) {
      setMessage("Só são permitidos letras e números");
      return true;
    }

    if (plate.length !== 7) {
      setMessage("Favor colocar uma placa alfanumérica com 7 caracteres");
      return true;
    }
  }

  function removePlate(e) {
    const id = e.currentTarget.id;
    const wantErase = window.confirm('Deseja apagar a placa?')

    if(wantErase){
      api.delete(`/vehicle/${id}`, {
        headers: { 
          "authorization": `Bearer ${sessionStorage.getItem('token')}`,
          "Content-Type": "application/json"
        }
      }).then(res => { callPlates() })
      .catch(()=> {
        alert('Ocorreu algum problema no servidor, tente novamente mais tarde')
      })
    }
  }

  return (
    <main>
      {
        sessionStorage.getItem('token').length < 1 ? <Redirect to="/" /> : null
      }
      <div className="container">
        <div className="row">
          <section className="col-sm-12 col-md-6 offset-md-3 add-vehicle">
            <header>
              <h2 className="title">Adicionar novo veículo</h2>
            </header>

            <div className="car-license-plate">
              <div className="input-group mb-3">
                <input
                  id="plateInput"
                  type="text"
                  className="plate form-control"
                  placeholder="placa"
                  aria-label="digitar valor para cadastrar placa"
                  aria-describedby="digitar valor para cadastrar placa"
                  autoFocus
                />
                <div className="input-group-append">
                  <button
                    className="btn"
                    type="button"
                    id="registerPlate"
                    onClick={registerPlate}
                  >
                    <MdAdd />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Warning message={msg} />
            </div>
          </section>

          <section className="col-sm-12 col-md-6 offset-md-3 list-vehicle">
            <header>
              <h2 className="title">Veículos</h2>
            </header>

            <ul className="list-group list-group-flush">

              {
                vehicle.length > 0 ?
                vehicle.map((data, index) => {
                  return (
                    <li key={index} id={data.id} className="list-group-item">
                      <span>{data.plate}</span>
                      <i id={data.id} className="remove" onClick={removePlate}>
                        <MdCancel />
                      </i>
                    </li>
                  )
                }) : 
                <li className="list-group-item no-plate">
                  Nenhuma placa cadastrada
                </li>
              }
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Vehicle;
