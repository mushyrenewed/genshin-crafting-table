<template>
  <simplebar class="previewDetailsTalentClass mt-2">
    <div class="w-100">
      <div class="mb-2">
        <span class="font-weight-bold">Normal Attack: </span>
        <span>Perform up to 4 consecutive strikes.</span>
      </div>
      <div class="mb-2">
        <span class="font-weight-bold">Charged Attack: </span>
        <span
          >Drains Stamina over time to perform continuous slashes. At the end of
          the sequence, perform a more powerful slash.</span
        >
      </div>
      <div class="mb-3">
        <span class="font-weight-bold">Plunge Attack: </span>
        <span
          >Plunges from mid-air to strike the ground, damaging enemies along the
          path and dealing AoE DMG upon impact.</span
        >
      </div>

      <div class="text-center font-weight-bold">
        <span>Skill Attributes</span>
      </div>

      <template v-for="(attribute, i) in talent_attributes">
        <div class="row" :key="i">
          <div class="col font-weight-bold">
            <div>
              <span>{{ attribute.name }}</span>
            </div>
          </div>
          <div class="col text-right">
            <div>
              <span>{{ attribute.value }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </simplebar>
</template>

<script>
import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  data() {
    return {
      // temporary and only be used to test view
      talent_attributes: [
        {
          id: 23123,
          talent_id: 1234,
          level: 1,
          name: "1-hit DMG",
          value: "130%",
        },
        {
          id: 23123,
          talent_id: 1234,
          level: 1,
          name: "2-hit DMG",
          value: "127%",
        },
        {
          id: 23123,
          talent_id: 1234,
          level: 1,
          name: "3-hit DMG",
          value: "144%",
        },
        {
          id: 23123,
          talent_id: 1234,
          level: 1,
          name: "4-hit DMG",
          value: "195%",
        },
        {
          id: 23123,
          talent_id: 1234,
          level: 1,
          name: "Charged Attack Spinning DMG",
          value: "100%",
        },
        {
          id: 23123,
          talent_id: 1234,
          level: 1,
          name: "Charged Attack Final DMG",
          value: "181%",
        },
        {
          id: 23123,
          talent_id: 1234,
          level: 1,
          name: "Charged Attack Stamina Cost",
          value: "40.0/s",
        },
        {
          id: 23123,
          talent_id: 1234,
          level: 1,
          name: "Max Duration",
          value: "5.0s",
        },
        {
          id: 23123,
          talent_id: 1234,
          level: 1,
          name: "Plunge DMG",
          value: "130.1%",
        },
        {
          id: 23123,
          talent_id: 1234,
          level: 1,
          name: "Low/High Plunge DMG",
          value: "260%/325%",
        },
      ],
    };
  },
  components: {
    Simplebar,
  },
  props: {
    talent_id: Number,
  },
  methods: {
    findTalentDetails() {},
  },
};
</script>

<style scoped>
.previewDetailsTalentClass {
  height: calc(100% - 30px);
  overflow-x: hidden;
}

span {
  font-size: 0.75rem;
  color: #1d1d1d;
  opacity: 0.64;
}

p {
  font-size: 0.75rem;
  color: #1d1d1d;
  opacity: 0.64;
}
</style>