<template>
  <div class="home-main upcoming-p">
    <div class="main-h">
      <div class="main-header home-up">
        <div class="header-info home-up">
          <h1>{{ $t('upcoming.u-h1') }}</h1>
        </div>
      </div>
      <template v-if="cardData.length > 0">
        <div class="main-h-card">
          <Card
            v-for="(card) in cardData"
            :key="card._id"
            :tip="card.tip"
            :status="card.status"
            :leagueIcon="card.leagueIcon"
            :teamAIcon="card.teamAIcon"
            :teamBIcon="card.teamBIcon"
            :teamA="card.teamA"
            :teamB="card.teamB"
            :league="card.league"
            :showScore="card.showScore"
            :teamAscore="card.teamAscore"
            :teamBscore="card.teamBscore"
            :formationA="formatFormation(card.formationA)"
            :formationB="formatFormation(card.formationB)"
            :time="card.time"
            @click="showCard(card._id)"
          />
        </div>
      </template>
        <template v-else>
          <div class="home-freetip">
            <h1>{{ $t('upcoming.u-h1') }}</h1>
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
const SERVER_HOST = import.meta.env.VITE_SERVER_HOST

const showCard = (cardID) => {
  router.push({ name: 'Tips', params: { id: cardID } });
};

const cardData = ref([]);

const getPrediction = async () => {
  try {
    const response = await axios.get(
      `${SERVER_HOST}/predictions/upcomingPredictions/upcoming/${currentDate.value}`
    );
    cardData.value = response.data;
  } catch (err) { /* empty */ }
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
