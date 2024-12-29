<template>
  <div class="waiting-order">
    <!-- 搜索过滤区 -->
    <el-card class="filter-section">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="货件编号">
          <el-input v-model="searchForm.orderNo" placeholder="请输入货件编号" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <div>等待备货订单列表</div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const searchForm = reactive({
  orderNo: ''
})

const handleSearch = () => {
  console.log('search')
}
</script> 