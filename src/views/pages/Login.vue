<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <!--
  <v-card-title class="d-flex align-center justify-center py-7">
    <router-link
      to="/"
      class="d-flex align-center"
    >
      <v-img
        :src="require('@/assets/images/logos/logo.svg')"
        max-height="30px"
        max-width="30px"
        alt="logo"
        contain
        class="me-3 "
      ></v-img>

      <h2 class="text-2xl font-weight-semibold">
        Materio
      </h2>
    </router-link>

  </v-card-title>-->
        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">Colegio Steve Jobs, te da la bienvenida.</p>
          <p class="mb-2">Por favor, inicia sesion.</p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              outlined
              label="Usuario"
              placeholder="john@example.com"
              hide-details
              class="mb-3"
              >example@fake.com</v-text-field
            >

            <v-text-field
              @keyup.enter="login"
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Contraseña"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
              >secret1234</v-text-field
            >

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox label="Recordar usuario" hide-details class="me-3 mt-1"> </v-checkbox>

              <!-- forgot link -->
              <a href="javascript:void(0)" class="mt-1"> ¿Olvidaste tu contraseña? </a>
            </div>
            <!-- divider -->
            <v-card-text class="d-flex align-center mt-2">
              <v-divider></v-divider>
              <span class="mx-5"></span>
              <v-divider></v-divider>
            </v-card-text>

            <v-btn block color="primary" class="mt-6" @click="login"> Iniciar sesion </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> ¿Eres nuevo en la plataforma? </span>
          <router-link :to="{ name: 'pages-register' }"> Solicita creacion de cuenta </router-link>
        </v-card-text>

        <!-- divider -->
        <!--
  <v-card-text class="d-flex align-center mt-2">
    <v-divider></v-divider>
    <span class="mx-5"></span>
    <v-divider></v-divider>
  </v-card-text>-->
        <!-- social links -->
        <!--
  <v-card-actions class="d-flex justify-center">
    <v-btn v-for="link in socialLink"
           :key="link.icon"
           icon
           class="ms-1">
      <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
        {{ link.icon }}
      </v-icon>
    </v-btn>
  </v-card-actions>-->
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="500"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`)"
    />

    <!-- tree -->
    <!--
  <v-img
    class="auth-tree"
    width="247"
    height="185"
    src="@/assets/images/misc/tree.png"
  ></v-img>-->
    <!-- tree  -->
    <!--
  <v-img
    class="auth-tree-3"
    width="377"
    height="289"
    src="@/assets/images/misc/tree-3.png"
  ></v-img>-->
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import Swal from 'sweetalert2'
import store from '../../store/index'
import { post } from '@/helpers/ApiService'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const email = ref('')
    const password = ref('')
    const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
        colorInDark: '#1da1f2',
      },
      {
        icon: mdiGithub,
        color: '#272727',
        colorInDark: '#fff',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
        colorInDark: '#db4437',
      },
    ]

    return {
      isPasswordVisible,
      email,
      password,
      socialLink,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
  methods: {
    async login() {
      const res = await post('login', {
        email: this.email,
        password: this.password,
      })

      if (res.status) {
        const {
          data: { access_token: token, role: role, user: user },
        } = res

        store.commit('setAuthenticated', true)
        store.commit('setRole', role)
        store.commit('setToken', token)

        localStorage.setItem('token', token)
        localStorage.setItem('role', role)
        localStorage.setItem('isAuthenticated', true)
        localStorage.setItem('user', JSON.stringify(user))

        Swal.fire({
          title: 'Iniciaste sesion!',
          icon: 'success',
          confirmButtonText: 'Ok',
        })

        if (role === 'Estudiante') {
          this.$router.replace('/alumnos/materias')
        } else if (role === 'Profesor') {
          this.$router.replace('/docentes/materias')
        } else if (role === 'Administrador') {
          this.$router.replace('/admin/docentes')
        }
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Credenciales inválidas',
          icon: 'error',
          confirmButtonText: 'Ok',
        })
      }
    },
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
