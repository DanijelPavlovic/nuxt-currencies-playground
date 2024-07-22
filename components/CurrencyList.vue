<template>
  <div>
    <h2>Currency List</h2>
    {{ currency }}
  </div>
</template>

<script setup>
const { data: currency } = await useFetch("/api/currency/USD");

console.log("currency", currency.value);
</script>
