import Vue from 'vue'
import Vuex from 'vuex'
import application from './modules/application'
import team from './modules/team'

// Use store
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        application,
        team
    },
    // state:{
    //     page: "PageSignIn",
    //     mainSection: "MainTeam",
    //     characterSelected: ["Diluc", "Mona", "Venti", "Bennett"],
    //     characterCurrentLevel: "1",
    //     character: {
    //         name: "Diluc",
    //         introduction: "As the wealthiest gentleman in \
    //         Mondstadt, the ever-dapper Diluc always \
    //         presents himself as the epitome of \
    //         perfection. But behind the courteous \
    //         visage burns a zealous soul that has sworn \
    //         to protect Mondstadt at all costs, allowing \
    //         him to mercilessly vanquish all who \
    //         threaten his city.",
    //         personality: "Kaeya calls himself and Diluc \"anti-heroes with \
    //         attitude problems.\" Diluc was once a confident and \
    //         passionate young man, dedicated to his work with \
    //         the Knights of Favonius. But after his father's \
    //         untimely death, Diluc grew aloof, bitter, and distant. \
    //         He dislikes wasting time on idle talk and grows \
    //         impatient easily.\
    //         \
    //         Diluc holds a particular resentment towards the \
    //         Knights of Favonius, whom he calls \"inefficient\" \
    //         and snubs at every opportunity. This bitterness stems \
    //         from Inspector Eroch's handling of his father's death, \
    //         and Diluc has not lessened his bitterness even after \
    //         Eroch was discharged from the Knights as a traitor.",
    //         element: "Pyro",
    //         weapon: {
    //             id: "",
    //             name: "Wolf Gravestone",
    //             weapon_type: "Claymore",
    //             rarity: "5",
    //             how_to_obtain: "Gatcha",
    //             refine: {
    //                 level: "1",
    //                 effect: "Increases ATK by 20%. On hit, attacks against enemies with less than 30% HP increase all party members' ATK by 40% for 12s. Can only occur once every 30s.",
    //             },
    //             weapon_attribute: {
    //                 level: "20",
    //                 base_attack: "122",
    //                 secondary_stat_name: "ATK",
    //                 secondary_stat_value: "19.1%",
    //                 ascension:{
    //                     level: "1",
    //                     base_attack: "153",
    //                 }
    //             }
    //         },
    //         artifact:{
    //             flower:{
    //                 artifact_id: 1234,
    //                 name: "",
    //                 artifact_set_id: 321,
    //                 rarity: "5",
    //                 main_attribute:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_1:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_2:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_3:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_4:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 }
    //             },
    //             feather:{
    //                 artifact_id: 1234,
    //                 name: "",
    //                 artifact_set_id: 321,
    //                 rarity: "",
    //                 main_attribute:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_1:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_2:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_3:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_4:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 }
    //             },
    //             time_piece:{
    //                 artifact_id: 1234,
    //                 name: "",
    //                 artifact_set_id: 321,
    //                 rarity: "",
    //                 main_attribute:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_1:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_2:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_3:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_4:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 }
    //             },
    //             chalice:{
    //                 artifact_id: 1234,
    //                 name: "",
    //                 artifact_set_id: 321,
    //                 rarity: "",
    //                 main_attribute:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_1:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_2:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_3:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_4:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 }
    //             },
    //             hat:{
    //                 artifact_id: 1234,
    //                 name: "",
    //                 artifact_set_id: 321,
    //                 rarity: "",
    //                 main_attribute:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_1:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_2:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_3:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 },
    //                 bonus_attr_4:{
    //                     id: 2134,
    //                     attribute_name: "",
    //                     attribute_value: ""
    //                 }
    //             }
    //         },
    //         weapon_type: "Claymore",
    //         level: 1,
    //         attribute: {
    //             base_stats: {
    //                 max_HP: "11,453",
    //                 attack: "792",
    //                 defence: "692",
    //                 elemental_mastery: "40",
    //                 max_stamina: "240"
    //             },
    //             advance_stats:{
    //                 crit_rate: "30.3%",
    //                 crit_dmg: "122.5%",
    //                 healing_bonus: "0.0%",
    //                 incoming_healing_bonus: "0.0%",
    //                 energy_recharge: "108.3%",
    //                 reduce_cd: "0.0%",
    //                 powerful_shield: "0.0%"
    //             },
    //             elemental_type:{
    //                 pyro_dmg_bonus: "0.0%",
    //                 pyro_res: "0.0%",
    //                 hydro_dmg_bonus: "0.0%",
    //                 hydro_res: "0.0%",
    //                 dendro_dmg_bonus: "0.0%",
    //                 dendro_res: "0.0%",
    //                 electro_dmg_bonus: "0.0%",
    //                 electro_res: "0.0%",
    //                 anemo_dmg_bonus: "0.0%",
    //                 anemo_res: "0.0%",
    //                 cryo_dmg_bonus: "0.0%",
    //                 cryo_res: "0.0%",
    //                 geo_dmg_bonus: "0.0%",
    //                 geo_res: "0.0%",
    //                 physical_dmg_bonus: "0.0%",
    //                 physical_res: "0.0%",
    //             }
    //         }
    //     },
    //     previewSearchType: "Weapons",
    //     previewPage: "Pyro",
    //     previewItems: ["Amber", "Bennett", "Diluc", "Klee", "Xiangling"],
    //     previewCharacter: "Diluc"
    // },
    // mutations: {
    //     changePage(state, name){
    //         state.page = name
    //     }
    // }
})

export default store;