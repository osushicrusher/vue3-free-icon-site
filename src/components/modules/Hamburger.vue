<template>
    <button @click="toggleHamburger" type="button" id="js-buttonHamburger" class="c-button p-hamburger md:hidden" aria-controls="global-nav" aria-expanded="false">
        <span class="p-hamburger__line">
            <span class="u-visuallyHidden">
            メニューを開閉する
            </span>
        </span>
    </button>
</template>

<script setup lang="ts">
const toggleHamburger = (e :any) :void => {
    const target = e.currentTarget
    if(target.getAttribute('aria-expanded') == 'false') {
        target.setAttribute('aria-expanded', true)
    } else {
        target.setAttribute('aria-expanded', false)
    }
}


</script>

<style scoped>
.c-button {
    position: relative;
    display: inline-block;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
.p-hamburger {
    /* position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    width: 48px;
    height: 48px;
    /* margin: auto; */
    border-radius: 50%;
    border: 1px solid #f9d8ae;
    box-shadow: 0 0 2rem transparent;
    outline: none;
    -webkit-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;
}
.p-hamburger__line {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 18px;
    height: 2px;
    background-color: #f9d8ae;
    -webkit-transition: inherit;
            transition: inherit;
}
.p-hamburger__line:before,
.p-hamburger__line:after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: inherit;
    content: '';
    -webkit-transition: inherit;
            transition: inherit;
}
.p-hamburger__line:before {
    top: -5px;
}
.p-hamburger__line:after {
    top: 5px;
}
.p-hamburger[aria-expanded="true"] .p-hamburger__line {
    background-color: transparent;
}
.p-hamburger[aria-expanded="true"] .p-hamburger__line:before,
.p-hamburger[aria-expanded="true"] .p-hamburger__line:after {
    top: 0;
    -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
    background-color: #f9d8ae;
}
.p-hamburger[aria-expanded="true"] .p-hamburger__line:before {
    top: 0;
    -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
            transform: rotate(45deg);
}
.u-visuallyHidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
}
</style>