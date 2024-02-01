<template>
    <div>
        <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-sidebar id="sidebar-1" title="Sidebar" shadow no-close-on-route-change>
            <div class="px-3 py-2">

                <a href="inicio">Principal</a>
                <a href="form">Formulario</a>
                <a href="pagination">Paginacion</a>


            </div>
        </b-sidebar>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Inicio',
                    href: '#',
                },
            ]
        }
    }
}
</script>

<style></style>