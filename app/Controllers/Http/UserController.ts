import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

import UpdateValidator from 'App/Validators/User/UpdateValidator'

export default class UserController {

  public async show({auth, response}: HttpContextContract) {
    return response.json(auth.user!)
  }

  public async update({auth, request, response}: HttpContextContract) {
    const payload = await request.validate(UpdateValidator)
    await auth.user!.merge(payload).save()
    return response.noContent()
  }

  public async delete({auth, response}: HttpContextContract) {
    await auth.user!.delete()
    return response.noContent()
  }

}
