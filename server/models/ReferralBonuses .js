module.exports = (sequelize, DataTypes) => {
    const ReferralBonuses = sequelize.define('ReferralBonuses', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      donorId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      donorName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bonus: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      downlineDetails: {
        type: DataTypes.JSON, // JSONB is preferred for storing structured data in PostgreSQL
        allowNull: false, // Or set to true if you want to allow empty details
      },
      totalReferralBonusId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    ReferralBonuses.associate = (models) => {
      ReferralBonuses.belongsTo(models.Donors, { foreignKey: 'donorId' });
    };
  
    return ReferralBonuses;
  };
  