<template>
  <div class="registration">
    <div class="container">
      <div class="registration-content">
        <div class="registration-content__heading">
          <h1 class="registration-content__heading-title">
            Sign Up
          </h1>
          <h3 class="registration-content__heading-description">
            Are you new here? Not a problem!
            Sign up to our website and get bonuses for purchases,
            see our new products first and many more amazing bonuses
          </h3>
        </div>
        <div class="registration-content__form-container">
          <v-form class="registration-content__form">
            <v-text-field
              v-model="userData.username"
              class="registration-content__form-input"
              type="text"
              placeholder="Username"
              hide-details
            />
            <v-text-field
              v-model="userData.email"
              class="registration-content__form-input"
              type="email"
              placeholder="someemail@mail.com"
              hide-details
            />
            <v-text-field
              v-model="userData.phone"
              class="registration-content__form-input"
              placeholder="+380666666666"
              type="phone"
              hide-details
            />
            <v-text-field
              v-model="userData.password"
              class="registration-content__form-input"
              placeholder="Password"
              type="password"
              hide-details
            />
            <v-text-field
              v-model="userData.confirmPassword"
              class="registration-content__form-input"
              placeholder="Confirm password"
              type="password"
              hide-details
            />
            <button
              class="registration-content__form-button"
              @click.prevent="signUp"
            >
              Sign Up
            </button>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "RegistrationPage",
  data: () => {
    return {
      userData: {
        username: '',
        email: '',
        phone: null,
        password: '',
        confirmPassword: '',
      },
    }
  },
  methods: {
    signUp() {
      //const url = process.env.GEEKVILLE_API_URL
      if (Object.entries(this.userData)[1].every(el => !!el)) {
        axios.post(`http://localhost:3000/auth/register`, {
          username: this.userData.username,
          email: this.userData.email,
          phoneNumber: this.userData.phone,
          password: this.userData.password,
        }).then(res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('username', res.data.username)
          localStorage.setItem('bonuses', res.data.bonuses)

          this.$store.commit('setToken', res.data.token)
          this.$store.commit('setUsername', res.data.username)
          this.$store.commit('setBonuses', res.data.bonuses)

          this.$router.push({ name: 'home' })
        }).catch(err => {
          console.log(err.response.data.message)

          this.clearFields()
        }).finally(() => {
          this.clearFields()
        })
      }
    },
    clearFields() {
      this.userData.password = ''
      this.userData.username = ''
      this.userData.email = ''
      this.userData.phone = ''
      this.userData.confirmPassword = ''
    },
  },
}
</script>

<style scoped lang="scss">
  .registration {
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