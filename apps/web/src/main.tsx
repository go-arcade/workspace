import render from './render'
import './styles/global.less'

async function bootstrap() {
  render()
}

bootstrap().catch((_error) => {
  //
})
