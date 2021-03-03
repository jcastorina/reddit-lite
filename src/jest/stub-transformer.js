module.exports = {
  process() {
    return 'export {};';
  },
  getCacheKey() {
    return 'stub-transformer';
  },
};
