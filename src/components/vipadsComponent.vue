<template>
  <div class="ads-v-main">
    <!-- <img :src="VipAds" alt="vip ads" class="vip-adsA"> -->
    <div class="m1-ads">
      <p>
        {{ $t('vipads.vpad-p1') }}
      </p>
      <div class="m1-ads-info">
        <h2>{{ $t('vipads.vpad-h1') }}</h2>
        <div class="vip-results-d">
          <div class="vip-results-pn" v-for="data in vipResultData.slice(0, 6)" :key="data._id">
            <h1>{{ ShowName(data.gameName) }}</h1>
            <div class="vip-results-cont">
              <span>{{ ShowDate(data.gameName) }}</span>
              <div class="results-s">
                <PassedIcon class="icon-rs icon-won" v-if="data.gameScore === 'Passed'" />
                <FailedIcon class="icon-rs icon-fail" v-else-if="data.gameScore === 'Failed'" />
                <CanceledIcon class="icon-rs icon-cancel" v-else-if="data.gameScore === 'Cancel'" />
                <EmptyIcon class="icon-rs" v-else />
              </div>
            </div>
          </div>
        </div>
        <button class="ads-m-btn" @click="goPay">{{ $t('vipads.vpad-btn1') }}</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios'
import PassedIcon from '../icons/PassedIcon.vue'
import FailedIcon from '../icons/FailedIcon.vue'
import EmptyIcon from '../icons/emptyIcon.vue'
import CanceledIcon from '../icons/canceledIcon.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// import VipAds from '../assets/vipads.png'





const router = useRouter()
const vipResultData = ref([])
const SERVER_HOST = import.meta.env.VITE_SERVER_HOST


const goPay = () => {
  router.push({ name: 'Pay', params: { vipName: 'Supreme VIP' } })
  scrollToTop()

}
const ShowDate = (gameName) => {
  const matches = gameName.match(/\((\d{1,2}\/\d{1,2})\)/)
  return matches ? matches[1] : gameName
}

const ShowName = (gameName) => {
  const matches = gameName.match(/(.+)(?:\(\d{1,2}\/\d{1,2}\))/)
  return matches ? matches[1] : gameName
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const getVipResult = async () => {
  try {
    const response = await axios.get(`${SERVER_HOST}/score/`)
    vipResultData.value = response.data
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getVipResult()
})
</script>

<style>
@import '../style/vipads.css';
</style>
