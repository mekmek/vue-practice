<template>
  <transition>
    <div>
      <div class="container">
        <div class="title">
          <span class="step">STEP3</span>
          <span class="material-icons">text_snippet</span>ご相談内容をご記入ください
        </div>
        <div class="question-area">
          <div class="question">
            <p>ご相談内容</p>
            <textarea v-model="consultation" rows="30" />
          </div>
        </div>
      </div>
      <div class="btn-area">
        <button @click="back">前へ戻る</button>
        <button>次へ進む</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Consultation',
  data: function() {
    return {
      consultation: ''
    }
  },
  methods: {
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

textarea {
  box-sizing: border-box;
  width: 100%;
  border-color: rgb(207, 207, 207);
  border-radius: 3px;
}

.question {
  margin-bottom: 10px;
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