<template>
  <div>
    <b-container fluid>
      <b-form-input class="my-5" id="filter-input" v-model="filter" type="search" placeholder="Type to Search" />
      <b-table :fields="fields" :items="jobs" :filter="filter" hover responsive />
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    data: () => ({
      filter: null,
      fields: [
        { key: 'job_name', sortable: true },
        { key: 'spark_name', sortable: true },
        { key: 'state', sortable: true },
        { key: 'start_time', sortable: true },
        { key: 'stop_time', sortable: true },
        { key: 'execution_attempts', sortable: true },
        { key: 'submission_attempts', sortable: true },
      ],
      jobs: [
        {
          job_name: 'app1',
          spark_name: 'spark1',
          state: 'RUNNING',
          start_time: '2021-07-04T14:58:46Z',
          container_start_time: '2021-07-04T14:58:34Z',
          stop_time: null,
          execution_attempts: 1,
          submission_attempts: 1
        },
        {
          job_name: 'app1',
          spark_name: 'spark2',
          state: 'RUNNING',
          start_time: '2021-07-04T14:58:46Z',
          container_start_time: '2021-07-04T14:58:34Z',
          stop_time: null,
          execution_attempts: 1,
          submission_attempts: 1
        },
        {
          job_name: 'app2',
          spark_name: 'spark1',
          state: 'RUNNING',
          start_time: '2021-07-04T14:58:46Z',
          container_start_time: '2021-07-04T14:58:34Z',
          stop_time: null,
          execution_attempts: 1,
          submission_attempts: 1,
        }
      ]
    })
  }
</script>

<style>
  table { 
    font-size: .8em; 
    white-space: nowrap;
  }
  th {
    background-color: whitesmoke !important;
  }
</style>