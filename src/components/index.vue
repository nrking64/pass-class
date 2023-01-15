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
                        <v-date-picker v-model="form.dueDate">
                            <template v-slot="{ inputValue, inputEvents }">
                                <input
                                    class="ml-3 input_box"
                                    :value="inputValue"
                                    v-on="inputEvents"
                                />
                            </template>
                        </v-date-picker>
                    </b-form-group>
                    <b-button class="ml-2 bg-info" @click="onSubmit" type="submit">Submit</b-button>
                </b-form>
            </div>
            <b-table :items="$store.state.items"></b-table>
        </div>
    </div>
</template>

<script>
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
            calendar_info: {
                key: 0,
                customData: {
                    title: '',
                    class: '',
                    dates: ""
                },
            }
        };
    }
    ,
    methods: {
        onSubmit() {

            if (!this.form.courseName || !this.form.dueDate) {
                return;
            }
            console.log(this.form.dueDate)
            this.calendar_info.key = this.$store.state.attributes[this.$store.state.attributes.length - 1].key + 1
            this.calendar_info.customData.title = `${this.form.courseName} - ${this.form.deliverableName} ${this.form.deliverableType}`
            this.calendar_info.customData.class = ""
            this.calendar_info.customData.dates = this.form.dueDate
            this.$store.state.attributes.push(this.calendar_info)
            this.$store.state.items.push(this.form);
            console.log(this.$store.state.attributes[this.$store.state.attributes.length - 1].key)
            this.clearForm();
        }
        ,
        clearForm() {
            this.form = {
                courseName: "",
                deliverableType: "",
                deliverableName: "",
                dueDate: "",
            };
        }
        ,
    }
    ,
}
;
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

.input_box {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
}
</style>
