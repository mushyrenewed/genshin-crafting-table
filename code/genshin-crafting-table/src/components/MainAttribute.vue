<template>
  <div class="attributeClass">
    <main-background>
      <!-- Top Corner -->
      <main-header 
      page_name="Attribute" 
      :additional_name="'Level ' + characterInfo.level" 
      :close_handler="closeHandler"></main-header>

      <div class="characterTraitsClass d-flex justify-content-center">
        <small class="mr-2" :style="{ color: elementColor }"
          >&bullet; {{ characterInfo.element }}
        </small>
        <small>&bullet; {{ characterInfo.weapon_type }}</small>
      </div>

      <!-- Information Section -->
      <simplebar
        class="contentClass d-flex flex-column"
        :style="{ overflowX: 'hidden' }"
      >
        <div :style="{ width: '100%' }">
          <!-- Base Stats -->
          <h6>Base Stats</h6>
          <div class="baseStatsClass">
            <div class="ml-2 mb-3">
              <attribute-item
                stat_name="Max HP"
                :stat_value="characterInfo.attribute.base_stats.max_HP"
                adds_stat_value="+2451"
              />
              <attribute-item
                stat_name="ATK"
                :stat_value="characterInfo.attribute.base_stats.attack"
              />
              <attribute-item
                stat_name="DEF"
                :stat_value="characterInfo.attribute.base_stats.defence"
              />
              <attribute-item
                stat_name="Elemental Mastery"
                :stat_value="
                  characterInfo.attribute.base_stats.elemental_mastery
                "
              />
              <attribute-item
                stat_name="Max Stamina"
                :stat_value="characterInfo.attribute.base_stats.max_stamina"
              />
            </div>

            <!-- Advance Stats -->
            <h6>Advance Stats</h6>
            <div class="advanceStatsClass">
              <div class="ml-2 mb-3">
                <attribute-item
                  stat_name="CRIT Rate"
                  :stat_value="characterInfo.attribute.advance_stats.crit_rate"
                />
                <attribute-item
                  stat_name="CRIT DMG"
                  :stat_value="characterInfo.attribute.advance_stats.crit_dmg"
                />
                <attribute-item
                  stat_name="Healing Bonus"
                  :stat_value="
                    characterInfo.attribute.advance_stats.healing_bonus
                  "
                />
                <attribute-item
                  stat_name="Incoming Healing Bonus"
                  :stat_value="
                    characterInfo.attribute.advance_stats.incoming_healing_bonus
                  "
                />
                <attribute-item
                  stat_name="Energy Recharge"
                  :stat_value="
                    characterInfo.attribute.advance_stats.energy_recharge
                  "
                />
                <attribute-item
                  stat_name="Reduce CD"
                  :stat_value="characterInfo.attribute.advance_stats.reduce_cd"
                />
                <attribute-item
                  stat_name="Powerful Shield"
                  :stat_value="
                    characterInfo.attribute.advance_stats.powerful_shield
                  "
                />
              </div>

              <!-- Elemental Type -->
              <h6>Elemental Type</h6>
              <div class="elementlTypeClass">
                <div class="ml-2 mb-3">
                  <attribute-item
                    stat_name="Pyro DMG Bonus"
                    :stat_value="
                      characterInfo.attribute.elemental_type.pyro_dmg_bonus
                    "
                  />
                  <attribute-item
                    stat_name="Pyro RES"
                    :stat_value="
                      characterInfo.attribute.elemental_type.pyro_res
                    "
                  />
                  <attribute-item
                    stat_name="Hydro DMG Bonus"
                    :stat_value="
                      characterInfo.attribute.elemental_type.hydro_dmg_bonus
                    "
                  />
                  <attribute-item
                    stat_name="hydro RES"
                    :stat_value="
                      characterInfo.attribute.elemental_type.hydro_res
                    "
                  />
                  <attribute-item
                    stat_name="Dendro DMG Bonus"
                    :stat_value="
                      characterInfo.attribute.elemental_type.dendro_dmg_bonus
                    "
                  />
                  <attribute-item
                    stat_name="Dendro RES"
                    :stat_value="
                      characterInfo.attribute.elemental_type.dendro_res
                    "
                  />
                  <attribute-item
                    stat_name="Electro DMG Bonus"
                    :stat_value="
                      characterInfo.attribute.elemental_type.electro_dmg_bonus
                    "
                  />
                  <attribute-item
                    stat_name="Electro RES"
                    :stat_value="
                      characterInfo.attribute.elemental_type.electro_res
                    "
                  />
                  <attribute-item
                    stat_name="Anemo DMG Bonus"
                    :stat_value="
                      characterInfo.attribute.elemental_type.anemo_dmg_bonus
                    "
                  />
                  <attribute-item
                    stat_name="Anemo RES"
                    :stat_value="
                      characterInfo.attribute.elemental_type.anemo_res
                    "
                  />
                  <attribute-item
                    stat_name="Cryo DMG Bonus"
                    :stat_value="
                      characterInfo.attribute.elemental_type.cryo_dmg_bonus
                    "
                  />
                  <attribute-item
                    stat_name="Cryo RES"
                    :stat_value="
                      characterInfo.attribute.elemental_type.cryo_res
                    "
                  />
                  <attribute-item
                    stat_name="Geo DMG Bonus"
                    :stat_value="
                      characterInfo.attribute.elemental_type.geo_dmg_bonus
                    "
                  />
                  <attribute-item
                    stat_name="Geo RES"
                    :stat_value="characterInfo.attribute.elemental_type.geo_res"
                  />
                  <attribute-item
                    stat_name="Physical DMG Bonus"
                    :stat_value="
                      characterInfo.attribute.elemental_type.physical_dmg_bonus
                    "
                  />
                  <attribute-item
                    stat_name="Physical RES"
                    :stat_value="
                      characterInfo.attribute.elemental_type.physical_res
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </simplebar>
      <div class="footerButtonsClass d-flex mr-3 mb-2">

        <button-genshin :buttonHandler="levelHandler">
          <div class="buttonCharacterLevelClass mr-1">
            <span class="mr-2">Level</span>
            <img :src="require(`../assets/images/arrow_up.svg`)" alt="arrowup" />
          </div>
        </button-genshin>

        <button-genshin :buttonHandler="levelHandler">
          <div class="buttonCharacterLevelClass mr-1">
            <span class="mr-2">Level</span>
            <img :src="require(`../assets/images/arrow_down.svg`)" alt="arrowdown" />
          </div>
        </button-genshin>

      </div>
    </main-background>
  </div>
