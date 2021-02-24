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
                :key="task.id">
            </order-progress>
        </div>

        <div>
            Statistics
        </div>

        <div class="card statistics-card">
            <div 
                v-for="statistic in statistics"
                :key="statistic.key">
                <div class="d-flex align-items-center ">

                <div class="ma-1" :class="statistic.iconClass">
                    <mdicon  :name="statistic.icon" />
                </div>
                <div>
                    <div class="header">
                        {{statistic.value}}
                    </div>

                    <div class="subheader">
                        {{statistic.key}}
                    </div>
                </div>
                </div>
                
            </div>

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
        ],

        statistics : [
            {
                key : 'Total projects',
                value : '50',
                icon : 'viewGridOutline',
                iconClass : 'primary-blue-txt'
            },
            {
                key : 'Completed',
                value : '15',
                icon : 'checkboxMarkedCircleOutline',
                iconClass : 'primary-green-txt'
            },
            {
                key : 'In progress',
                value : '10',
                icon : 'flashOutline',
                iconClass : 'primary-yellow-txt'
            },
            {
                key : 'Delayed',
                value : '2',
                icon : 'clockTimeFourOutline',
                iconClass : 'primary-red-txt'
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
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 12px;
}

.statistics-card{
    display: grid;
    grid-template-columns: 1fr 1fr;

    .subheader{
        font-size: 14px;
        color : $secondary-gray;
    }



}


</style>