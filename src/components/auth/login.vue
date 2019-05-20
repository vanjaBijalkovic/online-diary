<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 offset-sm-3 text-center">
        <h1 class="display-3">Login</h1>
        <form @submit.prevent="loginAndRedirect" class="justify-content-center">
          <div class="form-group" v-for="(attributes, index) in credentials" :key="index">
            <b-input
              :type="index"
              class="form-control"
              :placeholder="getAttributeName(index)"
              :v-model="attributes"
            />
          </div>
          <button type="submit" class="btn btn-primary">Log in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { CREDENTIALS } from '../../constants/user-constants.js'
export default {
  name: "Login",
  data() {
    return {
      credentials: Object.assign(CREDENTIALS)
    };
  },
  methods: {
    getAttributeName(value) {
      return _.upperFirst(value)
    }
  },
};
</script>