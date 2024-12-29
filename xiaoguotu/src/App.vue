<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <el-menu
        default-active="1"
        class="el-menu-vertical"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>客户端</span>
          </template>
          <el-menu-item index="/client/order/waiting">等待备货订单</el-menu-item>
          <el-menu-item index="/client/inventory">库存管理</el-menu-item>
          <el-menu-item index="/client/finance">财务管理</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Box /></el-icon>
            <span>仓库端</span>
          </template>
          <el-menu-item index="/warehouse/inbound">入库管理</el-menu-item>
          <el-menu-item index="/warehouse/outbound">出库管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="height: 60px;">
        <div class="header-content">
          <h2>云仓管理系统</h2>
          <el-dropdown>
            <span class="el-dropdown-link">
              管理员 <el-icon><ArrowDown /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { Document, Box, ArrowDown } from '@element-plus/icons-vue'
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.el-menu-vertical {
  height: 100%;
}

.el-header {
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.el-main {
  background-color: #f0f2f5;
  padding: 20px;
}
</style> 