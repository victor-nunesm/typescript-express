import { Sequelize } from 'sequelize/types'
import path from 'path'
import fs from 'fs'

import db from '@config/sequelize'

// Import models from current directory into db instance object
fs.readdirSync(__dirname)
  .filter(filterByTypescriptFile)
  .forEach((file: string) => {
    try {
      const currModel = require(`./${file}`)
      currModel.default(db.sequelize)
    } catch (error) {
      console.error(error)
    }
  })

setupAssociations(db.sequelize)

function filterByTypescriptFile(fileName: string) {
  return (
    fileName.indexOf('.') !== 0 &&
    fileName !== path.basename(__filename) &&
    fileName.slice(-3) === '.ts'
  )
}

function setupAssociations(sequelize: Sequelize): void {
  // All associations must be specified here
  const { User, Car } = sequelize.models
  User.hasMany(Car, { foreignKey: 'userId', sourceKey: 'id' })
  Car.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' })
}

export default db
