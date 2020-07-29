<template>
  <footer class="footer bg-blue-dark">
    <div class="container">
      <div class="row">
        <div class="col-md-4 px-lg-4 text-center text-lg-left">
          <h2 class="footer__subtitle text-info">Enlaces</h2>

          <section class="d-flex flex-column flex-lg-row justify-content-between mt-3">
            <div class="d-flex flex-column">
              <nuxt-link to="/" class="footer__link">Home</nuxt-link>
              <nuxt-link to="/" class="footer__link">Preguntas</nuxt-link>
              <nuxt-link to="/" class="footer__link">Desafíos</nuxt-link>
            </div>

            <div class="d-flex flex-column">
              <nuxt-link to="/" class="footer__link">Calendario</nuxt-link>
              <nuxt-link to="/" class="footer__link">Bases del concurso</nuxt-link>
            </div>
          </section>
        </div>

        <div class="col-md-4 d-flex justify-content-center px-lg-4 my-5 my-lg-0">
          <img src="/footer.png" alt="Footer hackaton" class="footer__image">
        </div>

        <div class="col-md-4 px-lg-4 text-center text-lg-left">
          <h2 class="footer__subtitle text-info">Contáctanos</h2>

          <section class="d-flex flex-column flex-lg-row justify-content-between mt-3">
            <div class="d-flex flex-column">
              <nuxt-link to="/" class="footer__link">999 999 999</nuxt-link>
              <a href="mailto:contacto@fisi.com" class="footer__link">
                contacto@fisi.com
              </a>
              <a href="mailto:contacto@fisi.com" class="footer__link">
                contacto@hackaton.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
.footer {
  padding: 5rem 0;

  &__subtitle {
    font-size: 1.3em;
  }

  &__link {
    font-size: 1.1em;

    color: rgba(white, .7);

    margin: .5rem 0;

    transition: color .7s;

    &:hover {
      color: white;
      text-decoration: none;
    }

  }

  &__image {
    max-width: 70%;
  }
}
</style>
