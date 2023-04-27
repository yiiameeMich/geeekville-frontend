<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="header-logo">
          GEEKVILLE
        </div>
        <div class="header-nav">
          <a class="header-nav__link" @click="$router.push({name: 'home'})">
            Home
          </a>
          <a href="" class="header-nav__link">
            About
          </a>
          <a href="" class="header-nav__link">
            Shop
          </a>
          <a href="" class="header-nav__link">
            Contact us
          </a>
        </div>
        <div
          v-if="!isLogged"
          class="header-user"
        >
          <a class="header-user__actions" @click="$router.push({name: 'sign_in'})">
            Sign In
          </a>
          <a class="header-user__actions" @click="$router.push({name: 'sign_up'})">
            Sign Up
          </a>
        </div>
        <div
          v-else-if="isLogged"
          class="header-user logged"
        >
          <img
            :src="userImage"
            alt="User Avatar"
            class="header-user logged_image"
          >
          <h4 class="header-user logged_name">
            {{ username }}
          </h4>
          <v-btn
            plain
            x-small
            @click="logOut"
          >
            <v-icon
              color="var(--light)"
            >
              mdi-logout
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "HeaderComponent",
  data: () => {
    return {
      userImage: 'https://i.pinimg.com/564x/99/aa/99/99aa992903cf7236e962a1cf6a58196a.jpg',
    }
  },
  computed: {
    ...mapState(['username', 'token']),
    isLogged() {
      return this.username && this.token
    },
  },
  methods: {
    logOut() {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('bonuses')

      this.$store.commit('setToken', '')
      this.$store.commit('setBonuses', null)
      this.$store.commit('setUsername', '')

    },
  },
}
</script>

<style scoped lang="scss">
.header {
  height: 90px;
  background-color: var(--dark);
  margin-bottom: 40px;

  &-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
  }

  &-logo {
    font-size: 36px;
    color: var(--light);
    font-weight: 700;
    font-family: var(--graffity);
    cursor: pointer;
    user-select: none;
    transition: 0.6s;

    &:hover {
      color: var(--low-light)
    }
  }

  &-nav {
    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: var(--light);
      transition: 0.6s;
      font-size: 18px;
      font-family: var(--graffity);
      letter-spacing: 1.4px;
      user-select: none;
      cursor: pointer;
      border-bottom: solid 2px transparent;

      &:hover {
        color: var(--low-light);
        border-bottom: solid 2px var(--low-light);
      }
    }
  }

  &-user {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__actions {
      padding: 10px 20px;
      color: var(--light);
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 3px;
      font-family: var(--graffity);
      transition: 0.6s;
      text-decoration: none;
      user-select: none;
      cursor: pointer;

      &:hover {
        color: var(--low-light)
      }

      &:nth-child(1) {
        border-right: 1px solid var(--light);
      }
    }

    &.logged {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      &_name {
        color: var(--light);
        font-family: var(--strong);
        font-size: 14px;
      }

      &_image {
        border-radius: 50%;
        max-width: 40px;
        max-height: 40px;
      }
    }
  }
}
</style>