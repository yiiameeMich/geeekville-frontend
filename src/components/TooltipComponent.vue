<template>
<div v-if="isShown" class="tooltip">
  <img :src=tooltipIcon alt="Icon" class="tooltip_image">
  <h3 class="tooltip_text"> {{ tooltipText }} </h3>
</div>
</template>

<script>
export default {
  name: "TooltipComponent",
  data: () => {
    return {
      isShown: false,
    }
  },
  props: {
    tooltipType: {
      type: String,
      required: true,
      default: () => "Success",
    },
    tooltipText: {
      type: String,
      required: true,
    },
  },
  computed: {
    tooltipIcon() {
      return this.tooltipType === 'Success' ? '/assets/icons/success-icon.png' : '/assets/icons/failure-icon.png'
    },
  },
  methods: {
    showAndRemoveTooltip(timeout) {
      this.isShown = true;
      setTimeout(() => {
        this.isShown = false
      }, timeout)
    },
  },
  mounted() {
    if (this.tooltipType === 'Success') {
      this.showAndRemoveTooltip(3000)
    } else {
      this.showAndRemoveTooltip(6000)
    }
  }
}
</script>

<style scoped lang="scss">
.tooltip {
  width: 350px;
  max-width: 400px;
  height: 90px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  box-shadow: 7px 7px 5px var(--low-light);
  background-color: var(--light);

  position: absolute;
  bottom: 1%;
  left: 1%;

  padding: 25px;

  border-radius: 8px;
  transition: 0.6s;

  &:hover {
    box-shadow: none;
    width: 330px;
    height: 80px;
    left: 2%;

    .tooltip_text {
      font-size: 10px;
    }

    .tooltip_image {
      width: 30px;
      height: 30px;
    }
  }

  &_image {
    width: 35px;
    height: 35px;
    transition: 0.6s;
  }

  &_text {
    font-size: 11px;
    font-family: var(--strong);
    letter-spacing: 2px;
    transition: 0.6s;
  }
}
</style>