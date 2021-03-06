'use strict'

class CreateUser {
  get rules () {
    return {
      'username': 'required|unique:users',
      'email': 'required|unique:users',
      'password': 'required'
    }
  }

  get messages() {
    return {
      'required': '{{ field }} is required.',
      'unique': 'The {{ field }} already exists.'
    }
  }


  get sanitizationRules () {
    return {
      email: 'normalize_email',
    }
  }

  get validateAll () {
    return true
  }

  async fails(error) {
    this.ctx.session.withErrors(error)
      .flashAll()

    return this.ctx.response.redirect('back')
  }
}

module.exports = CreateUser
