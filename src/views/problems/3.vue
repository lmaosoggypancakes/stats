<template>
  <div id="main">
    <hr />
    <h1 class="title">Hercules</h1>
    <hr />
    <div class="columns">
      <div class="column is-one-quarter">
        <img
          src="@/assets/hercules.jpg"
          height="200"
          width="200"
          style="float: left"
        />
      </div>
      <div class="column">
        <p class="hello-jerry">
          Hercules is an adorable little pomeranian that likes to find the
          biggest dog he can find and square off with them (He lives up to the
          name!).<br />
          However, there have been anonymous reports from various witnesses that
          Hercules tends to act crankier than usual (by way of excessively
          barking) when he doesn't get a treat that day.
        </p>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="columns">
      <div class="column">
        <p class="p1">
          Additionally, people have been suspicious that Hercules likes to bark
          more often when he hasn't had a treat that day!<br />
          It has been estimated through very careful statistical procedures that
          the probability that Hercules does not get a treat on any given day is
          0.6.<br />
          Furthermore, if hercules gets a treat, the probability that he
          excessively barks if 0.9 - if he does get a treat, then that
          probability is 0.4.
        </p>
      </div>
      <div class="column is-one-quarter">
        <img
          src="@/assets/the_poop_culprit.jpg"
          height="400"
          width="400"
          style="float: left"
        />
      </div>
    </div>
    <hr />
    <div class="round">
      <p>
        It can be concluded, then, that a tree diagram can represent these
        conditional probabilities.<br />
        <img class="tree" src="@/assets/bark.png" />
        For the following questions, leave all answers to the nearest 100th.<br />
        Example: <strong>0.522</strong>
        <br />
        Be sure to include the beginning 0! .522 or .52 will not be counted as a
        correct answer!
      </p>
    </div>
    <!--∪  ∩-->
    <div class="questions">
      <div class="columns">
        <div class="column">
          <p>
            What is the probability that Hercules didn't receive a treat on a
            random day, <strong>and</strong> barked excessively?
          </p>
          <br />
          <p class="q1">P(Treat<sup>C</sup> ∩ Bark ) =</p>
        </div>
        <div class="column is-one-fifth">
          <b-field :type="status.q1">
            <b-input rounded v-model="q1"></b-input>
          </b-field>
        </div>
        <div class="column is-one-fifth">
          <button class="button" @click="check('q1', q1)">Check</button>
        </div>
      </div>
      <br />
      <br />
      <b-collapse :open="false" aria-id="contentIdForA11y1">
        <template #trigger>
          <b-button
            label="View Answer"
            type="is-primary"
            aria-controls="contentIdForA11y1"
          />
        </template>
        <div class="notification">
          <div class="content">
            <p>
              From the tree diagram, we can simply multiply P(Treat<sup>C</sup>)
              by P(Bark | Treat<sup>C</sup>), which follows the formula for
              intersection probability of dependent events P(A ∩ B) = P(A) * P(B
              | A)<br />
              Therefore, P(Treat<sup>C</sup> ∩ Bark ) = 0.6 * 0.9 =
              <strong>0.540</strong>
            </p>
          </div>
        </div>
      </b-collapse>
      <br />
      <br />
      <div class="columns">
        <div class="column">
          <p>
            Given that Hercules received a treat that day, what is the
            probability that he doesn't bark?
          </p>
          <br />
          <p class="q2">P(Bark<sup>C</sup> | Treat) =</p>
        </div>
        <div class="column is-one-fifth">
          <b-field :type="status.q2">
            <b-input rounded v-model="q2"></b-input>
          </b-field>
        </div>
        <div class="column is-one-fifth">
          <button class="button" @click="check('q2', q2)">Check</button>
        </div>
      </div>
      <br />
      <br />
      <b-collapse :open="false" aria-id="contentIdForA11y1">
        <template #trigger>
          <b-button
            label="View Answer"
            type="is-primary"
            aria-controls="contentIdForA11y1"
          />
        </template>
        <div class="notification">
          <div class="content">
            <p>
              From the tree diagram, we know that P(Bark<sup>C</sup> |
              Treat<sup>C</sup>) = 0.4. Therefore, the complement of this should
              be equal to 1 - P(Bark<sup>C</sup> | Treat)! Note that the
              complement of an event A is represented as P(A<sup>C</sup>), which
              is equal to 1 - P(A) <br />
              P(Bark<sup>C</sup> | Treat) = 1 - 0.4 = <strong>0.600</strong>
            </p>
          </div>
        </div>
      </b-collapse>
      <br />
      <br />
      <div class="columns">
        <div class="column">
          <p>What is the probability that Hercules barks?</p>
          <br />
          <p class="q2">P(Bark) =</p>
        </div>
        <div class="column is-one-fifth">
          <b-field :type="status.q3">
            <b-input rounded v-model="q3"></b-input>
          </b-field>
        </div>
        <div class="column is-one-fifth">
          <button class="button" @click="check('q3', q3, this)">Check</button>
        </div>
      </div>
      <br />
      <br />
      <b-collapse :open="false" aria-id="contentIdForA11y1">
        <template #trigger>
          <b-button
            label="View Answer"
            type="is-primary"
            aria-controls="contentIdForA11y1"
          />
        </template>
        <div class="notification">
          <div class="content">
            <p>
              We can find this probability by taking the sum of all cases where
              Hercules barks. In this case, that's P(Treat<sup>C</sup> ∩ Bark )
              and P(Treat<sup>C</sup> ∩ Bark)<br />. Therefore, we use our
              answer from 1) and the tree diagram to calculate this sum: P(Bark)
              = P(Treat<sup>C</sup> ∩ Bark ) + P(Treat<sup>C</sup> ∩ Bark) =
              0.540 + P(Treat<sup>C</sup> ∩ Bark) <br />
              In order to calculate this intersection, we first need to find
              P(Treat<sup>C</sup>) by taking the complement of P(Treat), giving
              us 1 - 0.6 = 0.4 Therefore, P(Treat<sup>C</sup> ∩ Bark) =
              P(Treat<sup>C</sup>) * P(Bark | Treat<sup>C</sup>) = 0.4 * 0.4 =
              0.16 Lastly, taking the sum of these two probabilies gives us 0.16
              + 0.54 = <strong>0.700</strong>
            </p>
          </div>
        </div>
      </b-collapse>
      <br />
      <br />
      <div class="columns">
        <div class="column">
          <p>
            If Hercules didn't bark, what is the probability that he received a
            treat that day?
          </p>
          <br />
          <p class="q2">P(Treat | Bark<sup>C</sup>) =</p>
        </div>
        <div class="column is-one-fifth">
          <b-field :type="status.q4">
            <b-input rounded v-model="q4"></b-input>
          </b-field>
        </div>
        <div class="column is-one-fifth">
          <button class="button" @click="check('q4', q4)">Check</button>
        </div>
      </div>
      <br />
      <br />
      <b-collapse :open="false" aria-id="contentIdForA11y1">
        <template #trigger>
          <b-button
            label="View Answer"
            type="is-primary"
            aria-controls="contentIdForA11y1"
          />
        </template>
        <div class="notification">
          <div class="content">
            <p>
              Find P(Bark<sup>C</sup>) by taking the complement of P(Bark) from
              the last problem, giving us 1 - 0.7 = 0.3. We also know that we
              can find P(A | B) by dividing P(A ∩ B) by P(B). Therefore, <br />
              P(Bark<sup>C</sup> ∩ Treat) = 0.6 * 0.4 = 0.24 Lastly, P(Treat |
              Bark<sup>C</sup>) = 0.24 / P(Bark<sup>C</sup>) = 0.24 / 0.3 =
              <strong>0.800</strong>
            </p>
          </div>
        </div>
      </b-collapse>
      <br />
      <br />
    </div>
  </div>
</template>
<script lang="ts">
const ANSWERS = {
  q1: 0.54,
  q2: 0.6,
  q3: 0.7,
  q4: 0.8,
};
import { HAS_KEY } from "@/constants";
import Vue from "vue";
export default Vue.extend({
  name: "two",
  data() {
    return {
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
      status: {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
      },
    };
  },
  mounted() {
    console.log(ANSWERS);
  },
  methods: {
    check(q: string, answer: number): void {
      if (HAS_KEY(ANSWERS, q)) {
        if (ANSWERS[q] == answer) {
          this.status[q] = "is-success";
        } else {
          this.status[q] = "is-danger";
        }
      }
    },
  },
});
</script>

<style scoped>
.column.is-one-fifth {
  margin-top: auto;
}
.q1,
.q2,
.q3 {
  float: left;
}
.questions p {
  font-size: 1em;
  text-align: left;
}
.p1 {
  text-align: right;
}
.p2 {
  text-align: left;
}
p {
  margin-left: 1em;
  font-size: 1.5em;
}
.hello-jerry {
  text-align: left;
  float: left;
}
.round {
  margin-bottom: 5em;
}
.tree {
  width: 100%;
  margin-bottom: 3em;
  margin-top: 3em;
}
</style>
