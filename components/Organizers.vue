<template>
  <section id="organizers" class="organizers bg-blue">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-warning questions__subtitle title-with-border">Organizadores</h2>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-md-3">

          <div class="card border-0 rounded-0">
            <div class="card-body">
              <img src="/fisi.png" alt="Logo Fisi" class="organizers__image">

              <!-- <h3 class="organizers__subtitle mt-5">BUDJETING</h3> -->

              <p class="text-muted mt-3">
                Alumnos del curso de Marketing- G3 y Diseño de Aplicaciones Web -G1 2020.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-3 mt-5 mt-lg-0">

          <div class="card border-0 rounded-0">
            <div class="card-body">
              <img src="/fisi.png" alt="Logo Fisi" class="organizers__image">

              <!-- <h3 class="organizers__subtitle mt-5">BUDJETING</h3> -->

              <p class="text-muted mt-3">
                Docente Marlene Reyes Huamán.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
.organizers {
  padding: 6rem 0;

  .card {
    min-height: 100%;
  }

  &__image {
    max-width: 60%;

    @media (min-width: 992px) {
      max-width: 80%;
    }
  }

  &__subtitle {
    font-size: 1.5em;
  }
}
</style>
