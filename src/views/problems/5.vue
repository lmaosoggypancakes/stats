<template>
  <div id="main">
    <hr />
    <h1 class="title">Pizza!</h1>
    <hr />
    <div class="columns">
      <div class="column is-one-quarter">
        <img
          src="@/assets/pizza.jpg"
          height="200"
          width="200"
          style="float: left"
        />
      </div>
      <div class="column">
        <p class="hello-jerry">
          Josef likes to eat pizza. To investigate just how often Josef eats
          pizza, statistical procedures were taken to provide an estimate of the
          probability that on any given week, Josef eats pizza. For now, let's
          assume that this probability is <strong>p = 0.6.</strong>
        </p>
      </div>
    </div>
    <div class="questions">
      <div class="columns">
        <div class="column">
          <p>
            What is the expected number of weeks that would pass until Josef
            eats a pizza?
          </p>
          <br />
          <p class="q1">
            <strong>&mu;<sub>X</sub> = </strong>
          </p>
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
              We have a binomial distribution with <strong>p = 0.6</strong>. To
              find the expected count, we use &mu;<sub>p</sub> = 1 / p.
              Therefore, &mu;<sub>p</sub> = 1 / 0.6 =
              <strong>1.66 weeks</strong>
            </p>
          </div>
        </div>
      </b-collapse>

      <div class="columns">
        <div class="column">
          <p>
            What is the probability that Josef eats his first pizza after 4
            weeks?
          </p>
          <br />
          <p class="q2">
            <strong>P(X = 4)</strong>
          </p>
        </div>
        <div class="column is-one-fifth">
          <b-field :type="status.q2">
            <b-input rounded v-model="q2"></b-input>
          </b-field>
        </div>
        <div class="column is-one-fifth">
          <button class="button" @click="check('q2', q2, this)">Check</button>
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
              To find this probability we use the formula P(X = x) = (1 -
              p)<sup>x-1</sup>p, where x is the number of weeks and p is the
              proportion.<br />
              Therefore, P(X = 4) = (1 - 0.6)<sup>4-1</sup>(0.6), where p = 0.6
              and x = 4. P(X = 4) = <strong>0.0384</strong>
            </p>
          </div>
        </div>
      </b-collapse>
    </div>

    <br />
    <hr />
    <br />

    <div class="columns">
      <div class="column">
        <p class="p1">
          Let's say that a local pizza place called "Jerry's Pizzeria" decides
          to host a prize of a pizza costume for your pet dog, if you eat at
          least 30 pizzas in one year. Josef really can't wait to see Hercules
          walking around in a pizza costume, so he decides to sign up.
        </p>
      </div>
      <div class="column is-one-quarter">
        <img
          src="@/assets/costume.jpg"
          height="400"
          width="400"
          style="float: left"
        />
      </div>
    </div>
    <div>
      <p>
        It looks like we know have a binomial setting with n = 52 and p = 0.6!
      </p>
    </div>
    <br />
    <hr />
    <div class="questions">
      <div class="columns">
        <div class="column">
          <p>
            What is the probability that Josef wins the reward by eating at
            least 30 pizzas in one year, assuming he limits himself to at most
            one pizza a year and the fact that there are 52 weeks in a year?
          </p>
          <br />
          <p class="q3"><strong>P(X &GreaterEqual; 30) =</strong></p>
        </div>
        <div class="column is-one-fifth">
          <b-field :type="status.q3">
            <b-input rounded v-model="q3"></b-input>
          </b-field>
        </div>
        <div class="column is-one-fifth">
          <button class="button" @click="check('q3', q3)">Check</button>
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
              In order to calculate P(X &GreaterEqual; 30), we need to take the
              sum of P(X = n) for all values of n from 30 to 52.<br />
              You may recall the formula for P(X = x) in a binomial setting
              being P(X = x) = (n choose x) * p<sup>x</sup>(1 - p)<sup
                >n - x</sup
              >
              In this case, n = 52 and p = 0.6. Therefore, P(X &GreaterEqual;
              30) = (52 choose 30) * p<sup>30</sup>(1 - p)<sup>52 - 30</sup> +
              (52 choose 31) * p<sup>31</sup>(1 - p)<sup>52 - 31</sup> + ... +
              (52 choose 52) * p<sup>30</sup>(1 - p)<sup>52 - 52</sup> =
              <strong>0.687</strong> This process is tedious! That's why you can
              also use the <code>binomcdf</code> command for these purposes. In
              this case, P(X &GreaterEqual; 30) = 1 -
              <code>binomcdf(52, 0.6, 29)</code>
            </p>
          </div>
        </div>
      </b-collapse>
      <br />
      <br />
      <div class="columns">
        <div class="column">
          <p>
            What is the expected values of pizzas eaten in a year if Josef
            limits himself to one pizza a week with a probability of 0.6?
          </p>
          <br />
          <p class="q4">
            <strong>&mu;<sub>X</sub> = </strong>
          </p>
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
              We can calculate the mean (expected count) of a binomial
              distribution by the formula &mu;<sub>X</sub> = np. Here, n = 52
              and p = 0.6. Therefore, 52(0.6) = <strong>31.2</strong>
            </p>
          </div>
        </div>
      </b-collapse>
      <div class="indep">
        <p>
          Can Josef <i>expect</i> to win the Pizza costume for Hercules this
          year?
        </p>
        <div class="columns">
          <div class="column">
            <button
              class="button mcq"
              onclick="this.className = 'button is-success mcq'"
            >
              Yes, because the expected count (31.2) is greater than 30.
            </button>
          </div>
          <div class="column">
            <button
              class="button mcq"
              onclick="this.className = 'button is-danger mcq'"
            >
              Yes, because P(X &GreaterEqual; 30) is not statistically
              significant
            </button>
          </div>
          <div class="column">
            <button
              class="button mcq"
              onclick="this.className = 'button is-danger mcq'"
            >
              No, because Josef needs to stop eating pizzas.
            </button>
          </div>
          <div class="column">
            <button
              class="button mcq"
              onclick="this.className = 'button is-danger mcq'"
            >
              Increase Sample Size
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
const ANSWERS = {
  q1: 1.66,
  q2: 0.0384,
  q3: 0.687,
  q4: 31.2,
};
import { HAS_KEY } from "@/constants";
import Vue from "vue";
export default Vue.extend({
  name: "one",
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
      data: [
        {
          name: "Josef",
          under: 17,
          over: 14,
          par: 5,
          total: 36,
        },
        {
          name: "Mikeal",
          under: 16,
          over: 16,
          par: 4,
          total: 36,
        },
      ],
      columns: [
        {
          field: "name",
          label: "Name",
        },
        {
          field: "under",
          label: "Under Par",
        },
        {
          field: "par",
          label: "Par",
        },
        {
          field: "over",
          label: "Over Par",
        },
        {
          field: "total",
          label: "Total",
        },
      ],
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
.mcq {
  height: 5em;
  font-size: 1em;
  white-space: normal;
}
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
</style>
