<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 offset-sm-3 text-center">
        <h1 class="display-3">Register page</h1>
        <div class="info-form">
          <form @submit.prevent="registerAndRedirect" class="justify-content-center">
            <div class="form-group" v-for="(attributes, index) in newUser" :key="index">
              <b-input
                class="form-control"
                type="text"
                :placeholder="getAttributeName(index)"
                :v-model="attributes"
                required
              />
            </div>
            <div class="form-group">
              <input type="checkbox" class="form-check-input" v-model="checked" required/>
              <label class="form-check-label">I accept terms and conditions</label>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { NEW_USER } from '../../constants/user-constants.js'
export default {
  name: "Register",
  components: {},
  data() {
    return {
      newUser: Object.assign(NEW_USER),
      checked: false
    };
  },
  methods: {
    getAttributeName(value) {
      return _.upperFirst(_.lowerCase(value));
    }
  },
};
</script>