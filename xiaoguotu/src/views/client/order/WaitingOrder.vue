<template>
  <div class="waiting-order">
    <!-- 搜索过滤区 -->
    <el-card class="filter-section">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="货件编号">
          <el-input v-model="searchForm.orderNo" placeholder="请输入货件编号" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchForm.status">
            <el-option label="等待备货" value="waiting" />
            <el-option label="备货中" value="preparing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 订单列表 -->
    <el-card class="order-list">
      <el-table :data="orderList" stripe>
        <el-table-column type="selection" width="55" />
        <el-table-column label="商品图片" width="100">
          <template #default="scope">
            <el-image 
              :src="scope.row.imageUrl" 
              :preview-src-list="[scope.row.imageUrl]"
              fit="cover"
              style="width: 50px; height: 50px"
            />
          </template>
        </el-table-column>
        <el-table-column prop="orderNo" label="货件编号" />
        <el-table-column prop="productName" label="商品名称" />
        <el-table-column prop="quantity" label="数量" width="80" />
        <el-table-column prop="price" label="价格" width="100" />
        <el-table-column prop="createTime" label="接单时间" width="180" />
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button type="primary" size="small" @click="handlePrepare(scope.row)">
              备货
            </el-button>
            <el-button type="danger" size="small" @click="handleCancel(scope.row)">
              取消
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
import { ref, reactive } from 'vue'

// 搜索表单数据
const searchForm = reactive({
  orderNo: '',
  status: 'waiting'
})

// 订单列表数据
const orderList = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 搜索方法
const handleSearch = () => {
  // TODO: 实现搜索逻辑
}

// 备货操作
const handlePrepare = (row) => {
  // TODO: 实现备货逻辑
}

// 取消订单
const handleCancel = (row) => {
  // TODO: 实现取消逻辑
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
.waiting-order {
  padding: 20px;
}

.filter-section {
  margin-bottom: 20px;
}

.order-list {
  margin-bottom: 20px;
}

.pagination {
  margin-top: 20px;
  text-align: right;
}
</style> 