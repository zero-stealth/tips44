<template>
  <div>
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data" class="form-container">
      <div class="form-wrapper">
        <h1>Team A</h1>
        <div class="form-group">
          <label for="teamA">Name:</label>
          <input v-model="teamA" type="text" class="form-g-input" placeholder="Manchester" id="teamA" />
        </div>
        <div class="form-group">
          <label for="teamAIcon">Logo:</label>
          <input @change="handleTeamALogo" type="file" class="form-g-input" id="teamAIcon" accept="image/*" />
        </div>
        <div class="form-group">
          <label for="formationA">Formation:</label>
          <input v-model="formationA" type="text" class="form-g-input" placeholder="l-w-d-w" id="formationA" />
        </div>
        <div class="form-group">
          <label for="teamAPosition">Position:</label>
          <input v-model="teamAPosition" type="text" class="form-g-input" placeholder="1" id="teamAPosition" />
        </div>
  
      </div>
      <div class="form-wrapper">
        <div class="form-group">
          <label for="tip">Match Tip:</label>
          <input v-model="tip" type="text" class="form-g-input" placeholder="1" id="tip" />
        </div>
        <div class="form-group">
          <label for="leagueIcon">League logo</label>
          <input @change="handleLeagueLogo" type="file" class="form-g-input" id="leagueIcon" accept="image/*" />
        </div>
        <div class="form-group">
          <label for="league">Match league:</label>
          <input v-model="league" type="text" class="form-g-input" placeholder="team league" id="league" />
        </div>
        <div class="form-group">
          <label for="time">Match Time:</label>
          <input v-model="time" type="time" class="form-g-input" placeholder="12:00pm" id="time" />
        </div>
        <div class="form-group">
          <label for="date">Match Date:</label>
          <input v-model="date" type="text" class="form-g-input" placeholder="03-06-2023" id="date" />
        </div>
        <div class="form-group">
          <label for="status">Match category:</label>
          <select v-model="category" class="form-g-input" id="status">
            <option disabled value="">Choose category</option>
            <option value="Double Chance">Double Chance</option>
            <option value="Over 2.5 Goals">Over 2.5 Goals</option>
            <option value="Over 1.5 Goals">Over 1.5 Goals</option>
            <option value="Both Teams To Score">Both Team To Score</option>
            <option value="Under 3.5 Goals">Under 3.5 Goals</option>
            <option value="Straight win">Straight Win</option>
            <option value="none">None</option>
          </select>
        </div>
        <div class="form-group">
          <label for="status">Game category:</label>
          <select v-model="Gamecategory" class="form-g-input" id="status">
            <option disabled value="">Choose games category</option>
            <option value="Bet-of-the-day">Bet Of The day</option>
            <option value="Upcoming-games">Upcoming tips</option>
          </select>
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
          <label for="teamBIcon">Logo:</label>
          <input @change="handleTeamBLogo" type="file" class="form-g-input" id="teamBIcon" accept="image/*" />
        </div>
        <div class="form-group">
          <label for="formationB">Form:</label>
          <input v-model="formationB" type="text" class="form-g-input" placeholder="l-w-d-w" id="formationB" />
        </div>
        <div class="form-group">
          <label for="teamBPosition">Position:</label>
          <input v-model="teamBPosition" type="text" class="form-g-input" placeholder="2" id="teamBPosition" />
        </div>

        <button type="submit" class="btn-f-f f-mobile">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
import { ref , watch } from 'vue';
import axios from 'axios';

const teamA = ref('');
const teamB = ref('');
const teamAIcon = ref(null);
const teamBIcon = ref(null);
const leagueIcon = ref(null);
const formationA = ref('');
const formationB = ref('');
const teamAPosition = ref('');
const teamBPosition = ref('');
const time = ref('');
const toast = useToast()
const category = ref('')
const Gamecategory = ref('')
const league = ref('');
const teamAscore = ref(0);
const teamBscore = ref(0);
const date = ref('');
const tip = ref('');
const url = ref('');
const SERVER_HOST = import.meta.env.VITE_SERVER_HOST



watch(Gamecategory, () => {
  switch (Gamecategory.value) {
    case 'Bet-of-the-day':
    url.value =   `${SERVER_HOST}/predictions/create/bet/betOfTheDay`
      break;
      case 'Upcoming-games':
    url.value =   `${SERVER_HOST}/predictions/create/upcoming/upcoming`
      break;
      case null || '':
      toast.error('No empty fields allowed');
      break;
    default:
      break;
  }
});

function handleFileUpload(event, targetRef) {
  const file = event.target.files[0];
  if (file) {
    targetRef.value = file;
  }
}

function handleTeamALogo(event) {
  handleFileUpload(event, teamAIcon);
}

function handleTeamBLogo(event) {
  handleFileUpload(event, teamBIcon);
}

function handleLeagueLogo(event) {
  handleFileUpload(event, leagueIcon);
}

async function handleSubmit() {
  if (
    teamA.value.trim() !== '' &&
    teamAIcon.value !== null &&
    leagueIcon.value !== null &&
    formationA.value.trim() !== '' &&
    teamAPosition.value.trim() !== '' &&
    teamAscore.value !== null &&
    teamB.value.trim() !== '' &&
    teamBIcon.value !== null &&
    formationB.value.trim() !== '' &&
    teamBPosition.value.trim() !== '' &&
    teamBscore.value !== null &&
    time.value.trim() !== '' &&
    tip.value !== null &&
    league.value !== null &&
    date.value !== null 
  ) {
    const user = JSON.parse(localStorage.getItem('token'));
    try {
      const formData = new FormData();
      formData.append('teamA', teamA.value);
      formData.append('teamAIcon', teamAIcon.value);
      formData.append('leagueIcon', leagueIcon.value);
      formData.append('formationA', formationA.value);
      formData.append('teamAPosition', teamAPosition.value);
      formData.append('teamAscore', teamAscore.value);
      formData.append('teamB', teamB.value);
      formData.append('teamBIcon', teamBIcon.value);
      formData.append('formationB', formationB.value);
      formData.append('teamBPosition', teamBPosition.value);
      formData.append('teamBscore', teamBscore.value);
      formData.append('time', time.value);
      formData.append('category', category.value)
      formData.append('league', league.value);
      formData.append('date', date.value);
      formData.append('tip', tip.value);

      const response = await axios.post(
        `${url.value}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user}`,
          },
        }
      );
      toast.success('Game posted')
    } catch (err) { /* empty */ }
  } else {
    toast.error('No empty fields allowed');
  }
}


</script>

<style>
@import '../style/games.css';
</style>
