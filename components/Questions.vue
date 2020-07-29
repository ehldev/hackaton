<template>
  <div id="questions" class="questions text-white position-relative">
   <div class="container">
     <div class="row">
       <div class="col-md-12 text-center">
         <h2 class="text-warning questions__subtitle title-with-border">Preguntas</h2>
       </div>
     </div>

     <div class="row questions__info">
       <div class="col-lg-5">
         <h3 class="questions__info-subtitle ml-4 ml-lg-0">Qué es ?</h3>

         <p class="my-3">
           La Hackathon Virtual #NosotrosProponemos busca reunir lo mejor del talento y la creatividad para plantear soluciones digitales a los problemas que afronta la educación virtual en el nivel de primaria y la reactivación económica del emporio comercial de Gamarra.
         </p>

         <p class="my-3">
           Invitamos a la participación de múltiples equipos, los cuales deben estar conformados por cuatro integrantes siendo uno de estos el coordinador del equipo. Además, contaremos con un equipo de jurados especialistas.
         </p>

         <p class="my-3">
           La Hackathon Virtual #NosotrosProponemos está dirigida al público en general. No pierdas la oportunidad de mostrarle al mundo tu talento.
         </p>
       </div>

       <div class="col-lg-7 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
         <img src="/questions.png" alt="Imagen de preguntas" class="img-fluid questions__image">
       </div>

     </div>
   </div>

    <img src="/rectangulo-azul.png" alt="" class="rectangulo-azul">
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .questions {
    padding: 6rem 0;

    &__subtitle {
      display: inline-block;
      position: relative;
    }

    &__info {
      margin-top: 6rem;
    }

    &__info-subtitle {
      font-size: 2em;
    }

    p {
      text-align: justify;
      width: 90%;

      margin: 0 auto;

      @media (min-width: 992px) {
        margin: 0;
      }
    }

    .rectangulo-azul {
      position: absolute;
      top: 0;
      right: -20rem;

      @media (min-width: 992px) {
        top: 0;
        right: -5vw;
      }
    }

    &__image {
      animation: jump_low-data 2s infinite;
    }
  }
</style>
