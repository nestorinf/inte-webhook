import express from 'express'
import config from './config'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import routes from './routes'
const app = express()


const midlewares = () => {
  app.use(bodyParser.json())
  app.use(cors())
  app.use(helmet())
}

const listen = () => {
  app.listen(config.PORT_APP,() => {
    console.log(`Service run on Port ${config.PORT_APP}`)
  })
}

const routesload = () => {
    app.use(routes)
}

const run = () => {
  listen()
  midlewares()
  routesload()
}

export default run
