module.exports = (sequelize, DataTypes) => {

    const Donors = sequelize.define("Donors", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        donor_id:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        firstname:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        middlename:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        suffix:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        refferalId:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        birthday:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        gender:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        level:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },      
        status:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        address:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        contactNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        depositSlip:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        depositfile:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        bankfile:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        validIdFile:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        bankAccount:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        philId:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        M_O_D:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        amount:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        isVerified:{
            type:DataTypes.BOOLEAN,
            allowNull: true,
        },
        verifiedDate:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        isValidated:{
            type:DataTypes.BOOLEAN,
            allowNull: true,
        },
        validatedDate:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        verifedBy:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        validatedBy:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        isVerifiedDonorSolicitor:{
            type:DataTypes.BOOLEAN,
            allowNull: true,
        },
        verifiedDonorSolicitorDate:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        isValidatedDonorSolicitor:{
            type:DataTypes.BOOLEAN,
            allowNull: true,
        },
        validatedDonorSolicitorDate:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        verifedDonorSolicitorBy:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        validatedDonorSolicitorBy:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        isRejected:{
            type:DataTypes.BOOLEAN,
            allowNull: true,
        },
        dateOfDonation:{
            type:DataTypes.STRING,
            allowNull: true,
        },
    })
    Donors.associate = (models)=> {
        Donors.belongsTo(models.Status, {
            foreignKey: 'status',
            onDelete:'NO ACTION'
        })
        Donors.belongsTo(Donors, { as: 'upline', foreignKey: 'uplineId' });
        Donors.hasMany(Donors, { as: 'downlines', foreignKey: 'uplineId' });
    };

 

    return Donors
} 