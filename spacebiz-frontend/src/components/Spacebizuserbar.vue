<template>
    <div id="spacebizuserbar">
        <div id="userheader">
        <p>You are: {{ charactername }}. You have Ⴥ{{ balance }}. Authdebug is {{ authDebug }} </p>
        </div>

        <div class="tutorialedge-login-box">
            <h4>Register</h4>
            <div class="card-panel red darken-2" v-if="error != null"><span class="white-text">{{ error.message }}</span></div>
            <p>Don't have an account? Register for one ("using your Google account"...?!?)</p>
            <form @submit.prevent="authenticate">
                <div class="input-field">
                    <input id="username" type="text" class="validate" v-model="username" required>
                    <label for="username">Username</label>
                </div>
                <div class="input-field">
                    <input id="email" type="text" class="validate" v-model="email" required>
                    <label for="email">Email</label>
                </div>
                <div class="input-field">
                    <input id="password" type="password" class="validate" v-model="pass" required>
                    <label for="password">Password</label>
                </div>
                <div class="center-align">
                    <button class="btn btn-default btn-large">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        data: function() {
            
            return {
                charactername: 'Brapp Zannigan',
                balance: 9000,
                
                // This was written based on the "registration component" in the tutorial
                authDebug: 'Nothing',
                username: '',
                pass: '',
                email: '',
                error: null
            }
        },
        methods: {
            authenticate() {
                this.authDebug = "Authenticate()...";
            }
        }
    }

</script>

<style scoped>
#spacebizuserbar {
    background: #eef;
}
</style>