<template>
  <div class="login">
    <div class="container">
      <div class="login-content">
        <div class="login-content__heading">
          <h1 class="login-content__heading-title">
            Sign In
          </h1>
          <h3 class="login-content__heading-description">
            Login Into your account to get all your bonuses,
            see your favorite products and shopping history
          </h3>
        </div>
        <div class="login-content__form-container">
          <v-form class="login-content__form">
            <v-text-field
                v-model="userData.username"
                class="login-content__form-input"
                type="text"
                placeholder="Username"
                hide-details
            />
            <v-text-field
                v-model="userData.password"
                class="login-content__form-input"
                placeholder="Password"
                type="password"
                hide-details
            />
            <button
                class="login-content__form-button"
                @click.prevent="signIn"
            >
              Sign In
            </button>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data: () => {
    return {
      userData: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    signIn() {
      //const url = process.env.GEEKVILLE_API_URL
      if (Object.entries(this.userData)[1].every(el => !!el)) {
        axios.post(`http://localhost:3000/auth/login`, {
          username: this.userData.username,
          password: this.userData.password,
        }).then(res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('username', res.data.username)
          localStorage.setItem('bonuses', res.data.bonuses)
          localStorage.setItem('isVerified', res.data.isVerified)
          localStorage.setItem('userRole', res.data.role)

          this.$store.commit('setToken', res.data.token)
          this.$store.commit('setUsername', res.data.username)
          this.$store.commit('setBonuses', res.data.bonuses)
          this.$store.commit('setVerification', res.data.isVerified)
          this.$store.commit('setUserRole', res.data.role)

          this.$router.push({ name: 'home' })
        }).catch(err => {
          console.log(err)

          this.clearFields()
        }).finally(() => {
          this.clearFields()
        })
      }
    },
    clearFields() {
      this.userData.password = ''
      this.userData.username = ''
    },
  },
}
</script>

<style scoped lang="scss">
.login {
  background-color: var(--dark);

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__heading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      text-align: center;

      max-width: 50%;

      &-title {
        font-family: var(--graffity);
        font-size: 36px;
        color: var(--light);
        letter-spacing: 3.5px;
      }

      &-description {
        font-family: var(--graffity);
        font-size: 24px;
        color: var(--low-light);
        letter-spacing: 3.5px;
      }
    }

    &__form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;

      &-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: var(--light);
        padding: 40px;
        min-width: 30%;
        margin: 40px 0;

        box-shadow: 6px 6px 6px var(--low-light);
      }

      &-input {
        width: 90% !important;

        &::v-deep {
          input::placeholder, input {
            font-family: var(--strong);
            font-size: 12px;
            letter-spacing: 4px;
          }
        }
      }

      &-button {
        font-family: var(--strong);
        font-size: 14px;
        color: var(--dark);
        background-color: var(--light);

        border-radius: 4px;
        border: 1px solid var(--dark);
        box-shadow: 3px 3px 3px var(--low-dark);

        padding: 10px;
        margin: 10px 0;

        transition: 0.6s;

        &:hover {
          color: var(--light);
          background-color: var(--dark);
          border: 1px solid var(--low-light);
        }
      }
    }
  }
}
</style>