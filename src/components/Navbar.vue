<template>
<b-navbar toggleable="md" type="light">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#">
    <img id="logo" class="mx-auto" :src="logo" height="30" alt="Logo">
  </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

        <!-- Search Section -->
        <b-nav-form class="d-md-none d-lg-flex">
            <b-form-input 
                size="sm" 
                class="mr-sm-2" 
                type="text"
                :placeholder="searchInputPlaceholder"/>
            <button size="sm" 
                    class="btn btn-link display-4" 
                    type="button">
                <font-awesome-icon icon="search"/>
            </button>
        </b-nav-form>

        <!-- Departments Button -->
        <b-nav-item-dropdown text="Departments" class="m-md-2" right>
            <b-dropdown-item>Clothes</b-dropdown-item>
            <b-dropdown-item>Furnitures</b-dropdown-item>
            <b-dropdown-item>Kitchen</b-dropdown-item>
            <b-dropdown-item>Bedroom</b-dropdown-item>
            <b-dropdown-item>Living Room</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Electronics</b-dropdown-item>
        </b-nav-item-dropdown> 

        <!-- My Garonne Button -->
        <b-nav-item-dropdown text="My Garonne" class="m-md-2" right>
            <b-dropdown-item>My Orders</b-dropdown-item>
            <b-dropdown-item>My Wishlist</b-dropdown-item>
            <b-dropdown-item>My Account</b-dropdown-item>
            <b-dropdown-item>Settings</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Sign out</b-dropdown-item>
        </b-nav-item-dropdown>   

    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
import logo from '../assets/logo.png';

const imagesBaseUrl = process.env.NODE_ENV === 'development'
                      ? ''
                      : '/garonne/';

export default {
    data() {
        return {
            logo: imagesBaseUrl + logo,
            searchInputPlaceholder: 'What are you looking for?'
        }
    }
}
</script>
