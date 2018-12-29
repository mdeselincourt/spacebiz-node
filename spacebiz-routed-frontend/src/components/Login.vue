<template>
  <div class="login-wrapper component"> <!-- border border-light"> -->
    <form class="form-signin" @submit.prevent="login"><!-- don't actually submit, call login() -->
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
    </form>
    Error: {{ error }}
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: 'n/a'
    }
  },
  methods: {
    login () {
      // Called by @submit.prevent="login" in the template's login form
      // For $http see https://github.com/pagekit/vue-resource/blob/develop/docs/http.md
      //
      // This is Pawel J Wal's code for calling his home-brewed Rails auth endpoint
      // this.$http.post('/auth', { user: this.email, password: this.password })
      //   .then(request => this.loginSuccessful(request))
      //   .catch(request => this.loginFailed(request)) // I added request for debugging
      //
      // https://docs.aws.amazon.com/cognito/latest/developerguide/using-amazon-cognito-user-identity-pools-javascript-examples.html
    },
    loginSuccessful (req) {
      this.error = 'success: ' + req.data.token
    },
    loginFailed (req) {
      this.error = 'failed'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
  .login-wrapper {
    background: #315166;
    color: white;
  }*/
</style>
