<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Todo List MVC in Vue and Quasar
        </q-toolbar-title>
        <q-btn dense flat round icon="code" @click="goToGithubRepo()" />
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <q-scroll-area class="fit">
        <q-list v-for="(menuItem, index) in menuItems" :key="index">
          <q-item clickable @click="navigateTo(menuItem.route)" :active="$router.currentRoute.fullPath === menuItem.route" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator v-if="menuItem.separator" />
          </q-list>
        </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      menuItems: [
        {
          icon: 'home',
          label: 'Home',
          separator: false,
          route: '/'
        },
        {
          icon: 'assignment',
          label: 'Todos',
          separator: false,
          route: '/todos'
        },
        {
          icon: 'add',
          label: 'New todo',
          separator: true,
          route: '/todos/new/'
        },
        {
          icon: 'help',
          label: 'About',
          separator: false,
          route: '/about'
        }
      ]
    }
  },
  methods: {
    navigateTo (path) {
      this.$router.push({ path })
    },
    goToGithubRepo () {
      window.location.href = 'https://github.com/briosheje/todoMvcFrontend/'
    }
  },
  mounted: async function () {
    console.log('currentRoute is', this.currentRoute)
  }
}
</script>
