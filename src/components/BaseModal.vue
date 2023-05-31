<template>
  <div class="modal fixed">
    <div class="modal-container">
      <button
        class="close-btn text-xl w-10 h-10 absolute right-4 top-4
        border-gray-500 border-4 text-xl text-gray-700 font-bold rounded-full"
        @click="$emit('close')">
        <font-awesome-icon icon="fa-solid fa-xmark "/>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
};
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

</style>
