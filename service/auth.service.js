import { pool } from "../db.js"
import { queries } from "../queries.js"
import authModels from "../models/auth.models.js"

class AuthService {
  async signup ( user ) {
    const newUser = authModels.Signup( user )

    const characters = await pool.query( queries.auth.signup, newUser )
    return characters.rows[ 0 ]
  }
}

export default new AuthService()
