<template>
    <h1 class="text-center mx-5">Equipement</h1>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="site" class="form-label">Site</label>
            <input
                type="text"
                class="form-control"
                id="site"
                v-model="site">
        </div>
        <div class="mb-3">
            <label for="location" class="form-label">Localisation</label>
            <input 
                type="text" 
                class="form-control" 
                id="location"
                v-model="location">
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Enregistrer</button>
            </div>
    </form>
</template>

<script>
export default {
    name : "EquipType",
    data() {
        return {
            equipName : ""
        }
    },
    methods : {
        handleSubmit() {
            
        }
    }
}
</script>

<style>

</style>