// As actions são responsáveis por comunicar aos reducer que algum evento aconteceu

const types = {
  CREATE_USER: '@app/CREATE_USER',
  UPDATE_USER: '@app/UPDATE_USER',
}

export default types


export function createUser(user) {
  return { type: types.CREATE_USER, user }
}

export function updateUser() {
  return { type: types.UPDATE_USER }
}