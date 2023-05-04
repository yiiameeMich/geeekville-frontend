<template>
  <div class="admin-panel">
    <div class="container">
      <div class="admin-panel__home">
        <div class="admin-panel__home-title">
          <h1 class="admin-panel__home-title__heading">Welcome to admin panel</h1>
          <h3 class="admin-panel__home-title__description">
            Here you can manage users, items and feel yourself like a God
          </h3>
        </div>
        <v-card class="admin-panel__home-content" width="800" height="500">
          <v-card-title class="admin-panel__home-content__title">Navigation</v-card-title>
          <div class="admin-panel__home-content__buttons">
            <v-btn class="admin-panel__home-content__button">
              Manage products
              <v-icon>
                mdi-cart-variant
              </v-icon>
            </v-btn>
            <v-btn class="admin-panel__home-content__button" @click="$router.push({name: 'add_product'})">
              Add product
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
            <v-btn class="admin-panel__home-content__button">
              Manage users
              <v-icon>
                mdi-account-group
              </v-icon>
            </v-btn>
            <v-btn class="admin-panel__home-content__button">
              Settings
              <v-icon>
                mdi-cog-outline
              </v-icon>
            </v-btn>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHomePage"
}
</script>

<style scoped lang="scss">
.admin-panel {
  height: 100%;
  padding: 80px 0;
  background-color: var(--dark);

  &__home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    &-title {
      display: flex;
      text-align: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &__heading {
        color: var(--light);
        font-family: var(--graffity);
        letter-spacing: 2px;
        font-size: 42px;
      }

      &__description {
        color: var(--low-light);
        font-family: var(--strong);
      }
    }

    &-content {
      background-color: var(--light);
      box-shadow: 7px 7px 7px var(--low-light) !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 50px;

      &__title {
        text-transform: capitalize;
        font-family: var(--strong);
        font-size: 28px;
        letter-spacing: 2px;
      }

      &__buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;

        max-width: 75%;
      }

      &__button {
        &::v-deep {
          .v-btn__content {
            gap: 20px !important;
          }
        }

        background-color: var(--low-dark) !important;
        color: var(--light) !important;
      }
    }
  }
}
</style>