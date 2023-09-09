<template>
  <div>
    <div class="form-container-h">
      <h1>Post Game</h1>
    </div>
    <form @submit.prevent="handleSubmit" class="form-container">
      <div class="form-wrapper">
        <h1>Team A</h1>
        <div class="form-group">
          <label for="teamA">Name:</label>
          <input
            v-model="teamA"
            type="text"
            class="form-g-input"
            placeholder="Manchester"
            id="teamA"
          />
        </div>
        <div class="form-group">
          <label for="teamAscore">Score:</label>
          <input
            v-model="teamAscore"
            type="text"
            class="form-g-input"
            placeholder="2"
            id="teamAscore"
          />
        </div>
      </div>
      <div class="form-wrapper">
        <div class="form-group">
          <label for="tip">Match Tip:</label>
          <input v-model="tip" type="text" class="form-g-input" placeholder="1" id="tip" />
        </div>
        <div class="form-group">
          <label for="league">Match league:</label>
          <input
            v-model="league"
            type="text"
            class="form-g-input"
            placeholder="team league"
            id="league"
          />
        </div>
        <div class="form-group">
          <label for="time">Match Time:</label>
          <input v-model="time" type="time" class="form-g-input" placeholder="12:00pm" id="time" />
        </div>
        <div class="form-group">
          <label for="date">Match Date:</label>
          <input
            v-model="date"
            type="text"
            class="form-g-input"
            placeholder="03-06-2023"
            id="date"
          />
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
            <option value="Straight Win">Straight Win</option>
            <option value="none">None</option>
          </select>
        </div>
        <div class="form-group">
          <label for="Gamecategory">Game category:</label>
          <select v-model="Gamecategory" class="form-g-input" id="Gamecategory">
            <option disabled value="">Choose games category</option>
            <option value="free-expert">Free expert</option>
            <option value="prediction-picks">Prediction picks</option>
            <option value="vip-supreme">Vip supreme</option>
            <option value="vip-mega">Vip mega</option>
            <option value="tennis">Tennis</option>
            <option value="basketball">Basketball</option>
            <option value="straight-win">Straight win</option>
          </select>
        </div>
        <button type="submit" class="btn-f-f f-desktop">Submit</button>
      </div>
      <div class="form-wrapper">
        <h1>Team B</h1>
        <div class="form-group">
          <label for="teamB">Name:</label>
          <input
            v-model="teamB"
            type="text"
            class="form-g-input"
            placeholder="Arsenal"
            id="teamB"
          />
        </div>
        <div class="form-group">
          <label for="teamBscore">Score:</label>
          <input
            v-model="teamBscore"
            type="text"
            class="form-g-input"
            placeholder="5"
            id="teamBscore"
          />
        </div>
        <button type="submit" class="btn-f-f f-mobile">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref , watch } from 'vue';
import axios from 'axios';

const teamA = ref('')
const teamB = ref('')
const time = ref('')
const league = ref('')
const category = ref('')
const teamAscore = ref(0)
const teamBscore = ref(0)
const Gamecategory = ref('')
const tip = ref('')
const date = ref('')
const url = ref('');


watch(Gamecategory, () => {
  switch (Gamecategory.value) {
    case 'free-expert':
    url.value = 'https://tips90-server.onrender.com/predictions/create/freeExpert/expert'
      break;
      case 'prediction-picks':
    url.value = 'https://tips90-server.onrender.com/predictions/create'
      break;
      case 'vip-supreme':
    url.value = 'https://tips90-server.onrender.com/predictions/create/supremeVip/supreme'
      break;
      case 'vip-mega':
    url.value = 'https://tips90-server.onrender.com/predictions/create/mega/vipMega'
      break;
      case 'basketball':
    url.value = 'https://tips90-server.onrender.com/sports/create/Basketball'
      break;
    //   case 'free-tip':
    // url.value = 'https://tips90-server.onrender.com/predictions/create/tip/freeTip'
    //   break;
    //   case 'tennis':
    // url.value = 'https://tips90-server.onrender.com/sports/create/Tennis'
    //   break;
      case 'straight-win':
    url.value = 'https://tips90-server.onrender.com/predictions/daily/dailyTen'
      break;
      case null || '':
      alert('No empty fields allowed');
      break;
    default:
      break;
  }
});

async function handleSubmit() {
  if (
    category.value.trim() !== '' &&
    teamA.value.trim() !== '' &&
    teamAscore.value !== null &&
    teamB.value.trim() !== '' &&
    teamBscore.value !== null &&
    time.value.trim() !== '' &&
    tip.value !== '' &&
    date.value !== '' &&
    league.value !== ''
  ) {
    const user = JSON.parse(localStorage.getItem('token'))
    try {
      const response = await axios.post(
        `${url.value}`,
        {
          teamAscore: teamAscore.value,
          teamBscore: teamBscore.value,
          category: category.value,
          league: league.value,
          teamB: teamB.value,
          teamA: teamA.value,
          time: time.value,
          date: date.value,
          tip: tip.value
        },
        {
          headers: {
            Authorization: `Bearer ${user}`
          }
        }
      )
      alert('game posted')
    } catch (err) {
      console.log(err)
      alert('Post Error')
    }
  } else {
    alert('No empty fields allowed')
  }
}
</script>

<style>
@import '../style/games.css';
</style>
