import connector from './connector'
import Example from './Example'

class Core {
  connector = connector
  Example = Example
}

export default new Core()
