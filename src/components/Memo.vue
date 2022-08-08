<template>
  
  <div class="memo">
    <div>ddd</div>
    <div v-for="test in tests"><h4>{{test.title}}</h4><h6>{{test.date}}</h6></div>
  </div>
  <div @click="test()">+</div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return{
                 tests : [{title: 'test', date: '2021-08-22'},
                 {title: 'test2', date: '2021-08-22'},
                 {title: 'test3', date: '2021-08-22'}]
            }   
        },
        methods: {
            test() {
                axios.get("http://131.186.21.47:8000/get", 
                {
                  headers: {
                    email: `Bearer ${accessToken}`
                  }
                }
            )
            }
        }
    }
</script>

<style>
  .memo {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EEEEEE;
    padding: 10px;
  }
  .memo > div {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #EEEE99;
    margin: 0.2em;
    height: auto;
  }
  .memo > div > h4 {
    padding: 0.5em 0.5em 0.5em 0.5em;
    font: bold; 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .memo > div > h6 {
    padding: 1em;
    min-width: fit-content;
    margin-left: auto;
  }
  .memo > div::before {
    padding: 0.5em 0 0.5em 0;
    content: "　";
    width: 0.3em;
    height: auto;
    background-color: #CCCC33;
  }

</style>