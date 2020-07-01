<template>
  <noticeMore>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template v-slot:footer>
        <p>Here's some contact info</p>
    </template>
  </noticeMore>
</template>
<script>
export default {
    components: {
        
    },
    data(){
        return{
            lovingVue: 'jfkasjlf'
        }
    }
}
</script>