</template>

<script>
import ButtonGenshin from "./ButtonGenshin.vue";
import AttributeItem from "./AttributeItem.vue";
import MainBackground from "./MainBackground.vue";
import MainHeader from "./MainHeader.vue";

import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  components: {
    ButtonGenshin,
    AttributeItem,
    Simplebar,
    MainBackground,
    MainHeader
  },
  computed: {
    characterInfo() {
      return this.$store.state.character;
    },
    elementColor() {
      let element = this.$store.state.character.element;

      if (element === "Pyro") {
        return "#D57373";
      } else if (element === "Electro") {
        return "#8A2CAC";
      } else if (element === "Cryo") {
        return "#6AB5CC";
      } else if (element === "Hydro") {
        return "#3B91DA";
      } else if (element === "Geo") {
        return "#CDA574";
      } else {
        return "#41A33A";
      }
    },
  },
  methods: {
    closeHandler() {},
    elementHandler() {},
    weaponTypeHandler() {},
    levelHandler() {},
  },
};
</script>

<style scoped>
.attributeClass {
  height: 100%;
}

small {
  color: #1d1d1d;
  opacity: 0.64;
  font-weight: bold;
  cursor: pointer;
}

.contentClass {
  height: calc(100% - 31px - 45px);
  overflow-y: auto;
}

.footerButtonsClass {
  position: absolute;
  bottom: 0;
  right: 0;
}

h6 {
  font-size: 0.625rem;
  font-weight: bold;
  color: #1d1d1d;
  opacity: 0.64;
}

.buttonCharacterLevelClass{
    border: 1px solid #8E8E8E;
    padding: 2.5px 10px;
    cursor: pointer;
}

.buttonCharacterLevelClass > span{
  font-size: 1rem;
  font-weight: 400;
  opacity: 1;
  color:#2c3e50;
}
</style>