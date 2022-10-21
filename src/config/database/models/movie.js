module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    name: { type: DataTypes.STRING },
    ranking: { type: DataTypes.NUMERIC },
    rating: { type: DataTypes.NUMERIC },
    cast: { type: DataTypes.ARRAY(DataTypes.STRING(1000)) },
    releaseDate: { type: DataTypes.DATE },
  }, {});

  return Movie;
};
