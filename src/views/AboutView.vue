<template>
  <div class="about">
 <ul>
 <li v-for="(placeholders,i) in placeholders" :key="i"></li>
 <h1> {{placeholders}}</h1>
 </ul>
  </div>
</template>

<script>
import placeholderservice from "@/services/placeholderservice"
export default{
name: "Home",
data(){
return{
placeholders: []
}
},
methods: {
 async getplaceholders () {
 const response= await placeholderservice.getplaceholders()
 this.placeholders = response.data
 }
 },
 created () {
 this.getplaceholders()
 }
 }
</script>