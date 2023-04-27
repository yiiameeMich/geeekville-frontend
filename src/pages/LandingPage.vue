<template>
  <div class="landing">
    <div class="container">
      <div class="landing-content">
        <div class="landing__featured-product">
          <img
            :src='bestProductToShow.imageUrl'
            alt="Featured product image"
            class="landing__featured-product__image"
          >
          <h4 class="landing__featured-product__name">
            {{ bestProductToShow.productName }}
          </h4>
          <div class="landing__featured-product-details">
            <h6 class="landing__featured-product-details__price">
              {{ bestProductToShow.productPrice }}
            </h6>
            <button class="landing__featured-product-details__button">
              Buy now
            </button>
            <h6 class="landing__featured-product-details__availability">
              {{ bestProductToShow.isAvailable ? "In stock" : "Out of stock" }}
            </h6>
          </div>
        </div>
        <div class="landing__call-to-action">
          <h1 class="landing__call-to-action__heading">
            Buy best fandom products with affordable prices!
          </h1>
          <h4 class="landing__call-to-action__description">
            We know how hard it is to find something related to your favorite books, movies, graphic novels or games,
            and we are here to fix it!
            <strong>Geekville</strong> is a shop from geeks for geeks, where you can feel yourself like at home
          </h4>
          <button class="landing__call-to-action__button">
            Shop online
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data: () => {
    return {
      bestProductToShow: {
        imageUrl: 'https://i.pinimg.com/564x/07/c3/80/07c3807c0b3b645fd20d7db293f0c6bb.jpg',
        productName: 'Batman DC Poster',
        productPrice: '$5.99',
        isAvailable: true,
      }
    }
  }
}
</script>

<style scoped lang="scss">
.landing {
  background-color: var(--dark);
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 120px;
    height: 100%;
  }

  &__featured-product {
    background-color: var(--light);
    width: 350px;
    height: 450px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;

    padding: 10px 0;

    transition: 0.6s;

    &:hover {
      width: 400px;
      height: 500px;
    }

    &__image {
      width: 95%;
      border-radius: 4px;
    }

    &__name {
      font-family: var(--graffity);
      letter-spacing: 2px;
      font-size: 28px;
    }

    &-details {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 90%;
      justify-content: space-between;

      &__price {
        font-family: var(--strong);
        font-size: 18px;
        letter-spacing: 2px;
      }

      &__availability {
        font-family: var(--strong);
        font-size: 12px;
        letter-spacing: 0.2px;
      }

      &__button {
        font-family: var(--strong);
        font-size: 14px;
        color: var(--dark);
        background-color: var(--light);

        border-radius: 4px;
        border: 1px solid var(--dark);

        padding: 5px;

        transition: 0.6s;

        &:hover {
          color: var(--light);
          background-color: var(--dark);
          border: 1px solid var(--low-light);
          padding: 10px;
        }
      }
    }
  }

  &__call-to-action {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    gap: 30px;
    max-width: 50%;

    &__heading {
      color: var(--light);
      font-weight: 700;
      font-size: 42px;
      font-family: var(--graffity);
    }

    &__description {
      color: var(--light);
      font-weight: 400;
      letter-spacing: 1.2px;
      font-size: 21px;
      font-family: var(--graffity);
    }

    &__button {
      width: 120px;
      height: 60px;
      background-color: transparent;
      border: 2px solid var(--light);
      border-radius: 8px;

      color: var(--light);
      font-size: 14px;
      font-weight: 600;
      font-family: var(--strong);

      transition: 0.6s;

      &:hover {
        background-color: var(--low-light);
        color: var(--dark);
        border: 2px solid var(--low-light);
      }
    }
  }
}
</style>