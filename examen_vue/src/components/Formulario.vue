<template>
    <div>
        <div><b-breadcrumb :items="items"></b-breadcrumb></div>
        <div>
            <b-alert show variant="danger" v-if="errors.length">
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </b-alert>
        </div>
        <b-form @submit="checkForm" @reset="onReset" method="post" v-if="show" novalidate="true">

            <b-form-group id="input-group-1" label="Marca:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.marca" type="text" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Modelo" label-for="input-2">
                <b-form-input id="input-2" type="text" v-model="form.modelo" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Año de fabricacion:" label-for="input-3">
                <b-form-input id="input-3" type="date" v-model="form.date" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Numero de serie:" label-for="input-4">
                <b-form-input id="input-4" type="text" v-model="form.numSerie" required></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>

        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            items: [
                {
                    text: 'Inicio',
                    href: '#',
                    to: 'inicio'
                },
                {
                    text: 'Formulario',
                    href: '#',
                    active: true
                },
            ],
            form: {

                marca: '',
                modelo: '',
                date: '',
                numSerie: ''
            },
            show: true
        }
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.form.marca) {
                this.errors.push("La marca es obligatorio.");
            } else if (!this.validMarca(this.form.marca)) {
                this.error.push('La marcar no deberia contener caracteres especiales')
            }
            if (!this.form.modelo) {
                this.errors.push("El modelo es obligatorio.");
            } else if (!this.validModelo(this.form.modelo)) {
                this.errors.push("El modelo no contiene caracteres especiales")
            }
            if (!this.form.date) {
                this.errors.push("El año de fabricacion es obligatorio.");
            } else if (!this.validDate(this.form.date)) {
                this.errors.push("Fecha no valida")
            }
            if (!this.form.numSerie) {
                this.errors.push("El numero de serie es obligatorio.");
            } else if (!this.validNumSerie(this.form.numSerie)) {
                this.errors.push("El numero no es valido")
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },

        validMarca: function (marca) {
            var re = /[A-Za-z0-9_]/;
            return re.test(marca);
        },
        validModelo: function (modelo) {
            var re = /[A-Za-z0-9_]/;
            return re.test(modelo);
        },
        validDate: function (date) {
            var fecha = new Date(date);
            var hoy = new Date();
            if (fecha >= hoy) {
                this.errors.push("Fecha no valida")
            }
        },
        validNumSerie: function (numSerie) {
            var re = /[A-Za-z0-9_]/;
            return re.test(numSerie);
        },
    }
}
</script>

<style></style>














