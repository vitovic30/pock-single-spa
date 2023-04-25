<template>
    <form>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationServer01">First name</label>
          <input type="text" class="form-control" id="validationServer01" placeholder="First name" value="Mark" required>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationServer02">Last name</label>
          <input type="text" class="form-control" id="validationServer02" placeholder="Last name" value="Otto" required>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationServerUsername">Username</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend3">@</span>
            </div>
            <input type="text" class="form-control" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationServer03">City</label>
          <input type="text" class="form-control" id="validationServer03" placeholder="City" required>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationServer04">State</label>
          <input type="text" class="form-control" id="validationServer04" placeholder="State" required>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationServer05">Zip</label>
          <input type="text" class="form-control" id="validationServer05" placeholder="Zip" required>
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck3" required>
          <label class="form-check-label" for="invalidCheck3">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Submit form</button>
    </form>
</template>
<script>
export default {
  name: 'Form-Municipe' 
}
</script>