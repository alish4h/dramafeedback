<template>
  <f7-page>
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        Home
      </f7-nav-title>
    </f7-navbar>
    <f7-block inner>
      <f7-block-title>{{ title }}</f7-block-title>
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
    <f7-list v-show="authenticated" center>
      <f7-list-button link= "/students/" >Students</f7-list-button>
      <f7-list-button @click='fsignIn'>Performance</f7-list-button>
      <f7-list-button>Settings</f7-list-button>
      <f7-list-button large>Start Session</f7-list-button>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  
  name: 'Home',
  data() {
    return {
      title: 'Dramatic Feed',
      authenticated: false
    };
  },
  methods: {
    fsignIn () {
      this.authenticated = true
    },
    signIn () {
      window.plugins.googleplus.login(
    {
      'scopes': 'https://www.googleapis.com/auth/spreadsheets', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    },
    function (obj) {
      // do something useful instead of alerting
      if(JSON.stringify(obj)) {
        this.authenticated = true
      }
    },
    function (msg) {
      alert('error: ' + msg);
    }
);
    }
  }
};
</script>
