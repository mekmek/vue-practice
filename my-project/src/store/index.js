import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex: '',
    year: '1991',
    month: '1',
    day: '1',
    hasInsurance: '',
    inHospital: '',
    hadSurgery: '',
    consultation: '',
  },
  mutations: {
    updateSex(state, value) {
      state.sex = value;
    },
    updateYear(state, value) {
      state.year = value;
    },
    updateMonth(state, value) {
      state.month = value;
    },
    updateDay(state, value) {
      state.day = value;
    },
    updateHasInsurance(state, value) {
      state.hasInsurance = value;
    },
    updateInHospital(state, value) {
      state.inHospital = value;
    },
    updateHadSurgery(state, value) {
      state.hadSurgery = value;
    },
    updateConsultation(state, value) {
      state.consultation = value;
    }
  },
  getters: {
    birthday(state) {
      let y = state.year;
      let m = state.month;
      let d = state.day;
      if (y && m && d) return `${y}年${m}月${d}日`;
    }
  }
})
