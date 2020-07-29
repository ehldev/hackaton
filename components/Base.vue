<template>
  <div id="base" class="base bg-blue">
    <div class="container">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <h2 class="text-warning text-center base__subtitle">Bases del concurso</h2>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-12 bg-blue-dark p-4">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="lead font-weight-bold text-white">¿Cómo participar?</h3>

            <a href="https://www.promperu.gob.pe/TurismoIN/sitio/Hackathon2019" target="_blank" class="base__button text-decoration-nones">Descargar las bases</a>
          </div>

          <div class="text-white mt-5">
            <p class="mt-1 mb-3">
              Los participantes se sujetarán a las siguientes condiciones:
            </p>

            <p class="d-flex">
              <span>a)</span>
              <span class="ml-2">Constituir equipos multidisciplinarios con 04 integrantes.</span>
            </p>

            <div class="d-flex">
              <span>b)</span>
              <p class="ml-2">
                Cada equipo debe designar a un representante, siendo este el responsable de todas las comunicaciones entre su equipo y los organizadores.
              </p>
            </div>


            <div class="d-flex">
              <span>c)</span>
              <p class="ml-2">
                El equipo a constituir debe contar con un especialista en programación, desarrollo de hardware o software para poder viabilizar el prototipo. En adición a ello, diseñadores, especialistas en negocios y en ciencias de la ingeniería relacionadas con las áreas estratégicas indicadas, perfiles recomendables para la conformación de un equipo multidisciplinario.
              </p>
            </div>

            <div class="d-flex">
              <span>d)</span>
              <p class="ml-2">
                Todos los miembros del equipo deben estar presentes en el evento.
              </p>
            </div>

            <div class="d-flex">
              <span>e)</span>
              <p class="ml-2">
                Al final del evento, los equipos deberán presentar la solución desarrollada de acuerdo con lo establecido en las presentes bases.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
.base {
  padding: 6rem 0;

  &__subtitle {
    display: inline-block;
    position: relative;

    &::before {
      content: '';

      width: 50%;
      height: 2px;

      background-color: rgba(white, .7);

      margin: auto;

      position: absolute;
      bottom: -1rem;
      right: 0;
      left: 0;
    }

  }

  &__button {
    background-color: rgba($warning, .9);

    color: $dark;

    font-weight: 700;

    display: inline-block;

    padding: .5rem 1rem;
    border: 0;
    border-radius: 2rem;

    transform: scale(0.95);

    transition: transform .5s;

    &:hover {
      background-color: $warning;

      color: $dark;

      text-decoration: none;

      transform: scale(0.9);
    }
  }
}
</style>
