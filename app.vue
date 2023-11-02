<template>
  <div>
    <!-- <NuxtWelcome /> -->

    <div class="py-10">
  
      <FormKit
        ref="formRef"
        type="form"
        :actions="false"
        name="contactFormName"
        @submit="()=>{}"
      >
      <h1>HoHoHo🎅</h1>
      <p>present request</p>
      <input type="text" :value="present" :onChange="onChange(value)">
      <p>{{ present }}</p>

    
      </FormKit>
  </div>
  </div>
</template>
<script setup>
const present = ref('')
const onChange =(value)=>{
present.value=value
}

</script>
