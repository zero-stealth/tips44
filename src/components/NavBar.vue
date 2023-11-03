<template>
  <div class="nav-main">
    <div class="nav-container">
      <select v-model="$i18n.locale" class="locale-changer mb-locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          class="locale-op"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>

      <img src="@/assets/90logo.png" alt="logo" class="logo-spp" />
      <div class="nav-link-container">
        <RouterLink :to="{ name: 'Home' }" class="nav-link"> {{ $t('navbar.nav-l1') }} </RouterLink>
        <!-- <div @click="openTelegram" class="nav-link">Telegram tips</div> -->
        <RouterLink :to="{ name: 'Banker' }" class="nav-link"> {{ $t('navbar.nav-l2') }} </RouterLink>
        <RouterLink :to="{ name: 'Daily' }" class="nav-link"> {{ $t('navbar.nav-l3') }} </RouterLink>
        <RouterLink :to="{ name: 'Basketball' }" class="nav-link"> {{ $t('navbar.nav-l4') }} </RouterLink>
        <div class="drop-container">
          <div class="drop-down" @click="showDrop">
            <span>{{ $t('navbar.nav-span1') }}</span>
            <ArrowIcon class="drop-icon" />
          </div>
          <div class="drop-down-panel" :class="{ 'show': isDropOpen, 'hide': !isDropOpen }">
            <span @click="goToC('Double Chance')">{{ $t('navbar.nav-l5') }}</span>
            <span @click="goToC('Over 2.5 Goals')">{{ $t('navbar.nav-l6') }}</span>
            <span @click="goToC('Over 1.5 Goals')">{{ $t('navbar.nav-l7') }}</span>
            <span @click="goToC('Under 3.5 Goals')">{{ $t('navbar.nav-l8') }}</span>
            <span @click="goToC('Both Teams To Score')">{{ $t('navbar.nav-l9') }}</span>
          </div>
        </div>
      </div>
      <div class="nav-btn-container" v-if="token !== null">
        <button @click="logOut" class="nav-btn btn-l btn-logout">
          <LogoutIcon class="l-icon" />
          {{ $t('navbar.nav-btn1') }}
        </button>
        <select v-model="$i18n.locale" class="locale-changer">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            class="locale-op"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div>
      <div class="nav-btn-container" v-else>
        <button @click="goLogin" class="nav-btn btn-l"> {{ $t('navbar.nav-btn2') }} </button>
        <select v-model="$i18n.locale" class="locale-changer">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            class="locale-op"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div>

      <div class="nav-menu" @click="showMenu">
        <MobileMenuIcon class="menu-icon-nav" />
      </div>
    </div>
  </div>

  <!-- mobile responsive -->
  <div
    class="mobile-bar"
    :style="{
      backgroundImage: `url(${banner}), linear-gradient(rgb(75, 0, 129), rgb(75, 0, 129))`
    }"
    :class="{ 'open': isOpen, 'close': !isOpen }"
  >
    <div class="mobile-exit">
      <ExitIcon class="icon-exit" @click="showMenu" />
    </div>
    <div class="mobile-container">
      <!-- <div class="mobile-logo">
        <img src="@/assets/logo-spp.png" alt="logo" class="logo-spp">
      </div> -->
      <div class="mobile-link-container">
        <RouterLink :to="{ name: 'Home' }" @click="showMenu" class="mobile-link">
          {{ $t('navbar.nav-l1') }}
        </RouterLink>
        <div class="drop-container spc">
          <span @click="goBasketball" class="nav-link">{{ $t('navbar.nav-l4') }}</span>
          <span @click="goDaily" class="nav-link">{{ $t('navbar.nav-l3') }}</span>
        </div>
        <div @click="openTelegramX" class="mobile-link">{{ $t('navbar.nav-l10') }}</div>
        <RouterLink :to="{ name: 'Banker' }" class="mobile-link">{{ $t('navbar.nav-l2') }}</RouterLink>
        <div class="drop-container spos">
          <div class="drop-down" @click="showDrp">
            <span>{{ $t('navbar.nav-span1') }}</span>
            <ArrowIcon class="drop-icon" />
          </div>
          <div class="drop-down-panel spos-c" :class="{ 'hide': !isDrpOpen, 'show': isDrpOpen }">
            <span @click="goTo('Double Chance')">{{ $t('navbar.nav-l5') }}</span>
            <span @click="goTo('Over 2.5 Goals')">{{ $t('navbar.nav-l6') }}</span>
            <span @click="goTo('Over 1.5 Goals')">{{ $t('navbar.nav-l7') }}</span>
            <span @click="goTo('Both Teams To Score')">{{ $t('navbar.nav-l9') }}</span>
            <span @click="goTo('Under 3.5 Goals')">{{ $t('navbar.nav-l8') }}</span>
          </div>
        </div>
        <!-- <span @click="goTo('Bet Of The Day')" class="nav-link">Bet Of The Day</span> -->
      </div>
        <div class="mobile-btn-container" v-if="token !== null">
        <button @click="logOut" class="mobile-btn btn-l btn-logout">
          <LogoutIcon class="l-icon" />
          {{ $t('navbar.nav-btn1') }}
        </button>
      </div>
      <div class="mobile-btn-container" v-else>
        <button @click="goSignin" class="mobile-btn btn-r">
          <GroupIcon class="icon-nav r-icon" />
          {{ $t('navbar.nav-btn2') }}
        </button>
        <button @click="goLogin" class="mobile-btn btn-l">
          <ProfileIcon class="l-icon" />
          {{ $t('navbar.nav-btn3') }}
        </button>
      </div>
    </div>
  </div>
  <!-- mobile responsive -->
</template>

<script setup>
import MobileMenuIcon from '@/icons/mobileMenuIcon.vue'
import { RouterLink, useRouter } from 'vue-router'
import ProfileIcon from '@/icons/profileIcon.vue'
import GroupIcon from '@/icons/GroupIcon.vue'
import ExitIcon from '@/icons/ExitIcon.vue'
import LogoutIcon from '@/icons/logoutIcon.vue'
import ArrowIcon from '@/icons/ArrowIcon.vue'
import banner from '@/assets/banner.png'
import { ref, watchEffect } from 'vue'

const router = useRouter()
const isOpen = ref(false)
const isDropOpen = ref(false)
const isDrpOpen = ref(false)
const token = ref(null)

watchEffect(() => {
  token.value = localStorage.getItem('token')
})

const showMenu = () => {
  isOpen.value = !isOpen.value
}

const showDrop = () => {
  isDropOpen.value = !isDropOpen.value
}

const showDrp = () => {
  isDrpOpen.value = !isDrpOpen.value
}

const logOut = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  window.location.reload()
}

const goToC = (betname) => {
  router.push({ name: 'Bet', params: { betName: betname } })
  showDrop()
}

const goTo = (betname) => {
  router.push({ name: 'Bet', params: { betName: betname } })
  showMenu()
  showDrp()
}

const goDaily = () => {
  router.push({ name: 'Daily' })
  showMenu()
}

const goBasketball = () => {
  router.push({ name: 'Basketball' })
  showMenu()
}

const goLogin = () => {
  router.push({ name: 'Login' })
  // showMenu();
}

const goSignin = () => {
  router.push({ name: 'Signin' })
  // showMenu();
}

const openTelegramX = () => {
  window.open('https://t.me/+p9eRLjKRtv45Y2Fk', '_blank')
  showMenu()
}
</script>

<style scoped>
@import '../style/nav.css';
</style>
