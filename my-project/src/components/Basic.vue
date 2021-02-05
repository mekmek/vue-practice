<template>
  <transition>
    <div>
      <div class="container">
        <div class="title">
          <span class="step">STEP1</span>
          <span class="material-icons">account_box</span>お客様の情報を入力してください
        </div>
        <div class="question-area">
          <div class="question">
            <p>性別</p>
            <div class="answer">
              <label><input type="radio" v-model="sex" value="男性">男性</label>
              <label><input type="radio" v-model="sex" value="女性">女性</label>
            </div>
          </div>
          <div class="question">
            <p>生年月日</p>
            <div class="answer">
              <select v-model="year">
                <option v-for="item in yearList" :value="item.val" :key="item.val">{{ item.key }}</option> 
              </select>
              年
              <select v-model="month">
                <option v-for="val in monthList" :value="val" :key="val">{{ val }}</option> 
              </select>
              月
              <select v-model="day">
                <option v-for="val in dayList" :value="val" :key="val">{{ val }}</option> 
              </select>
              日
            </div>
          </div>
        </div>
      </div>
      <div class="btn-area">
        <button @click="next">次へ進む</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { createYearList, createMonthList } from '../helpers/definition.js';

export default {
  name: 'Basic',
  data: function() {
    return {
      yearList: createYearList(),
      monthList: createMonthList(),
      dayArr: Array(31)
    }
  },
  computed: {
    sex: {
      get() {
        return this.$store.getters.sex;
      },
      set(value) {
        this.$store.commit('updateSex', value)
      }
    },
    year: {
      get() {
        return this.$store.getters.year;
      },
      set(value) {
        this.$store.commit('updateYear', value)
      }
    },
    month: {
      get() {
        return this.$store.getters.month;
      },
      set(value) {
        this.$store.commit('updateMonth', value)
      }
    },
    day: {
      get() {
        return this.$store.getters.day;
      },
      set(value) {
        this.$store.commit('updateDay', value)
      }
    },
    dayList: function() {
      return [...this.dayArr].map((_, idx) => idx + 1);
    }
  },
  watch: {
    month: function() {
      let days = 30;
      if (this.month == 2) {
        days = 29;
      } else if ([1, 3, 5, 7, 8, 10, 12].includes(this.month)) {
        days = 31;
      }
      this.dayArr = Array(days);
    }
  },
  methods: {
    next: function() {
      this.$emit('changeComp', 1);
    },
    back: function() {
      this.$emit('changeComp', -1);
    }
  }
}
</script>

<style scoped>
.question p::before {
  content: "-";
}

.question p::after {
  content: "-";
}

.answer label {
  cursor: pointer;
}

.answer select {
  cursor: pointer;
}

select:nth-child(2) {
  margin-left: 10px;
}

select:nth-child(3) {
  margin-left: 10px;
}

.v-enter {
  opacity: 0;
}

.v-enter-to {
  opacity: 1;
}

.v-enter-active {
  transition: opacity 1s;
}
</style>