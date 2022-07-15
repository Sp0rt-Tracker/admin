import Connector from '../connector'
import { IUser } from '../../../models/IUser'

interface Users {
  value: IUser[]
  error: any
}

class Example {
  getList = async (
    string: string = 'https://jsonplaceholder.typicode.com/users'
  ) => {
    const result: Users = {
      value: [],
      error: null
    }

    try {
      const response = await Connector.connector.get<IUser[]>(string)
      if (response.status === 200) {
        result.value = response.data
      } else {
        result.error = new Error(`API error, status: ${response.status}`)
      }
    } catch (error: any) {
      result.error = error.response
    }

    return result
  }
}

export default new Example()
