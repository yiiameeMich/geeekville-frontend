<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="header-logo">
          GEEKVILLE
        </div>
        <div class="header-nav">
          <a href="" class="header-nav__link">
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
        <div class="header-user">
          <a href="" class="header-user__actions">
            Login
          </a>
          <a href="" class="header-user__actions">
            Register
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
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

      &:hover {
        color: var(--low-light)
      }

      &:nth-child(1) {
        border-right: 1px solid var(--light);
      }
    }
  }
}
</style>