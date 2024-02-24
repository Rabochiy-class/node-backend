import { pool } from "../db.js"
import { queries } from "../queries.js"
import characterModels from "../models/character.models.js"

class CharacterService {
  async getAll () {
    const characters = await pool.query( queries.characters.getAllCharacters )
    return characters.rows
  }
  
  async create ( post ) {
    const newPost = characterModels.Create( post )

    const createdPost = await pool.query( queries.characters.createCharacter, newPost )
    return createdPost.rows[0]
  }

  async update ( post, id ) {
    const newPost = characterModels.Create( post )

    const updatedPost = await pool.query( queries.characters.updateCharacter, [ ...newPost, id ] )
    return updatedPost.rows[0]
  }

  async deleteAll () {
    const characters = await pool.query( queries.characters.deleteAll )

    return characters.rows.length
  }

  async getCharacter( id ) {
    const character = await pool.query( queries.characters.getCharacter, [ id ] )

    return character.rows[ 0 ]
  }

  async deleteCharacter( id ) {
    const character = await pool.query( queries.characters.deleteCharacter, [ id ] )

    return character.rows[ 0 ]
  }
}

export default new CharacterService()
