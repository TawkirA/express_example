const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require(".");

// module.exports = (sequelize, DataTypes) => {
    // const User = sequelize.define('User', {
    //     id: {
    //         type: DataTypes.INTEGER,
    //         primaryKey: true            
    //     },
    //     name: {
    //         type: DataTypes.STRING
    //     },
    //     email: {
    //         type: DataTypes.STRING,
    //         unique: true
    //     }
    // });
    // console.log('SEQQ', sequelize);
    // class User extends sequelize.Model {}
    // User.init({
    //     id: {
    //         type: DataTypes.INTEGER,
    //         primaryKey: true            
    //     },
    //     name: {
    //         type: DataTypes.STRING
    //     },
    //     email: {
    //         type: DataTypes.STRING,
    //         unique: true
    //     }
    // }, {
    //     sequelize,
    //     modelName: 'User'
    // })
class User {
    static init(sequelize) {
        return sequelize.define('User', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true            
            },
            name: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING,
                unique: true
            }
        })
    }
}
    // return sequelize.model('User');
// }

module.exports = User;