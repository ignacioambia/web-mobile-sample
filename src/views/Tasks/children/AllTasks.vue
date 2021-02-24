<template>
    <div class="sections">

        <!-- upcoming tasks section-->
        <div >
            <div class="d-flex justify-content-between mb-1">
                <div >
                    Upcoming Tasks 
                    <span class="font-size-14 subheader">{{numUpcomingTasks}}</span>
                </div>
                <div>
                    <statistics-download-button />
                </div>
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

                        <div style="margin : .6rem;" :class="statistic.iconClass">
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
                <span>{{ currentExpenses}}</span>
                
            </div>

            <statistics-chart style="height: 200px" />
        </div>


    </div>
</template>

<script>
import OrderProgress from '@/components/OrderProgress'
import StatisticsChart from '@/components/StatisticsChart'
import CustomTab from '@/components/CustomTab'
import StatisticsDownloadButton from '@/components/StatisticsDownloadButton'

export default {
    components : { OrderProgress, StatisticsChart,CustomTab,StatisticsDownloadButton },
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
        //FOR DEMONSTRATION PURPOSES ONLY
        expenses : {
            'Day' : '1,255' ,
            'Week' : '5,281',
            'Month' : '13,543',
            'Year' : '125,789'
        }


    }),

    computed : {
        numUpcomingTasks(){
            return this.upcomingTasks.length;
        },

        currentExpenses(){
            return this.expenses[this.expensesOptionSelected];
        },

        expensesGroupingOptions(){
            return Object.keys(this.expenses);
        }
    },

}
</script>

<style scoped lang="scss">
.upcoming-tasks{
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

    & > div{
        border-top: 1px solid $secondary-black;
        border-left: 1px solid $secondary-black;
        padding : 5px;

        &:nth-child(-n+2) {
            border-top: none;
        }
        &:nth-child(odd) {
            border-left: none;
        }

    }

    .subheader{
        font-size: 14px;
        color : $secondary-gray;
    }



}


.chart-card {
    box-sizing: border-box;
    min-height: 355px;
    border: 1px solid $black-card;
    border-radius: 16px;
    background-color: $black-card;
    box-shadow: inset 2px 2px 6px 0 $secondary-black, inset -2px -2px 6px 0 #040B11;

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