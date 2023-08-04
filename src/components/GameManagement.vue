5<template>
  <div class="Account-container">
    <div class="Account-header">
      <h1><span>Welcome</span><br />tips90prediction</h1>
    </div>
    <div class="Account-game-p">
      <!-- loop this  -->
      <div class="acc-m gm-m ">
        <div class="main-header">
          <div class="header-info">
            <h1>Bet of the day  ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
            <button class="btn-h h-bn"  :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
              Tomorrow
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>TeamA</th>
              <th>TeamB</th>
              <th>scoreA</th>
              <th>scoreB</th>
              <th>tip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in cardData">
            <tr v-for="data in item" :key="data._id">
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.leagueIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.league }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamAIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamA }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamBIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamB }}</span>
                </div>
              </td>
              <td>
                <span>{{ data.teamAscore }}</span>
              </td>
              <td>
                <span>{{ data.teamBscore }}</span>
              </td>
              <td>
                <span>{{ data.tip }}</span>
              </td>
              <td>
                <div class="Account-delete" @click="editGame(BetOfTheDay, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="Account-delete" @click="deletePrediction(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>

            <tr v-if="cardData.length === 0">
              <td colspan="8">No games yet!</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- loop this  -->
      <div class="acc-m gm-m">
        <div class="main-header">
          <div class="header-info">
            <h1>Daily 10+ Tips ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
            <button class="btn-h h-bn"  :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
              Tomorrow
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>TeamA</th>
              <th>TeamB</th>
              <th>scoreA</th>
              <th>scoreB</th>
              <th>tip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in predictionData">
            <tr v-for="data in item" :key="data._id">
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.leagueIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.league }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamAIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamA }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamBIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamB }}</span>
                </div>
              </td>
              <td>
                <span>{{ data.teamAscore }}</span>
              </td>
              <td>
                <span>{{ data.teamBscore }}</span>
              </td>
              <td>
                <span>{{ data.tip }}</span>
              </td>
              <td>
                <div class="Account-delete" @click="editGame(Daily, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="Account-delete" @click="deletePrediction(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>
            <tr v-if="predictionData.length === 0">
              <td colspan="8">No games yet!</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="acc-m gm-m">
        <div class="main-header">
          <div class="header-info">
            <h1>Banker of the day ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
             <button class="btn-h h-bn"  :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
              Tomorrow
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>TeamA</th>
              <th>TeamB</th>
              <th>scoreA</th>
              <th>scoreB</th>
              <th>tip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in BankerData">
            <tr v-for="data in item" :key="data._id">
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.leagueIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.league }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamAIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamA }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamBIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamB }}</span>
                </div>
              </td>
              <td>
                <span>{{ data.teamAscore }}</span>
              </td>
              <td>
                <span>{{ data.teamBscore }}</span>
              </td>
              <td>
                <span>{{ data.tip }}</span>
              </td>
              <td>
                <div class="Account-delete" @click="editGame(Banker, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="Account-delete" @click="deletePrediction(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>
            <tr v-if="freeTipData.length === 0">
              <td colspan="8">No games yet!</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="acc-m gm-m">
        <div class="main-header">
          <div class="header-info">
            <h1>Free Expert predictions ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
             <button class="btn-h h-bn"  :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
              Tomorrow
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>TeamA</th>
              <th>TeamB</th>
              <th>scoreA</th>
              <th>scoreB</th>
              <th>tip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in expertData">
            <tr v-for="data in item" :key="data._id">
              <td>
                <div class="Account-tbl-img">
                  <span>{{ data.league }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <span>{{ data.teamA }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <span>{{ data.teamB }}</span>
                </div>
              </td>
              <td>
                <span>{{ data.teamAscore }}</span>
              </td>
              <td>
                <span>{{ data.teamBscore }}</span>
              </td>
              <td>
                <span>{{ data.tip }}</span>
              </td>
              <td>
                <div class="Account-delete" @click="editGame(Expert, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="Account-delete" @click="deletePrediction(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>
            <tr v-if="freeTipData.length === 0">
              <td colspan="8">No games yet!</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="acc-m gm-m">
        <div class="main-header">
          <div class="header-info">
            <h1>Upcoming games ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
             <button class="btn-h h-bn"  :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
              Tomorrow
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>TeamA</th>
              <th>TeamB</th>
              <th>scoreA</th>
              <th>scoreB</th>
              <th>tip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in upcomingData">
            <tr v-for="data in item" :key="data._id">
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.leagueIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.league }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamAIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamA }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamBIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamB }}</span>
                </div>
              </td>
              <td>
                <span>{{ data.teamAscore }}</span>
              </td>
              <td>
                <span>{{ data.teamBscore }}</span>
              </td>
              <td>
                <span>{{ data.tip }}</span>
              </td>
              <td>
                <div class="Account-delete" @click="editGame(UpcomingGames, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="Account-delete" @click="deletePrediction(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>
            <tr v-if="upcomingData.length === 0">
              <td colspan="8">No games yet!</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="acc-m gm-m">
        <div class="main-header">
          <div class="header-info">
            <h1>Vip Supreme games ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
             <button class="btn-h h-bn"  :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
              Tomorrow
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>TeamA</th>
              <th>TeamB</th>
              <th>scoreA</th>
              <th>scoreB</th>
              <th>tip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in vipSupremeData">
            <tr v-for="data in item" :key="data._id">
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.leagueIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.league }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamAIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamA }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamBIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamB }}</span>
                </div>
              </td>
              <td>
                <span>{{ data.teamAscore }}</span>
              </td>
              <td>
                <span>{{ data.teamBscore }}</span>
              </td>
              <td>
                <span>{{ data.tip }}</span>
              </td>
              <td>
                <div class="Account-delete" @click="editGame(VipSupreme, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="Account-delete" @click="deletePrediction(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>
            <tr v-if="vipData.length === 0">
              <td colspan="8">No games yet!</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="acc-m gm-m">
        <div class="main-header">
          <div class="header-info">
            <h1>Vip Mega games ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
             <button class="btn-h h-bn"  :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
              Tomorrow
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>TeamA</th>
              <th>TeamB</th>
              <th>scoreA</th>
              <th>scoreB</th>
              <th>tip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in vipMegaData">
            <tr v-for="data in item" :key="data._id">
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.leagueIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.league }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamAIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamA }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamBIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamB }}</span>
                </div>
              </td>
              <td>
                <span>{{ data.teamAscore }}</span>
              </td>
              <td>
                <span>{{ data.teamBscore }}</span>
              </td>
              <td>
                <span>{{ data.tip }}</span>
              </td>
              <td>
                <div class="Account-delete" @click="editGame(VipMega, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="Account-delete" @click="deletePrediction(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>
            <tr v-if="vipData.length === 0">
              <td colspan="8">No games yet!</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="acc-m gm-m">
        <div class="main-header">
          <div class="header-info">
            <h1>Tennis bets ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
             <button class="btn-h h-bn"  :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
              Tomorrow
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>TeamA</th>
              <th>TeamB</th>
              <th>scoreA</th>
              <th>scoreB</th>
              <th>tip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in tennisData">
            <tr v-for="data in item" :key="data._id">
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.leagueIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.league }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamAIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamA }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamBIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamB }}</span>
                </div>
              </td>
              <td>
                <span>{{ data.teamAscore }}</span>
              </td>
              <td>
                <span>{{ data.teamBscore }}</span>
              </td>
              <td>
                <span>{{ data.tip }}</span>
              </td>
              <td>
                <div class="Account-delete" @click="editSport(TennisGames, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="Account-delete" @click="deleteSport(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>
            <tr v-if="tennisData.length === 0">
              <td colspan="8">No games yet!</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="acc-m gm-m">
        <div class="main-header">
          <div class="header-info">
            <h1>Hockey bets ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
             <button class="btn-h h-bn"  :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
              Tomorrow
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>TeamA</th>
              <th>TeamB</th>
              <th>scoreA</th>
              <th>scoreB</th>
              <th>tip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in hockeyData">
            <tr v-for="data in item" :key="data._id">
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.leagueIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.league }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamAIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamA }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamBIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamB }}</span>
                </div>
              </td>
              <td>
                <span>{{ data.teamAscore }}</span>
              </td>
              <td>
                <span>{{ data.teamBscore }}</span>
              </td>
              <td>
                <span>{{ data.tip }}</span>
              </td>
              <td>
                <div class="Account-delete" @click="editSport(TennisGames, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="Account-delete" @click="deleteSport(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>
            <tr v-if="tennisData.length === 0">
              <td colspan="8">No games yet!</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="acc-m gm-m">
        <div class="main-header">
          <div class="header-info">
            <h1>Basketball bets ({{ currentDate }})</h1>
          </div>
          <div class="header-btn">
             <button class="btn-h h-bn"  :class="{ 'active-btn': offset > 0 }" @click="previousDay">
              previous
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 0 }" @click="setOffset(0)">
              Today
            </button>
            <button class="btn-h h-bn" :class="{ 'active-btn': offset === 1 }" @click="setOffset(1)">
              Tomorrow
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>TeamA</th>
              <th>TeamB</th>
              <th>scoreA</th>
              <th>scoreB</th>
              <th>tip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="item in basketBallData">
            <tr v-for="data in item" :key="data._id">
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.leagueIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.league }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamAIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamA }}</span>
                </div>
              </td>
              <td>
                <div class="Account-tbl-img">
                  <img :src="data.teamBIcon" alt="Account-p" class="Account-pi" />
                  <span>{{ data.teamB }}</span>
                </div>
              </td>
              <td>
                <span>{{ data.teamAscore }}</span>
              </td>
              <td>
                <span>{{ data.teamBscore }}</span>
              </td>
              <td>
                <span>{{ data.tip }}</span>
              </td>
              <td>
                <div class="Account-delete" @click="editSport(BasketballGames, data._id)">
                  <FileIcon class="icon-delete" />
                </div>
              </td>
              <td>
                <div class="Account-delete" @click="deleteSport(data._id)">
                  <DeleteIcon class="icon-delete" />
                </div>
              </td>
            </tr>
            <tr v-if="basketBallData.length === 0">
              <td colspan="8">No games yet!</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <div class="game-edit" :class="[isGameOpen ? 'showEdit' : 'closeEdit']">
      <div class="mobile-exit">
        <ExitIcon class="icon-exit" @click="showEdit()" />
      </div>
      <div class="game-main-p">
        <component @formSubmit="updateGame" @formSubmitSport="updateSport" :is="activePage" />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import axios from 'axios'
