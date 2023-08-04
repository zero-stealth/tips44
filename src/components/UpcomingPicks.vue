<template>
  <div class="home-main upcoming-p">
    <div class="main-h">
      <div class="main-header home-up">
        <div class="header-info home-up">
          <h1>Upcoming Tips</h1>
        </div>
      </div>
      <template v-if="cardData.length > 0">
        <table class="main-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>League</th>
            <th>Match</th>
            <th>Tip</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(card, index) in cardData" :key="index">
            <td>{{ card.time }}</td>
            <td>{{ card.league }}</td>
            <td>{{ card.teamA }} vs {{ card.teamB }}</td>
            <td>{{ card.tip }}</td>
            <td>
              <template
                v-if="
                  card.teamAscore !== null &&
                  card.teamBscore !== null &&
                  (card.teamAscore !== 0 || card.teamBscore !== 0)
                "
              >
                {{ card.teamAscore }} - {{ card.teamBscore }}
              </template>
              <template v-else>
                {{ card.time }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
      </template>
        <template v-else>
          <div class="home-freetip">
            <h1>No upcoming predictions available today</h1>
          </div>
        </template>
      </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Card from '../components/CardComponent.vue';

const router = useRouter();
const currentDate = ref('');

const showCard = (cardID) => {
  router.push({ name: 'Tips', params: { id: cardID } });
};

const cardData = ref([]);

const getPrediction = async () => {
  try {
    const response = await axios.get(
      `https://tips90-server.onrender.com/predictions/upcomingPredictions/upcoming/${currentDate.value}`
    );
    cardData.value = response.data;
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  updateCurrentDate();
  getPrediction();
});

const offset = ref(1);

const updateCurrentDate = () => {
  const today = new Date();
  today.setDate(today.getDate() + offset.value);
  const month = today.getMonth() + 1;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const day = today.getDate();
  const formattedDay = day < 10 ? `0${day}` : day;
  currentDate.value = `${formattedDay}-${formattedMonth}-${today.getFullYear()}`;
};

const formatFormation = (formation) => {
  return Array.isArray(formation) ? formation[0].split('-') : [];
};
</script>

<style>
@import '../style/Home.css';
</style>
