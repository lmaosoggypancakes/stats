<template>
  <div id="app">
    <div class="nav-container">
      <b-navbar>
        <template #brand>
          <div class="column">
            <b-navbar-item tag="router-link" :to="{ path: '/' }" class="to">
              <h3 class="title">Josef</h3>
            </b-navbar-item>
          </div>
        </template>
        <template #start>
          <div class="buttons">
            <b-navbar-item>
              <b-button
                tag="router-link"
                :to="{ path: '/stats/1' }"
                class="to"
                type="is-primary"
              >
                Problem 1
              </b-button>
            </b-navbar-item>
            <b-navbar-item>
              <b-button
                tag="router-link"
                :to="{ path: '/stats/2' }"
                class="to"
                type="is-primary"
              >
                Problem 2
              </b-button>
            </b-navbar-item>
            <b-navbar-item>
              <b-button
                tag="router-link"
                :to="{ path: '/stats/3' }"
                class="to"
                type="is-primary"
              >
                Problem 3
              </b-button>
            </b-navbar-item>
            <b-navbar-item>
              <b-button
                tag="router-link"
                :to="{ path: '/stats/4' }"
                class="to"
                type="is-primary"
              >
                Problem 4
              </b-button>
            </b-navbar-item>
            <b-navbar-item>
              <b-button
                tag="router-link"
                :to="{ path: '/stats/5' }"
                class="to"
                type="is-primary"
              >
                Problem 5
              </b-button>
            </b-navbar-item>
          </div>
        </template>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app,
body,
html {
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
