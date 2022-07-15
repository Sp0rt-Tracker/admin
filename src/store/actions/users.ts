import { AppDispatch } from '../store'
// import { IUser } from "../../models/IUser";
import { userSlice } from '../reducers/UserSlice'
import repository from '../../repository'

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching())
    const response = await repository.Core.Example.getList()

    if (response.error) {
      dispatch(userSlice.actions.usersFetchingError(response.error))
    }

    dispatch(userSlice.actions.usersFetchingSuccess(response.value))
  } catch (error: any) {
    dispatch(userSlice.actions.usersFetchingError(error.message))
  }
}
