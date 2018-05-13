<template>
  <f7-page>
    <f7-navbar v-show="!authenticated" sliding>
      <f7-nav-right v-show="authenticated">
        <f7-link icon-f7="logout_fill" @click="logout">Logout</f7-link>
      </f7-nav-right>
      <f7-nav-title>
        Home
      </f7-nav-title>
    </f7-navbar>

    <!-- AFTER LOGIN NAVBAR -->
    <f7-navbar v-show="authenticated" back-link="Logout" sliding>
    <f7-nav-title>
        Logged In
      </f7-nav-title>
    </f7-navbar>
    <f7-block inner>
      <f7-block-title v-show="!authenticated">{{ title }}</f7-block-title>
      <f7-block-title v-show="authenticated">{{welcome}}</f7-block-title>
    </f7-block>

    <!-- SIGNIN FOR GOOGLE LOGIN  -->
    <f7-list v-show="!authenticated">
      <f7-list-button @click='signIn'>Sign In</f7-list-button>
      <f7-list-button @click='fsignIn'>F Sign In</f7-list-button>
      <f7-block-footer>Sign in to Google</f7-block-footer>
      <p>919100318693-o6ae41ihtvttf79nnncob92lsef0in30.apps.googleusercontent.com</p>
      <p>O-ft97WleWf3mMQEZ7TW7Cpo</p>
    </f7-list>


    <!-- POST SIGN IN VIEW -->
    <f7-list v-show="authenticated">
      <f7-list-button @click="$f7router.navigate('/students/')">Students</f7-list-button>
      <f7-list-button @click="$f7router.navigate('/performance/')">Performance</f7-list-button>
      <f7-list-button @click="$f7router.navigate('/settings/')">Settings</f7-list-button>
      <f7-list-button @click="$f7router.navigate('/session/')">Start Session</f7-list-button>
    </f7-list>

  </f7-page>
</template>
<script>
import store from '@/store/store'
export default {
  
  name: 'Home',
  data() {
    return {
      title: 'Dramatic Feed',
      authenticated: false,
      welcome: '',
      user: null,
      token: null
    };
  },
  methods: {
    fsignIn () {
      this.authenticated = true
    },
    oAuth () {
      return new Promise((resolve, reject) => {
        window.plugins.googleplus.login(
        {
          'scopes': 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
          'webClientId': '', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
          'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
        },
        function (obj) {
          // resolve the promise with user object
          resolve(obj)
        
        },
        function (msg) {
          alert('error: ' + msg);
        })
      })
    },
    async signIn () {
      this.user = await this.oAuth()
      this.authenticated = true
      this.welcome = "Welcome " + this.user.displayName
      // this.$store.dispatch('setToken', this.user.accessToken)
      // this.$store.dispatch('setRefreshToken', this.user.refreshToken)
      oauth2Client.setCredentials({
          access_token: this.user.accessToken,
          refresh_token: this.user.refreshToken
      });
    },
    logout () {
      this.authenticated = false
      window.plugins.googleplus.logout(
      function (msg) {
        // alert("You've been logged out!")
        navigator.notification.alert(
            "You've been logged out",  // message
            null,         // callback
            'Logout',            // title
            'OK'                  // buttonName
        )
        })
    }

  }
};
</script>
