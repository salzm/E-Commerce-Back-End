// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)

Product.belongstoMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)

Product.belongstoMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

Product.belongsto(Product, {
  foreignKey: "product_id",
});

Product.belongsto(Tag, {
  foreignKey: "product_id",
});

Product.belongsto(ProductTag, {
  foreignKey: "product_id",
});

Product.hasMany(ProductTag, {
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