import { ref, watchEffect, onMounted, computed, watch, shallowRef } from 'vue'
import Daily from './DailyEdit.vue'
import Expert  from './FreeExpertEdit.vue'
import ExitIcon from '../icons/ExitIcon.vue'
import FileIcon from '../icons/FileIcon.vue'
import VipMega from './VipMegaGamesEdits.vue'
import DeleteIcon from '../icons/DeleteIcon.vue'
import Banker from '../components/BankerEdit.vue'
import VipSupreme from './VipsupremeGamesEdits.vue'
import BetOfTheDay from '../components/BetOfTheDayEdit.vue'
import TennisGames from '../components/tennisgamesedits.vue'
import BasketballGames from '../components/basketballedit.vue'
import UpcomingGames from '../components/upcominggamesedits.vue'


const username = ref(null)
const accountInfo = ref([])
const currentDate = ref('')
const offset = ref(0)
const message = ref()
const isGameOpen = ref(false)

const cardData = ref([])
const vipSupremeData = ref([])
const predictionData = ref([])
const freeTipData = ref([])
const upcomingData = ref([])
const tennisData = ref([])
const dailyData = ref([])
const expertData = ref([])
const vipMegaData = ref([])
const BankerData = ref([])
const basketBallData = ref([])
const hockeyData = ref([])

