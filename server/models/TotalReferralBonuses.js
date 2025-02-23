module.exports = (sequelize, DataTypes) => {
    const TotalReferralBonuses = sequelize.define('TotalReferralBonuses', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        totalBonus: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        totalCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    });

    TotalReferralBonuses.associate = (models) => {
        TotalReferralBonuses.hasMany(models.ReferralBonuses, { foreignKey: 'totalReferralBonusId' });
    };

    return TotalReferralBonuses;
};