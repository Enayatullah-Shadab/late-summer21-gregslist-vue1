<template>
    <div job-form>
        <form action="">
        <div class="form-group">
        <label for="company">Company</label>
        <input type="text" name="company"
        v-model="state.newJob.company"
        class="form-control"
        placeholder="Company..." required>
      </div>
         <div job-form>
        <form action="">
        <div class="form-group">
        <label for="jobTitle">JobTitle</label>
        <input type="text" name="jobTitle"
        v-model="state.newJob.jobTitle"
        class="form-control"
        placeholder="JobTitle..." required/>
      </div>
        <div job-form>
        <form action="">
        <div class="form-group">
        <label for="description">Description</label>
        <input type="text" name="description"
        v-model="state.newJob.description"
        class="form-control"
        placeholder="description..." required/>
      </div>
        <div job-form>
        <form action="">
        <div class="form-group">
        <label for="hours">Hours</label>
        <input type="text" name="hours"
        v-model="state.newJob.hours"
        class="form-control"
        placeholder="Hours..." required/>
      </div>
        <div job-form>
        <form action="">
        <div class="form-group">
        <label for="rate">Rate</label>
        <input type="text" name="rate"
        v-model="state.newJob.rate"
        class="form-control"
        placeholder="rate..." required/>
      </div>
        </form>
    </div>
</template>

<script>

export default{
    setup() {
        
    },
}
</script>