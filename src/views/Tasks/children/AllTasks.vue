<template>
    <div>

        <div>
            Upcoming Tasks 
            <span class="upcoming-tasks">{{numUpcomingTasks}}</span>
        </div>

        <div class="orders">
            <order-progress 
                v-for="task in upcomingTasks"
                :order="task"
                :key="task.id"></order-progress>
        </div>
    </div>
</template>

<script>
import OrderProgress from '@/components/OrderProgress'

export default {
    components : { OrderProgress },
    data : () => ({
        upcomingTasks : [
            {
                id : '890PO90',
                inCharge : 'Bryan Williams',
                progress : 20,
                timeLimit : '2021-02-25'
            },
            {
                id : '890PO91',
                inCharge : 'Marcus Klaus',
                progress : 40,
                timeLimit : '2021-02-27'
            },
            {
                id : '890PO92',
                inCharge : 'Joseph Jackobsen',
                progress : 35,
                timeLimit : '2021-03-09'
            },
            {
                id : '890PO93',
                inCharge : 'Jhon Doe',
                progress : 80,
                timeLimit : '2021-03-12'
            },
            {
                id : '890PO94',
                inCharge : 'Robert White',
                progress : 12,
                timeLimit : '2021-04-12'
            },
        ]
    }),

    computed : {
        numUpcomingTasks(){
            return this.upcomingTasks.length;
        }
    }
}
</script>

<style scoped lang="scss">
.upcoming-tasks{
    color : #C1C7D0;
    font-size: 14px;
}

.orders{
    display: flex;
    overflow-x: auto;
    padding-bottom: 12px;
}
</style>