<template>
  <div class="abt-info-p">
    <div class="abt-p-in">
      <h1>Tips90predict the industry's premier source for sports analysis and predictions.</h1>
      <p>
        At Tips90predict our main emphasy is providing you with a detailed analysis and prediction
        of football ,basketball,hockey and tennis among other games.Our analysis is based on
        data-driven insights, informed decision-making, risk management, and enhanced understanding
        from our expert tipsters who help empower investors and gamblers navigate uncertainty and
        anticipate potential outcomes in the game of football making you more profitable.
      </p>
    </div>
    <div class="abt-p-in">
      <h1>Tips90predict Stand Out ?</h1>
      <p>
        Our diligent team invests considerable time and effort to create well researched and
        accurate sports predictions. These predictions are formulated by thoroughly analyzing
        statistics and developing a profound understanding of matches. Rest assured, our dedicated
        experts strive to deliver reliable tips that you can confidently depend on.Our predictions
        are readily available with major betting sites including
        Unibet,sportybet,williamhill,sportpesa etc
      </p>
    </div>
    <div class="abt-p-in">
      <h1>The Importance of Using Prediction Websites.</h1>
      <p>
        Tips90predict website is significant as it helps users make informed betting decisions by
        providing predictions and insights on sports events. It saves time and effort by offering
        researched information and analysis, allowing users to quickly assess probabilities. The
        expertise of the website's team enhances users' understanding and gives them a competitive
        edge. It also helps manage risks through tools and strategies, covers a wide range of sports
        and markets, and offers tracking and analysis features. Educational resources further
        improve users' betting skills. However, predictions are not guaranteed, and responsible
        gambling practices should be followed.
      </p>
    </div>
    <div class="abt-p-in">
      <h1>Advantages of Using A Betting Prediction Website.</h1>
      <p>
        A betting prediction website can be of significant importance for individuals involved in
        sports betting or gambling. Here are some reasons why such a website holds value:
      </p>
      <ul>
        <li>
          Increased Probability of Success: A reliable betting prediction website employs experts
          and analysts who use their knowledge, expertise, and data analysis to make informed
          predictions. This increases the chances of making successful bets by providing users with
          accurate information and insights.
        </li>
        <li>
          Time and Effort Saving: Instead of spending hours researching and analyzing various
          factors affecting the outcome of a game or event, users can rely on a betting prediction
          website to provide them with pre-analyzed information. This saves time and effort,
          allowing users to focus on placing bets rather than conducting extensive research.
        </li>
        <li>
          Access to Expertise: A good betting prediction website usually has a team of professionals
          with years of experience
        </li>
      </ul>
      <p>
        As the gaming season begins, harnessing the enthusiasm for sports to enhance one's financial
        prosperity becomes crucial. This can only be achieved through the utilization of the finest
        forecasting platform worldwide. Those with aspirations to turn their visions into actuality
        are advised to explore any of the aforementioned gambling platforms.
      </p>
    </div>
    <div class="abt-p-in">
      <h1>How to place bets from our website</h1>
      <p>
        We strongly discourage placing all your money on every game listed on our platform within a
        single betting slip. Instead, we recommend focusing on 1 to 3 games per bet slip. This
        approach increases the likelihood of achieving profitable outcomes efficiently. For an even
        more exclusive and highly recommended selection of tips, we invite you to explore our VIP
        PLAN section. It provides an opportunity to generate substantial returns. By following our
        recommendations, you will embark on a journey of consistent profitability, and we are
        confident that you will never regret choosing Tips90predict.
      </p>
      <p>
        It is crucial to note that sports predictions are strictly intended for individuals aged 18
        years and above, and we do not support illegal betting activities. Engaging in sports
        predictions requires accepting the possibility of losses and taking responsibility for your
        choices. While we cannot guarantee a 100% success rate due to factors like injuries, red
        cards, and weather conditions that can impact outcomes, our analysis at Tips90predict.com a
        success rate of over 98%
      </p>
    </div>
    <div class="abt-p-in p-in">
      <h1>All The Betting Tips.</h1>
      <p>Explore our comprehensive range of free football predictions for major bet markets:</p>
      <ol>
        <li @click="goTo('Both Teams To Score')">Both Teams To Score tips</li>
        <li @click="goTo('Under 2.5 Goals')">Under 2.5 Goals tips</li>
        <li @click="goTo('Over 1.5 Goals')">Over 1.5 Goals tips</li>
        <li @click="goTo('Over 2.5 Goals')">Over 2.5 Goals tips</li>
        <li @click="goTo('Double Chance')">Double Chance tips</li>
        <li @click="goToB()">Bet Of The Day tip</li>
        <li @click="goToD()">Daily 10+ tips</li>
        <li @click="goToH()">Hockey</li>
      </ol>
    </div>
    <div class="abt-p-in">
      <h1>Summary.</h1>
      <p>
        Welcome to Tips90predict, your go-to source for precise sports betting predictions. Our
        expertise lies in football, basketball, and tennis, catering to passionate investors like
        you who seek reliable information and a chance to make money. Don't miss out on our
        exclusive VIP PLAN, designed for maximum profitability. Join us now and elevate your betting
        game!
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
  router.push({ name: 'Hockey' })
}
</script>
<style>
@import '../style/info.css';
</style>
