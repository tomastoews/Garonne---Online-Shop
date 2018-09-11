<template>
    <div class="home">

        <!-- Slider -->
        <section>
            <div class="image-slider" :style="'background: url(' + previewItem.image + ')'">
                <div class="row">

                    <div class="text-box col-xl-6 p-0 pl-5">
                        <p class="text-left mb-3">{{ previewItem.header_text }}</p>
                        <h1 class="text-left display-4 mb-3">{{ previewItem.title_part1 }}</h1>
                        <h1 class="text-left display-4 mb-0">{{ previewItem.title_part2 }}</h1>
                    </div>

                    <div class="card-box col-xl-6 p-0">
                        <b-card border-variant="light" class="mr-5 mb-5">
                            <b-card-body class="row">
                                <div class="col-2 image">
                                    <img :src="previewItem.product_image">
                                </div>
                                <div class="col-6 text">
                                    <p class="font-weight-bold text-dark text-primary m-0">{{ previewItem.product_title }}</p>
                                    <p class="text-secondary m-0">{{ previewItem.product_subtitle }}</p>
                                </div>
                                <div class="col-4 action">
                                    <button class="btn btn-primary text-light btn-lg m-0">Shop now</button>
                                </div>
                            </b-card-body>
                        </b-card>
                    </div>

                </div>
            </div>
        </section>
        
        <section class="products bg-secondary">
            <div class="col px-4 py-4">

                <!-- Recommended Products -->
                <p class="text-primary text-dark font-weight-bold">Rocommended Products <span><a href="#" class="text-primary">See all</a></span></p>
                <div class="row">
                    <b-card
                        v-for="product in products"
                        :key="product.id"
                        border-variant="light"
                        class="m-0 col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div class="card-text text-center">
                            <img :src="product.image">
                            <p class="font-weight-bold text-dark text-primary text-center">{{ product.name }}</p>
                            <p class="text-secondary text-center">${{ product.price }}</p>
                        </div>
                    </b-card>
                </div>

                <!-- Inspired by browsing history -->
                <p class="mt-4 text-primary text-dark font-weight-bold">Inspired by your browsing history <span><a href="#" class="text-primary">See all</a></span></p>
                <div class="row">
                    <b-card
                        v-for="product in products"
                        :key="product.id"
                        border-variant="light"
                        class="m-0 col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div class="card-text text-center">
                            <img :src="product.image">
                            <p class="font-weight-bold text-dark text-primary text-center">{{ product.name }}</p>
                            <p class="text-secondary text-center">${{ product.price }}</p>
                        </div>
                    </b-card>
                </div>

                <!-- Inspired by home -->
                <p class="mt-4 text-primary text-dark font-weight-bold">Inspirations for your home</p>
                <div class="row" id="home-products">
                    <b-card
                        v-for="product in products_home"
                        :key="product.id"
                        border-variant="light"
                        class="m-0 col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <p class="font-weight-bold text-white text-center">PRODUCTS FOR</p>
                        <p class="font-weight-bold text-white text-center">{{ product.title }}</p>
                    </b-card>
                </div>
            
            </div>
        </section>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            previewItem: {
                image: 'images/product_8168646846.jpg',
                header_text: 'POPULAR',
                title_part1: 'The new comfort',
                title_part2: 'for your home',
                product_title: 'The Product Name',
                product_subtitle: 'FOR FAMILIES',
                product_image: 'images/product_8168646846_small.png',
                product_id: '8168646846'
            },
            products: [
                {
                    id: '6565454542000854',
                    name: 'Travel Hiking Camping',
                    price: 34.49,
                    image: 'images/product_8406846846846.jpg'
                },
                {
                    id: '74148018408',
                    name: 'Travel Hiking Camping',
                    price: 34.49,
                    image: 'images/product_8406846846846.jpg'
                },
                {
                    id: '81080181818888',
                    name: 'Travel Hiking Camping',
                    price: 34.49,
                    image: 'images/product_8406846846846.jpg'
                },
                {
                    id: '741480145245208',
                    name: 'Travel Hiking Camping',
                    price: 34.49,
                    image: 'images/product_8406846846846.jpg'
                }
            ],
            products_home: [
                { title: 'Kitchen' },
                { title: 'Bedroom' },
                { title: 'Living Room' },
                { title: 'Wardrobe' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.home {
    height: 100%;
    display: grid;
    grid-template-rows: 60% auto;

    section:first-child {
        .image-slider {
            height: 100%;
            background-repeat: no-repeat!important;
            background-size: cover!important;
            background-position: center!important;

            .text-box {
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: linear-gradient(to right, rgba(0, 0, 0, 0.40), transparent);
                background-blend-mode: overlay;

                * { 
                    color: #fff;
                    line-height: 0.9; 
                }
                p { font-weight: 600; }
                h1:first-child { font-weight: 200; }
                h1:last-child { font-weight: 700; }
            }
            @media (max-width: 1200px) {
                .text-box {
                    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.40), transparent);
                }
            }

            .card-box {
                .card {
                    width: 500px;
                    right: 0;
                    bottom: 0;
                    display: block;
                    position: absolute;
                    img {
                        height: 50px;
                    }
                    .card-body {
                        padding: 15px;
                    }
                    > div {
                        align-items: center;
                        justify-content: center;
                    }          
                }
            }
            @media (max-width: 600px) {
                .card-box {
                    display: none;
                }
            }

        }
    }

    section.products {
        .row {
            flex-direction: row;
        }
        .card {
            
            width: 200px;
            margin-bottom: 8px;
            img {
                width: 140px;
                margin: 0 auto;
            }
        }
    }

    #home-products {
        .card {
            transition: 100ms all ease-in-out;
            height: 400px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-color: #231f1e;
            cursor: pointer;
            .card-body {
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: center;
                p {
                    margin: 0;
                    padding: 0;
                }
                p:first-child {
                    font-size: 14px;
                    margin-bottom: 10px;
                }
                p:last-child {
                    font-size: 28px;
                }
            }
        }
        .card:hover {
            background: #FE9900;
        }
        @media (max-width: 680px) {
            .card {
                width: 200px;
            }
        }
    }

    .text-primary {
        font-size: 19px;
    }
    .text-secondary {
        font-size: 14px;
        font-weight: 500;
        color: lighten(#000, 70%)!important;
    }
}
</style>
