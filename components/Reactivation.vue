<template>
  <div id="reactivation" class="reactivation bg-blue text-white">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="/trazado-106.png" alt="" class="trazado-106">

          <div class="reactivation__content">
            <h2 class="text-warning reactivation__subtitle ml-4 ml-lg-0">Reactivación económica:</h2>
            <h3 class="text-warning ml-4 ml-lg-0">Gamarra</h3>

            <div class="education__description mt-3 p-4">
              <p class="my-0">
                Después de  tres meses de paralización, el emporio comercial de Gamarra ha reabierto sus puertas y está enfrentándose a los problemas de recesión, el incumplimiento de los protocolos de seguridad y las medidas sanitarias, y la informalidad. Por este motivo, desafiamos a los participantes a explotar toda su creatividad para brindar soluciones disruptivas a este emporio comercial nacional de gran importancia para todos los peruanos.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 mt-5 mt-lg-0">
          <img src="/reactivacion.png" alt="Reactivación económica: Gamarra" class="img-fluid mt-lg-5 reactivation__image">
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
.reactivation {
  padding: 7rem 0;

  &__subtitle {
    font-size: 1.8em;
  }

  .trazado-106 {
    height: 30vw;

    position: absolute;
    bottom: 90%;
    left: -5vw;

    @media (min-width: 992px) {
      height: 17vw;

      bottom: 90%;
      left: -15vw;
    }
  }

  &__content {
    position: relative;
    z-index: 100;
  }

  &__image {
    animation: jump_low-data 2s infinite;
  }
}
</style>
