package com.fi.ecommerce.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="users")
public class User {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name="id")
	    private int id;
	 	
	 	public User(int id, String userOrganization, String employeeType, String commonName, String loginID,
				String firstName, String lastName, String fullName, String title, String email, String businessPhone,
				String managerEmail, String description, String address, String street, String city, String state,
				String postalCode, String status) {
			super();
			this.id = id;
			this.userOrganization = userOrganization;
			this.employeeType = employeeType;
			this.commonName = commonName;
			this.loginID = loginID;
			this.firstName = firstName;
			this.lastName = lastName;
			this.fullName = fullName;
			this.title = title;
			this.email = email;
			this.businessPhone = businessPhone;
			this.managerEmail = managerEmail;
			this.description = description;
			this.address = address;
			this.street = street;
			this.city = city;
			this.state = state;
			this.postalCode = postalCode;
			this.status = status;
		}

		public User() {
			super();
		}

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getUserOrganization() {
			return userOrganization;
		}

		public void setUserOrganization(String userOrganization) {
			this.userOrganization = userOrganization;
		}

		public String getEmployeeType() {
			return employeeType;
		}

		public void setEmployeeType(String employeeType) {
			this.employeeType = employeeType;
		}

		public String getCommonName() {
			return commonName;
		}

		public void setCommonName(String commonName) {
			this.commonName = commonName;
		}

		public String getLoginID() {
			return loginID;
		}

		public void setLoginID(String loginID) {
			this.loginID = loginID;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getFullName() {
			return fullName;
		}

		public void setFullName(String fullName) {
			this.fullName = fullName;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getBusinessPhone() {
			return businessPhone;
		}

		public void setBusinessPhone(String businessPhone) {
			this.businessPhone = businessPhone;
		}

		public String getManagerEmail() {
			return managerEmail;
		}

		public void setManagerEmail(String managerEmail) {
			this.managerEmail = managerEmail;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getStreet() {
			return street;
		}

		public void setStreet(String street) {
			this.street = street;
		}

		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}

		public String getState() {
			return state;
		}

		public void setState(String state) {
			this.state = state;
		}

		public String getPostalCode() {
			return postalCode;
		}

		public void setPostalCode(String postalCode) {
			this.postalCode = postalCode;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		@Column(name = "user_organization")
	    private String userOrganization;
	 	
	 	@Column(name = "employee_type")
	    private String employeeType;
	 	
	 	@Column(name = "common_name")
	    private String commonName;
	 	
	 	@Column(name = "login_id")
	    private String loginID;
	 	
	 	@Column(name = "first_name")
	    private String firstName;
	 	
	 	@Column(name = "last_name")
	    private String lastName;
	 	
	 	@Column(name = "full_name")
	    private String fullName;
	 	
	 	@Column(name = "title")
	    private String title;
	 	
	 	@Column(name = "email")
	    private String email;
	 	
	 	@Column(name = "business_phone")
	    private String businessPhone;
	 	
	 	@Column(name = "manager_email")
	    private String managerEmail;
	 	
	 	@Column(name = "description")
	    private String description;
	 	
	 	@Column(name = "address")
	    private String address;
	 	
	 	@Column(name = "street")
	    private String street;
	 	
	 	@Column(name = "city")
	    private String city;
	 	
	 	@Column(name = "state")
	    private String state;
	 	
	 	@Column(name = "postal_code")
	    private String postalCode;
	 	
	 	@Column(name = "status")
	    private String status;
	 	
	
}
