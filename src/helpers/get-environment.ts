import environments from '@config/environment'

export default function (): Environment {
  const { development, production } = environments
  const productionEnv = (
    process.env.NODE_ENV || process.env.ENVIRONMENT
  )?.toLowerCase()
  if (productionEnv === 'production') {
    return production as Environment
  } else {
    return development as Environment
  }
}

interface Environment {
  localServerPort: string
  externalConnectionPort: string
  host: string
  port: string
  user: string
  password: string
  database: string
  dialect: string
  production: any
}
