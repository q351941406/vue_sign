<template>
  <a-table :dataSource="dataSource" :columns="columns" :pagination="false" :loading="loading" />
</template>

<script lang="ts">

import { ref ,onMounted} from "vue";

export default {
  setup() {
    const dataSource = ref([]); // 使用ref来创建响应式数据
    const columns = [
      {
        title: "ID",
        dataIndex: "app_id",
        key: "id",
      },
      {
        title: "app名",
        dataIndex: "appName",
        key: "appName",
      },
      {
        title: "总安装设备量",
        dataIndex: "different_UDID_count",
        key: "different_UDID_count",
      },
      {
        title: "总打开次数",
        dataIndex: "total_usage_count",
        key: "total_usage_count",
      },
      {
        title: "今日新增设备数",
        dataIndex: "today_new_UDID_count",
        key: "today_new_UDID_count",
      },
      {
        title: "今日新增打开次数",
        dataIndex: "today_first_time_users_count",
        key: "today_first_time_users_count",
      },
      {
        title: "过期时间",
        dataIndex: "expire",
        key: "expire",
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
      },
    ];
    let loading = ref(true)
    const domain = import.meta.env.VITE_DOMAIN

    // 发起GET请求
    onMounted(() => {
      // 使用fetch API 发起GET请求
      fetch(domain + "api/app")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`请求失败，状态码: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          dataSource.value = data; // 将响应数据赋给dataSource
          loading.value = false
        })
        .catch((error) => {
          console.error("请求失败:", error.message);
        });
    });

    return {
      dataSource,
      loading,
      columns,
    };
  },
};
</script>



