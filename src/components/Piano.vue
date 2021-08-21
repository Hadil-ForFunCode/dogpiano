<template>
    <div class="keyboard">
       <PianoKey v-for="note in notes" :key="note"  @click="playNote(note)" :keyText="note"/>
    </div>
</template>

<script>
import PianoKey from './PianoKey.vue'
import * as Tone from 'tone'

export default {
  name: 'Piano',
  components: {
    PianoKey
  },
  data(){
    return { notes:['C4','D4','E4','F4','G4','A4','B4']}
  },
  methods:{
    playNote: async function (note){
        await Tone.start();
        this.sampler.triggerAttackRelease(note);
    }
  },
  created(){
    this.sampler = new Tone.Sampler(
    {
      urls: {
        "C4": require("../assets/dogbarkC4.wav")
        },
      release: 1,
    }).toDestination();
  }
}

</script>

<style>
.keyboard {
    height: 500px;
    display: grid;
    grid-template-columns: repeat(7,1fr);
}

</style>