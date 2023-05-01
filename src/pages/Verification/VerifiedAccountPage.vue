<template>
  <div class="verified">
    <div class="container">
      <div class="verified-content">
        <h1 class="verified-content__title">YOUR ACCOUNT IS SUCCESSFULLY VERIFIED</h1>
        <h3 class="verified-content__description">
          You can now login and use your bonuses,
          buy best fandom items, save them to your wishlist and do many more excellent things
        </h3>
        <button class="verified-content__button" @click="$router.push({name: 'sign_in'})">Go to Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerifiedAccountPage"
}
</script>

<style scoped lang="scss">
.verified {
  padding: 90px 0;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    text-align: center;

    width: 70%;
    margin: 0 auto;

    &__title {
      font-family: var(--graffity);
      color: var(--light);
      font-size: 42px;
      letter-spacing: 2px;
    }

    &__description {
      font-family: var(--graffity);
      color: var(--light);
      font-size: 24px;
      letter-spacing: 3px;
    }

    &__button {
      border-radius: 8px;
      width: 150px;
      height: 40px;
      border: 2px solid var(--light);
      background: transparent;
      color: var(--light);
      font-family: var(--strong);
      font-size: 14px;
      box-shadow: 4px 4px 4px var(--low-light);
      transition: 0.6s;

      &:hover {
        box-shadow: 2px 2px 2px var(--light);
        width: 160px;
        height: 50px;
        font-size: 16px;
      }
    }
  }
}
</style>