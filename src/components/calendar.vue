<template>
    <div>
        <b-calendar
            class="calendar-tall"
            block
            hide-header
            :date-info-fn="dateClass"
        ></b-calendar>
    </div>
</template>

<script>
import {DateTime} from "luxon";

export default {
    name: "calendar-vue",
    props: {},
    components: {},
    methods: {
        dateClass(ymd) {
            let class_text = "";

            for (const myDate of this.$store.state.dates) {
                if (+myDate === +DateTime.fromISO(ymd)) {
                    if (myDate.diff(DateTime.now(), "days").days < 0) {
                        class_text = "urScrewed";
                    } else if (myDate.diff(DateTime.now(), "days").days < 7) {
                        class_text = "table-danger";
                    } else if (myDate.diff(DateTime.now(), "days").days < 14) {
                        class_text = "table-warning";
                    } else {
                        class_text = "table-success";
                    }
                }
            }
            return class_text;
        },
    },
};
</script>
<style>
.calendar-tall .b-calendar-grid-body div.col {
    height: 7.8rem;
}

.calendar-tall .b-calendar-grid-body div.col span.btn {
    font-size: 20px !important;
    float: left;
    padding: 5px 0 !important;
    margin: 3px !important;
}

.urScrewed {
    background-color: rgb(247, 53, 53);
}
</style>
