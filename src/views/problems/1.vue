<template>
  <div id="main">
    <hr />
    <h1 class="title">Jerry</h1>
    <hr />
    <div class="columns">
      <div class="column is-one-quarter">
        <img
          src="@/assets/hello.png"
          height="200"
          width="200"
          style="float: left"
        />
      </div>
      <div class="column">
        <p class="hello-jerry">
          This is Jerry!<br />Jerry is an artificial intelligence program
          developed by me :). Jerry is cool - he can play tic-tac-toe, play
          minesweeper optimally, and read your handwriting!
        </p>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="columns">
      <div class="column">
        <p class="p1">
          While Jerry is incredibly smart, he's not perfect - in almost every
          game of minesweeper, the first few moves have to be random. This means
          that there's always a small chance that the first move Jerry makes is
          a mine!
          <br />Using the power of statistics, Jerry was able to provide a rough
          estimate of the proportion of minesweeper games that he wins.<br />For
          now, let's say that this proportion is p<sub>1</sub> = 0.875.
        </p>
      </div>
      <div class="column is-one-quarter">
        <img
          src="@/assets/minesweeper.png"
          height="400"
          width="400"
          style="float: left"
        />
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="columns">
      <div class="column is-one-quarter">
        <img
          src="@/assets/ttt.png"
          height="600"
          width="400"
          style="float: left"
        />
      </div>
      <div class="column">
        <p class="p2">
          In a game of tic-tac-toe, the best player doesn't always win - if 2
          people play the best, then they can end the game with a tie.
          Therefore, it should be noted that Jerry cannot win 100% of all
          tic-tac-toe games. Let's say that if Jerry is paired with me, then the
          probability that he wins is p<sub>2</sub> = 0.6.
        </p>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div>
      <p>
        Because Jerry cannot get tired, and that one event does not affect the
        other, we can also assume that the events "Jerry wins a game of
        Minesweeper" and "Jerry beats me at tic-tac-toe" are independent.<br />
        Therefore, we can construct a Venn Diagram reprenting these
        probabilities!
      </p>
      <img src="@/assets/venn.png" />
    </div>
    <br />
    <hr />
    <br />
    <div class="questions">
      <div class="columns">
        <div class="column">
          <p>
            What is the probability that Jerry wins one game of minesweeper, and
            beats me at tic-tac-toe?
          </p>
          <br />
          <p class="q1">P(Minesweeper ∩ Tic-Tac-Toe) =</p>
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
      <div class="columns">
        <div class="column">
          <p>
            What is the probability that Jerry loses at minesweeper, and loses
            to me at tic-tac-toe?
          </p>
          <br />
          <p class="q2">P(Not Minesweeper ∩ Not Tic-Tac-Toe) =</p>
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
      <div class="columns">
        <div class="column">
          <p>
            What is the probability that Jerry wins at minesweeper, or beats me
            at tic-tac-toe?
          </p>
          <br />
          <p class="q2">P(Minesweeper u Tic-Tac-Toe) =</p>
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
    </div>
  </div>
</template>
<script lang="ts"></script>
<script lang="ts">
const ANSWERS = {
  q1: 0.525,
  q2: 0.95,
  q3: 0.05,
};
import Vue from "vue";
export default Vue.extend({
  name: "one",
  data() {
    return {
      q1: 0,
      q2: 0,
      q3: 0,
      status: {
        q1: "",
        q2: "",
        q3: "",
      },
    };
  },
  mounted() {
    console.log(ANSWERS);
  },
  methods: {
    check(q: string, answer: number): void {
      let hasKey = <O>(obj: O, key: PropertyKey): key is keyof O {
        return key in obj
      }
      if (hasKey(ANSWERS, q)) {
        if (ANSWERS[q] === answer) {
          this.status[q] = 'is-success'
          return;
        } this.status[q] = 'is-danger'
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
  float: right;
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
</style>