const getBetOfTheDay = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `https://tips90-server.onrender.com/predictions/bet/betOfTheDay/${currentDate.value}`
    )
    console.log(response.data)
    cardData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getBanker = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `https://predictions-server.onrender.com/predictions/bankerPrediction/banker/${currentDate.value}`
    )
    console.log(response.data)
    BankerData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}
const getdailyData = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `https://tips90-server.onrender.com/predictions/daily-ten-prediction/dailyTen/${currentDate.value}`
    )
    console.log(response.data)
    dailyData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}
const getexpertData = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `https://tips90-server.onrender.com/predictions/free-expert/expert/${currentDate.value}`
    )
    console.log(response.data)
    expertData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getVipSupremeGames = async () => {
  try {
    const response = await axios.get(
      `https://tips90-server.onrender.com/predictions/vipSupreme/supreme/${currentDate.value}`
    )
    console.log(response.data)
    vipSupremeData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getVipMegaGames = async () => {
  try {
    const response = await axios.get(
      `https://tips90-server.onrender.com/predictions/vipMega/vipMega/${currentDate.value}`
    )
    console.log(response.data)
    vipMegaData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}


const getPredictions = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `https://tips90-server.onrender.com/predictions/${currentDate.value}`
    )
    console.log(response.data)
    predictionData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getFreeTips = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `https://tips90-server.onrender.com/predictions/tips/freeTip/${currentDate.value}`
    )
    console.log(response.data)
    freeTipData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getUpcoming = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `https://tips90-server.onrender.com/predictions/upcomingPredictions/upcoming/${currentDate.value}`
    )
    console.log(response.data)
    upcomingData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getTennisBets = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `https://tips90-server.onrender.com/sports/sport/Tennis/${currentDate.value}`
    )
    console.log(response.data)
    tennisData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const getHockeyBets = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `https://tips90-server.onrender.com/sports/sport/hockey/${currentDate.value}`
    )
    console.log(response.data)
    hockeyData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}


