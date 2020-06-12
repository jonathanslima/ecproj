import React, {useState} from 'react';
import { MdAdd, MdCancel } from 'react-icons/md';
import './style.scss';

function Vehicle() {
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
								<input type="text" className="plate form-control" placeholder="placa" aria-label="placa" aria-describedby="button-addon2" />
								<div className="input-group-append">
									<button className="btn" type="button" id="button-addon2"><MdAdd /></button>
								</div>
							</div>
						</div>
					</section>

					<section className="col-sm-12 col-md-6 offset-md-3 list-vehicle">
						<header>
							<h2 className="title">Veículos</h2>
						</header>

						<ul className="list-group list-group-flush">
							<li className="list-group-item"> <span>Cras justo odio</span> <MdCancel /> </li>
							<li className="list-group-item"> <span>Dapibus ac facilisis in</span> <MdCancel /> </li>
							<li className="list-group-item"> <span>Morbi leo risus</span> <MdCancel /> </li>
						</ul>
					</section>
				</div>
			</div>
		</main>
	);
}

export default Vehicle;