<template>
  <div id="challenges" class="challenges text-white position-relative">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h2 class="challenges__subtitle d-inline-block text-warning position-relative ml-4 ml-lg-0">
            Desafíos

            <img src="/rectangulo-rojo.png" alt="" class="rectangulo-rojo">
          </h2>

          <div class="challenges__description mt-3 p-4">
            <p class="my-0">
              Buscamos que durante la Hackathon Virtual #NosotrosProponemos se desarrollen propuestas tecnológicas que resuelvan los retos planteados, los cuales podrán ser resueltos por los equipos participantes mediante el desarrollo de prototipos, aplicaciones tecnológicas relevantes e innovadoras. Buscamos desarrollar soluciones tecnológicas útiles y orientadas a la solución de un problema o generación de una oportunidad de mejora en algunos de los siguientes desafíos:
            </p>
          </div>
        </div>

        <div class="col-lg-6 d-flex justify-content-center mt-5 mt-lg-4">
          <img src="/retos.png" alt="Desafíos" class="challenges__image">
        </div>
      </div>
    </div>

    <img src="/planet-lg.png" alt="Planeta desafío" class="planet-lg">
    <img src="/planet-lg.png" alt="Planeta desafío" class="planet-sm">
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
.challenges {
  background: transparent linear-gradient(166deg, #2A135B 0%, #000653 100%) 0% 0% no-repeat padding-box;
  padding: 7rem 0;

  &__subtitle {
    font-size: 2.2em;
  }

  &__description {
    width: 90%;
    margin: 0 auto;

    background-color: #0E0848;

    @media (min-width: 992px) {
      margin: 0;
    }
  }

  &__image {
    max-width: 85%;

    animation: jump_low-data 2s infinite;
  }

  .rectangulo-rojo {
    position: absolute;
    width: 20vw;

    bottom: .5rem;
    right: -25vw;

    @media (min-width: 992px) {
      bottom: .5rem;
      right: -21vw;
    }

  }

  .planet-lg {
    width: 15vw;

    position: absolute;
    top: -1rem;
    right: 15vw;

    @media (min-width: 768px) {
      top: -3rem;
    }

    @media (min-width: 992px) {
      width: 7vw;
      bottom: .5rem;
      right: 10vw;
    }
  }

  .planet-sm {
    width: 10vw;

    position: absolute;
    top: 3rem;
    right: 8vw;


    @media (min-width: 992px) {
      width: 4vw;

      top: 2rem;
      right: 5vw;
    }
  }
}
</style>
