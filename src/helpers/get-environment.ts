import environments from '@config/environment'

export default function () {
  const { development, production } = environments
  const productionEnv = (
    process.env.NODE_ENV || process.env.ENVIRONMENT
  )?.toLowerCase()
  if (productionEnv === 'production') {
    return production
  } else {
    return development
  }
}
