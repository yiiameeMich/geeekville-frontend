<template>
<div class="add-product">
  <div class="container">
    <div class="add-product__content">
      <div class="image-upload__container">
        <h1 class="image-upload__title">
          Upload product picture
        </h1>
        <div style="position: relative">
          <img src="/assets/icons/upload-icon-light.png" class="image-upload__image" alt="">
          <input type="file" class="image-upload__input">
        </div>
      </div>
      <v-card class="product-info__container">
        <v-form class="product-info__form align-baseline">
          <div class="product-info__form-input__container">
            <v-card-text
                class="pa-0 d-flex align-center product-info__form-input__title"
            >
              Product name
            </v-card-text>
            <v-text-field
                v-model="productInfo.name"
                class="product-info__form-input"
                hide-details
            />
          </div>
          <div class="product-info__form-input__container ">
            <v-card-text
                class="pa-0 d-flex align-center product-info__form-input__title"
            >
              Product description
            </v-card-text>
            <v-text-field
                v-model="productInfo.description"
                class="product-info__form-input"
                hide-details
            />
          </div>
          <div class="product-info__form-input__container ">
            <v-card-text
                class="pa-0 d-flex align-center product-info__form-input__title"
            >
              Product price
            </v-card-text>
            <v-text-field
                v-model="productInfo.price"
                class="product-info__form-input"
                hide-details
            />
          </div>
          <div class="product-info__form-input__container ">
            <v-card-text
                class="pa-0 d-flex align-center product-info__form-input__title"
            >
              Product quantity
            </v-card-text>
            <v-text-field
                v-model="productInfo.quantity"
                class="product-info__form-input"
                hide-details
            />
          </div>
          <button v-if="!loading" class="product-info__form-input__button" @click.prevent="createProduct">
            Add product
          </button>
          <LoaderComponent v-if="loading" image-src="/assets/icons/batman-icon.png" />
        </v-form>
      </v-card>
    </div>
  </div>
  <TooltipComponent v-if="successTooltip" tooltip-text="Product has been added successfully" tooltip-type="Success" />
  <TooltipComponent v-if="failureTooltip" :tooltip-text="tooltipErrorText" tooltip-type="Failure" />
  </div>
</template>

<script>
import axios from "axios";
import LoaderComponent from "@/components/LoaderComponent.vue";
import TooltipComponent from "@/components/TooltipComponent.vue";

export default {
  name: "AddProductPage",
  components: {TooltipComponent, LoaderComponent},
  data: () => {
    return {
      productInfo: {
        name: '',
        description: '',
        price: '',
        quantity: '',
      },
      successTooltip: false,
      failureTooltip: false,
      tooltipErrorText: '',
      loading: false,
    }
  },
  methods: {
    createProduct() {
      if (Object.entries(this.productInfo)[1].every(el => !!el)) {
        this.loading = true
        axios.post(`http://localhost:3000/products/create-product`, {
          name: this.productInfo.name.trim(),
          description: this.productInfo.description.trim(),
          price: this.productInfo.price.trim(),
          quantity: this.productInfo.quantity.trim(),
        }).then(() => {
          this.loading = false;
          this.successTooltip = true;
        }).catch(err => {
          this.tooltipErrorText = err.response.data.message
          this.failureTooltip = true;

          console.log(err)
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.add-product {
  height: 100%;
  background-color: var(--dark);
  position: relative;

  &__content {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-evenly;
    padding: 60px 0;
  }
}

.product-info {

  &__container {
    background-color: var(--light);
    width: 500px;
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;
    padding: 40px;

    &-input {
      width: 90% !important;

      &::v-deep {
        input::placeholder, input {
          font-family: var(--strong);
          font-size: 12px;
          letter-spacing: 4px;
        }
      }

      &__container {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        width: 100%;
      }

      &__title {
        font-family: var(--strong);
        letter-spacing: 2px;
        font-weight: 600;
        font-size: 12px;
      }

      &__button {
        align-self: center;
        width: 40%;
        height: 40px;
        font-family: var(--strong);
        font-size: 11px;
        letter-spacing: 1.5px;
        color: var(--dark);
        background-color: var(--light);
        padding: 10px 15px;
        border: 2px solid var(--dark);
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 0.6s;

        &:hover {
          background-color: var(--dark);
          border: 2px solid var(--low-light);
          color: var(--light);
        }
      }
    }
  }
}

.image-upload {
  &__container {
    height: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  &__title {
    color: var(--light);
    font-family: var(--strong);
    font-size: 24px;
    text-align: center;
    letter-spacing: 2px;
  }

  &__input {
    width: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    cursor: pointer;
  }

  &__image {
    border: 2px solid var(--light);
    box-shadow: 6px 6px 20px var(--light);
    width: 100%;
  }
}
</style>