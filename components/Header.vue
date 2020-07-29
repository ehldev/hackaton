<template>
  <header class="header pt-3 pt-lg-5 pb-2 fixed-top" :class="headerScroll ? 'bg-purple' : ''">
    <div class="header__container">
      <div class="logo-container mt-3 mt-lg-0">
        <img src="/logo-hackaton.png" alt="Logo Hackaton" class="logo">
      </div>

      <div class="hamburger-container pr-3 pr-lg-0">
        <button
          class="hamburger hamburger--vortex"
          :class="navActive ? 'is-active' : ''" type="button"
          @click="navActive = !navActive"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <nav
        class="main-nav d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start justify-content-lg-end"
        :class="navActive ? 'main-nav--active' : ''"
      >
        <a href="" class="main-nav__link" v-for="(item, index) in items" :key="index" :class="item.tag === currentSlide ? 'main-nav__link--active' : ''" @click.prevent="setCurrentSlide(item.tag, 'header')">{{ item.text }}</a>
      </nav>
    </div>
  </header>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        navActive: false,
        items: [
          {
            text: 'Home',
            tag: 'inicio'
          },
          {
            text: '¿Qué es?',
            tag: 'questions'
          },
          {
            text: 'Desafíos',
            tag: 'challenges'
          },
          {
            text: 'Calendario',
            tag: 'horary'
          },
          {
            text: 'Bases',
            tag: 'base'
          },
          {
            text: 'Organizadores',
            tag: 'organizers'
          }
        ],
        headerScroll: false
      }
    },
    mounted() {
      this.$nextTick(function(){
        let _this = this

        // Verifica si el usuario hizo scroll para mostrar el logo
        window.addEventListener("scroll", function(){
          if(document.documentElement.scrollTop >= 100) {
            _this.headerScroll = true
          }
          else {
            _this.headerScroll = false
          }

          _this.scrollSpy()

        })
      })
    },
    methods: {
      setCurrentSlide(value, type) {
        // Envía un commit para pintar el link
        this.$store.commit('setCurrentSlide', value)

        // Si la llamada al método viene del heaader
        if(type === 'header') {
          // Si no se hace uso de smoothScroll para ir al contenido
          let item = document.getElementById(value)

          this.$smoothScroll({
            scrollTo: item,
            offset: -80,
            updateHistory: false
          })
        }

        this.navActive = false
      },
      scrollSpy() {
        // Posición del scroll
        let wScroll = document.body.offsetHeight

        // Setear color a links según posición de scroll
        let questions = document.getElementById('questions')
        // Posición de questions
        let coordsQuestions = questions.getBoundingClientRect();

        // Setear color a links según posición de scroll
        let challenges = document.getElementById('challenges')
        // Posición de questions
        let coordsChallenges = challenges.getBoundingClientRect();

        if(wScroll > coordsQuestions.top) {
          this.setCurrentSlide('questions')
        } else if(wScroll <= coordsQuestions.top)  {
          this.setCurrentSlide('inicio')
        }

      }
    },
    computed: {
      ...mapState(['currentSlide'])
    }
  }
</script>

<style lang="scss">
  .header {

    &__container {
      max-width: 90%;
      margin: 0 auto;

      display: grid;

      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr max-content;

      @media (min-width: 992px) {
        max-width: 85%;

        grid-template-columns: max-content 1fr;
        grid-template-rows: 1fr;
      }

    }
  }

  .logo-container {
    grid-column: 1 / 2;
  }

  .logo {
    max-width: 40vw;

    @media (min-width: 768px) {
      max-width: 20vw;
    }

    @media (min-width: 992px) {
      max-width: 12vw;
    }
  }

  .hamburger-container {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    display: flex;
    justify-content: flex-end;

    @media (min-width: 992px) {
      display: none;
    }

    .hamburger {
      outline: none;
    }

    .hamburger-inner {
      background-color: white !important;

      &::before,
      &::after {
        background-color: white !important;
      }
    }
  }

  .main-nav {
    background-color: $purple;
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    width: 100%;
    height: 80vh;

    position: absolute;
    top: 20vh;
    right: -100%;
    z-index: 10;

    transition: right .5s;

    @media (min-width: 768px) {
      background-color: transparent;

      height: 70vh;

      top: 15vh;
    }

    @media (min-width: 992px) {
      grid-row: 1 / 2;
      grid-column: 2 / 3;

      height: auto;

      position: static;
    }

    &--active {
      position: fixed;
      right: 0;

      background-image: url("/banner.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .main-nav__link {
      font-size: 1.3em;
      color: rgba(white, .7);

      margin: .5rem 1rem;

      transition: color .7s;

      &:hover {
        color: white;
        text-decoration: none;
      }

      &--active {
        color: $warning;
      }

      @media (min-width: 992px) {
        font-size: 1em;

        margin: 0 1rem;
      }
    }
  }
</style>
