<template>
    <div class="title">
        <p>一个Plot 示例(based on g2plot)</p>
        <a href="https://github.com/open-data-plan/g2plot-vue">g2plot-vue</a>
    </div>
    <line-chart v-bind="config" />
</template>
<script lang="ts" setup>
import { LineChart } from '@opd/g2plot-vue'
import { ref } from 'vue';

const config= ref({
    height: 350,
    autoFit: true,
    xField: 'year',
    yField: 'value',
    smooth: true,
    meta: {
    value: {
        max: 15,
    },
    },
    data: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 11 },
    ],
})
</script>
<style scoped>
.title{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    flex-direction: column;
}
.title p{
    font-size: 24px;
    font-weight: bold;
}
</style>