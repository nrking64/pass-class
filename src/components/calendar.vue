<template>
    <div>
        <v-calendar
            is-expanded
            class="calendar-tall"
            :attributes="$store.state.attributes"
        >
            <template #day-content="{ day,  }">
                <div>
                    <div style="text-align: center">{{ day.day }}</div>
                    <div>
                        <div
                            v-for="attr in $store.state.attributes"
                            :key="attr.key"
                            :class="attr.customData.class"
                        >
                            {{ attr.customData.title }}
                        </div>
                    </div>
                </div>
            </template>
        </v-calendar>
    </div>
</template>

<script>
export default {
    name: "calendar-vue",
    props: {},
    components: {},
    data() {
        return {

        }
    },
    // methods: {
    //     dateClass(ymd) {
    //         let class_text = "";
    //
    //         for (const myDate of this.$store.state.dates) {
    //             if (+myDate === +DateTime.fromISO(ymd)) {
    //                 if (myDate.diff(DateTime.now(), "days").days < 0) {
    //                     class_text = "urScrewed";
    //                 } else if (myDate.diff(DateTime.now(), "days").days < 7) {
    //                     class_text = "table-danger";
    //                 } else if (myDate.diff(DateTime.now(), "days").days < 14) {
    //                     class_text = "table-warning";
    //                 } else {
    //                     class_text = "table-success";
    //                 }
    //             }
    //         }
    //         return class_text;
    //     },
    // },
};
</script>
<style>
.calendar-tall .vc-pane-container .vc-pane-layout .vc-pane .vc-weeks .vc-day {
    height: 6.85rem;
    max-width: 212px;
}
.mom {
    background-color: aquamarine;
    border-radius: 3px;
    padding: 5px;
}
.dad {
    background-color: darksalmon;
}
.urScrewed {
    background-color: rgb(247, 53, 53);
}
</style>
