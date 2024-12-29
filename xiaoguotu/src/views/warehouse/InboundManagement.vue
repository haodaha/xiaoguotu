<template>
  <div class="inbound-management">
    <!-- 扫描区域 -->
    <el-card class="scan-section">
      <div class="scan-input">
        <el-input
          v-model="scanCode"
          placeholder="请扫描快递单号"
          @keyup.enter="handleScan"
        >
          <template #prefix>
            <el-icon><Scan /></el-icon>
          </template>
        </el-input>
      </div>
    </el-card>

    <!-- 待入库列表 -->
    <el-card class="inbound-list">
      <template #header>
        <div class="card-header">
          <span>待入库列表</span>
          <el-button type="primary" @click="handleBatchInbound">批量入库</el-button>
        </div>
      </template>
      
      <el-table :data="inboundList" stripe>
        <el-table-column type="selection" width="55" />
        <el-table-column prop="expressNo" label="快递单号" />
        <el-table-column prop="orderNo" label="货件编号" />
        <el-table-column prop="productName" label="商品名称" />
        <el-table-column prop="quantity" label="数量" width="80" />
        <el-table-column prop="arrivalTime" label="到达时间" width="180" />
        <el-table-column label="状态" width="100">
          <template #default="scope">
            <el-tag :type="scope.row.status === 'pending' ? 'warning' : 'success'">
              {{ scope.row.status === 'pending' ? '待入库' : '已入库' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template #default="scope">
            <el-button 
              type="primary" 
              size="small"
              :disabled="scope.row.status !== 'pending'"
              @click="handleInbound(scope.row)"
            >
              入库
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="total"
          layout="total, sizes, prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Scan } from '@element-plus/icons-vue'

// 扫描输入
const scanCode = ref('')

// 列表数据
const inboundList = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 扫描处理
const handleScan = () => {
  // TODO: 实现扫描逻辑
  console.log('扫描码：', scanCode.value)
  scanCode.value = ''
}

// 入库操作
const handleInbound = (row) => {
  // TODO: 实现入库逻辑
}

// 批量入库
const handleBatchInbound = () => {
  // TODO: 实现批量入库逻辑
}

// 分页方法
const handleSizeChange = (val) => {
  pageSize.value = val
  // TODO: 重新加载数据
}

const handleCurrentChange = (val) => {
  currentPage.value = val
  // TODO: 重新加载数据
}
</script>

<style scoped>
.inbound-management {
  padding: 20px;
}

.scan-section {
  margin-bottom: 20px;
}

.scan-input {
  max-width: 400px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.inbound-list {
  margin-bottom: 20px;
}

.pagination {
  margin-top: 20px;
  text-align: right;
}
</style> 