<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    floating
    width="260"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">

        <v-img
          :src="require('@/assets/images/logos/billgates.png')"
          max-height="66px"
          max-width="250px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
        <!-- <v-slide-x-transition>
          <h2 class="app-title text--primary">
            Instituto Steve Jobs
          </h2>
        </v-slide-x-transition> -->

    </div>

    <!-- Navigation Items -->
    <v-list
      expand
      shaped
      class="vertical-nav-menu-items pr-5"
    >

      <nav-menu-group v-if="showAdminMenu"
        title="Administración"
        :icon="icons.mdiCogOutline"
      >

        <nav-menu-link
          title="Materias"
          :to="{ name: 'admin-subject' }"
          :icon="icons.mdiBookOpenVariant"
        ></nav-menu-link>

        <nav-menu-link
          title="Docentes"
          :to="{ name: 'admin-teacher' }"
          :icon="icons.mdiAccountCircle"
        ></nav-menu-link>

        <nav-menu-link
          title="Alumnos"
          :to="{ name: 'students-subjects' }"
          :icon="icons.mdiAccountGroup"
        ></nav-menu-link>

      </nav-menu-group>

        <nav-menu-link v-if="showTeacherMenu"
          title="Mis aulas"
          :to="{ name: 'teacher-subjects' }"
          :icon="icons.mdiBookOpenVariant"
        ></nav-menu-link>

        <nav-menu-link v-if="showStudentMenu"
          title="Mis materias"
          :to="{ name: 'students-notadmin-subjects' }"
          :icon="icons.mdiBookOpenVariant"
        ></nav-menu-link>

        <nav-menu-link v-if="showAdminMenu"
          title="Reportes"
          :to="{ name: 'pages-report' }"
          :icon="icons.mdiFileChartOutline"
        ></nav-menu-link>

        <nav-menu-link
        title="Configuración"
        :to="{ name: 'pages-account-settings'}"
        :icon="icons.mdiAccountCogOutline"
      ></nav-menu-link>


    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
  mdiCogOutline,
  mdiAccountCircle,
  mdiBookOpenVariant,
  mdiAccountGroup,
  mdiBookPlusMultiple,
  mdiFileChartOutline,
} from '@mdi/js'
import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './components/NavMenuLink.vue'

export default {
  components: {
    NavMenuSectionTitle,
    NavMenuGroup,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  setup() {
    return {
      showAdminMenu: localStorage.getItem('role') == "Administrador",
      showTeacherMenu: localStorage.getItem('role') == "Profesor",
      showStudentMenu: localStorage.getItem('role') == "Estudiante",
      icons: {
        mdiHomeOutline,
        mdiAlphaTBoxOutline,
        mdiEyeOutline,
        mdiCreditCardOutline,
        mdiTable,
        mdiFileOutline,
        mdiFormSelect,
        mdiAccountCogOutline,
        mdiCogOutline,
        mdiAccountCircle,
        mdiBookOpenVariant,
        mdiAccountGroup,
        mdiBookPlusMultiple,
        mdiFileChartOutline,
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
