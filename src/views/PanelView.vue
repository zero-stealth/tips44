<template>
  <div class="panel-container">
    <div class="panel-bar" :class="[isOpen ? 'close-dash' : '']">
      <div class="panel-nav">
        <div>
          <div class="pan-arrow-container " @click="goBack()">
            <span>Go home</span>
            <homeIcon class="pan-arrow" />
          </div>
          <div class="panel-profile">
            <div class="panel-img" :style="{ backgroundImage: `url(${banner})` }"></div>
          </div>
        </div>
        <div class="panel-btn-container">
          <button
            @click="setActivePage(AccountManagement)"
            :class="getButtonClass(AccountManagement)"
          >
            <GroupIcon class="icon-panel" />
            <span>account management</span>
          </button>
          <button @click="setActivePage(GameManagement)" :class="getButtonClass(GameManagement)">
            <managementIcon class="icon-panel" />
            <span>Game management</span>
          </button>
          <button
            @click="setActivePage(PostTableGames)"
            :class="getButtonClass(PostTableGames)"
          >
            <tableIcon class="icon-panel" />
            <span> Post Table Games </span>
          </button>
          <button @click="setActivePage(PostCardGames)" :class="getButtonClass(PostCardGames)">
            <cardIcon class="icon-panel" />
            <span> Post Card Games  </span>
          </button>
          <button @click="setActivePage(VipResult)" :class="getButtonClass(VipResult)">
            <VipIcon class="icon-panel" />
            <span>Post Vip Result  </span>
          </button>
        </div>
      </div>
      <button @click="logout" :class="getButtonClass(logout)">
        <LogoutIcon class="icon-panel" />
        <span>Logout </span>
      </button>
    </div>
    <div class="panel-main">
      <component :is="activePage" />
      <div class="float-menu" @click="showMenu">
        <barIcon class="float-m-icon" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref , shallowRef} from 'vue'
import LogoutIcon from '../icons/logoutIcon.vue'
import GroupIcon from '../icons/GroupIcon.vue'
import barIcon from '../icons/barIcon.vue'
import homeIcon from '../icons/homeIcon.vue'
import tableIcon from '../icons/tableIcon.vue'
import cardIcon from '../icons/cardIcon.vue'
import VipIcon from '../icons/VipIcon.vue'
import banner from '../assets/banner.png'
import managementIcon from '../icons/managementIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)

const goBack = () => {
  router.push({ name: 'Home' })
}

const showMenu = () => {
  isOpen.value = !isOpen.value
}
// pages
import AccountManagement from '../components/AccountManagement.vue'
import VipResult from '../components/VipresultsComponent.vue'
import GameManagement from '../components/GameManagement.vue'
import PostCardGames from '../components/PostCardGames.vue'
import PostTableGames from '../components/PostTableGames.vue'

const activePage = shallowRef(AccountManagement)

const setActivePage = (page) => {
  activePage.value = page
}

const getButtonClass = (page) => {
  return ['panel-btn', activePage.value === page ? 'active-cp' : 'inactive-cp']
}

const logout = () => {
  localStorage.removeItem('token')
  router.push({ name: 'Home' })

}
</script>
<style>
@import '../style/panel.css';
</style>
