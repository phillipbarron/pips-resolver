const getAllTheThings = (pipsResponse) => {
  if (pipsResponse && pipsResponse.pips && pipsResponse.pips.results) {
      const pipsObject = pipsResponse.pips.results[0];
    const type = Object.keys(pipsObject).find(
      (key) => key != "$"
    );
    return {
      type,
      synopses: pipsObject[type][0].synopses,
    };
  }
  return {};
};

module.exports = {
  getAllTheThings,
};
