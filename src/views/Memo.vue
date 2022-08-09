<template>
  
    <div>
        <div class="memo">
            <input v-model="email">
            <div v-for="diary in diaries" @click="showDiary(diary)"><h4>{{diary.title}}</h4><h6>{{diary.date}}</h6></div>
        </div>
        <div>
            <Content :hidden="showPrevPage" v-bind:diary="diary" mode="old"/>
            <Content :hidden="showNewPage" v-bind:diary="diary" mode="new"/>
        </div>
            <div @click="test()">가져오기</div>
            <div @click="create()">새로쓰기</div>
            <div @click="save()">저장하기</div>
    </div>
</template>

<script>
import axios from 'axios'
import Content from './content.vue'

    export default {
    data() {
        return {
            showNewPage: true,
            showPrevPage: true,
            email: "siznorias@gmail.com",
            diaries: [],
            diary: {
                'title':'',
                'contents':'',
                'date':''}
        };
    },
    methods: {
        test() {
            axios.get("http://127.0.0.1:8000/get", {
                headers: {
                    "email": this.$data.email
                }
            }).then((res) => {
                this.$data.diaries = res.data;
                this.$data.diary = {};
            });
        },
        showDiary(diary){
            this.$data.showPrevPage= true;
            this.$data.showNewPage = false;
            this.$data.diary = diary
        },
        create() {
            this.$data.showPrevPage = false;
            this.$data.showNewPage = true;
            this.$data.diary = {}
        },
        save(){
            axios.post("http://127.0.0.1:8000/save", {
                body: {
                    "contents": "점심 메뉴가 생각이 안나요 2",
                    "date": "20220802",
                    "id": "siznorias@gmail.com",
                    "title": "일기1",
                }
            }).then((res) => {
                this.$data.diaries = res.data;
                this.$data.selected = {};
            });

        }
    },
    components: { Content }
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