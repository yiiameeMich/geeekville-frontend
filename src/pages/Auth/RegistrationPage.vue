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
              :rules="[validatePasswords]"
            />
            <v-text-field
              v-model="userData.confirmPassword"
              class="registration-content__form-input"
              placeholder="Confirm password"
              type="password"
              :rules="[validatePasswords]"
            />
            <button
              class="registration-content__form-button"
              @click.prevent="signUp"
            >
              Sign Up
            </button>
          </v-form>
        </div>
        <v-dialog
            activator="parent"
            v-if="isMailSent"
            v-model="isMailSent"
            persistent
            width="700"
            height="500"
        >
          <v-card>
            <div class="verification-dialog">
              <LoaderComponent image-src="/assets/icons/batman-icon.png" />
              <h1 class="verification-dialog__title">
                Verify your account
              </h1>
              <h3 class="verification-dialog__description">
                We have sent email confirmation on the address you've provided. Please, check it out and click "Verify account".
                This will give you an opportunity to sign in and no one else will ever take your email or login.
              </h3>
            </div>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <template v-for="(err, idx) in errors">
      <TooltipComponent
        v-if="tooltip"
        :key="idx"
        :tooltip-text="err"
        tooltip-type="Error"
        :style='tooltipPositioning(idx)'
      />
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import LoaderComponent from "@/components/LoaderComponent.vue";
import TooltipComponent from "@/components/TooltipComponent.vue";

export default {
  name: "RegistrationPage",
  components: {
    TooltipComponent,
    LoaderComponent: LoaderComponent,
  },
  data: () => {
    return {
      userData: {
        username: '',
        email: '',
        phone: null,
        password: '',
        confirmPassword: '',
      },
      isMailSent: false,
      errors: [],
      tooltip: false,
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
        }).then(() => {
          this.isMailSent = true;
        }).catch(err => {
          this.tooltip = true;
          this.errors = err.response.data.message.split('.')

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
  computed: {
    tooltipPositioning() {
      return idx => idx !== 0 ? `bottom: ${idx * 15}%;` : 'bottom: 1%;'
    },
    validatePasswords() {
      return () => {
        if ((!!this.userData.password && !!this.userData.confirmPassword) && (this.userData.password !== this.userData.confirmPassword)) {
          return 'Passwords are different'
        } else {
          return true
        }
      }
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

  .verification-dialog {
    background: var(--light);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px;
    gap: 30px;

    &__title {
      font-family: var(--graffity);
      letter-spacing: 5px;
      text-transform: uppercase;
      font-size: 34px;
    }

    &__description {
      font-family: var(--strong);
      font-size: 16px;
      letter-spacing: 5px;
      text-transform: uppercase;
    }
  }
</style>