<script setup>
import Ios from '../assets/ios.png'
import { useRouter, RouterLink } from 'vue-router'
import phoneIcon from '../icons/phone.vue'
import emailIcon from '../icons/email.vue'
import Android from '../assets/android.png'
import twitterIcon from '../icons/twitterIcon.vue'
import whatsappIcon from '../icons/whatsapp.vue'
import instagramIcon from '../icons/instagram.vue'
import facebookIcon from '../icons/facebook.vue'

const router = useRouter()

const goAlogin = () => {
  router.push({ name: 'AdminLogin' })
}

const openWhatsapp = () => {
  window.open('https://wa.me/254743247861?text=Hi+there+Charisma+Betting+Tips', '_blank')
}

const openIos = () => {
  window.open('https://itunes.apple.com/app/idYOUR_APP_ID', '_blank')
}

const openAndroid = () => {
  window.open('https://play.google.com/store/apps/details?id=charisma.bettingtips', '_blank')
}

const openFacebook = () => {
  window.open('https://www.facebook.com/', '_blank')
}

const openTwitter = () => {
  window.open('https://twitter.com/', '_blank')
}

const openInstagram = () => {
  window.open('https://instagram.com/', '_blank')
}

</script>

<template>
  <div class="contact-contain">
    <div class="contact-wrapper">
      <div class="contact-d1">
       <h1>{{ $t('footer.footer-h1') }} <br>{{ $t('footer.footer-br') }} </h1>
       <div class="app-d-link">
          <div
            class="download-app"
            @click="openIos"
            :style="{ backgroundImage: `url(${Ios})` }"
          ></div>
          <div
            class="download-app"
            @click="openAndroid"
            :style="{ backgroundImage: `url(${Android})` }"
          ></div>
        </div>
      </div>
      <div class="contact-dp2">
        <div class="contact-d2">
        <div>
          <h1>{{ $t('footer.footer-h2') }}</h1>
        </div>
        <div class="d2-con">
          <RouterLink :to="{ name: 'Home' }" class="nav-lin">{{ $t('footer.footer-l1') }} </RouterLink>
          <RouterLink :to="{ name: 'Basketball' }" class="nav-lin">{{ $t('footer.footer-l2') }}</RouterLink>
          <RouterLink :to="{ name: 'Daily' }" class="nav-lin">{{ $t('footer.footer-l3') }}</RouterLink>
          <RouterLink :to="{ name: 'Banker' }" class="nav-lin">{{ $t('footer.footer-l4') }}</RouterLink>
        </div>
      </div>
      <div class="contact-d2">
        <div>
          <h1>{{ $t('footer.footer-h3') }}</h1>
        </div>
        <div class="d2-con">
          <RouterLink :to="{ name: 'Disclaimer' }" class="nav-lin">{{ $t('footer.footer-l5') }}</RouterLink>
          <RouterLink :to="{ name: 'Policy' }" class="nav-lin">{{ $t('footer.footer-l6') }}</RouterLink>
          <RouterLink :to="{ name: 'Refund' }" class="nav-lin">{{ $t('footer.footer-l7') }}</RouterLink>
          <RouterLink :to="{ name: 'Terms' }" class="nav-lin">{{ $t('footer.footer-l8') }}</RouterLink>
        </div>
      </div>
      </div>
      <div class="contact-d3">
        <h1>{{ $t('footer.footer-h4') }}</h1>
        <p>
          {{ $t('footer.footer-p1') }} {{ $t('footer.footer-p2') }}<span @click="goAlogin()">:</span> 
        </p>
        <div class="d1-contact">
          <div class="d1-icon">
            <emailIcon class="icon-d1" />
            <span>charismawinningtips@gmail.com</span>
          </div>
          <div class="d1-icon">
            <phoneIcon class="icon-d1" />
            <span>+254743247861</span>
          </div>
        </div>
        <div class="book-social">
          {{ $t('footer.footer-div') }}:
          <facebookIcon class="bk-icon" @click="openFacebook" />
          <twitterIcon class="bk-icon" @click="openTwitter"/>
          <whatsappIcon class="bk-icon" @click="openWhatsapp" />
          <instagramIcon class="bk-icon" @click="openInstagram" />
        </div>
      </div>
    </div>
    <div class="footer-x">
      <span>{{ $t('footer.footer-span1') }}</span>
      <span>{{ $t('footer.footer-span2') }}</span>
    </div>
  </div>
</template>
<style>
@import '../style/footer.css';
</style>
