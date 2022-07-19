import {schema, CustomMessages, rules} from '@ioc:Adonis/Core/Validator'
import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {

  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    username: schema.string({trim: true}, [
      rules.unique({table: 'users', column: 'username'})
    ]),
    password: schema.string()
  })

  public messages: CustomMessages = {}

}
