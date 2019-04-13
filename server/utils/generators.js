const generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: Date.now(),
  };
};

const generateLocationMessage = (from, latitude, longitude) => ({
  from,
  url: `https://www.google.com/maps?q=${latitude},${longitude}`,
  createdAt: new Date().getTime(),
})

module.exports = {
  generateMessage,
  generateLocationMessage,
};
