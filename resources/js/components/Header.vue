<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
        <router-link class="navbar-brand" :to="{name:'home'}">Laravel SPA</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>