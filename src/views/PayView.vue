<script setup>
import InvestmentPlanCard from '../components/InvestmentPlanCard.vue'
import countriesData from '../components/countries.json'
import MoneyIcon from '../icons/payIcon.vue'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'


const route = useRoute();
const Selectedcountry = ref('')
const sport = ref('')
const reveal = ref('')
const errMsg = ref('')
const searchTerm = ref('')
const routeParamName = route.params.vipName;


const investmentPlans = ref([
  {
    id: 1,
    title: 'INVESTMENT PLAN (One Month)',
    currency: 'USD',
    amount: 50,
    description: '2.00- 3.00 Odds Daily'
  },
  {
    id: 2,
    title: 'INVESTMENT PLAN (One Week)',
    currency: 'USD',
    amount: 27,
    description: '2.00- 3.00 Odds Daily'
  },
  {
    id: 3,
    title: 'INVESTMENT PLAN (One Month)',
    currency: 'USD',
    amount: 50,
    description: '5.00- 10.00 Odds Daily'
  },
  {
    id: 4,
    title: 'INVESTMENT PLAN (One Week)',
    currency: 'USD',
    amount: 27,
    description: '5.00- 10.00 Odds Daily'
  },
])

const showPayment = () => {
  if (Selectedcountry.value === '' && sport.value === '') {
    errMsg.value = 'Empty field is not supported'
  } else if (Selectedcountry.value !== '' && Selectedcountry.value === 'KE') {
    reveal.value = 'mpesa'
  } else if (Selectedcountry.value !== '' && Selectedcountry.value === 'NG') {
    reveal.value = 'niger'
  } else if (Selectedcountry.value !== '' && Selectedcountry.value === 'GH') {
    reveal.value = 'ghana'
  } else if (Selectedcountry.value !== '' && Selectedcountry.value === 'ZA') {
    reveal.value = 'southA'
  } else if (Selectedcountry.value !== '' && Selectedcountry.value === 'TZ') {
    reveal.value = 'Tanzania'
  } else if (Selectedcountry.value !== '' && Selectedcountry.value === 'UG') {
    reveal.value = 'Uganda'
  } else if (Selectedcountry.value !== '' && Selectedcountry.value === 'ZM') {
    reveal.value = 'Zambia'
  } else if (Selectedcountry.value !== '' && Selectedcountry.value === 'RW') {
    reveal.value = 'Rwanda'
  } else if (Selectedcountry.value !== '' && Selectedcountry.value === 'IN') {
    reveal.value = 'India'
  } else if (Selectedcountry.value !== '' && Selectedcountry.value === 'MW') {
    reveal.value = 'Malawi'
  } else if (Selectedcountry.value !== '' && Selectedcountry.value === 'TZ') {
    reveal.value = 'Tanzania'
  } else {
    reveal.value = 'others'
  }
}

const filteredCountries = computed(() => {
  const term = searchTerm.value.toLowerCase()
  return countriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(term) || country.code.toUpperCase().includes(term)
  )
})
</script>

