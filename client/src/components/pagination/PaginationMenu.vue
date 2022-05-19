<template>
    <nav aria-label="Table navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a @click="currentPage(1)" class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="i in pages" :key="i"
            class="page-item">
            <a @click="currentPage(i)" class="page-link" href="#">{{ i }}</a>
        </li>
        <li class="page-item">
          <a @click="currentPage(pages)" class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
    name : "PaginationMenu",
    props : ["totalPages"],
    data() {
        return {
          pages : this.totalPages
        }
    },
    methods : {
      currentPage(current) {
        console.log(current)
        this.$emit("currentPage", current)
      }
    }
}
</script>

<style>

</style>