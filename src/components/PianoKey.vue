<template>
    <div class="key">
        {{keyText}}
    </div>
</template>

<script>


export default {
  name: 'PianoKey',
  props:{ 
      keyText: String,
  }
}

</script>


<style scoped>
.key {
    user-select: none;
    border: 2px solid black;     
}

.key:active{
    background-color: gray;    
}

</style>
