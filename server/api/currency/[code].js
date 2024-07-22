export default defineEventHandler(async (event) => {
  const { code } = event.context.params;

  const { currencyApiKey } = useRuntimeConfig();

  console.log("currencyApiKey", currencyApiKey);

  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/currencies?apikey=${currencyApiKey}&currencies=${code}`
  );

  return data[code] || {};
});
