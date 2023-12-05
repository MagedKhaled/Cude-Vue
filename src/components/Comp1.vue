<template>
    <div @click="countClicks">
        <h2>{{ name }}</h2>
        <p id="red">You have clicked me {{ clicks }} times.</p>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: false,
            default:'Not req',
            validator: function(value) {
                if(10<value.length && value.length<50){
                    return true;
                }
                else{
                    return false
                }
            }
        }
    },
    data(){
        return{
            clicks: 0,
        }
    },
    methods: {
        countClicks() {
      this.clicks++;
    }
    }
}
</script>

<style>
  #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }

  #app > div:hover {
  cursor: pointer;
}
</style>