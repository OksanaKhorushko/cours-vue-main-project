<template>
  <vc-donut
    v-if="data.sections.length > 0"
    :sections="data.sections"
    :total="data.total"
    has-legend
    legend-placement="right"
  >
    Costs by categories
  </vc-donut>
</template>

<script>
export default {
  data() {
    return {
      data: {
        sections: [],
        total: 0,
      },
    }
  },
  watch: {
    '$store.state.coastList'() {
      this.convertData();
    }
  },
  methods: {
    convertData() {
      const res = {}
      let total = 0;

      for (const cost of this.$store.state.coastList) {
        total += +cost.value;
        res[cost.category] = {
          label: cost.category,
          value: (res[cost.category]?.value || 0) + +cost.value,
        }
      }

      this.data = {
        sections: Object.values(res),
        total: total,
      }
    }
  },
  mounted() {
    this.convertData()
  }
}
</script>
