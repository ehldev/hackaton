<template>
  <div id="education" class="education text-white">
    <div class="container">
      <div class="row">
        <div class="col-md-6 position-relative">
          <img src="/educacion.png" alt="Hackaton educación" class="img-fluid education__image">

          <img src="/rectangulo-azul.png" alt="" class="education__figure">
        </div>

        <div class="col-md-6 text-left mt-5 mt-lg-0">
          <h2 class="text-warning education__subtitle mt-3 ml-4 ml-lg-0">Educación Primaria</h2>

          <div class="education__description mt-3 p-4">
            <p class="my-0">
              A raíz de la crisis de la Covid-19, los centros educativos se han visto obligados a cerrar, desencadenando el aumento de las desigualdades educativas entre el alumnado y la necesidad de la virtualización de la educación. Busquemos soluciones innovadoras, creativas y tecnologías que tengan como objetivo preservar la calidad, integridad y eficiencia de la enseñanza brindada hacia los estudiantes.
            </p>
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
.education {
  background-color: #000653;

  padding: 6rem 0;

  &__description {
    width: 90%;
    margin: 0 auto;

    background-color: #0E0848;

    @media (min-width: 992px) {
      width: 85%;

      margin: 0;
    }
  }

  &__image {
    animation: jump_low-data 2s infinite;
  }

  &__figure {
    height: 10vw;

    position: absolute;
    top: -10vw;
    left: 85%;
  }
}
</style>
