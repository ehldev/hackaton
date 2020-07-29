<template>
  <div id="horary" class="horary bg-blue text-white">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="text-warning questions__subtitle title-with-border">Calendario</h2>
        </div>
      </div>

      <div class="row mt-5 justify-content-center">
        <div class="col-md-4 px-5 point d-flex flex-column flex-lg-row justify-content-center align-items-start position-relative">
          <img src="/rectangulo-azul.png" alt="" class="horary__figure-1">

          <h3 class="lead">22 de Julio</h3>

          <span class="w-70">Inscripciones</span>
        </div>
        <div class="col-md-4 px-5 justify-content-center d-none d-lg-flex">
          <h3 class="lead w-70">Inscripciones</h3>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-4 px-5 point d-flex flex-column flex-lg-row justify-content-center align-items-start">
          <h3 class="lead">22 de Julio</h3>

          <span class="w-70">Publicación de equipos inscritos</span>
        </div>
        <div class="col-md-4 px-5 justify-content-center d-none d-lg-flex">
          <h3 class="lead w-70">Publicación de equipos inscritos</h3>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-4 px-5 point d-flex flex-column flex-lg-row justify-content-center align-items-start">
          <h3 class="lead">22 de Julio</h3>

          <span class="w-70">Mentorias</span>
        </div>
        <div class="col-md-4 px-5 justify-content-center d-none d-lg-flex">
          <h3 class="lead w-70">Mentorias</h3>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-4 px-5 point d-flex flex-column flex-lg-row justify-content-center align-items-start">
          <h3 class="lead">22 de Julio</h3>

          <span class="w-70">Desarrollo de Hackaton</span>
        </div>
        <div class="col-md-4 px-5 justify-content-center d-none d-lg-flex">
          <h3 class="lead w-70">Desarrollo de Hackaton</h3>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-4 px-5 point d-flex flex-column flex-lg-row justify-content-center align-items-start">
          <h3 class="lead">22 de Julio</h3>

          <span class="w-70">Presentación de prototipos</span>
        </div>
        <div class="col-md-4 px-5 justify-content-center d-none d-lg-flex">
          <h3 class="lead w-70">Presentación de prototipos</h3>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-4 px-5 point point--no-border d-flex flex-column flex-lg-row justify-content-center align-items-start">
          <h3 class="lead">22 de Julio</h3>

          <span class="w-70">Premiación</span>
        </div>
        <div class="col-md-4 px-5 justify-content-center d-none d-lg-flex">
          <h3 class="lead w-70">Premiación</h3>

          <img src="/rectangulo-rojo.png" alt="" class="horary__figure-2">
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
.horary {
  background-image: url("/trazado-28.png");
  background-position: center left -15vw;
  background-repeat: no-repeat;

  padding: 6rem 0;

  .w-70 {
    width: 70%;
  }

  .col-md-4 {
    width: 60%;
    min-height: 100px;

    @media (min-width: 768px) {
      min-height: 120px;
    }

    @media (min-width: 992px) {
      width: auto;

      min-height: 70px;
    }
  }

  &__figure-1 {
    height: 10vw;

    position: absolute;
    bottom: 60%;
    left: -10vw;

    @media (min-width: 992px) {
      height: 6vw;

      top: -80%;
      left: -5vw;
    }
  }

  &__figure-2 {
    height: 10vw;

    position: absolute;
    top: 0;
    left: 5vw;

    @media (min-width: 992px) {
      height: 6vw;

      top: -20%;
      left: 10vw;
    }
  }
}

.point {
  position: relative;

  border-right: 4px solid $warning;

  &::before {
    content: '';

    background-color: white;

    width: 30px;
    height: 30px;

    border-radius: 50%;

    position: absolute;
    top: -.5rem;
    right: -1rem;
  }

  &--no-border {
    border-right-color: transparent;
  }
}
</style>
