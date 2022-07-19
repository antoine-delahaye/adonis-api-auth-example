import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/Auth/RegisterValidator'
import LoginValidator from 'App/Validators/Auth/LoginValidator'

export default class AuthController {

  public async register({request, response}: HttpContextContract) {
    const payload = await request.validate(RegisterValidator)
    const user = await User.create(payload)
    return response.created(user)
  }

  public async login({auth, request, response}: HttpContextContract) {
    const {username, password} = await request.validate(LoginValidator)
    const token = await auth.attempt(username, password)
    return response.ok(token)
  }

  public async logout({auth, response}: HttpContextContract) {
    await auth.logout()
    return response.noContent()
  }

}
