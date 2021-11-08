import Apis from '../../Apis/Apis'

export const getComments = async() => {
  try {
    const response = await Apis.GetComments()
    return response

  } catch (error) {
    console.log(error.message);
  }
}