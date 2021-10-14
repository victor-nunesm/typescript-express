import { Sequelize } from 'sequelize/types'
import path from 'path'
import fs from 'fs'

import db from '@config/sequelize'
import getEnvironment from '@helpers/get-environment'

const { production: isProduction } = getEnvironment()

// Import models from current directory into db instance object
fs.readdirSync(__dirname)
  .filter(filterByTypescriptFile)
  .forEach((file: string) => {
    try {
      const currModel = require(`./${file}`)
      if (currModel.default) {
        currModel.default(db.sequelize)
      }
    } catch (error) {
      console.error(error)
    }
  })

setupAssociations(db.sequelize)

function filterByTypescriptFile(fileName: string) {
  return fileName.indexOf('.') !== 0 &&
    fileName !== path.basename(__filename) &&
    fileName.slice(-3) === isProduction
    ? '.js'
    : '.ts'
}

function setupAssociations(sequelize: Sequelize): void {
  // All associations must be specified here
  const { User, Car } = sequelize.models
  if (User && Car) {
    User.hasMany(Car, { foreignKey: 'userId', sourceKey: 'id' })
    Car.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' })
  } else return
}

export default db
