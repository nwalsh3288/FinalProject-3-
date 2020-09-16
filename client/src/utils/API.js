import axios from "axios";

export default {
  // Gets all tenants
  getTenants: function() {
    return axios.get("/api/tenants");
  },
  // Gets the tenant with the given id
  getTenant: function(id) {
    return axios.get("/api/tenants/" + id);
  },
  // Deletes the tenant with the given id
  deleteTenant: function(id) {
    return axios.delete("/api/tenants/" + id);
  },
  // Saves a tenant to the database
  saveTenant: function(tenantData) {
    return axios.post("/api/tenants", tenantData);
  }
};
