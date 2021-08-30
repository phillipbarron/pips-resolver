const getAllTheThings = (pipsResponse) => {
  if (pipsResponse && pipsResponse.pips && pipsResponse.pips.results) {

    const type = Object.keys(pipsResponse.pips.results[0]).find(key => key != "$");
    return {
      type
    };
  }
  return {};
};

module.exports = {
  getAllTheThings,
};
