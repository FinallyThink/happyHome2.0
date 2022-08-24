<script setup>
import {inject} from 'vue';
import Table from "../../components/Table.vue";
import cells from "./index";
const store = inject('store')
const tableData = await store.state.GET_BILL_LIST();
console.log(tableData)
const search = ()=>{
    console.log("搜索");
 
}

</script>

<template>
  <div class="searchFrom">
    <el-row> 
        <el-button @click="search" type="primary">搜索</el-button>
    </el-row>
  </div>
  <Table :table-data="tableData" :table-head="cells.tableHead" />
</template>

<style scoped>
.searchFrom{
    padding: 10px 3px;
}
</style>
