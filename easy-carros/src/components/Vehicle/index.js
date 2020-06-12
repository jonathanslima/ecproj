import React, { useState } from "react";
import { MdAdd, MdCancel } from "react-icons/md";
import "./style.scss";

import Warning from "../Warning";

function Vehicle() {
  const [msg, setMessage] = useState();

  function registerPlate() {
    const plate = document.querySelector("#plateInput").value;
    const msg = document.querySelector(".bg-danger").classList;
    console.log("plate", plate);

    if (invalidPlate(plate)) {
      msg.remove("warning-msg");
      msg.add("warning-msg-show");
    } else {
      msg.remove("warning-msg-show");
      msg.add("warning-msg");
    }
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
    // console.log(e.currentTarget);
  }

  return (
    <main>
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
              <li className="list-group-item">
                <span>Cras justo odio</span>{" "}
                <i className="remove" onClick={removePlate}>
                  <MdCancel />
                </i>
              </li>
              <li className="list-group-item">
                <span>Dapibus ac facilisis in</span>{" "}
                <i className="remove" onClick={removePlate}>
                  <MdCancel />
                </i>
              </li>
              <li className="list-group-item">
                <span>Morbi leo risus</span>{" "}
                <i className="remove" onClick={removePlate}>
                  <MdCancel />
                </i>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Vehicle;
