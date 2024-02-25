module.exports = (sequelize, DataTypes) => {
    const Rejection = sequelize.define('Rejection', {
        rejection_id: {
          type:DataTypes.UUID,
          defaultValue:DataTypes.UUIDV4,
          primaryKey: true,
        },
        donor_id: {
          type:DataTypes.STRING,
        },
        rejection_date: {
          type: DataTypes.STRING,
        },
        rejection_by: {
          type:DataTypes.UUID,
        },
        rejection_comments: {
          type: DataTypes.TEXT,
        },
        rejection_type: {
          type: DataTypes.STRING,
        },
      });
      
      return Rejection;
}
