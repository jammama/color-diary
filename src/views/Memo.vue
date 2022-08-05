<template>
  <div class="memo">
    <div><h4>Color Diary</h4><h6>2022-08-01</h6></div>
    <div><h4>이게 뭔지 기억이나 할까</h4><h6>2022-08-01</h6></div>
  </div>
  <div>+</div>
</template>

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