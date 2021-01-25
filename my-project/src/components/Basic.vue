<template>
  <div>
    <div class="title">
      <span class="step">STEP1</span>
      <span class="material-icons">account_box</span>お客様の情報を入力してください
    </div>
    <div class="question-area">
      <div class="question">
        <p>性別</p>
        <div class="answer">
          <label><input type="radio" v-model="sex" value="man">男性</label>
          <label><input type="radio" v-model="sex" value="woman">女性</label>
        </div>
      </div>
      <div class="question">
        <p>生年月日</p>
        <div class="answer">
          <select v-model="year">
            <option v-for="(val, idx) in yearList" :value="idx+1968" :key="idx">{{ val }}</option> 
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
</template>

<script>
export default {
  name: 'Basic',
  data: function() {
    return {
      sex: '',
      year: 1991,
      month: 1,
      day: 1,
      yearArr: Array(33),
      monthArr: Array(12),
      dayArr: Array(31)
    }
  },
  computed: {
    yearList: function() {
      return [...this.yearArr].map((_, idx) => {
        let str = idx < 21 ? '昭和' : '平成';
        let num = idx < 21 ? idx + 43 : idx - 20;
        return `${idx + 1968}年 (${str}${num})`; 
      });
    },
    monthList: function() {
      return [...this.monthArr].map((_, idx) => idx + 1);
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
</style>