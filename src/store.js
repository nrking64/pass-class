import Vue from 'vue'
import Vuex from 'vuex'
import {DateTime} from "luxon"

Vue.use(Vuex)

const store = new Vuex.Store({
    //  state is every variable, they can be accessed by everyone
    state: {
        count: 0,
        dates: [
            DateTime.fromISO("2023-01-10"),
            DateTime.fromISO("2023-01-15"),
            DateTime.fromISO("2023-01-26"),
        ],
        attributes: [
            {
                    key: 0,
                    customData: {
                        title: '',
                        class: '',
                        dates: ""
                    }
                }
            ],
        items: [
            {
                courseName: "French",
                deliverableType: "Quiz",
                deliverableName: "Pronouns",
                dueDate: "2023-01-10",
            },
            {
                courseName: "Math",
                deliverableType: "Assignment",
                deliverableName: "Functions",
                dueDate: "2023-01-15",
            },
            {
                courseName: "English",
                deliverableType: "Midterm",
                deliverableName: "Crysalids Essay",
                dueDate: "2023-01-26",
            },
        ],
    },
    //   mutations is iteration or changes to a variable
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
export default store