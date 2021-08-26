<template>
    <div class="keyboard">
       <PianoKey v-for="keyNote in keyNotes" :key="keyNote.note"  @click="playNote(keyNote.note)" :keyText="keyNote.note"/>
    </div>
</template>

<script>
import PianoKey from './PianoKey.vue'
import KeyNote from '../model/KeyNote'
import * as Tone from 'tone'

export default {
  name: 'Piano',
  components: {
    PianoKey
  },
  data(){
    return { keyNotes:[ new KeyNote('C4','A'),
                        new KeyNote('D4','S'),
                        new KeyNote('E4','D'),
                        new KeyNote('F4','F'),
                        new KeyNote('G4','G'),
                        new KeyNote('A4','H'),
                        new KeyNote('B4','J'),
                  ]}
  },
  methods:{
    playNote: async function (note){
        await Tone.start();
        this.sampler.triggerAttackRelease(note);
    },
    keyboardPress: async function(event){
      
      let key = String.fromCharCode(event.keyCode).toUpperCase();
      const keynote = this.keyNotes.find(ele => ele.key == key);
      if(keynote){
        await this.playNote(keynote.note);
      }
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

    window.addEventListener('keypress', this.keyboardPress);
  },
  unmounted(){
    window.removeEventListener('keypress', this.keyboardPress);
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