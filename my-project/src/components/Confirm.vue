<template>
  <transition>
    <div>
      <div class="container">
        <div class="title">
          <span class="step">STEP4</span>
          <span class="material-icons">text_snippet</span>以下の内容をご確認ください
        </div>
        <div class="question-area">
          <div class="question">
            <p>性別</p>
            <div class="answer">{{ sex }}</div>
          </div>
          <div class="question">
            <p>生年月日</p>
            <div class="answer">{{ birthday }}</div>
          </div>
          <div class="question">
            <p>現在、生命保険に加入されていますか？</p>
            <div class="answer">{{ hasInsurance }}</div>
          </div>
          <div class="question">
            <p>現在、入院中ですか？または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
            <div class="answer">{{ inHospital }}</div>
          </div>
          <div class="question">
            <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
            <div class="answer">{{ hadSurgery }}</div>
          </div>
          <div class="question">
            <p>ご相談内容</p>
            <div class="answer">{{ consultation }}</div>
          </div>
        </div>
      </div>
      <div class="btn-area">
        <button @click="back">前へ戻る</button>
        <button>送信</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Confirm',
  computed: mapGetters([
    'sex',
    'birthday',
    'hasInsurance',
    'inHospital',
    'hadSurgery',
    'consultation'
  ]),
  methods: {
    back() {
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