<template>
  <div>
    <b-input 
      placeholder="Search by User ID or Application name"
      class="my-5"
    />
    <b-table
      class='text-capitalize'
      head-variant='light' 
      hover 
      responsive
      sort-by='submit_date'
      sort-desc
      :items='spark_applications' 
      :fields='fields'
    />
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({ 
    spark_applications: [
      {
        id: 0,
        spark_name: 'spark1',
        state: 'RUNNING',
        start_time: '2021-07-04T14:58:46Z',
        container_start_time: '2021-07-04T14:58:34Z',
        stop_time: null,
        execution_attempts: 1,
        submission_attempts: 1,
        userId: 'thomasnguyen@alumni.harvard.edu'
      }
    ],
    fields: [
      { key: 'id', sortable: true },
      { key: 'spark_name', sortable: true },
      { key: 'state', sortable: true},
      { key: 'start_time', sortable: true },
      { key: 'container_start_time', sortable: true },
      { key: 'stop_time', sortable: true },
      { key: 'execution_attempts', sortable: true },
      { key: 'submission_attempts', sortable: true },
      { key: 'userId', sortable: true }
    ]
  })
}
</script>

<style>

</style>