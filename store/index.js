export const state = () => ({
  currentSlide: 'inicio',
})

export const mutations = {
  setCurrentSlide(state, value) {
    state.currentSlide = value
  }
}
