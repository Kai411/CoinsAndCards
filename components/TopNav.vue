<script setup lang="ts">

</script>

<template>
    <div class="px-[24px] py-[16px] flex items-center justify-between">
        <p class="font-bold">Coins & Cards</p>
        <div class="nav-items">
            <ul class="flex gap-[16px]">
                <li class="flex items-center cursor-pointer">
                    <p>Pre-order</p>
                    <Icon name="uil:angle-down" style="color: black" size="24"/>
                </li>
                <li class="flex items-center cursor-pointer">
                    <p>Coins</p>
                    <Icon name="uil:angle-down" style="color: black" size="24"/>
                </li>
                <li class="flex items-center cursor-pointer">
                    <p>Pokemon TCG</p>
                    <Icon name="uil:angle-down" style="color: black" size="24"/>
                </li>

                <li class="flex items-center cursor-pointer">
                    <p>Locate Us</p>
                </li>
                <li class="flex items-center cursor-pointer">
                    <p>Contact Us</p>
                </li>
            </ul>
            
            
            
           
        </div>
        <div class="actions flex items-center gap-[16px]">
            <Icon name="uil:cart" style="color: black" size="28"/>
            <button type="button" class="px-[16px] py-[6px] bg-black rounded-[5px]">
                <p class="text-white">Login</p>
            </button>
        </div>
        
    </div>
</template>