const getBasketballBets = async () => {
  try {
    // const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(
      `https://tips90-server.onrender.com/sports/sport/Basketball/${currentDate.value}`
    )
    console.log(response.data)
    basketBallData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const showEdit = () => {
  isGameOpen.value = !isGameOpen.value
}

const activePage = shallowRef(BetOfTheDay)
const gameId = ref('')
const sportId = ref('')

const editGame = (game, id) => {
  activePage.value = game
  gameId.value = id
  showEdit()
}

const editSport = (sport, id) => {
  activePage.value = sport
  sportId.value = id
  showEdit()
}

async function updateGame(teamAscore, teamBscore, showScore) {
  try {
    const token = JSON.parse(localStorage.getItem('token'))
    const response = await axios.put(
      `https://tips90-server.onrender.com/predictions/update/${gameId.value}`,
      { teamAscore, teamBscore, showScore },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    console.log(response.data)
  } catch (error) {}
}

async function updateSport(teamAscore, teamBscore, showScore) {
  try {
    const token = JSON.parse(localStorage.getItem('token'))
    const response = await axios.put(
      `https://tips90-server.onrender.com/sports/update/${sportId.value}`,
      { teamAscore, teamBscore, showScore },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    console.log(response.data)
  } catch (error) {}
}



const setOffset = (value) => {
  offset.value = value
  updateCurrentDate()
}

const previousDay = () => {
  offset.value--;
  updateCurrentDate();
};

const getFormattedDate = (offset) => {
  const today = new Date()
  today.setDate(today.getDate() + offset)
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()
  return `${day}-${month}-${year}`
}

const updateCurrentDate = () => {
  currentDate.value = getFormattedDate(offset.value)
}

watchEffect(() => {
  username.value = localStorage.getItem('username')
  updateCurrentDate()
})

onMounted(() => {
  getBetOfTheDay()
  getPredictions()
  getFreeTips()
  getUpcoming()
  getBanker()
  getdailyData()
  getHockeyBets()
  getexpertData()
  getTennisBets()
  getVipMegaGames()
  getBasketballBets()
  getVipSupremeGames()
})

const accountData = computed(() => {
  return accountInfo.value
})

const deletePrediction = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'))

    const response = await axios.delete(
      `https://tips90-server.onrender.com/predictions/delete/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    message.value = response.data.message
    await getPredictions()
    await getFreeTips()
    await getUpcoming()
    await getBetOfTheDay()
    await getVipGames()
  } catch (err) {
    message.value = 'deletion failed'
  }
  alert("deleted")

}

const deleteSport = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'))

    const response = await axios.delete(
      `https://tips90-server.onrender.com/sports/delete/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    message.value = response.data.message
    await getTennisBets()
    await getBasketballBets()
  } catch (err) {
    message.value = 'deletion failed'
  }
  alert("deleted")
}
const showscore = ref(localStorage.getItem('showscore') === 'true')

watch(showscore, (value) => {
  localStorage.setItem('showscore', value.toString())
})

watch(currentDate, () => {
  getBetOfTheDay()
  getPredictions()
  getFreeTips()
  getUpcoming()
  getBanker()
  getdailyData()
  getHockeyBets()
  getexpertData()
  getTennisBets()
  getVipMegaGames()
  getBasketballBets()
  getVipSupremeGames()
});
</script>

<style>
@import '../style/account.css';
@import '../style/Bet.css';
</style>
