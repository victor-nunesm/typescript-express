import { DataTypes, Model, Sequelize } from 'sequelize'

export default function (sequelize: Sequelize) {
  const { STRING, UUID, UUIDV4 } = DataTypes
  class User extends Model {}
  User.init(
    {
      id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: true,
      paranoid: true,
      name: {
        singular: 'user',
        plural: 'users',
      },
    }
  )

  return User
}
