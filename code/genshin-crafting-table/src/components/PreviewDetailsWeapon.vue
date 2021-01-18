<template>
  <div class="previewDetailsWeapon">
    <!-- Weapon Details -->
    <simplebar class="weaponDetailsClass">
      <div class="w-100 text-center">
        <div class="d-flex flex-column align-items-center mt-2">
          <img :src="filename" alt="weapon" class="mb-2" />
          <span class="mb-2">Base Stats</span>
        </div>
        <div class="row w-100 mb-2">
          <div class="col">
            <div class="d-flex flex-column px-3 text-left">
              <span class="mb-2">Weapon Type</span>
              <span class="mb-2">Rarity</span>
              <span class="mb-2">How to obtain</span>
            </div>
          </div>
          <div class="col">
            <div class="d-flex flex-column px-3 text-right">
              <a class="mb-2" href="">{{ weapon.weapon_type }}</a>
              <span class="mb-2">{{ weapon.rarity }}</span>
              <a class="mb-2" href="">{{ weapon.how_to_obtain }}</a>
            </div>
          </div>
        </div>
        <!-- Refinement details -->
        <span class="mb-2">Refinement Level</span>
        <div class="px-3 text-left">
          <tool-weapon-refinement-level :weapon_id="weapon.id" class="mb-2" />
          <div class="row">
            <div class="col-4">
              <span>Effect:</span>
            </div>
            <div class="col-8">
              <p>{{ weapon.refine.effect }}</p>
            </div>
          </div>
        </div>
        <!-- Stats by level -->
        <span class="mb-2">Stats by Level</span>
        <div class="px-3 text-left">
          <tool-weapon-stats-by-level :weapon_id="weapon.id" class="mb-2" />
          <div class="row">
            <div class="col">
              <div class="d-flex flex-column mb-2">
                <span>Base ATK</span>
                <small>(Lv.{{ weapon.weapon_attribute.level }})</small>
              </div>
              <div class="d-flex flex-column mb-2">
                <span>Base ATK</span>
                <small>(Ascension)</small>
              </div>
              <div class="d-flex flex-column mb-2">
                <span>{{ weapon.weapon_attribute.secondary_stat_name }}</span>
              </div>
            </div>
            <div class="col text-right">
              <div class="d-flex flex-column">
                <span class="mb-3">{{
                  weapon.weapon_attribute.base_attack
                }}</span>
                <span class="mb-3">{{ weapon.weapon_attribute.ascension.base_attack }}</span>
                <span>{{weapon.weapon_attribute.secondary_stat_value}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
    <!-- Button -->
    <div class="buttonClass mr-3 mb-3">
      <template v-if="isWeaponEquiped">
        <button-general label="Unequip" :handler="buttonHandler" />
      </template>
      <template v-else>
        <button-general label="Equip" :handler="buttonHandler" />
      </template>
    </div>
  </div>
</template>

<script>
import ButtonGeneral from "./ButtonGeneral.vue";
import ToolWeaponRefinementLevel from "./ToolWeaponRefinementLevel.vue";
import ToolWeaponStatsByLevel from "./ToolWeaponStatsByLevel.vue";

import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  data(){
    return{
      // temporary, just testing the view. Remove this later
      // This component should search for the weapon info using weapon id
      weapon: {
        id: 41231,
        name: "Wolf Gravestone",
        weapon_type: "Claymore",
        rarity: "5",
        how_to_obtain: "Gatcha",
        refine: {
          level: "1",
          effect:
            "Increases ATK by 20%. On hit, attacks against enemies with less than 30% HP increase all party members' ATK by 40% for 12s. Can only occur once every 30s.",
        },
        weapon_attribute: {
          level: "20",
          base_attack: "122",
          secondary_stat_name: "ATK",
          secondary_stat_value: "19.1%",
          ascension: {
            level: "1",
            base_attack: "153",
          },
        },
      },
    }
  },
  components: {
    ButtonGeneral,
    Simplebar,
    ToolWeaponRefinementLevel,
    ToolWeaponStatsByLevel,
  },
  props: {
    weapon_id: Number,
    filename: String,
  },
  computed: {
    isWeaponEquiped() {
      let char_weapon = this.$store.state.character.weapon;

      return this.weapon.name === char_weapon.name;
    },
  },
  methods: {
    buttonHandler() {},
  },
};
</script>

<style scoped>
.previewDetailsWeapon {
  height: calc(100% - 12px);
}

.buttonClass {
  position: absolute;
  bottom: 0;
  right: 0;
}

.weaponDetailsClass {
  height: calc(100% - 12px - 70px);
}

span {
  font-weight: bold;
  font-size: 0.75rem;
  color: #1d1d1d;
  opacity: 0.64;
}

a {
  font-size: 0.75rem;
}

small {
  font-size: 0.625rem;
  font-weight: bold;
  color: #1d1d1d;
  opacity: 0.64;
}
</style>