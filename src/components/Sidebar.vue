<template>
    <aside>
        <div class="col">

            <!-- Logo Section -->
            <div class="row py-5">
                <img id="logo" class="mx-auto" src="../assets/logo.png" alt="Logo">
            </div>

            <!-- Buttons Section -->
            <div class="row justify-content-center py-5">

                <!-- Departmens Button -->
                <b-dropdown text="Departments" class="m-md-2">
                    <b-dropdown-item>Clothes</b-dropdown-item>
                    <b-dropdown-item>Furnitures</b-dropdown-item>
                    <b-dropdown-item>Kitchen</b-dropdown-item>
                    <b-dropdown-item>Bedroom</b-dropdown-item>
                    <b-dropdown-item>Living Room</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Electronics</b-dropdown-item>
                </b-dropdown>                

                <!-- My Garonne Button -->
                <b-dropdown text="My Garonne" class="m-md-2">
                    <b-dropdown-item>My Orders</b-dropdown-item>
                    <b-dropdown-item>My Wishlist</b-dropdown-item>
                    <b-dropdown-item>My Account</b-dropdown-item>
                    <b-dropdown-item>Settings</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Sign out</b-dropdown-item>
                </b-dropdown>   

            </div>

            <!-- Search Section -->
            <div class="row pt-5">
                <div class="col px-5">
                    <p class="font-weight-bold mt-0 mb-2">Search your products:</p>

                    <div class="input-group" id="search">
                        <input
                            type="text" 
                            class="form-control"
                            :placeholder="searchInputPlaceholder"
                            v-model="searchInputText"> 
                            <!-- @change="searchInputChange" -->
                        <div class="input-group-append">
                            <button class="btn btn-link display-4" type="button">
                                <font-awesome-icon icon="search"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div 
                v-if="showSearchInput" 
                class="row pt-5"
                ref="search-results">
                <div class="col px-5">
                    <p class="font-weight-bold mt-0 mb-2">Recommended Products:</p>
                    <div class="row m-0 p-0"></div>
                </div>
            </div> -->

        </div>
    </aside>
</template>

<script>
export default {
    data () {
        return {
            showSearchInput: false,
            searchInputPlaceholder: 'What are you looking for?',
            searchInputText: ''
        }
    },
    methods: {
        searchInputChange() {
            this.showSearchInput = this.searchInputText.length != 0 ? true : false;
        }
    }
}
</script>

<style lang="scss" scoped>
    aside {
        height: 100%;
        width: 480px;
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
    }
    @media (max-width: 1200px) {
        aside {
            display: none;
        }
    }

    #logo {
        height: 30px;
    }
    #search {
        border-bottom: 2px solid #F8F8F8;
        input {
            border: none;
            font-size: 24px;
            font-weight: 600;
        }
        input::placeholder {
            color: darken(#F8F8F8, 15%)!important;
        }
    }
</style>
