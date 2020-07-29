<template>
  <div>
    <main id="inicio" class="bg-purple">
      <header-app></header-app>

      <section class="banner text-white pt-4 pb-5">
        <div class="container">
          <div class="row">

            <div class="col-md-6">
              <div class="banner__info mt-lg-5">
                <h1 class="banner__title font-weight-bold mt-5 mt-lg-3">HACKATON 2020</h1>

                <h2 class="banner__subtitle text-warning font-weight-bold">#NosotrosProponemos</h2>

                <p class="mt-4 mb-0">Inicio de Hackaton: 4 setiembre 2020</p>

                <p class="my-0">
                  La UNMSM por medio de la Facultad de Ingeniería de Sistemas e Informática organiza la Hackathon Virtual #NosotrosProponemos, con la finalidad de aportar al país con propuestas para los dos siguientes temas: Educación Virtual en el nivel de primaria y la Reactivación Económica en el emporio comercial de Gamarra.
                </p>

                <div class="contador d-flex mt-3 text-center">
                  <div class="d-flex flex-column">
                    <span class="date font-weight-bold">{{ days }} :</span>
                    <span class="font-weight-bold">días</span>
                  </div>

                  <div class="d-flex flex-column pl-2">
                    <span class="date font-weight-bold">{{ hours }} :</span>
                    <span class="font-weight-bold">horas</span>
                  </div>

                  <div class="d-flex flex-column pl-2">
                    <span class="date font-weight-bold">{{ minutes }} :</span>
                    <span class="font-weight-bold">minutos</span>
                  </div>

                  <div class="d-flex flex-column">
                    <span class="date font-weight-bold">{{ seconds }}</span>
                    <span class="font-weight-bold pl-2">seg</span>
                  </div>

                </div>
              </div>
            </div>

            <div class="col-md-6 second-column d-flex justify-content-end align-items-start mt-5 mt-lg-0">
              <a href="https://www.promperu.gob.pe/TurismoIN/sitio/Hackathon2019" target="_blank" class="banner__button mt-4 mt-lg-0 mr-3 mr-lg-0 text-decoration-none">Inscríbete Aquí</a>
            </div>
          </div>
        </div>
      </section>

      <questions></questions>

      <challenges></challenges>

      <education></education>

      <reactivation></reactivation>

      <horary></horary>

      <base-app></base-app>

      <organizers></organizers>

      <footer-app></footer-app>
    </main>
  </div>
</template>

<script>
  import HeaderApp from '@/components/Header'
  import Questions from '@/components/Questions'
  import Challenges from '@/components/Challenges'
  import Education from '@/components/Education'
  import Reactivation from '@/components/Reactivation'
  import Horary from '@/components/Horary'
  import BaseApp from '@/components/Base'
  import Organizers from '@/components/Organizers'
  import FooterApp from '@/components/Footer'

export default {
    data() {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    },
    mounted() {
      this.countdown('Sep 04 2020 17:00:00 GMT-0500')
    },
    head() {
      return {
        title: 'Hackaton virtual'
      }
    },
  components: {
      HeaderApp,
      Questions,
      Challenges,
      Education,
      Horary,
      Reactivation,
      BaseApp,
      Organizers,
      FooterApp
    },
    methods: {
      getRemainingTime(deadline) {
        let now = new Date(),
          remainTime = (new Date(deadline) - now + 1000) / 1000,
          remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
          remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
          remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
          remainDays = Math.floor(remainTime / (3600 * 24));

        return {
          remainSeconds,
          remainMinutes,
          remainHours,
          remainDays,
          remainTime
        }
      },
      countdown(deadline) {
        const timerUpdate = setInterval( () => {
          let t = this.getRemainingTime(deadline);

          if(t.remainTime <= 1) {
            clearInterval(timerUpdate);
          }

          this.days = t.remainDays
          this.hours = t.remainHours
          this.minutes = t.remainMinutes
          this.seconds = t.remainSeconds



        }, 1000)
      }
    }
}
</script>

<style lang="scss">
  main {
    overflow: hidden;
  }

  .banner {
    height: max-content;

    margin-top: 12vh;

    @media (min-width: 400px) {
      margin-top: 14vh;
    }

    @media (min-width: 992px) {
      margin-top: 13vh;
    }

    @media (min-width: 1024px) {
      background-image: url("/banner.png");
      background-position: top right;
      background-size: cover;
    }

    @media (min-width: 1200px) {
      margin-top: 25vh;
      height: 75vh;
    }

    &__title {
      font-size: 2em;

      @media (min-width: 992px) {
        font-size: 2.5em;
      }
    }

    &__subtitle {
      font-size: 1.5em;

      @media (min-width: 992px) {
        font-size: 2.2em;
      }
    }

    &__info {
      max-width: 90%;
      margin: 0 auto;

      @media (min-width: 1024px) {
        margin: 0;
      }

      p {
        color: rgba(white, .9);

        text-align: justify;
      }
    }

    &__button {
      background-color: rgba($warning, .9);
      color: rgba(#27125A, .95);

      font-size: 1.3em;
      font-weight: 700;

      display: inline-block;

      padding: .7rem 1rem;
      border: none;
      border-radius: 2rem;

      animation: jump_low-data 2s infinite;

      &:hover {
        color: #27125A;
      }

      @media (min-width: 992px) {
        padding: .7rem 2rem;
      }
    }

    .second-column {
      min-height: 250px;

      background-image: url("/banner.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      @media (min-width: 1024px) {
        background: none;
        min-height: auto;
        height: auto;
      }
    }
  }

  .contador {

    .date {
      font-size: 1.5em;
    }
  }
</style>
