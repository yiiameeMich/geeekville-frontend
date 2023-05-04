<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="header-logo">
          GEEKVILLE AdminPanel
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
          <div class="header-user__info">
            <h4 class="header-user logged_name">
              {{ username }}
            </h4>
            <h6 class="header-user logged_bonuses">
              Bonuses: {{ bonuses }}
            </h6>
          </div>
          <v-btn
              plain
              x-small
              @click="toggleMenu"
              :class="{'menu-open': isMenuOpen}"
              style="transition: 0.6s"
          >
            <v-icon
                color="var(--light)"
            >
              mdi-chevron-down
            </v-icon>
          </v-btn>
          <div v-if="isMenuOpen" class="dropdown-menu">
            <a
                v-if=" role === 'Admin' "
                class="dropdown-menu__link"
                @click="$router.push({name: 'home'})"
            >
              Go back
              <v-icon>
                mdi-chevron-left
              </v-icon>
            </a>
            <a class="dropdown-menu__link">
              My account
              <v-icon>
                mdi-account
              </v-icon>
            </a>
            <a class="dropdown-menu__link">
              My cart
              <v-icon>
                mdi-cart-outline
              </v-icon>
            </a>
            <a class="dropdown-menu__link" @click="logOut">
              Logout
              <v-icon>
                mdi-logout
              </v-icon>
            </a>
          </div>
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
      isMenuOpen: false,
    }
  },
  computed: {
    ...mapState(['username', 'token', 'bonuses', 'isVerified', 'role']),
    isLogged() {
      return this.username && this.token && this.isVerified
    },
  },
  methods: {
    logOut() {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('bonuses')
      localStorage.removeItem('isVerified')

      this.$store.commit('setToken', '')
      this.$store.commit('setBonuses', null)
      this.$store.commit('setUsername', '')
      this.$store.commit('setVerification', null)

    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
}
</script>

<style scoped lang="scss">
.header {
  height: 90px;
  background-color: var(--dark);

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

    &__info {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: center;
      gap: 5px;
    }

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

      position: relative;

      &_name {
        color: var(--light);
        font-family: var(--strong);
        font-size: 14px;
      }

      &_bonuses {
        color: var(--low-light);
        font-family: var(--strong);
        font-size: 13px;
      }

      &_image {
        border-radius: 50%;
        max-width: 40px;
        max-height: 40px;
      }
    }
  }
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  background-color: var(--light);
  border-radius: 8px;
  border: 2px solid var(--low-light);
  margin: 15px 0;
  padding: 25px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 20px;

  &__link {
    text-decoration: none;
    font-family: var(--strong);
    font-size: 14px;
    letter-spacing: 1.2px;
    color: var(--dark);
    padding-bottom: 10px;
    border-bottom: 1px solid var(--dark);

    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    width: 100%;
  }
}

.menu-open {
  transform: rotate(180deg) !important;
}
</style>