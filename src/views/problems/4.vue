<template>
  <div id="main">
    <hr />
    <h1 class="title">Josef watches TV</h1>
    <hr />
    <div class="columns">
      <div class="column is-one-quarter">
        <img
          src="@/assets/tv.png"
          height="200"
          width="200"
          style="float: left"
        />
      </div>
      <div class="column">
        <p class="hello-jerry">
          Josef likes to watch TV. Maybe too much for his own good. He's the
          kind of guy to sit down and finish a whole season in one day. Let J be
          a discrete random variable that Josef watches at least 3 episodes each
          day for a week. A table is shown below.
        </p>
      </div>
    </div>
    <br />
    <b-table :data="dataj" :columns="columns"></b-table>
    <div class="questions">
      <div class="columns">
        <div class="column">
          <p>
            What is the expected number of days per week what Josef watches at
            least 3 shows of a TV series in one day?
          </p>
          <br />
          <p class="q1">
            <strong>&mu;<sub>J</sub> = </strong>
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
              The formula of the mean of a discrete random variable is
              <strong>∑x<sub>i</sub> * p(x<sub>i</sub>).</strong><br />
              We can apply this formula to the table by multiplying each count
              by their respective probabilies, and take the sum!<br />
              <strong>&mu;<sub>J</sub> = </strong> 0(0.01) + 1(0.03) + ... +
              7(0.02) = <strong>3.93</strong>
            </p>
          </div>
        </div>
      </b-collapse>
      <div class="columns">
        <div class="column">
          <p>
            What is the standard deviation of the number of days per week that
            Josef watches at least 3 TV episodes?
          </p>
          <br />
          <p class="q2">
            <strong>&sigma;<sub>J</sub> = </strong>
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
              The formula for the standard deviation of a random variable X is
              &#8730;∑(x<sub>i</sub> - &mu;<sub>x</sub>)<sup>2</sup>p<sub
                >i</sub
              >
              Therefore, we can subtract each X value from the mean, take the
              square, and multiply the resuly by its corresponding probability:
              &sigma;<sub>J</sub> = &#8730;(0 - 3.93)<sup>2</sup>(0.01) + ... +
              (7 - 3.93)<sup>2</sup>(0.02) = <strong>1.88</strong>
            </p>
          </div>
        </div>
      </b-collapse>
    </div>
    <hr />
    <br />
    <div class="columns">
      <div class="column">
        <p class="p1">
          However, Mikeal (Josef's twin brother) isn't a huge fan of TV and
          would rather do other things that aren't as cool. Let M by the
          discrete random variable representing the probability distribution of
          Mikeal watching at least 1 episode per day for a week. The mean number
          of days per week that he watches at least 1 TV show per day is
          &mu;<sub>M</sub> = 1.24 with a standard deviation &sigma;<sub>M</sub>
          = 0.32.
        </p>
      </div>
      <div class="column is-one-quarter">
        <img
          src="@/assets/tv1.jpg"
          height="400"
          width="400"
          style="float: left"
        />
      </div>
    </div>
    <div class="indep">
      <p>
        What do we need to assume in order to calculate the differences or sum
        of these random variables?
      </p>
      <div class="columns">
        <div class="column">
          <button class="button" onclick="this.className = 'button is-success'">
            Independence
          </button>
          <button class="button" onclick="this.className = 'button is-danger'">
            Increase Sample Size
          </button>
        </div>
      </div>
    </div>
    <div class="round">
      <p>
        We can find the difference of the two means by simply subtracting the
        latter from the former. In this case, &mu;<sub>J - M</sub> = 3.93 - 1.24
        = <strong>2.69</strong>. Also, it's possible to calculate the sum of the
        standard deviation of these 2 variables by taking the square root of the
        sum of their variances. In this case, &sigma;<sub>J + M</sub> =
        &#8730;(&sigma;<sub>J</sub><sup>2</sup> + &sigma;<sub>M</sub
        ><sup>2</sup>) = <strong>1.907</strong>. Remember,
        <i>variances always add!</i>
      </p>
    </div>
    <div class="questions">
      <div class="columns">
        <div class="column">
          <p>What is the sum of the two means?</p>
          <br />
          <p class="q3">&mu;<sub>J + M</sub> =</p>
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
              All we need to do here is take the sum of the 2 means.<br />
              &mu;<sub>J + M</sub> = &mu;<sub>J</sub> + &mu;<sub>M</sub> = 1.24
              + 3.93 = <strong>5.17</strong>
            </p>
          </div>
        </div>
      </b-collapse>
      <br />
      <br />
      <div class="columns">
        <div class="column">
          <p>
            What is the standard deviation of the differce in days per week that
            Josef and Mikeal watch TV?
          </p>
          <br />
          <p class="q4">&sigma;<sub>J - M</sub> =</p>
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
              Remember that variances always add, even if we want to subtract
              the two random variables! This means that<br />
              &sigma;<sub>J - M</sub> = &#8730;(&sigma;<sub>J</sub
              ><sup>2</sup> + &sigma;<sub>M</sub><sup>2</sup>) =
              <strong>1.90</strong>.
            </p>
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>
<script lang="ts">
const ANSWERS = {
  q1: 3.93,
  q2: 1.88,
  q3: 5.17,
  q4: 1.9,
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
      dataj: [
        {
          0: 0.01,
          1: 0.03,
          2: 0.15,
          3: 0.11,
          4: 0.35,
          5: 0.25,
          6: 0.08,
          7: 0.02,
        },
      ],
      datam: [
        {
          0: 0.35,
          1: 0.3,
          2: 0.2,
          3: 0.11,
          4: 0.35,
          5: 0.25,
          6: 0.08,
          7: 0.02,
        },
      ],
      columns: [
        {
          field: "",
          label: "X",
        },
        {
          field: "0",
          label: "0",
        },
        {
          field: "1",
          label: "1",
        },
        {
          field: "2",
          label: "2",
        },
        {
          field: "3",
          label: "3",
        },
        {
          field: "4",
          label: "4",
        },
        {
          field: "5",
          label: "5",
        },
        {
          field: "6",
          label: "6",
        },
        {
          field: "7",
          label: "7",
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
.column.is-one-fifth {
  margin-top: auto;
}
.q1,
.q2,
.q3 {
  float: left;
}
.questions > div {
  margin-bottom: 3em;
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
.indep {
  margin-top: 3em;
  margin-bottom: 3em;
}
.indep button {
  margin: 3em 1.5em 3em 1.5em;
}
</style>
