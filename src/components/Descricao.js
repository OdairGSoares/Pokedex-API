import { React, useState } from "react";
import { pegar_descricao_pokemon } from "../services/Get_Pokemon";

export default function Descricao(props) {
  const [descricao, setDescricao] = useState("");

  async function procurar_descricao(pokemon_id) {
    setDescricao("");
    setDescricao(await pegar_descricao_pokemon(pokemon_id));
  }

  return (
    <div className="row mt-5">
      <div className="col mb-5">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => {
            procurar_descricao(props.id);
          }}
        >
          Description
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Pokemon Description
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">{descricao ? descricao : 'Not Found'}</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
