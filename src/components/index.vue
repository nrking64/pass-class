<template>
    <div>
        <div style="margin: 70px 15px 0px;">
            <h3 class="mb-3">Get Started by Adding a New Item</h3>
            <div class="mb-4">
                <b-form @submit.prevent="" inline>
                    <b-form-group
                        class="mr-3"
                        label="Course Name"
                        label-for="Course Name"
                    >
                        <b-form-input
                            v-model="form.courseName"
                            class="ml-3"
                            id="Course Name"
                            placeholder="i.e. Advanced Functions"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        class="mr-3"
                        label="Deliverable Type"
                        label-for="Deliverable Type"
                    >
                        <b-form-input
                            v-model="form.deliverableType"
                            class="ml-3"
                            id="Deliverable Type"
                            placeholder="i.e. Midterm"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        class="mr-3"
                        label="Deliverable Name"
                        label-for="Deliverable Type"
                    >
                        <b-form-input
                            v-model="form.deliverableName"
                            class="ml-3"
                            id="Deliverable Name"
                            placeholder="i.e. Sin and Cos test"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group label="Due Date" label-for="Due Date">
                        <b-form-datepicker
                            v-model="form.dueDate"
                            class="ml-3"
                            id="Due Date"
                        ></b-form-datepicker>
                    </b-form-group>
                    <b-button class="ml-2 bg-info" @click="onSubmit" type="submit">Submit</b-button>
                </b-form>
            </div>
            <b-table :items="$store.state.items"></b-table>
        </div>
    </div>
</template>

<script>
import {DateTime} from "luxon";

export default {
    name: "index-vue",
    components: {},

    data() {
        return {
            form: {
                courseName: "",
                deliverableType: "",
                deliverableName: "",
                dueDate: "",
            },
        };
    },
    methods: {
        onSubmit() {
            if (!this.form.courseName || !this.form.dueDate) {
                return;
            }
            this.$store.state.dates.push(DateTime.fromISO(this.form.dueDate));
            this.$store.state.dates.sort();
            this.$store.state.items.push(this.form);
            this.clearForm();
        },
        clearForm() {
            this.form = {
                courseName: "",
                deliverableType: "",
                deliverableName: "",
                dueDate: "",
            };
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