<template>
  <div class="pay-monitor" v-show="routeParamName == 'SUPREME 2+ '">
    <div class="desknav-layout">
      <desktopNav class="desk-show" />
    </div>
    <div class="pay-contain">
      <div class="pay-header">
        <div class="sport-s-contain">
          <div class="game-tips">
         
            <label class="sport-label">Choose a sport</label>
            <span>Telegram tips </span>
          </div>
          <select class="sport-selector" v-model="sport">
            <option disabled value="">Select a sport</option>
            <option class="pay-op">Football</option>
            <option class="pay-op">Tennis</option>
            <option class="pay-op">Hockey</option>
            <option class="pay-op">Basketball</option>
          </select>
          <p>{{ errMsg }}</p>
        </div>
      </div>
      <div class="pay-title">
        <span></span>
        <MoneyIcon class="icon-pay" />
        <span>Subscribe to VIP plan</span>
      </div>
      <div class="inv-comps">
        <InvestmentPlanCard
          v-for="plan in investmentPlans"
          :key="plan.id"
          :title="plan.title"
          :currency="plan.currency"
          :amount="plan.amount"
          :description="plan.description"
        />
      </div>
      <div class="pay-main">
        <div class="sport-s-contain">
          <label>Please select one</label>
          <input
            type="text"
            class="sport-selector"
            v-model="searchTerm"
            placeholder="Search country"
          />
          <select class="sport-selector" v-model="Selectedcountry">
            <option disabled value="">Select a country</option>
            <option v-for="country in filteredCountries" :key="country.code" :value="country.code">
              {{ country.name }}
            </option>
          </select>
          <button class="pay-btn" @click="showPayment">Proceed</button>
        </div>
        <p>{{ errMsg }}</p>
      </div>
      <div class="pay-info" v-if="reveal === 'others'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month</span> <br />
            Amount paid: <span>( 50 dollars , 45 Euros, $40 Pounds) </span> <br />
            Duration of <span> weekly </span> <br />
            Amount paid: <span>( 25 dollars) </span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>PAY USING SKRILL</h1>
          <p>All payments should be made ONLY to <span>tycoonsultan254@gmail.com</span></p>
        </div>
        <div class="method-pay">
          <h1>PAY USING PAYPAL</h1>
          <ul>
            <li>Go to your PayPal account</li>
            <li>Use <span>leahnyambura710@gmail.com</span></li>
          </ul>
        </div>
        <div class="method-pay">
          <h1>PAY USING NETELLER</h1>
          <ul>
            <li>Go to your NETELLER account</li>
            <li>Use <span>manuumedjs@gmail.com </span></li>
          </ul>
        </div>
        <div class="Question">
          <p>
            Please refrain from messaging those accounts! Simply complete your payment and email us
            a Screenshot of it from WhatsApp to activate.
          </p>

          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://tips44/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'mpesa'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (2,500 ksh)</span> <br />
            Weekly charges - <span>(1,200 ksh)</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>PAY USING MPESA</h1>
          <ul>
            <li>Go to your M-Pesa app</li>
            <li>Send money to <span>0743247861</span></li>
            <li>Name will be <span>HANNINGTONE ODUONG </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'niger'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (7000 Naira)</span> <br />
            Weekly charges - <span>(5000 Naira )</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <ul>
            <li>Send money to <span>SAMUEL AYODELE</span></li>
            <li>Name will be <span>7035213038 Opay</span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'ghana'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (200 Cedis)</span> <br />
            Weekly charges - <span>(105 cedis )</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <ul>
            <li>Send money to MOMO Number <span>0247192693</span></li>
            <li>MOMO Name will be <span>RICHARD BAAFI</span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'southA'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (500 Rand)</span> <br />
            Weekly charges - <span>(250 rand )</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <ul>
            <li>
              Send money to Account Number <span>1383649934</span> at <span> Capitec Bank</span>
            </li>
            <li>Name will be <span>Tamsanqa Matshitshi</span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Tanzania'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (40,000 TZS)</span> <br />
            Weekly charges - <span>(20000  TZS)</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>Using Vodacom line</h1>
          <ul>
            <li>Dial <span>*150*00#</span> while in Tanzania</li>
            <li>Send money to MPESA Kenya nambari <span> 0743247861 </span></li>
            <li>Name will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Uganda'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (80000 UGX )</span> <br />
            Weekly charges - <span>(35000 UGX)</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>Using MTN</h1>
          <ul>
            <li>Dial <span>*165#</span></li>
            <li>Send money to MPESA Kenya enter <span> 254743247861 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Zambia'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (500 Kwacha )</span> <br />
            Weekly charges - <span>(200 kwacha )</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>Airtel Money Line only</h1>
          <ul>
            <li>Dial <span>*778#</span></li>
            <li>Send money to MPESA Kenya enter <span> 254786169785 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Rwanda'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (25,000 Rwandan Franc )</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>Using MTN</h1>
          <ul>
            <li>Dial <span>*830#</span></li>
            <li>Send money to MPESA Kenya enter <span> 254743247861 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Malawi'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - ( 20,000 MWK)</span> <br />
            Weekly charges - <span>(10000 MWK)</span> <br /><span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>(international transfer) (international transfer)</h1>
          <ul>
            <li>Dial <span>*211# </span></li>
            <li>Send money to MPESA Kenya enter <span> 25786169785 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'India'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - ( 2500 Rupees)</span> <br />
            Weekly charges - <span>(1500 Rupees)</span> <br /><span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>Using Skrill</h1>
          <ul>
            <li>Dial <span>*211# </span></li>
            <li>Send money to MPESA Kenya enter<span>(254)743247861 </span></li>
            <li>Initials will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div v-else="reveal === ''">
        <div class="pay-info">
          <div class="method-head">
            <h1>PAYMENTS THROUGH WESTERN UNION, MONEYGRAM, RIA MONEY, AND WORLD REMIT</h1>
          </div>
          <div class="step-pay">
            <p>
              Please ask us for the account information over WhatsApp 0743247861 if you prefer
              sending money via Western Union, MoneyGram/Ria Money, or World Remit.
            </p>
          </div>

          <div class="method-head">
            <h1>French speaking african countries</h1>
          </div>
          <div class="step-pay">
            <p>
              Transfert d'argent Western Union Ce mode de paiement convient à 8 états indépendants
              en Afrique de l'Ouest qui sont, le Bénin🇧🇯, le Burkina Faso 🇧🇫, la Côte d'Ivoire 🇨🇮,
              le Mali🇲🇱, le Niger🇳🇪, le Sénégal🇸🇳 et le Togo 🇹🇬 L'abonnement VIP est de 15,000
              francs CFA
            </p>
          </div>
          <div class="method-head">
            <h1>PLEASE NOTE:</h1>
          </div>
          <div class="step-pay">
            <p>
              <span></span> If your
              <bold><span>preferred way of payment is not included</span></bold> in the above list,
              feel free to <span>Contact us via WhatsApp 074347861 </span> for more information. Ask
              for assistance over WhatsApp if you're having <span>trouble transacting </span> as
              well. SPEAK TO US RIGHT AWAY
            </p>
          </div>
        </div>
      </div>
    
    </div>
  </div>
  <div class="pay-monitor" v-show="routeParamName == 'MEGA ODDS'">
    <div class="desknav-layout">
      <desktopNav class="desk-show" />
    </div>
    <div class="pay-contain">
      <div class="pay-header">
        <div class="sport-s-contain">
          <div class="game-tips">
         
            <label class="sport-label">Choose a sport</label>
            <span>Telegram tips </span>
          </div>
          <select class="sport-selector" v-model="sport">
            <option disabled value="">Select a sport</option>
            <option class="pay-op">Football</option>
            <option class="pay-op">Tennis</option>
            <option class="pay-op">Hockey</option>
            <option class="pay-op">Basketball</option>
          </select>
          <p>{{ errMsg }}</p>
        </div>
      </div>
      <div class="pay-title">
        <span></span>
        <MoneyIcon class="icon-pay" />
        <span>Subscribe to VIP plan</span>
      </div>
      <div class="inv-comps">
        <InvestmentPlanCard
          v-for="plan in investmentPlans"
          :key="plan.id"
          :title="plan.title"
          :currency="plan.currency"
          :amount="plan.amount"
          :description="plan.description"
        />
      </div>
      <div class="pay-main">
        <div class="sport-s-contain">
          <label>Please select one</label>
          <input
            type="text"
            class="sport-selector"
            v-model="searchTerm"
            placeholder="Search country"
          />
          <select class="sport-selector" v-model="Selectedcountry">
            <option disabled value="">Select a country</option>
            <option v-for="country in filteredCountries" :key="country.code" :value="country.code">
              {{ country.name }}
            </option>
          </select>
          <button class="pay-btn" @click="showPayment">Proceed</button>
        </div>
        <p>{{ errMsg }}</p>
      </div>
      <div class="pay-info" v-if="reveal === 'others'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month</span> <br />
            Amount paid: <span>( 50 dollars , 45 Euros, $40 Pounds) </span> <br />
            Duration of <span> weekly </span> <br />
            Amount paid: <span>( 25 dollars) </span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>PAY USING SKRILL</h1>
          <p>All payments should be made ONLY to <span>tycoonsultan254@gmail.com</span></p>
        </div>
        <div class="method-pay">
          <h1>PAY USING PAYPAL</h1>
          <ul>
            <li>Go to your PayPal account</li>
            <li>Use <span>leahnyambura710@gmail.com</span></li>
          </ul>
        </div>
        <div class="method-pay">
          <h1>PAY USING NETELLER</h1>
          <ul>
            <li>Go to your NETELLER account</li>
            <li>Use <span>manuumedjs@gmail.com </span></li>
          </ul>
        </div>
        <div class="Question">
          <p>
            Please refrain from messaging those accounts! Simply complete your payment and email us
            a Screenshot of it from WhatsApp to activate.
          </p>

          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://tips44/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'mpesa'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (1,600 ksh)</span> <br />
            Weekly charges - <span>(800 ksh)</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>PAY USING MPESA</h1>
          <ul>
            <li>Go to your M-Pesa app</li>
            <li>Send money to <span>0743247861</span></li>
            <li>Name will be <span>HANNINGTONE ODUONG </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'niger'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (7000 Naira)</span> <br />
            Weekly charges - <span>(4000 Naira )</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <ul>
            <li>Send money to <span>SAMUEL AYODELE</span></li>
            <li>Name will be <span>7035213038 Opay</span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'ghana'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (170 Cedis)</span> <br />
            Weekly charges - <span>(100 cedis )</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <ul>
            <li>Send money to MOMO Number <span>0247192693</span></li>
            <li>MOMO Name will be <span>RICHARD BAAFI</span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'southA'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (350 Rand)</span> <br />
            Weekly charges - <span>(250 rand )</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <ul>
            <li>
              Send money to Account Number <span>1383649934</span> at <span> Capitec Bank</span>
            </li>
            <li>Name will be <span>Tamsanqa Matshitshi</span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Tanzania'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (40,000)</span> <br />
            Weekly charges - <span>(20,000 rand )</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>Using Vodacom line</h1>
          <ul>
            <li>Dial <span>*150*00#</span> while in Tanzania</li>
            <li>Send money to MPESA Kenya nambari <span> 0743247861 </span></li>
            <li>Name will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Uganda'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (50, 000 UGX )</span> <br />
            Weekly charges - <span>(30,000 UGX)</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>Using MTN</h1>
          <ul>
            <li>Dial <span>*165#</span></li>
            <li>Send money to MPESA Kenya enter <span> 254743247861 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Zambia'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (300 Kwacha )</span> <br />
            Weekly charges - <span>(150 kwacha )</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>Airtel Money Line only</h1>
          <ul>
            <li>Dial <span>*778#</span></li>
            <li>Send money to MPESA Kenya enter <span> 254786169785 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Rwanda'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - (16,000 Rwandan Franc )</span> <br />
            Duration of <span>One Week - (10,000 Rwandan Franc )</span> <br />
            <span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>Using MTN</h1>
          <ul>
            <li>Dial <span>*830#</span></li>
            <li>Send money to MPESA Kenya enter <span> 254743247861 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Malawi'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - ( 15000 MWK)</span> <br />
            Weekly charges - <span>(8000 MWK)</span> <br /><span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>(international transfer) (international transfer)</h1>
          <ul>
            <li>Dial <span>*211# </span></li>
            <li>Send money to MPESA Kenya enter <span> 25786169785 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'India'">
        <div class="info-pay-h">
          <h1>
            Duration of <span>One Month - ( 2500 Rupees)</span> <br />
            Weekly charges - <span>(1500 Rupees)</span> <br /><span>"2 - 5" odds</span> daily
          </h1>
        </div>
        <div class="step-pay">
          <h1>Login or register</h1>
          <p>Login in with Google or <span>Create an account</span></p>
        </div>
        <div class="method-head">
          <h1>Available methods of payment for your country:</h1>
        </div>
        <div class="method-pay">
          <h1>Using Skrill</h1>
          <ul>
            <li>Dial <span>*211# </span></li>
            <li>Send money to MPESA Kenya enter<span>(254)743247861 </span></li>
            <li>Initials will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="Question">
          <div class="Question-con">
            <h1>Q: How guaranteed are your games?</h1>
            <p>
              <span>Answer:</span> We have a team of top-notch well-researched/informed experts that
              score up to 95% in their accuracy rate. You are guaranteed to make substantial
              profits.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: What happens for failed predictions?</h1>
            <p>
              <span>Answer:</span> Keep in mind that in case of any loss, we will add an extra one
              day FREE as a replacement on your subscription. We will keep adding an extra day until
              you WIN! This is exclusive for VIP subscribers ONLY.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: How do I get these daily games sent to me?</h1>
            <p>
              <span>Answer:</span> We post games on our platform <span>https://predio/vip</span>.
              You need to log in on the website using your email and password or through social
              accounts to view games.
            </p>
          </div>
          <div class="Question-con">
            <h1>Q: Why don't we post results anymore?</h1>
            <p>
              <span>Answer:</span> We no longer disclose results because fraudsters take screenshots
              and swindle unsuspecting victims.
            </p>
          </div>
        </div>
      </div>
      <div v-else="reveal === ''">
        <div class="pay-info">
          <div class="method-head">
            <h1>PAYMENTS THROUGH WESTERN UNION, MONEYGRAM, RIA MONEY, AND WORLD REMIT</h1>
          </div>
          <div class="step-pay">
            <p>
              Please ask us for the account information over WhatsApp 0743247861 if you prefer
              sending money via Western Union, MoneyGram/Ria Money, or World Remit.
            </p>
          </div>

          <div class="method-head">
            <h1>French speaking african countries</h1>
          </div>
          <div class="step-pay">
            <p>
              Transfert d'argent Western Union Ce mode de paiement convient à 8 états indépendants
              en Afrique de l'Ouest qui sont, le Bénin🇧🇯, le Burkina Faso 🇧🇫, la Côte d'Ivoire 🇨🇮,
              le Mali🇲🇱, le Niger🇳🇪, le Sénégal🇸🇳 et le Togo 🇹🇬 L'abonnement VIP est de 15,000
              francs CFA
            </p>
          </div>
          <div class="method-head">
            <h1>PLEASE NOTE:</h1>
          </div>
          <div class="step-pay">
            <p>
              <span></span> If your
              <bold><span>preferred way of payment is not included</span></bold> in the above list,
              feel free to <span>Contact us via WhatsApp 074347861 </span> for more information. Ask
              for assistance over WhatsApp if you're having <span>trouble transacting </span> as
              well. SPEAK TO US RIGHT AWAY
            </p>
          </div>
        </div>
      </div>
    
    </div>
  </div>
  <div class="mobilenav-layout">
    <mobileNav />
  </div>
</template>

<style>
@import '../style/Home.css';
@import '../style/Pay.css';
</style>
