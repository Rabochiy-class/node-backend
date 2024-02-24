import { fields, values } from './consts/consts.js'

const updateCharacter = 'UPDATE public."Characters" SET full_name=$1,house_id=$2,photo=$3,gender_id=$4,hair_color=$5,marital_status=$6,blood_status=$7,born=$8,died=$9,nationality=$10,species=$11 WHERE id=$12 RETURNING *'
const getAllCharacters = 'SELECT * FROM public."Characters" ORDER BY id'
const createCharacter = `INSERT INTO public."Characters" ${fields} values ${values} RETURNING *`
const deleteAll = 'DELETE FROM public."Characters" RETURNING *'
const getCharacter = 'SELECT * FROM public."Characters" WHERE id = $1'
const deleteCharacter = 'DELETE FROM public."Characters" WHERE id = $1 RETURNING *'

const signup = 'INSERT INTO public."users" (name,email,password) values ($1,$2,$3) RETURNING *'

export const queries = {
  characters: {
    updateCharacter,
    getAllCharacters,
    createCharacter,
    deleteAll,
    getCharacter,
    deleteCharacter,
  },
  auth: {
    signup,
  },
  parser: {
    createCharacter
  }
}