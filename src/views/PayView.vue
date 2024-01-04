<script setup>
import countriesData from '../components/countries.json'
import MoneyIcon from '../icons/payIcon.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const Selectedcountry = ref('')
const sport = ref('')
const reveal = ref('')
const errMsg = ref('')
const routeParamName = route.params.vipName

const goVip = () => {
  router.push({ name: 'Vip' })
}

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
  } else {
    reveal.value = 'others'
  }
}
</script>

<template>
  <div class="pay-monitor" v-if="routeParamName == 'Supreme VIP'">
    <div class="desknav-layout">
      <desktopNav class="desk-show" />
    </div>
    <div class="pay-contain">
      <div class="pay-title">
        <span></span>
        <MoneyIcon class="icon-pay" />
        <h1>{{ $t('pay.span1') }} <span @click="goVip"> {{ $t('pay.span15') }}</span></h1>
      </div>
      <div class="pay-main-x">
        <h1> 
          <span>{{ $t('pay.span2') }} </span>
          {{ $t('pay.h1-1') }} 
        </h1>
        <li>{{ $t('pay.p1') }}</li> 
        <li>{{ $t('pay.p2') }}</li>   
      </div>
      <div class="pay-main">
        <div class="sport-s-contain">
          <label>{{ $t('pay.op') }} </label>

          <select class="sport-selector" v-model="Selectedcountry">
            <option disabled value="">country...</option>
            <option v-for="country in countriesData" :key="country.code" :value="country.code">
              {{ country.name }}
            </option>
          </select>
          <button class="pay-btn" @click="showPayment">{{ $t('pay.btn1') }}</button>
        </div>
        <p>{{ errMsg }}</p>
      </div>
      <div class="pay-info" v-if="reveal === 'others'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: ( 50 dollars , 45 Euros, $40 Pounds) <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: ( 25 dollars) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>{{ $t('pay.h1-4') }}</h1>
          <p>{{ $t('pay.p3') }} <span>tycoonsultan254@gmail.com</span></p>
        </div> 
        <div class="method-pay">
          <h1>{{ $t('pay.h1-6') }}</h1>
          <ul>
            <li>{{ $t('pay.li20') }}</li>
            <li>{{ $t('pay.li2') }} <span>leahnyambura710@gmail.com</span></li>
          </ul>
        </div>{{ $t('pay.li21') }}
        <div class="method-pay">
          <h1>{{ $t('pay.h1-12') }}</h1>
          <ul>
            <li>{{ $t('pay.li21') }}</li>
            <li>{{ $t('pay.li2') }} <span>manuumedjs@gmail.com </span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'mpesa'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (2,500 ksh) <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (1,200 ksh) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>{{ $t('pay.h1-13') }}</h1>
          <ul>
            <li>{{ $t('pay.li22') }}</li>
            <li>{{ $t('pay.li23') }} <span>0743247861</span></li>
            <li>{{ $t('pay.li24') }} <span>HANNINGTONE ODUONG </span></li>
          </ul>
        </div>
        <div class="extra-container">
          <div class="extra-v">
            <div class="Question">
              <div class="Question-con">
                <h1>{{ $t('pay.h1-7') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span6') }}.
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-8') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span>{{ $t('pay.span8') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-10') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span9') }}
                  <span>{{ $t('pay.span10') }}</span>. {{ $t('pay.span11') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-11') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span12') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'niger'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (7000 Naira) <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (5000 Naira) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <ul>
            <li>{{ $t('pay.li24') }}<span>SAMUEL AYODELE</span></li>
            <li>{{ $t('pay.li23') }} <span>7035213038 Opay</span></li>
          </ul>
        </div>
        <div class="extra-container">
          <div class="extra-v">
            <div class="Question">
              <div class="Question-con">
                <h1>{{ $t('pay.h1-7') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span6') }}.
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-8') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span>{{ $t('pay.span8') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-10') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span9') }}
                  <span>{{ $t('pay.span10') }}</span>. {{ $t('pay.span11') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-11') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span12') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'ghana'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (200 Cedis) <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (105 cedis) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <ul>
            <li>{{ $t('pay.li23') }} MOMO Number <span>0247192693</span></li>
            <li>MOMO {{ $t('pay.li24') }} <span>RICHARD BAAFI</span></li>
          </ul>
        </div>
        <div class="extra-container">
          <div class="extra-v">
            <div class="Question">
              <div class="Question-con">
                <h1>{{ $t('pay.h1-7') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span6') }}.
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-8') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span>{{ $t('pay.span8') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-10') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span9') }}
                  <span>{{ $t('pay.span10') }}</span>. {{ $t('pay.span11') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-11') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span12') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'southA'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: ( 600 Rands) <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (  600 Rands) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>{{ $t('pay.h1-4') }}</h1>
          <p>{{ $t('pay.p3') }} <span>tycoonsultan254@gmail.com</span></p>
        </div> 
        <div class="method-pay">
          <h1>{{ $t('pay.h1-6') }}</h1>
          <ul>
            <li>{{ $t('pay.li20') }}</li>
            <li>{{ $t('pay.li2') }} <span>leahnyambura710@gmail.com</span></li>
          </ul>
        </div>{{ $t('pay.li21') }}
        <div class="method-pay">
          <h1>{{ $t('pay.h1-12') }}</h1>
          <ul>
            <li>{{ $t('pay.li21') }}</li>
            <li>{{ $t('pay.li2') }} <span>manuumedjs@gmail.com </span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Tanzania'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (40,000 TZS) <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (20000 TZS) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>Using Vodacom line</h1>
          <ul>
            <li>Dial <span>*150*00#</span> while in Tanzania</li>
            <li>{{ $t('pay.li23') }} MPESA Kenya nambari <span> 0743247861 </span></li>
            <li>{{ $t('pay.li24') }} <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="extra-container">
          <div class="extra-v">
            <div class="Question">
              <div class="Question-con">
                <h1>{{ $t('pay.h1-7') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span6') }}.
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-8') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span>{{ $t('pay.span8') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-10') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span9') }}
                  <span>{{ $t('pay.span10') }}</span>. {{ $t('pay.span11') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-11') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span12') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Uganda'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (80000 UGX ) <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (35000 UGX) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>Using MTN</h1>
          <ul>
            <li>Dial <span>*165#</span></li>
            <li>{{ $t('pay.li23') }} MPESA Kenya enter <span> 254743247861 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="extra-container">
          <div class="extra-v">
            <div class="Question">
              <div class="Question-con">
                <h1>{{ $t('pay.h1-7') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span6') }}.
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-8') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span>{{ $t('pay.span8') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-10') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span9') }}
                  <span>{{ $t('pay.span10') }}</span>. {{ $t('pay.span11') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-11') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span12') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Zambia'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (500 Kwacha ) <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (200 kwacha) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>Airtel Money Line only</h1>
          <ul>
            <li>Dial <span>*778#</span></li>
            <li>{{ $t('pay.li23') }} MPESA Kenya enter <span> 254786169785 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="extra-container">
          <div class="extra-v">
            <div class="Question">
              <div class="Question-con">
                <h1>{{ $t('pay.h1-7') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span6') }}.
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-8') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span>{{ $t('pay.span8') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-10') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span9') }}
                  <span>{{ $t('pay.span10') }}</span>. {{ $t('pay.span11') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-11') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span12') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Rwanda'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (25,000 Rwandan Franc ) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>Using MTN</h1>
          <ul>
            <li>Dial <span>*830#</span></li>
            <li>{{ $t('pay.li23') }} MPESA Kenya enter <span> 254743247861 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="extra-container">
          <div class="extra-v">
            <div class="Question">
              <div class="Question-con">
                <h1>{{ $t('pay.h1-7') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span6') }}.
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-8') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span>{{ $t('pay.span8') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-10') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span9') }}
                  <span>{{ $t('pay.span10') }}</span>. {{ $t('pay.span11') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-11') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span12') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Malawi'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (20,000 MWK) <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (10000 MWK) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>(international transfer) (international transfer)</h1>
          <ul>
            <li>Dial <span>*211# </span></li>
            <li>{{ $t('pay.li23') }} MPESA Kenya enter <span> 25786169785 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="extra-container">
          <div class="extra-v">
            <div class="Question">
              <div class="Question-con">
                <h1>{{ $t('pay.h1-7') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span6') }}.
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-8') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span>{{ $t('pay.span8') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-10') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span9') }}
                  <span>{{ $t('pay.span10') }}</span>. {{ $t('pay.span11') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-11') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span12') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'India'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (2500 Rupees) <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              2 - 5 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (1500 Rupees) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>Using Skrill</h1>
          <ul>
            <li>Dial <span>*211# </span></li>
            <li>{{ $t('pay.li23') }} MPESA Kenya enter<span>(254)743247861 </span></li>
            <li>Initials will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
        <div class="extra-container">
          <div class="extra-v">
            <div class="Question">
              <div class="Question-con">
                <h1>{{ $t('pay.h1-7') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span6') }}.
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-8') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span>{{ $t('pay.span8') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-10') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span9') }}
                  <span>{{ $t('pay.span10') }}</span>. {{ $t('pay.span11') }}
                </p>
              </div>
              <div class="Question-con">
                <h1>{{ $t('pay.h1-11') }}</h1>
                <p>
                  <span>{{ $t('pay.span5') }}:</span> {{ $t('pay.span12') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else></div>
    </div>
  </div>
  <!-- <div class="pay-monitor" v-else-if="routeParamName == 'MEGA ODDS'"> 
    <div class="desknav-layout">
      <desktopNav class="desk-show" />
    </div>
    <div class="pay-contain">
      <div class="pay-header">
        <div class="sport-s-contain">
          <div class="game-tips">
          <select class="sport-selector" v-model="sport">
            <option disabled value="">Select a sport</option>
            <option class="pay-op">Football</option>
            <option class="pay-op">Basketball</option>
          </select>
          <p>{{ errMsg }}</p>
        </div>
      </div>
      <div class="pay-title">
        <span></span>
        <MoneyIcon class="icon-pay" />
        <h1>{{ $t('pay.span1') }} <span @click="goVip" > {{ $t('pay.span15') }}</span></h1> 
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
          <button class="pay-btn" @click="showPayment">{{ $t('pay.btn1') }}</button>
        </div>
        <p>{{ errMsg }}</p>
      </div>
      <div class="pay-info" v-if="reveal === 'others'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: ( 50 dollars , 45 Euros, $40 Pounds)  <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: ( 25 dollars) <br />
            </h1>
          </div>
        </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>{{ $t('pay.h1-4') }}</h1>
          <p>{{ $t('pay.p3') }} <span>tycoonsultan254@gmail.com</span></p>
        </div>
        <div class="method-pay">
          <h1>{{ $t('pay.h1-6') }}</h1>
          <ul>
            <li>{{ $t('pay.li20') }}</li>
            <li>{{ $t('pay.li2') }} <span>leahnyambura710@gmail.com</span></li>
          </ul>
        </div>
        <div class="method-pay">
          <h1>{{ $t('pay.h1-12') }}</h1>
          <ul>
            <li>{{ $t('pay.li21') }}</li>
            <li>{{ $t('pay.li2') }} <span>manuumedjs@gmail.com </span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'mpesa'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (1,600 ksh)  <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (800 ksh) <br />
            </h1>
          </div>
          </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>{{ $t('pay.h1-13') }}</h1>
          <ul>
            <li>{{ $t('pay.li22') }}</li>
            <li>{{ $t('pay.li23') }} <span>0743247861</span></li>
            <li>{{ $t('pay.li24') }} <span>HANNINGTONE ODUONG </span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'niger'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (7000 Naira)  <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (4000 Naira) <br />
            </h1>
          </div>
          </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <ul>
            <li>{{ $t('pay.li24') }}<span>SAMUEL AYODELE</span></li>
            <li> {{ $t('pay.li23') }}  <span>7035213038 Opay</span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'ghana'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (170 Cedis)  <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              5 - 10{{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (100 cedis) <br />
            </h1>
          </div>
          </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <ul>
            <li>{{ $t('pay.li23') }} MOMO Number <span>0247192693</span></li>
            <li>MOMO {{ $t('pay.li24') }} <span>RICHARD BAAFI</span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'southA'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (350 Rand)  <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (250 rand) <br />
            </h1>
          </div>
          </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <ul>
            <li>
              {{ $t('pay.li23') }} {{ $t('pay.spanh1') }} <span>1383649934</span> at <span> Capitec Bank</span>
            </li>
            <li>{{ $t('pay.li24') }} <span>Tamsanqa Matshitshi</span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Tanzania'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (40,000 TZS)  <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (20,000 TZS) <br />
            </h1>
          </div>
          </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>Using Vodacom line</h1>
          <ul>
            <li>Dial <span>*150*00#</span> while in Tanzania</li>
            <li>{{ $t('pay.li23') }} MPESA Kenya nambari <span> 0743247861 </span></li>
            <li>{{ $t('pay.li24') }} <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Uganda'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (50, 000 UGX)  <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (30,000 UGXX) <br />
            </h1>
          </div>
          </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>Using MTN</h1>
          <ul>
            <li>Dial <span>*165#</span></li>
            <li>{{ $t('pay.li23') }} MPESA Kenya enter <span> 254743247861 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Zambia'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (300 Kwacha  )  <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (150 kwacha) <br />
            </h1>
          </div>
          </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>Airtel Money Line only</h1>
          <ul>
            <li>Dial <span>*778#</span></li>
            <li>{{ $t('pay.li23') }} MPESA Kenya enter <span> 254786169785 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Rwanda'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (16,000 Rwandan Franc  )  <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (10,000 Rwandan Franc  )  <br />
            </h1>
          </div>
          </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>Using MTN</h1>
          <ul>
            <li>Dial <span>*830#</span></li>
            <li>{{ $t('pay.li23') }} MPESA Kenya enter <span> 254743247861 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'Malawi'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (15000 MWK)  <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (8000 MWK) <br />
            </h1>
          </div>
          </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>(international transfer) (international transfer)</h1>
          <ul>
            <li>Dial <span>*211# </span></li>
            <li>{{ $t('pay.li23') }} MPESA Kenya enter <span> 25786169785 </span></li>
            <li>Call sign will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
      </div>
      <div class="pay-info" v-else-if="reveal === 'India'">
        <div class="info-pay-h">
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br2') }} <br />
              {{ $t('pay.br3') }}: (2500 Rupees)  <br />
            </h1>
          </div>
          <div class="pay-card-h">
            <h1>
              5 - 10 {{ $t('pay.br1') }} <br />
              {{ $t('pay.br4') }} <br />
              {{ $t('pay.br3') }}: (1500 Rupees) <br />
            </h1>
          </div>
          </div>
        <div class="method-head">
          <h1>{{ $t('pay.h1-3') }}</h1>
        </div>
        <div class="method-pay">
          <h1>Using Skrill</h1>
          <ul>
            <li>Dial <span>*211# </span></li>
            <li>{{ $t('pay.li23') }} MPESA Kenya enter<span>(254)743247861 </span></li>
            <li>Initials will be <span>HANNINGTONE ODUONG’ </span></li>
          </ul>
        </div>
      </div>
      <div v-else></div>
    </div>
  </div> -->
  <div v-else></div>
</template>
<style>
@import '../style/Home.css';
@import '../style/Pay.css';
</style>
