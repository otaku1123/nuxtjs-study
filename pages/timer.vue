<template>
  <section class="container">
    <h1>タイマーアプリ</h1>
    <div>
      <input type="number" v-model="timerHour" />:
      <input type="number" v-model="timerMinutes" />:
      <input type="number" v-model="timerSeconds" />
    </div>
    <div>
      <button v-on:click="start" v-if="!timerOn">Start</button>
      <button v-on:click="stop" v-if="timerOn">Stop</button>
      <button v-on:click="reset">Reset</button>
    </div>
  </section>
</template>

<script>
import sound from '@/assets/sounds/doorbell.mp3'

export default {
  data: function () {
    return {
      timerHour: 0,
      timerMinutes: 0,
      timerSeconds: 0,
      timerOn: false,
      timerId: null,
    };
  },
  methods: {
    countdown() {
      if (this.timerHour <= 0 && this.timerMinutes <= 0 && this.timerSeconds <= 0) {
        this.complete();
      }
      else if (this.timerSeconds > 0) {
        this.timerSeconds--;
      } else if (this.timerSeconds <= 0 && this.timerMinutes >0) {
        this.timerMinutes--;
        this.timerSeconds = 59;
      } else if (this.timerSeconds <= 0 && this.timerMinutes <= 0 && this.timerHour > 0) {
        this.timerHour--;
        this.timerMinutes = 59;
        this.timerSeconds = 59;
      } else {
        console.error("Error invalid case!!");
      }
    },
    start() {
      this.timerOn = true;
      this.timerId = setInterval(this.countdown, 1000);
    },
    stop() {
      this.timerOn = false;
      clearInterval(this.timerId);
    },
    complete() {
      const audio = new Audio(sound);
      audio.play();

      this.timerOn = false;
      clearInterval(this.timerId);
    },
    reset() {
      this.timerHour = 0;
      this.timerMinutes = 0;
      this.timerSeconds = 0;

      if (this.timerOn) {
        this.timerOn = false;
        clearInterval(this.timerId);
      }
    },
  },
};
</script>
