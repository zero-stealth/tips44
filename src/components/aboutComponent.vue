<template>
  <div class="abt-info-p">
    <div class="abt-p-in">
      <h1>{{ $t('about.abt-h1') }}</h1>
      <p>
        {{ $t('about.abt-p1') }}
      </p>
    </div>
    <div class="abt-p-in">
      <h1>{{ $t('about.abt-h2') }}</h1>
      <p>
        {{ $t('about.abt-p2') }}
      </p>
    </div>
    <div class="abt-p-in">
      <h1>{{ $t('about.abt-p3') }}</h1>
      <p>
        {{ $t('about.abt-p4') }}
      </p>
    </div>
    <div class="abt-p-in">
      <h1>{{ $t('about.abt-p5') }}</h1>
      <p>
        {{ $t('about.abt-p6') }}
      </p>
      <ul>
        <li>
          {{ $t('about.abt-p7') }}
        </li>
        <li>
          {{ $t('about.abt-p8') }}
        </li>
        <li>
          {{ $t('about.abt-p9') }}
        </li>
      </ul>
      <p>
        {{ $t('about.abt-p10') }}
      </p>
    </div>
    <div class="abt-p-in">
      <h1>{{ $t('about.abt-p11') }}</h1>
      <p>
        {{ $t('about.abt-p12') }}
      </p>
      <p>
        {{ $t('about.abt-p13') }}
      </p>
    </div>
    <div class="abt-p-in p-in">
      <h1>{{ $t('about.abt-p14') }}</h1>
      <p>{{ $t('about.abt-p15') }}</p>
      <ol>
        <li @click="goTo('Both Teams To Score')">{{ $t('about.abt-p16') }}</li>
        <li @click="goTo('Under 3.5 Goals')">{{ $t('about.abt-p17') }}</li>
        <li @click="goTo('Over 1.5 Goals')">{{ $t('about.abt-p18') }}</li>
        <li @click="goTo('Over 2.5 Goals')">{{ $t('about.abt-p19') }}</li>
        <li @click="goTo('Double Chance')">{{ $t('about.abt-p20') }}</li>
        <li @click="goToB()">{{ $t('about.abt-p21') }}</li>
        <li @click="goToD()">{{ $t('about.abt-p22') }}</li>
        <li @click="goToH()">{{ $t('about.abt-p23') }}</li>
      </ol>
    </div>
    <div class="abt-p-in">
      <h1>{{ $t('about.abt-p24') }}</h1>
      <p>
        {{ $t('about.abt-p25') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (liName) => {
  router.push({ name: 'Bet', params: { betName: liName } })
}

const goToB = () => {
  router.push({ name: 'Banker' })
}

const goToD = () => {
  router.push({ name: 'Daily' })
}

const goToH = () => {
  router.push({ name: 'Basketball' })
}
</script>

<style>
@import '../style/info.css';
</style>
