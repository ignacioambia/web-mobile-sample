<template>
    <div class="sections">

        <!-- upcoming tasks section-->
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
        </div>

        <!-- statistics section-->
        <div>
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


         <!-- chart section-->
        <div class="chart-card" >

            <!-- expenses grouping options section -->
            <div class="expenses-grouping-options">
                <custom-tab
                class="font-size-18"
                v-for="tab in expensesGroupingOptions" 
                @click.native="expensesOptionSelected = tab"
                :active="tab == expensesOptionSelected"
                :key="tab">
                    {{tab}}
                </custom-tab>
            </div>

            <div class="total-expenses mt-1" >
                <span class="font-size-22" >$</span>
                <span>13,543</span>
                
            </div>

            <statistics-chart style="height: 200px" />
        </div>


    </div>
</template>

<script>
import OrderProgress from '@/components/OrderProgress'
import StatisticsChart from '@/components/StatisticsChart'
import CustomTab from '@/components/CustomTab'

export default {
    components : { OrderProgress, StatisticsChart,CustomTab },
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
        ],

        expensesOptionSelected : 'Month',
        expensesGroupingOptions : ['Day','Week','Month','Year']


    }),

    computed : {
        numUpcomingTasks(){
            return this.upcomingTasks.length;
        }
    },

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
    padding-bottom: 10px;
    margin-right: -$app-padding;
    margin-left:  -$app-padding;
    padding-left: $app-padding;
}

.statistics-card{
    display: grid;
    grid-template-columns: 1fr 1fr;

    .subheader{
        font-size: 14px;
        color : $secondary-gray;
    }



}


.chart-card {
    box-sizing: border-box;
    min-height: 355px;
    border: 1px solid #10161C;
    border-radius: 16px;
    background-color: #10161C;
    box-shadow: inset 2px 2px 6px 0 #1C232A, inset -2px -2px 6px 0 #040B11;

    .expenses-grouping-options{
        display: flex;
        justify-content: center;
        div{
            margin : 18px;
        }
    }

    .total-expenses{
        font-size: 45px;
        text-align: center;

        span{
            vertical-align : middle;
        }
    }



}



</style>