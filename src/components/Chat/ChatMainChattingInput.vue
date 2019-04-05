<template>
  <div>
    <textarea :class="$style.input" name id rows="10" autofocus draggable="false">ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</textarea>
    <button :class="$style.button">发送</button>
  </div>
</template>

<script>
export default {

}
</script>

<style module lang="postcss">
.input {
  position: absolute;
  width: 99%;
  bottom: 0;
  border-top: rgb(126, 149, 192) solid 2px;
  border-right: transparent;
  border-left: transparent;
  resize: none;
  font-size: 18px;
  font-weight: 550
}
.input:focus{
  outline: none
}
.button{
  position: absolute;
  right: 1.5em;
  bottom: 0.5em;
  width: 4em;
  height: 2em;
  color: white;
  background: rgb(126, 149, 192)
}
.button:hover{
  background-color: rgb(91, 107, 138)
}
</style>
