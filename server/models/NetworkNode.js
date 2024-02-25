module.exports = (sequelize, DataTypes) => {


const NetworkNode = sequelize.define('NetworkNode', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

NetworkNode.belongsTo(NetworkNode, { as: 'upline', foreignKey: 'uplineId' });
NetworkNode.hasMany(NetworkNode, { as: 'downlines', foreignKey: 'uplineId' });

return NetworkNode
}
