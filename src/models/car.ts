import { DataTypes, Model, Sequelize } from 'sequelize'

export default function (sequelize: Sequelize) {
  const { STRING, UUID, UUIDV4 } = DataTypes
  class Car extends Model {}
  Car.init(
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
      model: {
        type: STRING,
        allowNull: false,
      },
      year: {
        type: STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Car',
      timestamps: true,
      paranoid: true,
      name: {
        singular: 'Car',
        plural: 'Cars',
      },
    }
  )

  return Car
}
