<template>
  <div>
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
</template>

<script>
export default {
  name: 'Consultation',
  data: function() {
    return {
      consultation: ''
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
</style>