<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-nav class="ml-auto">


        <b-form inline>
          <label class="sr-only" for="inlineFormInputName2">User</label>
          <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputUser" placeholder="User" v-model="user"/>
          <label class="sr-only" for="inlineFormInputGroupUsername2">Pass</label>
          <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="inlineFormInputPass" placeholder="Pass" v-model="pass"/>
          </b-input-group>
          <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
          <b-button variant="primary" @click.prevent="sendLogin">Login</b-button>
        </b-form>

    </b-navbar-nav>



  </b-navbar>
</template>

<script>
  import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';
  import bForm from 'bootstrap-vue/es/components/form/form';
  import bInputGroup from 'bootstrap-vue/es/components/input-group/input-group';
  import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "navbar",
      data(){
          return {
            user: '',
            pass: ''
          }
      },
      components: {
          bInputGroup,
          bForm,
          bNavbar
      },
      methods: {
        ...mapGetters('auth', {
          test: 'test'
        }),
        ...mapActions('auth', {
          login: 'login'
        }),
        sendLogin(){
          this.login({emailAddress: this.user, password: this.pass})
        }

      }
    }
</script>

<style scoped>

</style>
