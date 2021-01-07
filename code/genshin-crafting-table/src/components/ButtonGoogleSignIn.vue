<template>
    <div class="googleButton d-flex">
        <div class="googleLogoClass d-flex justify-content-center align-items-center">
            <img src="../assets/images/googleLogo.png" alt="" height="29px">
        </div>
        <div class="d-flex align-items-center h-100 ml-3">
            <span>Sign in with Google</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.googleButton{
    cursor: pointer;
    background-color:#04376E;
    border-radius: 5px;
    height: 49px;
}

.googleLogoClass{
    background-color:#ffffff;
    margin: 2px;
    border-radius: 2.5px;
    height: 46px;
    width: 47px;
}
span{
    color: #ffffff;
}
</style>