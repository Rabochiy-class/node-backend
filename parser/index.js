import parserController from '../controller/parser.controller.js'
import axios from 'axios'
import { uploadImage } from '../s3.js'
import async from 'async'

const runApp = async () => {
  const characters = await axios.get( 'http://127.0.0.1:3000/api/main' )

  console.log( 'Спарсилось персонажей: ', characters.data.characters.length )
  const result = await parserController.parseCharacters( characters.data.characters )

  console.log( 'Конец обогащения БД данными' )
  console.log( 'Добавлено в БД персонажей: ', result.length )

}

runApp()
