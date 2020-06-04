import React, { useEffect, useState } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";
import api from "../../services/api";

const CreatePoint = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("items").then((response) => {
      setItems(response.data.items);
    });
  }, []);

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Home
        </Link>
      </header>

      <form>
        <h1>Cadastro do ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="name">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="name">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o Endereço no mapa</span>
          </legend>
        </fieldset>

        <Map center={[-22.9704866, -43.1880237]} zoom={15}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[-22.9704866, -43.1880237]} />
        </Map>

        <div className="field-group">
          <div className="field">
            <label htmlFor="uf">Estado (UF)</label>
            <select name="uf" id="uf">
              <option value="0">Selecione uma UF</option>
            </select>
            <div className="field">
              <label htmlFor="uf">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
              </select>
            </div>
          </div>
        </div>
        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>
        </fieldset>

        <ul className="items-grid">
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.imgUrl} alt={item.title} />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>

        <button type="submit">Cadastra ponto de Coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
