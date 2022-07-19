import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

  Route.post('register', 'AuthController.register')
  Route.post('login', 'AuthController.login')
  Route.post('logout', 'AuthController.logout')

  Route.group(() => {

    Route.get('', 'UserController.show')
    Route.put('', 'UserController.update')
    Route.delete('', 'UserController.delete')

  }).middleware(['auth']).prefix('user')

}).prefix('api')
