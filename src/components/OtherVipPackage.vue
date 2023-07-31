<template>
    <button class="other-p-btn" @click="goTo()">
    {{ buttonName }}
    <span> {{ buttonOdds }}</span>
    </button>
</template>

<script setup>
import { useRouter } from 'vue-router'; 

const router = useRouter();

const props = defineProps({
  buttonName: {
    type: String,
    required: true,
  },
  buttonOdds: {
    type: String,
    required: true,
  },

});



const goTo = () => {
  router.push({ name: 'Pay', params: { vipName: props.buttonName } })
}

</script>
<style>
@import '../style/other.css';
</style>
