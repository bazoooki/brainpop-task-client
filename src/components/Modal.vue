<template>
  <div class="modal">
    <div class="modal-container">
      <button class="close-btn" @click="$emit('close')">
        X
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  padding: 30px;
  background: white;
  width: 600px;

  border-radius: 15px;
  border: 4px solid #aaa;
  transform: translate(-50%, -50%);
}

.close-btn {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #888;
  padding: 0px;
  margin: 0px;
  font-size: 20px;
  border: 3px solid #aaa;
  border-radius: 100%;
  text-align: center;
}
</style>
