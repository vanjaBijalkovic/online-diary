<template>
  <div class="container">
    <div style="row">
      <div class="col-sm-6 offset-sm-3 text-center">
        <h1 class="">{{editing ? 'Edit your' : 'Create New'}} Diary</h1>
        <form>
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" @click="addUrlInput">Add image</button>
            <button
              class="btn btn-primary"
              type="submit"
            >{{editing ? 'Edit' : 'Create New'}} Diary</button>
          </div>
          <div class="mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="Title"
              v-model="newDiary.title"
              required
            >
            <div v-for="(image, index) in newDiary.images" :key="index">
              <div class="input-group mt-3">
                <button type="button" class="btn btn-danger input-group-btn" @click="removeUrlInput(index)">-</button>
                <input
                  type="text"
                  placeholder="Image URL"
                  class="form-control createInput"
                  v-model="newDiary.images[index]"
                  required
                >
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { NEW_DIARY } from '../../constants/diary.js'
export default {
  name: "AddDiary",
  data() {
    return {
      newDiary: Object.assign(NEW_DIARY),
      editing: false
    };
  },
  methods: {
    addUrlInput() {
      this.newDiary.images.push("");
    },
    removeUrlInput(index) {
      this.newDiary.images = this.newDiary.images.filter(
        (image, currIndex) => currIndex !== index
      );
    }
  }
};
</script>