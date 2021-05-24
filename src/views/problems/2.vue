<template>
  <div id="main">
    <hr />
    <h1 class="title">A Day at the Golf Course</h1>
    <hr />
    <div class="columns">
      <div class="column is-one-quarter">
        <img
          src="@/assets/range.jpg"
          height="200"
          width="200"
          style="float: left"
        />
      </div>
      <div class="column">
        <p class="hello-jerry">
          Josef isn't a very good golfer. However, his brother Mikeal is a bit
          cocky and claims that he can score more holes under par than Josef.
          <br />
          To test that, Josef and Mikeal played 36 golf holes at the local golf
          course.
        </p>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="columns">
      <div class="column">
        <p class="p1">
          They recorded the result of each hole as either "Under Par", "Par",
          and "Over Par". After the 36 holes, the data were collected and
          organized into a table as shown below.
        </p>
      </div>
      <div class="column is-one-quarter">
        <img
          src="@/assets/putt.jpg"
          height="400"
          width="400"
          style="float: left"
        />
      </div>
    </div>
    <br />
    <br />
    <hr />
    <br />
    <br />
    <div>
      <b-table :data="data" :columns="columns"></b-table>
    </div>
    <br />
    <hr />
    <br />
    <div class="round">
      <p>
        For the following questions, leave all answers to the nearest 100th.<br />
        Example: <strong>0.522</strong>
        <br />
        Be sure to include the beginning 0! .522 or .52 will not be counted as a
        correct answer!
      </p>
    </div>
    <div class="questions">
      <div class="columns">
        <div class="column">
          <p>
            Of all the holes completed, what is the probability that a randomly
            selected hole was played by Josef?
          </p>
          <br />
          <p class="q1">P(Josef) =</p>
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
              Because we are taking the probability out of all holes that were
              played, we can divide the total amount of holes that Josef played
              by dividing the grand total: <br />
              36 / 72 = <strong>0.500</strong>
            </p>
          </div>
        </div>
      </b-collapse>
      <br />
      <br />
      <div class="columns">
        <div class="column">
          <p>
            What is the probability that a hole that resulted in "Under Par" was
            played by Mikeal?
          </p>
          <br />
          <p class="q2">P(Mikeal | Under Par) =</p>
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
              Using a two-way table, we can easily find the joint probability of
              an event given another event. <br />
              Therefore, we need to divide the number of holes that Mikeal
              played <strong>and</strong> resulted in "Under Par" by the total
              number of holes that resulted in Under Par.<br />
              Therefore: P(Mikeal | Under Par) = (Mikeal ∩ Under Par) / (Under
              Par) = 4 / 9 = <strong>0.44444</strong>
            </p>
          </div>
        </div>
      </b-collapse>
      <br />
      <br />
      <div class="columns">
        <div class="column">
          <p>
            Of the holes Josef played, what is the probability that a randomly
            selected hole resulted in a Par?
          </p>
          <br />
          <p class="q2">P(Par | Josef) =</p>
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
              We can find the joint probability by dividing the amount of holes
              that were from Josef <strong>and</strong> resulted in Par by the
              total number of holes played by Josef.<br />
              P(Par | Josef) = 5 / 36 = <strong>0.138</strong>
            </p>
          </div>
        </div>
      </b-collapse>
      <br />
      <br />
      <div class="columns">
        <div class="column">
          <p>
            What is the probability that a hole played by Mikeal did
            <strong>not </strong>result in "Over Par"?
          </p>
          <br />
          <p class="q2">P(Over Par<sup>C</sup> | Mikeal) =</p>
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
              We can take the complement of "Over Par" by adding the counts of
              "Par" and "Under Par" played by Mikeal, which equals 16 + 4 =
              20.<br />
              Now, we can divide this number over the total number of holes
              Mikeal played, which is 36. Therefore, P(Over Par<sup>C</sup> |
              Mikeal) = <strong>0.555</strong>
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
  q1: 0.5,
  q2: 0.444,
  q3: 0.138,
  q4: 0.555,
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
