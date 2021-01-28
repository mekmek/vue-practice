<template>
  <transition>
    <div>
      <div class="container">
        <div class="title">
          <span class="step">STEP2</span>
          <span class="material-icons">person_search</span>以下にお答えください
        </div>
        <div class="question-area">
          <div class="question">
            <p>現在、生命保険に加入されていますか？</p>
            <div class="answer">
              <label><input type="radio" v-model="hasInsurance" value="yes">はい</label>
              <label><input type="radio" v-model="hasInsurance" value="no">いいえ</label>
            </div>
          </div>
          <transition>
            <div class="question" v-show="hasInsurance">
              <p>現在、入院中ですか？または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
              <div class="answer">
                <label><input type="radio" v-model="inHospital" value="yes">はい</label>
                <label><input type="radio" v-model="inHospital" value="no">いいえ</label>
              </div>
            </div>
          </transition>
          <transition>
            <div class="question" v-show="inHospital">
              <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
              <div class="answer">
                <label><input type="radio" v-model="hadSurgery" value="yes">はい</label>
                <label><input type="radio" v-model="hadSurgery" value="no">いいえ</label>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="btn-area">
        <button @click="back">前へ戻る</button>
        <button @click="next">次へ進む</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Survay',
  data: function() {
    return {
      hasInsurance: '',
      inHospital: '',
      hadSurgery: ''
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
.answer label {
  cursor: pointer;
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