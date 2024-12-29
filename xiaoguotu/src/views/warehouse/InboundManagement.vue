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
    <el-card>
      <div>待入库列表</div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Scan } from '@element-plus/icons-vue'

const scanCode = ref('')

const handleScan = () => {
  console.log('扫描码：', scanCode.value)
  scanCode.value = ''
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
</style> 