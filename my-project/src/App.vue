<template>
  <div id="app">
    <keep-alive>
      <component :is="currentComp" @changeComp="changeComp"></component>
    </keep-alive>
  </div>
</template>

<script>
import Basic from './components/Basic.vue'
import Survay from './components/Survay.vue'
import Consultation from './components/Consultation.vue'

export default {
  name: 'App',
  components: {
    Basic,
    Survay,
    Consultation
  },
  data: function() {
    return {
      compList: ['basic', 'survay', 'consultation'],
      listIndex: 0
    }
  },
  computed: {
    currentComp: function() {
      return this.compList[this.listIndex];
    }
  },
  methods: {
    changeComp: function(e) {
      this.listIndex += e;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  margin: 60px auto 0;
  width: 800px;
  border: 2px solid rgb(96, 196, 196);
  border-radius: 5px;
}

.question-area {
  padding: 10px 20px 0;
}

.question {
  margin-bottom: 30px;
}

.question p {
  color: rgb(0, 135, 168);
  text-align: justify;
}

.answer {
  padding-left: 20px;
}

.title {
  border-bottom: 2px solid rgb(96, 196, 196);
  padding: 10px 0;
  position: relative;
  background-color: rgb(210, 255, 245);
  font-size: 18px;
  text-align: center;
}

.step {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(55, 178, 226);
  color: white;
  padding: 3px 7px;
  border-radius: 2px;
  font-size:16px;
}

.material-icons {
  vertical-align: sub;
}

.btn-area {
  margin-top: 20px;
  text-align: center;
}

.btn-area button {
  background-color: rgb(0, 218, 247);
  color: white;
  padding: 8px 15px;
  border-radius: 3px;
  font-size: 16px;
  border: none;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
}

.btn-area button::after {
  content: " >";
  font-size: 20px;
  vertical-align: bottom;
}

select {
  padding: 10px;
  border-color: rgb(207, 207, 207);
  border-radius: 3px;
  font-size: 16px;
}
</style>
