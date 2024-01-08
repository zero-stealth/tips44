<template>
  <div>
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data" class="form-container">
      <div class="form-wrapper">
        <h1>Team A</h1>
        <div class="form-group">
          <label for="teamAscore">Score:</label>
          <input v-model="teamAscore" type="text" class="form-g-input" placeholder="2" id="teamAscore" />
        </div>
      </div>
      <div class="form-wrapper">
        <div class="form-group">
          <label for="score">Show score:</label>
          <input v-model="showScore" type="text" class="form-g-input" placeholder="true" id="score" />
        </div>
        <div class="form-group">
          <label for="result">Choose result</label>
          <select v-model="showResult" class="form-g-input" id="result">
            <option disabled value="">Choose result</option>
            <option value="true">Passed</option>
            <option value="false">Failed</option>
          </select>
        </div>
      <button type="submit" class="btn-f-f f-desktop">Submit</button>
      </div>
      <div class="form-wrapper">
        <h1>Team B</h1>
        <div class="form-group">
          <label for="teamBscore">Score:</label>
          <input v-model="teamBscore" type="text" class="form-g-input" placeholder="5" id="teamBscore" />
        </div>
        <button type="submit" class="btn-f-f f-mobile">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits('formSubmitSport')
import { useToast } from 'vue-toastification'


const teamAscore = ref();
const teamBscore = ref();
const showScore = ref();
const showResult = ref();
const toast = useToast()


async function handleSubmit() {
  if (

    teamAscore.value !== null
  ) {
    try {
      emit('formSubmitSport', teamAscore.value, teamBscore.value, showScore.value, showResult.value)
    } catch (err) {
      console.log(err)
    }
  } else {
    toast.error('No empty fields allowed')
  }
}
</script>

<style>
@import '../style/games.css';
</style>
