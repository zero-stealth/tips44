<template>
  <div>
    <div class="form-container-h">
      <h1>Free Expert</h1>
    </div>
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data" class="form-container">
      <div class="form-wrapper">
        <h1>Team A</h1>
        <div class="form-group">
          <label for="teamA">Name:</label>
          <input v-model="teamA" type="text" class="form-g-input" placeholder="Manchester" id="teamA" />
        </div>
        <div class="form-group">
          <label for="teamAscore">Score:</label>
          <input v-model="teamAscore" type="text" class="form-g-input" placeholder="2" id="teamAscore" />
        </div>
      </div>
      <div class="form-wrapper">
        <div class="form-group">
          <label for="tip">Match Tip:</label>
          <input v-model="tip" type="text" class="form-g-input" placeholder="1" id="tip" />
        </div>
        <div class="form-group">
          <label for="league">Match league:</label>
          <input v-model="league" type="text" class="form-g-input" placeholder="team league" id="league" />
        </div>
        <div class="form-group">
          <label for="time">Match Time:</label>
          <input v-model="time" type="time" class="form-g-input" placeholder="12:00pm" id="time" />
        </div>
        <button type="submit" class="btn-f-f f-desktop">Submit</button>
      </div>
      <div class="form-wrapper">
        <h1>Team B</h1>
        <div class="form-group">
          <label for="teamB">Name:</label>
          <input v-model="teamB" type="text" class="form-g-input" placeholder="Arsenal" id="teamB" />
        </div>
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
import axios from 'axios';

const teamA = ref('');
const teamB = ref('');
const time = ref('');
const league = ref('');
const teamAscore = ref(0);
const teamBscore = ref(0);
const tip = ref('');


async function handleSubmit() {
  if (
    teamA.value.trim() !== '' &&
    teamAscore.value !== null &&
    teamB.value.trim() !== '' &&
    teamBscore.value !== null &&
    time.value.trim() !== '' &&
    tip.value !== null &&
    league.value !== null 
  ) {
    const user = JSON.parse(localStorage.getItem('token'));
    try {
      const formData = new FormData();
      formData.append('teamA', teamA.value);
      formData.append('teamAscore', teamAscore.value);
      formData.append('teamB', teamB.value);
      formData.append('formationB', formationB.value);
      formData.append('teamBscore', teamBscore.value);
      formData.append('time', time.value);
      formData.append('league', league.value);
      formData.append('tip', tip.value);

      const response = await axios.post(
        'https://tips90-server.onrender.com/predictions/create/freeExpert/expert',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user}`,
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  } else {
    alert('No empty fields allowed');
  }
}
</script>

<style>
@import '../style/games.css';
</style>
