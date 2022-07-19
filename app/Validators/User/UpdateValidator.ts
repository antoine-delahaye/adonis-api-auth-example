import {schema, CustomMessages} from '@ioc:Adonis/Core/Validator'
import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {

  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    username: schema.string.optional({trim: true}),
    password: schema.string.optional()
  })

  public messages: CustomMessages = {}

}
