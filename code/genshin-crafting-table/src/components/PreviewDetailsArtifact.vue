<template>
    <div class="previewDetailsArtifactClass">
        <simplebar class="artifactDetail mt-2">
            <div class="d-flex flex-column align-items-center w-100">
                <img :src="require(`../assets/images/${artifact.filename}`)" alt="artifact" class="mb-1">
                <small class="mb-2">+{{artifactMaxLevel}}</small>
                <small class="mb-2">Main Status</small>
                <b-dropdown text="Select a stat" size="sm" class="mb-3">
                    <!-- List of stats available -->
                </b-dropdown>
                <small class="mb-2">Bonus Stats</small>
                <div class="row mb-3">
                    <div class="col">
                        <div class="d-flex flex-column">
                            <b-dropdown text="Select a stat" size="sm" class="mb-1">
                                <!-- List of stats available -->
                            </b-dropdown>
                            <b-dropdown text="Select a stat" size="sm" class="mb-1">
                                <!-- List of stats available -->
                            </b-dropdown>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex flex-column">
                            <b-dropdown text="Select a stat" size="sm" class="mb-1">
                                <!-- List of stats available -->
                            </b-dropdown>
                            <b-dropdown text="Select a stat" size="sm" class="mb-1">
                                <!-- List of stats available -->
                            </b-dropdown>
                        </div>
                    </div>
                </div>

                <small class="mb-2">Rarity</small>
                <tool-artifact-rarity :artifact_id="123" />

            </div>
        </simplebar>
        <div class="buttonClass mr-3 mb-3">
            <template v-if="isArtifactEquiped(artifact.artifact_type)">
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
import ToolArtifactRarity from "./ToolArtifactRarity.vue";

import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
    data(){
        return{
            // This is temporary, should get id from props and search for info
            artifact:{
                 artifact_id: 1234,
                    name: "Witch's Ever-Burning Plum",
                    artifact_set_id: 321,
                    rarity: "5",
                    artifact_type:"feather",
                    filename: "witch_ever-burning_plum.png",
                    main_attribute:{
                        id: 2134,
                        attribute_name: "",
                        attribute_value: ""
                    },
                    bonus_attr_1:{
                        id: 2134,
                        attribute_name: "",
                        attribute_value: ""
                    },
                    bonus_attr_2:{
                        id: 2134,
                        attribute_name: "",
                        attribute_value: ""
                    },
                    bonus_attr_3:{
                        id: 2134,
                        attribute_name: "",
                        attribute_value: ""
                    },
                    bonus_attr_4:{
                        id: 2134,
                        attribute_name: "",
                        attribute_value: ""
                    }
            }
        }
    },
    props:{
        artifact_id: Number
    },
    components:{
        ButtonGeneral,
        ToolArtifactRarity,
        Simplebar
    },
    computed:{
        artifactMaxLevel(){
            let rarity = this.artifact.rarity;
            let maxLevel = 12;

            switch(rarity){
                case "5":
                    maxLevel = 20;
                    break;
                case "4":
                    maxLevel = 16;
                    break;
            }

            return maxLevel;
            
        }
    },
    methods:{
        buttonHandler(){},
        isArtifactEquiped(type){
            let char_artifact = "";

            switch(type){
                case "flower":
                    char_artifact = this.$store.state.character.artifact.flower;
                    break;
                case "feather":
                    char_artifact = this.$store.state.character.artifact.feather;
                    break;
                case "time_piece":
                    char_artifact = this.$store.state.character.artifact.time_piece;
                    break;
                case "chalice":
                    char_artifact = this.$store.state.character.artifact.chalice;
                    break;
                case "hat":
                    char_artifact = this.$store.state.character.artifact.hat;
                    break;
            }

            return this.artifact.name === char_artifact.name;
        }
    }
}
</script>

<style scoped>
.previewDetailsArtifactClass{
    height: 100%;
}
.artifactDetail{
    /* Really wonky solution, but hey if there is a
       better solution I'm willing to change it :D 
     */
    height: calc(100% - 125px);
}

small{
    font-size: 0.75rem;
    font-weight: bold;
    color: #1D1D1D;
    opacity: 0.64;
}

.buttonClass{
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>

