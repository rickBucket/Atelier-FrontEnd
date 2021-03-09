const outfit = [];

module.exports = {
  getAllOutfits: (callback) => {
    callback(null, outfit);
  },
  saveAnOutfit: (newOutfit, callback) => {
    outfit.unshift(newOutfit);
    console.log(outfit);
    callback(null, outfit);
  },
  deleteAnOutfit: (productID, callback) => {
    const index = outfit.find((element, i) => {
      if (element.styles.product_id === productID) {
        return i;
      }
    });
    outfit.splice(index, 1);
    console.log(outfit);
    callback(null, outfit);
  },
};
