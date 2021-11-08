import Apis from '../../Apis/Apis'

export const getUsers = async() => {
  try {
    const response = await Apis.GetUsers()
    return response

  } catch (error) {
    console.log(error.message);
  }
}