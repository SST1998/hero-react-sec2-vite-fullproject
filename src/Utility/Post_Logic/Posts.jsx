import Apis from '../../Apis/Apis'

export const getPosts = async() => {
  try {
    const response = await Apis.GetPosts()
    return response

  } catch (error) {
    console.log(error.message);
  }
}